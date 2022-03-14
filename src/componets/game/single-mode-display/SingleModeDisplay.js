import React, { useState } from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { memoryActions } from '../../../store';
import { ModeWrapper } from './SingleModeDisplayStyles';
import { DisplayCard } from '../../UI/DisplayCardStyles';
import { useEffect } from 'react';

const SingleModeDisplay = () => {
  const { players, gameIsEnded, timerIsRunning } = useSelector(
    (state) => state.memory
  );
  const playerData = players[0];

  const dispatch = useDispatch();

  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);

  const formatTime = (time) => {
    const minutes = ~~((time % 3600) / 60);
    const secodns = ~~time % 60;
    setMinutes(minutes);
    setSeconds(secodns);
  };

  useEffect(() => {
    formatTime(playerData.time);
  }, [playerData.time]);

  useEffect(() => {
    if (gameIsEnded || !timerIsRunning) return;
    let timer = setInterval(() => {
      dispatch(memoryActions.updateTimer());
    }, 1000);
    return () => clearInterval(timer);
  }, [dispatch, gameIsEnded, timerIsRunning]);

  return (
    <ModeWrapper>
      <DisplayCard mode="solo">
        <p>Time</p>
        <h2>
          {minutes}:{seconds.toString().padStart(2, '0')}
        </h2>
      </DisplayCard>
      <DisplayCard mode="solo">
        <p>Moves</p>
        <h2>{playerData.moves}</h2>
      </DisplayCard>
    </ModeWrapper>
  );
};

export default SingleModeDisplay;
