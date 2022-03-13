import { createSlice, configureStore } from '@reduxjs/toolkit';
import { generateBoard } from '../helpers';
import { setPlayers } from '../helpers';

const initialState = {
  timerIdRunnig: false,
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
      state.chosenCards = [];
    },
    restart(state) {
      const theme = state.theme;
      const grid = parseInt(state.grid);
      state.gameBoard = generateBoard(grid, theme);
      state.chosenCards = [];
    },
    toggleModal(state) {
      state.isModalOpen = !state.isModalOpen;
    },
    updateChosenCards(state, action) {
      const data = action.payload;
      if (state.chosenCards.length === 2) {
        return;
      }

      state.chosenCards = state.chosenCards.concat({
        value: data.value,
        index: data.index,
      });
    },
    resetChosenCards(state) {
      state.chosenCards = [];
    },
    changeCardStatus(state, action) {
      const ind = action.payload.ind;
      const neWstatus = action.payload.status;
      state.gameBoard[ind].status = neWstatus;
    },
  },
});

export const memoryActions = memoryGameSlice.actions;

export const playerMove = (move) => {
  return (dispatch) => {
    dispatch(memoryActions.updateChosenCards(move));
    dispatch(
      memoryActions.changeCardStatus({ ind: move.index, status: 'flipped' })
    );
  };
};

export const checkForMatch = (cards) => {
  return (dispatch) => {
    const firstCard = cards[0];
    const secondCard = cards[1];

    if (firstCard.value === secondCard.value) {
      setTimeout(() => {
        cards.forEach((card) =>
          dispatch(
            memoryActions.changeCardStatus({
              ind: card.index,
              status: 'matched',
            })
          )
        );
      }, 400);
      setTimeout(() => {
        cards.forEach((card) =>
          dispatch(
            memoryActions.changeCardStatus({
              ind: card.index,
              status: 'flipped',
            })
          )
        );
      }, 1000);
    } else {
      setTimeout(() => {
        cards.forEach((card) =>
          dispatch(
            memoryActions.changeCardStatus({ ind: card.index, status: '' })
          )
        );
      }, 1000);
    }
    setTimeout(() => {
      dispatch(memoryActions.resetChosenCards());
    }, 1050);
  };
};

const store = configureStore({
  reducer: { memory: memoryGameSlice.reducer },
});

export default store;
