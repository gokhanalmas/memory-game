import React from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { memoryActions } from '../../../store';

import { Icon } from '../../../helpers';

import {
  GameCardBox,
  GameCardInner,
  GameCardFront,
  GameCardBack,
} from './GameCardStyles';

const GameCard = ({ grid, index, value }) => {
  const dispatch = useDispatch();
  const { chosenCards, theme } = useSelector((state) => state.memory);

  const cardClickHandler = () => {
    if (chosenCards.some((card) => card.index === index)) return;
    dispatch(memoryActions.updateChosenCards({ index, value }));
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
        <GameCardBack size={grid}>
          {theme === 'numbers' && <p>{value}</p>}
          {theme === 'icons' && <Icon name={value} fill={'#FCFCFC'} />}
        </GameCardBack>
      </GameCardInner>
    </GameCardBox>
  );
};

export default GameCard;
