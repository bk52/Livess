import { SIDE } from '../../../../types';
import TeamPlayerStats from '../../../TeamPlayerStats';
import Timer from '../../../Timer';
import TeamHeader from '../../../TeamHeader';
import Segments from '../../../Segments';
import { Team_Logos } from '../../../Assets';
import { useSelector } from 'react-redux';
import type { RootState } from '../../../../app/store';

const TeamStats: React.FC<{
  onPlayerSelected: (playerName: string, teamName: string) => void;
}> = ({ onPlayerSelected }) => {
  const { game, gameFormat } = useSelector((state: RootState) => state.game);
  const remainingTime = game?.clock.currentSeconds;
  const CT = game?.teams.filter((team) => team.side === SIDE.CT)[0];
  const T = game?.teams.filter((team) => team.side === SIDE.T)[0];
  return (
    <>
      <Timer gameType={gameFormat || ' '} remainingTime={remainingTime} />
      {CT && CT.players && (
        <>
          <TeamHeader icon={Team_Logos[CT.name]} name={CT.name} score={CT.score} side={SIDE.CT} />
          <TeamPlayerStats
            players={[...CT.players]}
            side={SIDE.CT}
            onPlayerSelected={(playerName) => onPlayerSelected(playerName, CT.name)}
          />
        </>
      )}
      {game?.segments && <Segments segments={[...game.segments]} />}
      {T && T.players && (
        <>
          <TeamHeader icon={Team_Logos[T.name]} name={T.name} score={T.score} side={SIDE.T} />
          <TeamPlayerStats
            players={[...T.players]}
            side={SIDE.T}
            onPlayerSelected={(playerName) => onPlayerSelected(playerName, T.name)}
          />
        </>
      )}
    </>
  );
};

export default TeamStats;
