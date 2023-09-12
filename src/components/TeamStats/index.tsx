import React, { memo } from 'react';
import styles from './index.module.css';
import { ITeam } from '../../types';
import { Team_Logos } from '../Assets';

interface ITeamStats {
  team: ITeam;
}

const StatsTeam: React.FC<ITeamStats> = ({ team }) => {
  return (
    <div className="w-64 h-auto flex flex-col items-center justify-center space-y-4 bg-table-ro w-primary">
      <img className="w-24 h-24 rounded-full" src={Team_Logos[team.name]} />
      <div className="text-4xl text-white">{team.name}</div>
      <div className="text-4xl font-bold text-counter-terrorist">{team.score}</div>
    </div>
  );
};

export default memo(StatsTeam);
