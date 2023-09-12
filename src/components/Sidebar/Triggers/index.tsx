import React, { useState } from 'react';
import styles from './index.module.css';
import cx from 'classnames';
import { nanoid } from 'nanoid';
import { Close, Browser, Confetti } from '../../Icons';
import { ITrigger, TRIGGER_ACTION, TRIGGER_COND } from '../../../types';
import { Players_Image, Team_Logos } from '../../Assets';
import { useSelector, useDispatch } from 'react-redux';
import type { RootState, AppDispatch } from '../../../app/store';
import { setTriggers } from '../../../app/features/game/gameSlice';

const TriggerItem: React.FC<{ item: ITrigger; onItemClick: () => void }> = ({
  item,
  onItemClick,
}) => {
  return (
    <div className={styles.itemContainer} onClick={onItemClick}>
      <div className={styles.actor}>
        {item.actorType === 'player' ? (
          <img src={Players_Image[item.actorName]} />
        ) : (
          <img src={Team_Logos[item.actorName]} />
        )}
        <div className={styles.name}>{item.actorName}</div>
      </div>
      <div className={styles.target}>
        {item.numericCondition && <div className={styles.count}>{item.targetValue}</div>}
        <div className={styles.description}>{item.condition}</div>
      </div>
      <div className={styles.action}>
        {item.action === TRIGGER_ACTION.CONFETTI && (
          <>
            <div className={styles.icon}>
              <Confetti />
            </div>
            <div className={styles.description}>Confetti</div>
          </>
        )}
        {item.action === TRIGGER_ACTION.NEW_TAB && (
          <>
            <div className={styles.icon}>
              <Browser />
            </div>
            <div className={styles.description}>Open URL</div>
          </>
        )}
      </div>
    </div>
  );
};

const EditTrigger: React.FC<{
  item: ITrigger;
  onSave: (item: ITrigger) => void;
  onDelete: (id: string) => void;
  onCancel: () => void;
}> = ({ item, onSave, onDelete, onCancel }) => {
  const [trigger, setTrigger] = useState(item);

  const setProperty = (property: string, value: string) => {
    setTrigger((prev) => ({ ...prev, [property]: value }));
  };

  return (
    <div className={styles.editContainer}>
      <div className={styles.closeRow}>
        <button onClick={() => onCancel()}>
          <Close />
        </button>
      </div>

      <div className={styles.row}>
        <div className={styles.editTitle}>WHEN</div>
        <div className={styles.radioContainer}>
          <div className={styles.radio}>
            <input
              type="radio"
              checked={trigger.actorType === 'player'}
              onChange={() => setProperty('actorType', 'team')}
            />
            <p>Player</p>
          </div>
          <div className={styles.radio}>
            <input
              type="radio"
              checked={trigger.actorType === 'team'}
              onChange={() => setProperty('actorType', 'team')}
            />
            <p>Team</p>
          </div>
        </div>
      </div>

      <select
        name="teams"
        className={styles.selectbox}
        value={trigger.actorName}
        onChange={(e) => setProperty('actorName', e.currentTarget.value)}
      >
        <option value={'forZe'}>forZe</option>
        <option value={'9INE'}>9INE</option>
      </select>

      <div className={styles.editTitle}>CONDITION</div>

      {/*<div className={styles.conditionContainer}>
         <p className={styles.conditionType}>Target</p>
        <input className={styles.conditionInput} /> 
      </div>*/}

      <select
        name="condition"
        className={styles.selectbox}
        value={trigger.condition}
        onChange={(e) => setProperty('condition', e.currentTarget.value)}
      >
        {/* <option value={TRIGGER_COND.DEATH}>Death</option>
          <option value={TRIGGER_COND.KILL}>Kill</option> 
          <option value={TRIGGER_COND.WIN_MATCH}>Win Match</option> */}
        <option value={TRIGGER_COND.WIN_GAME}>Win Game</option>
      </select>

      <div className={styles.editTitle}>ACTION</div>

      <select
        name="action"
        className={styles.selectbox}
        value={trigger.action}
        onChange={(e) => setProperty('action', e.currentTarget.value)}
      >
        <option value={TRIGGER_ACTION.CONFETTI}>Confetti</option>
        {/* <option value={TRIGGER_ACTION.NEW_TAB}>New Tab</option> */}
      </select>

      {item.action === TRIGGER_ACTION.NEW_TAB && (
        <div className={styles.urlContainer}>
          <p>URL</p>
          <input />
        </div>
      )}

      <div className={styles.buttonContainer}>
        <button className={cx([styles.button, styles.primary])} onClick={() => onSave(trigger)}>
          Save
        </button>
        <button className={cx([styles.button, styles.danger])} onClick={() => onDelete(trigger.id)}>
          Delete
        </button>
      </div>
    </div>
  );
};

const Triggers = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { triggers } = useSelector((state: RootState) => state.game);
  const [edited, setEdited] = useState<ITrigger>();

  const deleteTrigger = (id: string) => {
    const filtered = triggers.filter((item) => item.id != id);
    dispatch(setTriggers([...filtered]));
    setEdited(undefined);
  };

  const updateTrigger = (trigger: ITrigger) => {
    const filtered = triggers.filter((item) => item.id != trigger.id);
    dispatch(setTriggers([...filtered, trigger]));
    setEdited(undefined);
  };

  return (
    <>
      {triggers && triggers.length === 0 && (
        <button
          className={styles.btn}
          onClick={() =>
            setEdited({
              id: nanoid(8),
              action: TRIGGER_ACTION.CONFETTI,
              actorName: 'forZe',
              actorType: 'team',
              condition: TRIGGER_COND.WIN_MATCH,
            })
          }
        >
          Add Trigger
        </button>
      )}
      {edited ? (
        <EditTrigger
          item={edited}
          onSave={(item) => updateTrigger(item)}
          onDelete={(id) => deleteTrigger(id)}
          onCancel={() => setEdited(undefined)}
        />
      ) : (
        <div className={styles.listContainer}>
          {triggers.map((item, index) => (
            <TriggerItem key={index} item={item} onItemClick={() => setEdited(item)} />
          ))}
        </div>
      )}
    </>
  );
};

export default Triggers;
