import React, { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { memoryActions } from '../../../store';

import {
  GameCardBox,
  GameCardInner,
  GameCardFront,
  GameCardBack,
} from './GameCardStyles';

const GameCard = ({ grid, index, value }) => {
  const dispatch = useDispatch();
  const { chosenCards } = useSelector((state) => state.memory);

  const cardClickHandler = () => {
    dispatch(memoryActions.updateChosenCArds({ index, value }));
  };

  //   useEffect(() => {
  //     if (chosenCards.length === 2) {
  //       let timer = setTimeout(dispatch(memoryActions.resetChosenCards()), 10000);
  //       return () => clearTimeout(timer);
  //     }
  //   }, [chosenCards]);

  const isActive = chosenCards.some((card) => card.index === index);

  return (
    <GameCardBox
      size={grid}
      className={isActive && 'active'}
      data-value={value}
      onClick={cardClickHandler}
    >
      <GameCardInner className="inner">
        <GameCardFront />
        <GameCardBack size={grid}>{<p>{value}</p>}</GameCardBack>
      </GameCardInner>
    </GameCardBox>
  );
};

export default GameCard;
