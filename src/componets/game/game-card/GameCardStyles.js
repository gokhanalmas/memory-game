import styled, { keyframes } from 'styled-components';

export const GameCardBox = styled.div`
  background-color: transparent;
  width: ${(props) => (props.size === '4' ? '11.8rem' : '8.2rem')};
  height: ${(props) => (props.size === '4' ? '11.8rem' : '8.2rem')};
  border-radius: 50%;

  perspective: 1000px;
  cursor: pointer;

  &.active .inner {
    transform: rotateY(180deg);
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

export const GameCardBack = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  background-color: var(--color-jungle-mist);
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: rotateY(180deg);
  border-radius: 50%;

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
`;
