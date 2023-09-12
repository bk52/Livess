import React, { memo } from 'react';
import styles from './index.module.css';
import { IPlayerGameStats, SIDE } from '../../types';
import cx from 'classnames';

interface ITeamPlayerStats {
  players?: IPlayerGameStats[];
  side: SIDE;
  onPlayerSelected: (playerName: string) => void;
}

const StatsRow: React.FC<{
  player: IPlayerGameStats;
  onPlayerSelected: (playerName: string) => void;
}> = ({ player, onPlayerSelected }) => {
  const _kill = player.kills || 0;
  const _death = player.deaths || 0;
  const _average = _kill - _death;
  //const _ratio = _death === 0 ? _kill : _kill / _death

  return (
    <tr
      onClick={() => onPlayerSelected(player.name)}
      className={_average > 0 ? `${styles.positive}` : _average < 0 ? `${styles.negative}` : ''}
    >
      <td>
        <div className={styles.playerName}>
          {/* <img src={PlayersInfo[player.name]?.image || UserImage} /> */}
          {player.name}
        </div>
      </td>
      <td>{_kill}</td>
      <td>{_death}</td>
      <td>{player.killAssistsGiven || 0}</td>
      <td>{_average}</td>
      {/* <td>{_ratio.toFixed(1)}</td> */}
      <td>{player.money}</td>
    </tr>
  );
};

const StatsTable: React.FC<ITeamPlayerStats> = ({ players, side, onPlayerSelected }) => {
  const ordered = players?.sort((a, b) =>
    (a.kills || 0) - (a.deaths || 0) > (b.kills || 0) - (b.deaths || 0) ? -1 : 1
  );
  return (
    <table
      className={cx([
        styles.table,
        side === SIDE.CT ? styles.counterTerrorists : styles.terrorists,
      ])}
    >
      <thead>
        <tr>
          <th>Player</th>
          <th>K</th>
          <th>D</th>
          <th>A</th>
          <th>+/-</th>
          {/* <th>K/D</th> */}
          <th>$</th>
        </tr>
      </thead>
      <tbody>
        {ordered &&
          ordered.map((item, index) => (
            <StatsRow onPlayerSelected={onPlayerSelected} key={index} player={item} />
          ))}
      </tbody>
    </table>
  );
};

export default memo(StatsTable);
