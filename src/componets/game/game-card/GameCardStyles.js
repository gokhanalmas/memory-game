import styled, { css } from 'styled-components';

import { media } from '../../../styles/GlobalStyles';

export const GameCardBox = styled.div`
  background-color: transparent;
  width: ${(props) => (props.size === '4' ? '11.8rem' : '8.2rem')};
  height: ${(props) => (props.size === '4' ? '11.8rem' : '8.2rem')};
  border-radius: 50%;

  perspective: 1000px;
  cursor: pointer;

  ${(props) =>
    (props.status === 'flipped' || props.status === 'matched') &&
    css`
      .inner {
        transform: rotateY(180deg);
      }
    `}

  ${media.phone} {
    width: ${(props) => (props.size === '4' ? '7.25rem' : '4.7rem')};
    height: ${(props) => (props.size === '4' ? '7.25rem' : '4.7rem')};
  }
`;

export const GameCardInner = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.8s;
  transform-style: preserve-3d;
  border-radius: 50%;
`;

export const GameCardFront = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  background-color: var(--color-big-stone);
  color: black;
  border-radius: 50%;

  &:hover {
    background-color: var(--color-hippie-blue);
  }
`;

export const GameCardBack = styled.button`
  position: absolute;
  border: none;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  background-color: var(--color-sun);
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: rotateY(180deg);
  border-radius: 50%;
  font-family: inherit;

  p {
    font-size: ${(props) =>
      props.size === '4'
        ? 'var(--font-size-number-4x4)'
        : 'var(--font-size-number-6x6)'};
  }

  svg {
    width: ${(props) => (props.size === '4' ? '5.6rem' : '4rem')};
    height: ${(props) => (props.size === '4' ? '5.6rem' : '4rem')};
  }

  ${media.phone} {
    p {
      font-size: ${(props) => (props.size === '4' ? '4rem' : '2.4rem')};
    }

    svg {
      width: ${(props) => (props.size === '4' ? '3rem' : '2rem')};
      height: ${(props) => (props.size === '4' ? '3rem' : '2rem')};
    }
  }

  ${(props) =>
    props.status === 'matched' &&
    css`
      background-color: var(--color-jungle-mist);
      }
    `}
`;
