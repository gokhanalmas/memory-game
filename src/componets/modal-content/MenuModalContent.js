import React from 'react';

import { useDispatch } from 'react-redux';
import { memoryActions } from '../../store';

import { ModalContentWrapper } from './ModalContnetStyles';
import { Button } from '../UI/ButtonsStyles';

const MenuModalContent = () => {
  const dispatch = useDispatch();

  const restartHandler = () => {
    dispatch(memoryActions.restart());
    dispatch(memoryActions.toggleModal());
  };
  const newGameHandler = () => {
    dispatch(memoryActions.newGame());
    dispatch(memoryActions.toggleModal());
  };
  const resumeGameHandler = () => {
    dispatch(memoryActions.toggleModal());
    dispatch(memoryActions.startTimmer());
  };

  return (
    <ModalContentWrapper type="menu">
      <Button className="btnPrimary" modal={true} onClick={restartHandler}>
        Tekrar
      </Button>
      <Button className="btnSecondary" modal={true} onClick={newGameHandler}>
        Yeni Oyun
      </Button>
      <Button className="btnSecondary" modal={true} onClick={resumeGameHandler}>
        Oyuna Devam Et
      </Button>
    </ModalContentWrapper>
  );
};

export default MenuModalContent;
