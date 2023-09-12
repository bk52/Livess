import styles from '../PlayerStats';
import { useSelector } from 'react-redux';
import type { RootState } from '../../../../app/store';
import { Players_Image, Team_Logos } from '../../../Assets';

import PlayerTitle from '../../../PlayerTitle';
import PlayerStats from '../../../PlayerStats';
import WeaponStats from '../../../WeaponStats';

const PlayerPage: React.FC<{
  playerName: string;
  teamName: string;
}> = ({ playerName, teamName }) => {
  const { game } = useSelector((state: RootState) => state.game);
  const team = game?.teams.find((item) => item.name === teamName);
  const player = team?.players.find((item) => item.name === playerName);
  return (
    <>
      <PlayerTitle
        playerName={player?.name}
        imageUrl={Players_Image[player?.name]}
        logoUrl={Team_Logos[teamName]}
      />
      <PlayerStats player={player} />
      <WeaponStats weaponKills={player?.weaponKills} />
    </>
  );
};

export default PlayerPage;
