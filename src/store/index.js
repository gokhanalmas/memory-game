import { createSlice, configureStore } from '@reduxjs/toolkit';
import { generateBoard } from '../helpers';
import { setPlayers } from '../helpers';

const initialState = {
  isModalOpen: false,
  gameIsRunning: false,
  theme: 'numbers',
  numOfPlayers: '1',
  grid: '4',
  gameBoard: [],
  chosenCards: [],
  matchCards: [],
  players: [],
};

const memoryGameSlice = createSlice({
  name: 'memory',
  initialState,
  reducers: {
    updateSettings(state, action) {
      const setting = action.payload.setting;
      const value = action.payload.value;
      state[setting] = value;
    },
    startGame(state) {
      state.gameIsRunning = true;
      const theme = state.theme;
      const grid = parseInt(state.grid);
      const numOfPlayers = state.numOfPlayers;
      state.gameBoard = generateBoard(grid, theme);
      state.players = setPlayers(numOfPlayers);
    },
    newGame(state) {
      state.gameIsRunning = false;
    },
    restart(state) {
      const theme = state.theme;
      const grid = parseInt(state.grid);
      state.gameBoard = generateBoard(grid, theme);
    },
    toggleModal(state) {
      state.isModalOpen = !state.isModalOpen;
    },
    updateChosenCards(state, action) {
      const data = action.payload;
      if (state.chosenCards.length === 2) {
        return;
      }

      state.chosenCards.push({ value: data.value, index: data.index });
    },
    resetChosenCards(state) {
      state.chosenCards = [];
    },
  },
});

export const memoryActions = memoryGameSlice.actions;
export const playerMove = () => {};

const store = configureStore({
  reducer: { memory: memoryGameSlice.reducer },
});

export default store;
