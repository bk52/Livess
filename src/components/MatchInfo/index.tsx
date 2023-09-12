import classNames from 'classnames';
import { IGameTeam } from '../../types';
import { Team_Logos, Map_Image } from '../PublicAssets';
import styles from './index.module.css';
import cx from 'classnames';

const Message = () => {
  return (
    <div className="bg-color-ct-table px-1 py-1 rounded-md text-h6 text-text-primary text-center font-rajdhani">
      forze win the round
    </div>
  );
};

const MatchMessages = () => {
  return (
    <div className="flex flex-col mb-2 gap-2">
      <Message />
    </div>
  );
};

const formatTime = (time?: number): string => {
  if (!time) return '-';
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  return `${minutes.toString().padStart(2, '0')} : ${seconds.toString().padStart(2, '0')}`;
};

const MatchInfo: React.FC<{
  teamA: IGameTeam;
  teamB: IGameTeam;
  duration?: number;
  mapName: string;
}> = ({ teamA, teamB, duration, mapName }) => {
  return (
    <div className="relative w-[256px]">
      <img
        src={Map_Image[mapName]}
        className="w-full h-full absolute opacity-80 object-cover z-10"
      />
      <div className="w-full h-[120px] relative z-20">
        <div className="w-full h-full flex flex-row items-center justify-evenly">
          <div className="flex flex-col items-center gap-2 text-h6 font-rajdhani">
            <img className="h-[48px]" src={Team_Logos[teamA.name]} />
            <div className="text-color-counter-terrorist">{teamA.name}</div>
          </div>
          <div className="flex flex-col text-center gap-1">
            <div className="text-h2 text-text-primary font-rajdhani">
              {teamA.score}-{teamB.score}
            </div>
            <div className="text-h6 font-rajdhani text-text-secondary">{formatTime(duration)}</div>
          </div>
          <div className="flex flex-col items-center gap-2 text-h6 font-rajdhani">
            <img className="h-[48px]" src={Team_Logos[teamB.name]} />
            <div className="text-color-terrorist">{teamB.name}</div>
          </div>
        </div>
      </div>

      {/* <MatchMessages /> */}
    </div>
  );
};

export default MatchInfo;
