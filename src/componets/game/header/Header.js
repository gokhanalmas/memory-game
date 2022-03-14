import React, { useState, useEffect } from 'react';

import { useDispatch } from 'react-redux';
import { memoryActions } from '../../../store/index';

import { HeaderWrapper, Logo, ButtonsWrapper } from './HeaderStyle';
import { Button } from '../../UI/ButtonsStyles';

const Header = () => {
  const dispatch = useDispatch();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const changeWindowWidth = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', changeWindowWidth);

    return () => {
      window.removeEventListener('resize', changeWindowWidth);
    };
  }, []);

  const newGameHandler = () => {
    dispatch(memoryActions.newGame());
  };
  const restartHandler = () => {
    dispatch(memoryActions.restart());
  };

  const menuHandler = () => {
    dispatch(memoryActions.toggleModal());
    dispatch(memoryActions.stopTimer());
  };

  return (
    <HeaderWrapper>
      <Logo>memory</Logo>
      <ButtonsWrapper>
        {windowWidth > 600 && (
          <>
            <Button className="btnPrimary" onClick={restartHandler}>
              Restart
            </Button>
            <Button className="btnSecondary" onClick={newGameHandler}>
              New Game
            </Button>
          </>
        )}
        {windowWidth <= 600 && (
          <Button className="btnPrimary" onClick={menuHandler}>
            Menu
          </Button>
        )}
      </ButtonsWrapper>
    </HeaderWrapper>
  );
};

export default Header;
