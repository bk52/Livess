import styles from './index.module.css';
import cx from 'classnames';
import { StatusBar1, StatusBar2 } from '../../Icons';
import { useSelector, useDispatch } from 'react-redux';
import { AppDispatch, RootState } from '../../../app/store';
import { setStatusBarType, setShowStatus } from '../../../app/features/game/gameSlice';

const Settings = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { statusBarType, showStatusBar } = useSelector((state: RootState) => state.game);

  return (
    <div className={styles.container}>
      {/* <div className={cx([styles.row, styles.center])}>
        <div className={styles.title}>Sound Effects</div>
        <input type="checkbox" className={styles.checkbox} />
      </div> */}
      <div className={cx([styles.row, styles.center])}>
        <div className={styles.title}>Status Bar</div>
        <input
          type="checkbox"
          checked={showStatusBar}
          onChange={(e) => dispatch(setShowStatus(!showStatusBar))}
          className={styles.checkbox}
        />
      </div>
      <div className={styles.row}>
        <div className={styles.title}>Status Bar Style</div>
      </div>
      <div className={styles.buttonContainer}>
        <button
          className={cx([styles.button, statusBarType === 'option1' ? styles.active : null])}
          onClick={() => dispatch(setStatusBarType('option1'))}
        >
          <StatusBar1 />
        </button>
        <button
          className={cx([styles.button, statusBarType === 'option2' ? styles.active : null])}
          onClick={() => dispatch(setStatusBarType('option2'))}
        >
          <StatusBar2 />
        </button>
      </div>
    </div>
  );
};

export default Settings;
