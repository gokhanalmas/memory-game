import { createSlice, configureStore } from '@reduxjs/toolkit';

const findEmptyInd = (board) => {
  return board
    .map((item, ind) => (item === null ? ind : ''))
    .filter((item) => typeof item === 'number');
};

const initialState = {
  isModalOpen: false,
  gameIsRunning: false,
  theme: 'numbers',
  numOfPlayers: '1',
  grid: '4',
  gameBoard: [],
  chosenCards: [],
  matchCards: [],
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
      state.gameBoard = new Array(Math.pow(state.grid, 2)).fill(1);
    },
    newGame(state) {
      state.gameIsRunning = false;
    },
    restart(state) {
      console.log('restart');
    },
    toggleModal(state) {
      state.isModalOpen = !state.isModalOpen;
    },
    updateChosenCArds(state, action) {
      if (state.chosenCards.length === 2) {
        return;
      }
      const data = action.payload;
      state.chosenCards.push({ value: data.value, index: data.index });
    },
    resetChosenCards(state) {
      state.chosenCards = [];
    },
  },
});

export const memoryActions = memoryGameSlice.actions;

const store = configureStore({
  reducer: { memory: memoryGameSlice.reducer },
});

export default store;
