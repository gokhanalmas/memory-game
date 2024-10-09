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
  let header = 'Başardın!';

  if (numOfPlayers === '1') {
    const { moves, time } = players[0];
    const minutes = ~~((time % 3600) / 60);
    const seconds = ~~time % 60;

    resultListItems = [
      <ResultListItem key="time">
        <p>Geçen Süre</p>
        <h2>
          {minutes}:{seconds.toString().padStart(2, '0')}
        </h2>
      </ResultListItem>,
      <ResultListItem key="moves">
        <p>Yapılan Hamleler</p>
        <h2>{moves} Hamle</h2>
      </ResultListItem>,
    ];
  } else {
    const { result, isTies } = getMultiModeResult(players);
    console.log(result, isTies);
    header = isTies ? 'Berabere!' : `Oyuncu ${result[0].playerNum} Kazandı!`;
    resultListItems = result.map((player) => (
      <ResultListItem key={player.playerNum} isWinner={player.isWinner}>
        <p>Oyuncu {player.playerNum}</p>
        <h2>{player.score} Çift</h2>
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
            ? 'Oyun bitti! İşte nasıl ilerlediğin...'
            : 'Oyun bitti! İşte sonuçlar...'}
        </ResultText>
      </div>
      <ResultList>{resultListItems}</ResultList>
      <ResultBtnWrapper>
        <Button
          className="btnPrimary"
          modal={true}
          onClick={restartGameHandler}
        >
          Tekrar
        </Button>
        <Button className="btnSecondary" modal={true} onClick={newGameHandler}>
          Yeni Oyun Ayarla
        </Button>
      </ResultBtnWrapper>
    </ModalContentWrapper>
  );
};

export default ResultModalContent;
