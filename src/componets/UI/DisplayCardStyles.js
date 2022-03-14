import styled, { css } from 'styled-components';

import { media } from '../../styles/GlobalStyles';

export const DisplayCard = styled.div`
  position: relative;
  max-width: 25.5rem;
  width: 100%;
  padding: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 1rem;
  background-color: #dfe7ec;
  z-index: 10;
  transition: all 0.3s ease;

  p {
    font-size: var(--font-size-body);
    color: var(--color-gothic);
  }

  h2 {
    color: var(--color-pickled-bluewood);
  }

  &::after {
    content: '';
    position: absolute;
    width: 0;
    height: 0;
    opacity: 0;
    border-left: 2rem solid transparent;
    border-right: 2rem solid transparent;
    border-bottom: 2rem solid var(--color-sun);
    left: 50%;
    top: -2rem;
    transform: translateX(-50%);
    z-index: -5;
    transition: opacity 0.3s ease;
  }

  &::before {
    content: 'CURRENT TURN';
    opacity: 0;
    font-family: inherit;
    color: var(--color-big-stone);
    display: block;
    width: 100%;
    letter-spacing: 5px;
    font-size: 1.3rem;
    position: absolute;
    text-align: center;
    bottom: -3.5rem;
    left: 0;
    transition: all 0.4s ease;
  }

  ${media.tablet} {
    flex-direction: ${(props) => (props.mode === 'multi' ? 'column' : 'row')};
    align-items: ${(props) =>
      props.mode === 'multi' ? 'flex-start' : 'center'};

    p {
      font-size: 1.5rem;
    }

    h2 {
      font-size: 2.4rem;
    }
    &::before {
      display: none;
    }

    &::after {
      border-left: 1.2rem solid transparent;
      border-right: 1.2rem solid transparent;
      border-bottom: 1.2rem solid var(--color-sun);
      top: -1.2rem;
    }
  }

  ${media.phone} {
    flex-direction: column;
    align-items: center;
    padding: 1rem;

    p {
      font-size: 1.5rem;
    }

    h2 {
      font-size: 2.4rem;
    }
    &::after {
      border-left: 0.8rem solid transparent;
      border-right: 0.8rem solid transparent;
      border-bottom: 0.8rem solid var(--color-sun);
      top: -0.8rem;
    }
  }

  ${(props) =>
    props.isActive &&
    css`
      background-color: var(--color-sun);

      &::after {
        opacity: 1;
      }

      &::before {
        opacity: 1;
      }
      p {
        color: var(--color-alabaster);
      }

      h2 {
        color: var(--color-alabaster);
      }
    `}
`;
