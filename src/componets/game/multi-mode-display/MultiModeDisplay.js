import React, { useState, useEffect } from 'react';

import { useSelector } from 'react-redux';

import { ModeWrapper } from './MultiModeDisplayStyles';
import { DisplayCard } from '../../UI/DisplayCardStyles';

const MultiModeDisplay = () => {
  const { players, currentTurn } = useSelector((state) => state.memory);
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

  return (
    <ModeWrapper>
      {players.map((player) => (
        <DisplayCard
          key={player.playerNum}
          isActive={currentTurn === player.playerNum}
          mode="multi"
        >
          {windowWidth > 600 ? (
            <p>Player {player.playerNum}</p>
          ) : (
            <p>P{player.playerNum}</p>
          )}
          <h2>{player.score}</h2>
        </DisplayCard>
      ))}
    </ModeWrapper>
  );
};

export default MultiModeDisplay;
