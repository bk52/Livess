import styles from './index.module.css';
import cx from 'classnames';
import { Health, Shield, Money2, Target, Skull, Handshake } from '../Icons';
import { Weapon_Images, Players_Image } from '../PublicAssets';
import { IGame, IPlayerGameStats, SIDE, WEAPON_TYPES } from '../../types';
import MatchInfo from '../MatchInfo';

const FORBIDDEN_ITEMS = [
  WEAPON_TYPES.BOMB,
  WEAPON_TYPES.DECOY,
  WEAPON_TYPES.DEFUSER,
  WEAPON_TYPES.FLASHBANG,
  WEAPON_TYPES.HEGRENADE,
  WEAPON_TYPES.HELM,
  WEAPON_TYPES.INCGRENADE,
  WEAPON_TYPES.KEVLARVEST,
  WEAPON_TYPES.KNIFE,
  WEAPON_TYPES.MOLOTOV,
  WEAPON_TYPES.SMOKEGRENADE,
];

const PlayerCard: React.FC<{ player?: IPlayerGameStats; side: SIDE }> = ({ player, side }) => {
  return player ? (
    <>
      <div className="w-[80px] flex flex-col select-none">
        <img
          className={cx([
            'h-[72px] object-contain',
            player.alive ? null : 'grayscale brightness-50',
          ])}
          src={Players_Image[player.name]}
        />
        <div
          className={cx([
            'w-full text-text-primary text-h6 font-rajdhani text-center',
            side === SIDE.T ? 'bg-color-terrorist' : 'bg-color-counter-terrorist',
          ])}
        >
          {player.name}
        </div>

        <div className="w-full flex flex-col bg-color-primary px-0.5 py-1 gap-1 font-rajdhani">
          {player.alive && (
            <div className="w-full flex flex-row">
              <div className="flex flex-col flex-1 text-text-secondary items-center">
                <div className="h-[10px]">
                  <Health />
                </div>
                <div className="text-text-primary text-infoCard">{player.currentHealth}</div>
              </div>

              <div className="flex flex-col flex-1 text-text-secondary items-center">
                <div className="h-[10px]">
                  <Shield />
                </div>
                <div className="text-text-primary text-infoCard">{player.currentArmor}</div>
              </div>

              <div className="flex flex-col flex-1 text-text-secondary items-center">
                <div className="h-[10px]">
                  <Money2 />
                </div>
                <div className="text-text-primary text-infoCard">{player.money}</div>
              </div>
            </div>
          )}

          <div className="w-full flex flex-row">
            <div className="flex flex-col flex-1 text-text-secondary items-center">
              <div className="h-[10px]">
                <Target />
              </div>
              <div className="text-text-primary text-infoCard">{player.kills}</div>
            </div>

            <div className="flex flex-col flex-1 text-text-secondary items-center">
              <div className="h-[10px]">
                <Skull />
              </div>
              <div className="text-text-primary text-infoCard">{player.deaths}</div>
            </div>

            <div className="flex flex-col flex-1 text-text-secondary items-center">
              <div className="h-[10px]">
                <Handshake />
              </div>
              <div className="text-text-primary text-infoCard">{player.killAssistsGiven}</div>
            </div>
          </div>

          {player.alive && (
            <div className="w-full h-[28px] flex flex-row">
              {player.items.map((item, index) =>
                FORBIDDEN_ITEMS.findIndex((forbidden) => forbidden === item.id) > -1 ? null : (
                  <div key={index} className={'h-full flex-1'}>
                    <img
                      className={cx([
                        'w-full h-full object-contain',
                        'drop-shadow-[0_2px_2px_rgba(93,121,174,0.7)]',
                      ])}
                      src={Weapon_Images[item.id]}
                    />
                  </div>
                )
              )}
            </div>
          )}
        </div>
      </div>
    </>
  ) : null;
};

const BottomBar: React.FC<{ game?: IGame }> = ({ game }) => {
  const CT = game?.teams.find((item) => item.side === SIDE.CT);
  const T = game?.teams.find((item) => item.side === SIDE.T);

  return (
    <div className="absolute bottom-0 left-0 m-0 p-0 flex flex-row w-full justify-center items-end z-[9999]">
      {CT &&
        CT.players.map((item, index) => (
          <PlayerCard key={`CT${index}`} player={item} side={SIDE.CT} />
        ))}
      {CT && T && (
        <MatchInfo
          teamA={CT}
          teamB={T}
          duration={game?.clock.currentSeconds}
          mapName={game?.map.name}
        />
      )}
      {T &&
        T.players.map((item, index) => (
          <PlayerCard key={`T${index}`} player={item} side={SIDE.T} />
        ))}
    </div>
  );
};

export default BottomBar;
