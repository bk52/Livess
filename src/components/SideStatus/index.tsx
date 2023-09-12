import styles from './index.module.css';
import cx from 'classnames';
import { Weapon_Icons, Weapon_Images, Players_Image } from '../PublicAssets';
import { Health, Shield, Money2, Target, Skull, Handshake } from '../Icons';
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
      <div
        className={cx([
          side === SIDE.CT
            ? 'flex flex-row w-[300px] bg-color-ct-table select-none'
            : ' flex flex-row-reverse w-[300px] bg-color-t-table select-none',
        ])}
      >
        <div className={'flex flex-col w-[80px]'}>
          <img
            className={cx([
              'h-[64px] object-contain',
              player.alive ? null : 'grayscale brightness-50',
            ])}
            src={Players_Image[player.name]}
          />
          <div
            className={cx([
              'w-full text-h6 text-text-primary font-rajdhani text-center',
              side === SIDE.CT ? 'bg-color-counter-terrorist' : 'bg-color-terrorist',
            ])}
          >
            {player?.name}
          </div>
        </div>

        <div className="w-[120px] justify-around flex flex-col font-rajdhani text-p">
          <div className="flex flex-row">
            <div className="flex flex-col flex-1 text-text-secondary items-center">
              <div className="h-[16px]">
                <Health />
              </div>
              <div className="text-text-primary">{player.currentHealth}</div>
            </div>
            <div className="flex flex-col flex-1 text-text-secondary items-center">
              <div className="h-[16px]">
                <Shield />
              </div>
              <div className="text-text-primary">{player.currentArmor}</div>
            </div>
            <div className="flex flex-col flex-1 text-text-secondary items-center">
              <div className="h-[16px]">
                <Money2 />
              </div>
              <div className="text-text-primary">{player.money}</div>
            </div>
          </div>

          <div className={'flex flex-row'}>
            <div className={'flex flex-col flex-1 text-color-success items-center'}>
              <div className="h-[16px]">
                <Target />
              </div>
              <div>{player.kills}</div>
            </div>

            <div className={'flex flex-col flex-1 text-color-danger items-center'}>
              <div className="h-[16px] ">
                <Skull />
              </div>
              <div>{player.deaths}</div>
            </div>

            <div className={'flex flex-col flex-1 items-center, text-color-info'}>
              <div className="h-[16px]">
                <Handshake />
              </div>
              <div>{player.killAssistsGiven}</div>
            </div>
          </div>
        </div>

        {player.alive && (
          <div className={'flex flex-col flex-1 items-center justify-center px-2 gap-4'}>
            {player.items.map((item, index) =>
              FORBIDDEN_ITEMS.findIndex((forbidden) => forbidden === item.id) > -1 ? null : (
                <div key={index} className={'h-[24px]'}>
                  <img
                    className={cx([
                      'h-full object-contain',
                      side === SIDE.T ? '-scale-x-100' : null,
                    ])}
                    src={Weapon_Icons[item.id]}
                  />
                </div>
              )
            )}
          </div>
        )}
      </div>
    </>
  ) : null;
};

const SideStatus: React.FC<{ game?: IGame }> = ({ game }) => {
  const CT = game?.teams.find((item) => item.side === SIDE.CT);
  const T = game?.teams.find((item) => item.side === SIDE.T);

  return game ? (
    <>
      <div className="absolute left-0 top-1/2 -translate-y-1/2 flex flex-col z-[9999]">
        {CT &&
          CT.players.map((item, index) => (
            <PlayerCard key={`CT${index}`} player={item} side={SIDE.CT} />
          ))}
      </div>

      {CT && T && (
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 z-[9999]">
          <MatchInfo
            teamA={CT}
            teamB={T}
            mapName={game.map.name}
            duration={game.clock.currentSeconds}
          />
        </div>
      )}

      <div className="absolute right-0 top-1/2 -translate-y-1/2 flex flex-col z-[9999]">
        {T &&
          T.players.map((item, index) => (
            <PlayerCard key={`T${index}`} player={item} side={SIDE.T} />
          ))}
      </div>
    </>
  ) : null;
};

export default SideStatus;
