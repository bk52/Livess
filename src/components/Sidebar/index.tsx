import { useState, useEffect } from 'react';
import styles from './index.module.css';
import { PAGES } from '../../types';
import Navbar from '../Navbar';
import MainPage from './Main';

import TeamStatsPage from './Stats/TeamStats';
import PlayerStatsPage from './Stats/PlayerStats';
import TriggersPage from './Triggers';
import SettingsPage from './Settings';

import useWebSocket from '../../hooks/useWebSocket';

const Main = () => {
  const [page, setPage] = useState<PAGES>(PAGES.MAIN);
  const [selectedPlayer, setSelectedPlayer] = useState<{
    team: string;
    name: string;
  } | null>(null);
  const { connect, disconnect } = useWebSocket();

  const setPlayer = (playerName: string, teamName: string) => {
    setSelectedPlayer({ team: teamName, name: playerName });
    setPage(PAGES.PLAYER_STATS);
  };

  useEffect(() => {
    if (page === PAGES.MAIN) disconnect();
  }, [page]);

  return page === PAGES.MAIN ? (
    <MainPage
      onMatchSelect={() => {
        connect();
        setPage(PAGES.TEAM_STATS);
      }}
    />
  ) : (
    <div className={styles.container}>
      <Navbar active={page} setPage={setPage} />
      {page === PAGES.TEAM_STATS && (
        <TeamStatsPage
          onPlayerSelected={(playerName, teamName) => setPlayer(playerName, teamName)}
        />
      )}
      {page === PAGES.PLAYER_STATS && selectedPlayer && (
        <PlayerStatsPage playerName={selectedPlayer.name} teamName={selectedPlayer.team} />
      )}
      {page === PAGES.TRIGGERS && <TriggersPage />}
      {page === PAGES.SETTINGS && <SettingsPage />}
    </div>
  );
};

export default Main;
