export enum EVENT_TYPES {
  GRID_STARTED_FEED = "grid-started-feed",
  TOURNAMENT_STARTED_SERIES = "tournament-started-series",
  SERIES_STARTED_GAME = "series-started-game",
  GAME_STARTED_CLOCK = "game-started-clock",
  GAME_STARTED_ROUND = "game-started-round",
  ROUND_STARTED_FREEZETIME = "round-started-freezetime",
  GAME_SET_CLOCK = "game-set-clock",
  GRID_INVALIDATED_SERIES = "grid-invalidated-series",
  GAME_0SET_CLOCK = "game-!set-clock",
  ROUND_0STARTED_FREEZETIME = "round-!started-freezetime",
  GAME_0STARTED_ROUND = "game-!started-round",
  GAME_0STARTED_CLOCK = "game-!started-clock",
  SERIES_0STARTED_GAME = "series-!started-game",
  GRID_VALIDATED_SERIES = "grid-validated-series",
  PLAYER_DROPPED_ITEM = "player-dropped-item",
  PLAYER_PICKEDUP_ITEM = "player-pickedUp-item",
  PLAYER_PURCHASED_ITEM = "player-purchased-item",
  ROUND_ENDED_FREEZETIME = "round-ended-freezetime",
  PLAYER_DAMAGED_PLAYER = "player-damaged-player",
  PLAYER_KILLED_PLAYER = "player-killed-player",
  PLAYER_COMPLETED_PLANTBOMB = "player-completed-plantBomb",
  TEAM_WON_ROUND = "team-won-round",
  GAME_ENDED_ROUND = "game-ended-round",
  PLAYER_TEAMDAMAGED_PLAYER = "player-teamdamaged-player",
  PLAYER_COMPLETED_BEGINDEFUSEWITHOUTKIT = "player-completed-beginDefuseWithoutKit",
  PLAYER_COMPLETED_DEFUSEBOMB = "player-completed-defuseBomb",
  PLAYER_COMPLETED_EXPLODEBOMB = "player-completed-explodeBomb",
  FREEZETIME_STARTED_TIMEOUT = "freezetime-started-timeout",
  FREEZETIME_ENDED_TIMEOUT = "freezetime-ended-timeout",
  PLAYER_COMPLETED_BEGINDEFUSEWITHKIT = "player-completed-beginDefuseWithKit",
  PLAYER_SELFDAMAGED_PLAYER = "player-selfdamaged-player",
  TEAM_WON_GAME = "team-won-game",
  GAME_STOPPED_CLOCK = "game-stopped-clock",
  SERIES_ENDED_GAME = "series-ended-game",
  SERIES_PAUSED_GAME = "series-paused-game",
  SERIES_RESUMED_GAME = "series-resumed-game",
  TEAM_WON_SERIES = "team-won-series",
  TOURNAMENT_ENDED_SERIES = "tournament-ended-series",
  GRID_ENDED_FEED = "grid-ended-feed",
}

export enum SIDE {
  CT = "counter-terrorists",
  T = "terrorists",
}

export enum WIN_TYPES {
  OPPONENT_ELIMINATED = "opponentEliminated",
  BOMB_DEFUSED = "bombDefused",
  BOMB_EXLODED = "bombExploded",
  TIME_EXPIRED = "timeExpired",
}

export enum WEAPON_TYPES {
  AK47 = "ak47",
  AUG = "aug",
  AWP = "awp",
  BOMB = "bomb",
  CZ75A = "cz75a",
  DEAGLE = "deagle",
  DECOY = "decoy",
  DEFUSER = "defuser",
  ELITE = "elite",
  FAMAS = "famas",
  FIVESEVEN = "fiveseven",
  FLASHBANG = "flashbang",
  GALILAR = "galilar",
  GLOCK = "glock",
  HEGRENADE = "hegrenade",
  HELM = "helm",
  HKP2000 = "hkp2000",
  INCGRENADE = "incgrenade",
  KEVLARVEST = "kevlarVest",
  KNIFE_CT = "knife_ct",
  KNIFE_T = "knife_t",
  M4A1 = "m4a1",
  M4A1_SILENCER = "m4a1_silencer",
  MAC10 = "mac10",
  MAG7 = "mag7",
  MOLOTOV = "molotov",
  MP9 = "mp9",
  P250 = "p250",
  SG556 = "sg556",
  SMOKEGRENADE = "smokeGrenade",
  SSG08 = "ssg08",
  TASER = "taser",
  TEC9 = "tec9",
  UMP45 = "ump45",
  USP_SILENCER = "usp_silencer",
  XM1014 = "xm1014",
  KNIFE = "knife",
}

export enum PAGES {
  MAIN,
  TEAM_STATS,
  PLAYER_STATS,
  TRIGGERS,
  SETTINGS,
}

export interface ISeriesData {
  id: string
  occurredAt: string
  correlationId: string
  publishedAt: string
  seriesId: string
  sequenceNumber: number
  sessionSequenceNumber: number
  events: ISeriesEvent[]
}

interface ISeriesEvent {
  id: string
  includesFullState: boolean
  type: EVENT_TYPES
  actor: IActor
  action: string
  target: ITarget
  //seriesStateDelta: []
  seriesState: ISeriesState
}

interface IActor {
  type: string
  id: string
  //stateDelta:{}
  state: {
    id: string
    teamId: string
    side: SIDE
    name: string
    series: IPlayerStats
    game: IPlayerGameStats
  }
}

export interface IWeaponKills {
  [weaponName: string]: number
}

export interface IPlayerStats {
  id: string
  //statePath:[]
  name: string
  participationStatus: string
  kills: number
  killAssistsReceived: number
  killAssistsGiven: number
  killAssistsReceivedFromPlayer: IKillAssist[]
  weaponKills: IWeaponKills
  teamkills: number
  teamkillAssistsReceived: number
  teamkillAssistsGiven: number
  teamkillAssistsReceivedFromPlayer: IKillAssist[]
  //weaponTeamkills:{}
  selfkills: number
  deaths: number
  structuresDestroyed: number
  structuresCaptured: number
  objectives: IObjective[]
  //multikills:[]
  //externalLinks:[]
  headshots: number
  teamHeadshots: number
}

export interface IPlayerGameStats extends IPlayerStats {
  character: {
    name: string
    id: string
  }
  money: number
  inventoryValue: number
  netWorth: number
  items: IActorGameItem[]
  //abilities: []
  position: string
  alive: boolean
  currentArmor: number
  currentHealth: number
  damageDealt: number
  damageTaken: number
  maxHealth: number
  selfdamageDealt: number
  selfdamageTaken: number
  teamdamageDealt: number
  teamHeadshots: number
  teamdamageTaken: number
}

export interface IActorGameItem {
  id: string
  statePath: {
    id: string
  }[]
  equipped: boolean
  stashed: boolean
}

interface ITarget {
  type: string
  id: string
  stateDelta: {
    id: string
    statePath: []
    equipped: boolean
    stashed: boolean
  }
  state: {
    id: string
    statePath: []
    equipped: boolean
    stashed: boolean
  }
}

interface ISeriesState {
  id: string
  title: {
    nameShortened: string
  }
  format: string
  started: boolean
  startedAt: string
  finished: boolean
  valid: boolean
  teams: ITeam[]
  games: IGame[]
  //draftActions:[]
}

export interface IGame {
  id: string
  //statePath:[]
  sequenceNumber: number
  map: {
    name: string
  }
  started: boolean
  finished: boolean
  paused: boolean
  clock: IClock
  //structures:[]
  //nonPlayerCharacters:[]
  teams: IGameTeam[]
  segments: ISegment[]
  //draftActions:[]
}

interface IClock {
  id: string
  type: string
  ticking: boolean
  ticksBackwards: boolean
  currentSeconds: number
  updatedAt: string
}

export interface ITeam {
  id: string
  //statePath:[]
  name: string
  score: number
  won: boolean
  kills: number
  killAssistsReceived: number
  killAssistsGiven: number
  killAssistsReceivedFromPlayer: IKillAssist[]
  weaponKills: IWeaponKills
  //multikills:[]
  teamkills: number
  teamkillAssistsReceived: number
  teamkillAssistsGiven: number
  teamkillAssistsReceivedFromPlayer: IKillAssist[]
  //weaponTeamkills:{}
  selfkills: number
  deaths: number
  structuresDestroyed: number
  structuresCaptured: number
  objectives: IObjective[]
  players: IPlayerGameStats[] //IPlayerStats[]
  headshots: number
  teamHeadshots: number
}

export interface IGameTeam extends ITeam {
  side: SIDE
  won: boolean
  money: number
  inventoryValue: number
  netWorth: number
  damageDealt: number
  damageTaken: number
  selfdamageDealt: number
  selfdamageTaken: number
  teamdamageDealt: number
  teamdamageTaken: number
  winType: WIN_TYPES
}

export interface ISegment {
  id: string
  //statePath:[]
  type: string
  sequenceNumber: number
  started: boolean
  finished: boolean
  teams: IGameTeam[]
  //segments:[]
  //draftActions:[]
}

interface IKillAssist {
  id: string
  playerId: string
  killAssistsReceived: number
}

interface IObjective {
  id: string
  type: string
  completionCount: number
}

export enum TRIGGER_COND {
  WIN_MATCH = "win_match",
  KILL = "kills",
  DEATH = "death",
  WIN_GAME = "win_game",
}

export enum TRIGGER_ACTION {
  CONFETTI = "Confetti",
  NEW_TAB = "New Tab",
  PHOTO = "Photo",
}

export interface ITrigger {
  id: string
  actorType: "player" | "team"
  actorName: string
  condition: TRIGGER_COND
  numericCondition?: boolean
  targetValue?: number
  action: TRIGGER_ACTION
  actionUrl?: string
  completed?: boolean
}
