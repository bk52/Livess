import { useState, useEffect, useRef } from 'react';
import { ISeriesData } from '../types';
const KEEP_ALIVE_TIMEOUT = 3000;
import { useDispatch } from 'react-redux';
import type { AppDispatch } from '../app/store';
import { setData, setGame } from '../app/features/game/gameSlice';
const CONNECTION_URL = 'ws://localhost:8080/2579048';

const useWebSocket = () => {
  const [socket, setSocket] = useState<WebSocket | null>(null);
  const dispatch = useDispatch<AppDispatch>();
  //const [receivedData, setReceivedData] = useState(null)
  //const [datas, setDatas] = useState<ISeriesData[]>([])

  const [socketStatus, setSocketStatus] = useState<'Connect' | 'Disconnect' | 'Error'>(
    'Disconnect'
  );
  const [message, setMessage] = useState('');
  const keepAliveRef = useRef(-1);

  const isSupported = (): boolean => typeof WebSocket !== 'undefined';

  useEffect(() => {
    if (socket) {
      socket.onopen = function () {
        setMessage('Connected');
        setSocketStatus('Connect');
      };

      socket.onclose = function (ev: CloseEvent) {
        if (ev.wasClean) {
          setMessage(`Connection closed cleanly, code=${ev.code} reason=${ev.reason}`);
        } else {
          setMessage('Connection died');
        }
        setSocketStatus('Disconnect');
        setSocket(null);
      };

      socket.onerror = function (ev) {
        if (ev instanceof ErrorEvent) {
          setMessage(ev.message);
          setSocketStatus('Error');
        }
        setSocket(null);
      };

      socket.onmessage = function (ev) {
        const _data: ISeriesData = JSON.parse(ev.data);

        const lastEvent = _data.events.pop();
        if (lastEvent) {
          const lastGame = lastEvent.seriesState.games.pop();
          if (lastGame)
            dispatch(
              setGame({
                event: lastEvent.type,
                game: lastGame,
                gameFormat: lastEvent.seriesState.format,
              })
            );
        }
      };

      // keepAliveRef.current = setInterval(() => {
      //   if (socket.readyState === WebSocket.OPEN) {
      //     socket.send("ping")
      //   }
      // }, KEEP_ALIVE_TIMEOUT)
    } else {
      //clearInterval(keepAliveRef.current)
    }
  }, [socket]);

  const connect = () => {
    if (!isSupported) {
      setSocketStatus('Error');
      setMessage('Web socket is not supported');
      return;
    }

    if (!socket) setSocket(new WebSocket(CONNECTION_URL));
  };

  const disconnect = () => {
    if (socket) socket.close();
  };

  return {
    connect,
    disconnect,
    socketStatus,
    message,
  };
};

export default useWebSocket;
