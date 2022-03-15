import React, { useState, useEffect, useRef } from 'react';

const iconsNames = [
  'anchor',
  'apple',
  'biohazard',
  'bolt',
  'bug',
  'cake',
  'car',
  'flask',
  'futbol',
  'lira',
  'moon',
  'snowflake',
  'spock',
  'sun',
  'wifi',
  'bone',
  'cat',
  'clover',
];

export const shuffleCards = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
};

export const generateBoard = (size, theme) => {
  let board = [];
  for (let i = 0; i < Math.pow(size, 2) / 2; i++)
    if (theme === 'numbers') {
      board.push({ value: i, status: '' });
      board.push({ value: i, status: '' });
    } else {
      board.push({ value: iconsNames[i], status: '' });
      board.push({ value: iconsNames[i], status: '' });
    }

  return shuffleCards(board);
};

export const setPlayers = (numOfPlayers) => {
  const num = parseInt(numOfPlayers);
  const players = [];
  if (num === 1) {
    players.push({ time: 0, moves: 0 });
    return players;
  }
  for (let i = 1; i <= num; i++) {
    players.push({ playerNum: i, score: 0 });
  }

  return players;
};

export const getMultiModeResult = (playesData) => {
  const sortedPlayers = [...playesData].sort((a, b) => b.score - a.score);
  const max = Math.max.apply(
    Math,
    sortedPlayers.map((player) => player.score)
  );

  const result = sortedPlayers.map((player) => ({
    ...player,
    isWinner: player.score === max,
  }));

  const isTies = result.filter((player) => player.isWinner).length > 1;

  return { result, isTies };
};

function useDynamicSVGImport(name, options = {}) {
  const ImportedIconRef = useRef();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  const { onCompleted, onError } = options;
  useEffect(() => {
    setLoading(true);
    const importIcon = async () => {
      try {
        ImportedIconRef.current = (
          await import(`../assets/${name}.svg`)
        ).ReactComponent;

        if (onCompleted) {
          onCompleted(name, ImportedIconRef.current);
        }
      } catch (err) {
        if (onError) {
          onError(err);
        }
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    importIcon();
    return () => {
      setLoading();
      setError();
    };
  }, [name, onCompleted, onError]);

  return { error, loading, SvgIcon: ImportedIconRef.current };
}

export const Icon = ({ name, onCompleted, onError, ...rest }) => {
  const { error, loading, SvgIcon } = useDynamicSVGImport(name, {
    onCompleted,
    onError,
  });
  if (error) {
    return error.message;
  }
  if (loading) {
    return 'Loading...';
  }
  if (SvgIcon) {
    return <SvgIcon {...rest} />;
  }
  return null;
};
