import styles from './index.module.css';
import { Logo, Grid, Team_Logos } from '../../Assets';
import { Refresh } from '../../Icons';

const NoMatch = () => {
  return <div className={styles.message}>There is no live match now</div>;
};

const NoConnection = () => {
  return (
    <div className={styles.message}>
      Couldn't connect to server
      <br />
      Try Again
      <br />
      <button className={styles.buttonIcon} type="button">
        <Refresh />
      </button>
    </div>
  );
};

const MatchCard: React.FC<{
  onItemClick: () => void;
}> = ({ onItemClick }) => {
  return (
    <div onClick={() => onItemClick()} className={styles.cardContainer}>
      <div className={styles.matchCard}>
        <div className={styles.team}>
          <img src={Team_Logos['forZe']} />
          <div className={styles.name}>forZe</div>
        </div>
        <div className={styles.vs}>VS</div>
        <div className={styles.team}>
          <img src={Team_Logos['9INE']} />
          <div className={styles.name}>9INE</div>
        </div>
      </div>
    </div>
  );
};

const Main: React.FC<{
  onMatchSelect: () => void;
}> = ({ onMatchSelect }) => {
  return (
    <div className={styles.main}>
      <img className={styles.logo} src={Logo} />
      <div className={styles.slogan}>Live E-Sport Stats</div>
      <div className={styles.title}>LIVE MATCHES</div>
      <div className={styles.line}></div>
      <div className={styles.matchContainer}>
        {/* <NoMatch />
        <NoConnection /> */}
        <MatchCard
          onItemClick={() => {
            onMatchSelect();
          }}
        />
      </div>
      <div className={styles.poweredBy}>
        Powered by <img src={Grid} />
      </div>
    </div>
  );
};

export default Main;
