import React from 'react';

import { GameWrapper } from './GameStyles';
import Header from './header/Header';
import GameGrid from './game-grid/GameGrid';

const Game = () => {
  return (
    <GameWrapper>
      <Header />
      <GameGrid />
    </GameWrapper>
  );
};

export default Game;
