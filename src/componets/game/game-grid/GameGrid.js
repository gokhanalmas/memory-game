import React, { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import GameCard from '../game-card/GameCard';
import { checkForMatch } from '../../../store';

import { GridWrapper } from './GameGridStyles';

const GameGrid = () => {
  const dispatch = useDispatch();
  const { grid, gameBoard, chosenCards } = useSelector((state) => state.memory);

  useEffect(() => {
    if (chosenCards.length === 2) {
      dispatch(checkForMatch(chosenCards));
      console.log('click');
    }
  }, [chosenCards, dispatch]);
  return (
    <GridWrapper grid={grid}>
      {gameBoard.map((card, ind) => (
        <GameCard
          key={ind}
          grid={grid}
          index={ind}
          value={card.value}
          status={card.status}
        />
      ))}
    </GridWrapper>
  );
};

export default GameGrid;
