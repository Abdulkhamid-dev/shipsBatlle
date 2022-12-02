import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

export interface IGameState {
  gameStage: string;
  currentPlayer: number;
  players: IPlayer[];
}

export interface ICoordinates {
  id: number;
  isShip: boolean;
  isHitted: boolean;
}

export interface IPlayer {
  id: number;
  score: number;
  coordinates: ICoordinates[];
}

export const initialState: IGameState = {
  gameStage: "start",
  currentPlayer: 0,
  players: [
    {
      id: 1,
      score: 0,
      coordinates: [
        {
          id: 1,
          isShip: false,
          isHitted: false,
        },
        {
          id: 2,
          isShip: false,
          isHitted: false,
        },
        {
          id: 3,
          isShip: false,
          isHitted: false,
        },
        {
          id: 4,
          isShip: false,
          isHitted: false,
        },
        {
          id: 5,
          isShip: false,
          isHitted: false,
        },
        {
          id: 6,
          isShip: false,
          isHitted: false,
        },
        {
          id: 7,
          isShip: false,
          isHitted: false,
        },
        {
          id: 8,
          isShip: false,
          isHitted: false,
        },
        {
          id: 9,
          isShip: false,
          isHitted: false,
        },
        {
          id: 10,
          isShip: false,
          isHitted: false,
        },
        {
          id: 11,
          isShip: false,
          isHitted: false,
        },
        {
          id: 12,
          isShip: false,
          isHitted: false,
        },
        {
          id: 13,
          isShip: false,
          isHitted: false,
        },
        {
          id: 14,
          isShip: false,
          isHitted: false,
        },
        {
          id: 15,
          isShip: false,
          isHitted: false,
        },
        {
          id: 16,
          isShip: false,
          isHitted: false,
        },
        {
          id: 17,
          isShip: false,
          isHitted: false,
        },
        {
          id: 18,
          isShip: false,
          isHitted: false,
        },
        {
          id: 19,
          isShip: false,
          isHitted: false,
        },
        {
          id: 20,
          isShip: false,
          isHitted: false,
        },
        {
          id: 21,
          isShip: false,
          isHitted: false,
        },
        {
          id: 22,
          isShip: false,
          isHitted: false,
        },
        {
          id: 23,
          isShip: false,
          isHitted: false,
        },
        {
          id: 24,
          isShip: false,
          isHitted: false,
        },
        {
          id: 25,
          isShip: false,
          isHitted: false,
        },
      ],
    },
    {
      id: 2,
      score: 0,
      coordinates: [
        {
          id: 1,
          isShip: false,
          isHitted: false,
        },
        {
          id: 2,
          isShip: false,
          isHitted: false,
        },
        {
          id: 3,
          isShip: false,
          isHitted: false,
        },
        {
          id: 4,
          isShip: false,
          isHitted: false,
        },
        {
          id: 5,
          isShip: false,
          isHitted: false,
        },
        {
          id: 6,
          isShip: false,
          isHitted: false,
        },
        {
          id: 7,
          isShip: false,
          isHitted: false,
        },
        {
          id: 8,
          isShip: false,
          isHitted: false,
        },
        {
          id: 9,
          isShip: false,
          isHitted: false,
        },
        {
          id: 10,
          isShip: false,
          isHitted: false,
        },
        {
          id: 11,
          isShip: false,
          isHitted: false,
        },
        {
          id: 12,
          isShip: false,
          isHitted: false,
        },
        {
          id: 13,
          isShip: false,
          isHitted: false,
        },
        {
          id: 14,
          isShip: false,
          isHitted: false,
        },
        {
          id: 15,
          isShip: false,
          isHitted: false,
        },
        {
          id: 16,
          isShip: false,
          isHitted: false,
        },
        {
          id: 17,
          isShip: false,
          isHitted: false,
        },
        {
          id: 18,
          isShip: false,
          isHitted: false,
        },
        {
          id: 19,
          isShip: false,
          isHitted: false,
        },
        {
          id: 20,
          isShip: false,
          isHitted: false,
        },
        {
          id: 21,
          isShip: false,
          isHitted: false,
        },
        {
          id: 22,
          isShip: false,
          isHitted: false,
        },
        {
          id: 23,
          isShip: false,
          isHitted: false,
        },
        {
          id: 24,
          isShip: false,
          isHitted: false,
        },
        {
          id: 25,
          isShip: false,
          isHitted: false,
        },
      ],
    },
  ],
};

export const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    updateGame: (state, action) => {
      return {
        ...state,
        ...action.payload,
      };
    },
    startGame: (state) => {
      state.gameStage = "setting";
      state.currentPlayer = 1;
    },
    updatePlayerScore: (state, action) => {
      return {
        ...state,
        ...action.payload,
      };
    },
    restartGame: (state) => {
      return initialState;
    },
    setCurrentPlayer: (state, action) => {
      return {
        ...state,
        ...action.payload,
      };
    },
  },
});

export const {
  startGame,
  restartGame,
  updatePlayerScore,
  setCurrentPlayer,
  updateGame,
} = gameSlice.actions;

export default gameSlice.reducer;
