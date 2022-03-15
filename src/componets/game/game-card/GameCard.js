import React from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { playerMove } from '../../../store';
import { Icon } from '../../../helpers';

import {
  GameCardBox,
  GameCardInner,
  GameCardFront,
  GameCardBack,
} from './GameCardStyles';

const GameCard = ({ grid, index, value, status }) => {
  const dispatch = useDispatch();
  const { chosenCards, theme } = useSelector((state) => state.memory);

  const cardClickHandler = () => {
    if (status || chosenCards.length === 2) return;

    dispatch(playerMove({ index, value }));
  };

  return (
    <GameCardBox
      size={grid}
      status={status}
      data-value={value}
      onClick={cardClickHandler}
      role="button"
    >
      <GameCardInner className="inner">
        <GameCardFront />
        <GameCardBack size={grid} status={status}>
          {theme === 'numbers' && <p>{value}</p>}
          {theme === 'icons' && <Icon name={value} fill={'#FCFCFC'} />}
        </GameCardBack>
      </GameCardInner>
    </GameCardBox>
  );
};

export default GameCard;
