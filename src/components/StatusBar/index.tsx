import { useRef, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setTriggerAnimation } from '../../app/features/game/gameSlice';
import { RootState, AppDispatch } from '../../app/store';
import SideStatus from '../SideStatus';
import BottomStatus from '../BottomStatus';
import Confetti from 'react-confetti';

const ConfettiContainer: React.FC<{
  removeConfetti?: () => void;
}> = ({ removeConfetti }) => {
  const elementRef = useRef(null);
  const [width, setWidth] = useState(null);
  const [height, setHeight] = useState(null);

  useEffect(() => {
    if (elementRef.current) {
      const rect = elementRef.current.getBoundingClientRect();
      setWidth(rect.width);
      setHeight(rect.height);
    }

    setTimeout(() => {
      if (removeConfetti) removeConfetti();
    }, 5000);
  }, []);

  return (
    <div ref={elementRef} className="w-full h-full">
      <Confetti width={width} height={height} />
    </div>
  );
};

const StatusBar = () => {
  const dispatch = useDispatch();
  const { statusBarType, showStatusBar, game, triggerAnimation } = useSelector(
    (state: RootState) => state.game
  );

  return (
    <>
      {triggerAnimation && (
        <ConfettiContainer removeConfetti={() => dispatch(setTriggerAnimation(false))} />
      )}
      {showStatusBar ? (
        statusBarType === 'option1' ? (
          <BottomStatus game={game} />
        ) : (
          <SideStatus game={game} />
        )
      ) : null}
    </>
  );
};

export default StatusBar;
