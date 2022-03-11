import React from 'react';

import { useSelector } from 'react-redux';
import GameCard from '../game-card/GameCard';

import { GridWrapper } from './GameGridStyles';

const GameGrid = () => {
  const { grid, gameBoard } = useSelector((state) => state.memory);
  return (
    <GridWrapper grid={grid}>
      {gameBoard.map((cell, ind) => (
        <GameCard key={ind} grid={grid} index={ind} value={cell} />
      ))}
    </GridWrapper>
  );
};

export default GameGrid;
