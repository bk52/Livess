import styles from './index.module.css';
import { IPlayerGameStats } from '../../types';
import { Target, Skull, Handshake, PlusMinus, Headshot, Percent } from '../Icons';

const PlayerStatsCard: React.FC<{
  icon: React.ReactNode;
  title: string;
  count: string;
}> = ({ icon, title, count }) => {
  return (
    <div className={styles.card}>
      <div className={styles.cardTitleRow}>
        <div className={styles.cardIcon}>{icon}</div>
        <div className={styles.cardTitle}>{title}</div>
      </div>
      <div className={styles.cardStats}>{count}</div>
    </div>
  );
};

const KDRatio = (kill: number, death: number): number => {
  if (death === 0) return kill;
  else return kill / death;
};

const PlayerStats: React.FC<{
  player: IPlayerGameStats;
}> = ({ player }) => {
  return (
    <div className={styles.container}>
      <div className={styles.row}>
        <PlayerStatsCard icon={<Target />} title="K" count={player.kills.toString()} />
        <PlayerStatsCard icon={<Skull />} title="D" count={player.deaths.toString()} />
        <PlayerStatsCard
          icon={<Handshake />}
          title="A"
          count={player.killAssistsGiven.toString()}
        />
      </div>
      <div className={styles.row}>
        <PlayerStatsCard
          icon={<PlusMinus />}
          title="Avr"
          count={(player.kills - player.deaths).toString()}
        />
        <PlayerStatsCard icon={<Headshot />} title="HS" count={player.headshots.toString()} />
        <PlayerStatsCard
          icon={<Percent />}
          title="R"
          count={KDRatio(player.kills, player.deaths).toFixed(1)}
        />
      </div>
    </div>
  );
};

export default PlayerStats;
