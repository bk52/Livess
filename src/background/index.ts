import browser from 'webextension-polyfill';
import store, { initializeWrappedStore } from '../app/store';
//import { setMessage } from '../app/features/game/gameSlice';

initializeWrappedStore();
let webSocket: WebSocket | null = null;

store.subscribe(() => {
  // access store state
  // const state = store.getState();
  // console.log('status', state.settings.status);
  // if (state.settings.status === 'connect') {
  //   ConnectSocket();
  // } else if (state.settings.status === 'disconnect') {
  //   DisconnectSocket();
  // }
});

// show welcome page on new install
// browser.runtime.onInstalled.addListener(async (details) => {
//   if (details.reason === 'install') {
//     //show the welcome page
//     const url = browser.runtime.getURL('welcome/welcome.html');
//     await browser.tabs.create({ url });
//   }
// });

const ConnectSocket = () => {
  if (webSocket == null) {
    webSocket = new WebSocket('ws://localhost:8080/2579048');
  }

  webSocket.onopen = (event) => {
    console.log('websocket open');
    keepAlive();
  };

  webSocket.onmessage = (event) => {
    console.log(`websocket received message: ${event.data}`);
    //store.dispatch(setMessage(event.data));
  };

  webSocket.onclose = (event) => {
    console.log('websocket connection closed');
    //webSocket = null;
  };
};

const DisconnectSocket = () => {
  if (webSocket == null) {
    return;
  }
  webSocket.close();
};

function keepAlive() {
  const keepAliveIntervalId = setInterval(
    () => {
      if (webSocket) {
        webSocket.send('keepalive');
      } else {
        clearInterval(keepAliveIntervalId);
      }
    },
    // Set the interval to 20 seconds to prevent the service worker from becoming inactive.
    20 * 1000
  );
}

// browser.action.onClicked.addListener(function (tab) {
//   if (tab.id) {
//     browser.scripting.executeScript({
//       target: { tabId: tab.id, allFrames: true },
//       files: ['assets/content.js'],
//     });
//   }
// });
