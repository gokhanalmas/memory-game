import React from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { memoryActions } from '../../store';
import { getMultiModeResult } from '../../helpers';

import {
  ModalContentWrapper,
  ResultHeading,
  ResultText,
  ResultBtnWrapper,
  ResultList,
  ResultListItem,
} from './ModalContnetStyles';

import { Button } from '../UI/ButtonsStyles';

const ResultModalContent = () => {
  const dispatch = useDispatch();
  const { numOfPlayers, players } = useSelector((state) => state.memory);

  let resultListItems;
  let header = 'You did it!';

  if (numOfPlayers === '1') {
    const { moves, time } = players[0];
    const minutes = ~~((time % 3600) / 60);
    const seconds = ~~time % 60;

    resultListItems = [
      <ResultListItem key="time">
        <p>Time Elapsed</p>
        <h2>
          {minutes}:{seconds.toString().padStart(2, '0')}
        </h2>
      </ResultListItem>,
      <ResultListItem key="moves">
        <p>Moves Taken</p>
        <h2>{moves} Moves</h2>
      </ResultListItem>,
    ];
  } else {
    const { result, isTies } = getMultiModeResult(players);
    console.log(result, isTies);
    header = isTies ? 'It’s a tie!' : `Player ${result[0].playerNum} Wins!`;
    resultListItems = result.map((player) => (
      <ResultListItem key={player.playerNum} isWinner={player.isWinner}>
        <p>Player {player.playerNum}</p>
        <h2>{player.score} Pairs</h2>
      </ResultListItem>
    ));
  }

  const restartGameHandler = () => {
    dispatch(memoryActions.restart());
    dispatch(memoryActions.toggleModal());
  };

  const newGameHandler = () => {
    dispatch(memoryActions.newGame());
    dispatch(memoryActions.toggleModal());
  };

  return (
    <ModalContentWrapper type="result">
      <div>
        <ResultHeading>{header}</ResultHeading>
        <ResultText>
          {numOfPlayers === '1'
            ? 'Game over! Here’s how you got on…'
            : 'Game over! Here are the results…'}
        </ResultText>
      </div>
      <ResultList>{resultListItems}</ResultList>
      <ResultBtnWrapper>
        <Button
          className="btnPrimary"
          modal={true}
          onClick={restartGameHandler}
        >
          Restart
        </Button>
        <Button className="btnSecondary" modal={true} onClick={newGameHandler}>
          Setup New Game
        </Button>
      </ResultBtnWrapper>
    </ModalContentWrapper>
  );
};

export default ResultModalContent;
