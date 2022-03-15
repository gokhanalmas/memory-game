import { createSlice, configureStore } from '@reduxjs/toolkit';
import { generateBoard } from '../helpers';
import { setPlayers } from '../helpers';

const initialState = {
  isModalOpen: false,
  gameIsRunning: false,
  gameIsEnded: false,
  timerIsRunning: false,
  currentTurn: 1,
  theme: 'numbers',
  numOfPlayers: '1',
  grid: '4',
  gameBoard: [],
  chosenCards: [],
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
      state.currentTurn = 1;
      if (numOfPlayers === '1') state.timerIsRunning = true;
    },
    newGame(state) {
      state.gameIsRunning = false;
      state.chosenCards = [];
      state.gameIsEnded = false;
    },
    restart(state) {
      const theme = state.theme;
      const grid = parseInt(state.grid);
      const numOfPlayers = state.numOfPlayers;
      state.gameBoard = generateBoard(grid, theme);
      state.chosenCards = [];
      state.players = setPlayers(numOfPlayers);
      state.gameIsEnded = false;
      state.currentTurn = 1;
      if (numOfPlayers === '1') state.timerIsRunning = true;
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
    nextTurn(state) {
      if (state.currentTurn >= state.players.length) {
        state.currentTurn = 1;
      } else {
        state.currentTurn = state.currentTurn + 1;
      }
    },
    updateScore(state) {
      console.log(state.players);
      console.log(state.currentTurn - 1);
      console.log(state.players[state.currentTurn - 1]);
      const player = state.players[state.currentTurn - 1];
      player.score = player.score + 1;
    },
    updateMoves(state) {
      const player = state.players[0];
      player.moves = player.moves + 1;
    },
    updateTimer(state) {
      const player = state.players[0];
      player.time = player.time + 1;
    },
    updateGameStatus(state, action) {
      state.gameIsEnded = action.payload;
      if (action.payload) state.isModalOpen = true;
    },
    startTimmer(state) {
      state.timerIsRunning = true;
    },
    stopTimer(state) {
      state.timerIsRunning = false;
    },
  },
});

export const memoryActions = memoryGameSlice.actions;

export const playerMove = (move) => {
  return (dispatch) => {
    // push seleted card to array of choosen card
    dispatch(memoryActions.updateChosenCards(move));
    // change seleted card's status to flipped
    dispatch(
      memoryActions.changeCardStatus({ ind: move.index, status: 'flipped' })
    );
  };
};

export const checkForMatch = (cards) => {
  return (dispatch, getState) => {
    const firstCard = cards[0];
    const secondCard = cards[1];
    const state = getState().memory;

    if (firstCard.value === secondCard.value) {
      // Changing status of cards to matched after 1 s if fliped match
      setTimeout(() => {
        cards.forEach((card) =>
          dispatch(
            memoryActions.changeCardStatus({
              ind: card.index,
              status: 'matched',
            })
          )
        );
      }, 1000);
      // Update score for players in multiplayer mode
      if (state.numOfPlayers !== '1') {
        setTimeout(() => {
          dispatch(memoryActions.updateScore());
        }, 750);
      }
    } else {
      // return status of card to initial if flipped cards do not match
      setTimeout(() => {
        cards.forEach((card) =>
          dispatch(
            memoryActions.changeCardStatus({ ind: card.index, status: '' })
          )
        );
      }, 1000);
    }
    // after each move we reset choseCards, changing turn and checkinf if we need to update moves for solo game
    setTimeout(() => {
      dispatch(memoryActions.resetChosenCards());
      dispatch(memoryActions.nextTurn());
      // if it is solo game we increas moves  by one
      if (state.numOfPlayers === '1') {
        dispatch(memoryActions.updateMoves());
      }
    }, 1050);
  };
};

//MIDDLEWARE
const localStorageMiddleware = ({ getState }) => {
  return (next) => (action) => {
    const result = next(action);
    localStorage.setItem('memoryGame', JSON.stringify(getState()));
    return result;
  };
};

// Rehydration function
const reHydrateStore = () => {
  if (localStorage.getItem('memoryGame') !== null) {
    return JSON.parse(localStorage.getItem('memoryGame')); // re-hydrate the store
  }
};

const store = configureStore({
  reducer: { memory: memoryGameSlice.reducer },
  preloadedState: reHydrateStore(),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(localStorageMiddleware),
});

export default store;
