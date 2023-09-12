import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk, RootState } from '../../store';

import { EVENT_TYPES, IGame, ISeriesData, ITrigger } from '../../../types';

import { SeriesData } from '../../../mocks/SeriesData';
import { Games } from '../../../mocks/Games';

interface IState {
  event?: EVENT_TYPES;
  gameFormat?: string;
  game?: IGame;
  seriesData?: ISeriesData;
  triggers: ITrigger[];
  showStatusBar?: boolean;
  statusBarType: 'option1' | 'option2';
  triggerAnimation?: boolean;
}

const initialState: IState = {
  //seriesData: SeriesData,
  //game: Games[0],
  triggers: [],
  showStatusBar: false,
  statusBarType: 'option1',
};

const CheckTriggers = (event: EVENT_TYPES, game: IGame, triggers: ITrigger[]): boolean => {
  console.log(event);
  if (
    event === EVENT_TYPES.TEAM_WON_GAME ||
    event === EVENT_TYPES.GRID_ENDED_FEED ||
    event === EVENT_TYPES.TOURNAMENT_ENDED_SERIES
  ) {
    if (triggers.length > 0) {
      console.log(game);
      const teamName = triggers[0].actorName;
      const team = game.teams.find((item) => item.name === teamName);
      return team && team.won ? true : false;
    }
  }
  return false;
};

export const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    setGame: (state, action) => {
      state.event = action.payload.event;
      state.gameFormat = action.payload.gameFormat;
      state.game = action.payload.game;
      if (CheckTriggers(action.payload.event, action.payload.game, state.triggers)) {
        state.triggerAnimation = true;
      }
    },
    setData: (state, action) => {
      state.seriesData = action.payload;
    },
    setTriggers: (state, action) => {
      state.triggers = action.payload;
    },
    setShowStatus: (state, action) => {
      state.showStatusBar = action.payload;
    },
    setStatusBarType: (state, action) => {
      state.statusBarType = action.payload;
    },
    setTriggerAnimation: (state, action) => {
      state.triggerAnimation = action.payload;
    },
  },
});

export const {
  setGame,
  setData,
  setTriggers,
  setShowStatus,
  setStatusBarType,
  setTriggerAnimation,
} = gameSlice.actions;
export default gameSlice.reducer;
