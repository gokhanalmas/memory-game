import styled from 'styled-components';

import { media } from '../../styles/GlobalStyles';

export const Button = styled.button`
  font-family: inherit;
  border: none;
  transition: transform 0.3s ease;
  border-radius: 2.6rem;
  cursor: pointer;
  font-weight: inherit;

  &:active {
    transform: ${(props) => (props['aria-pressed'] ? 'none' : 'scale(0.98)')};
  }

  &.menuBtnBig {
    width: 100%;
    color: var(--color-alabaster);
    background-color: var(--color-sun);
    font-size: var(--font-size-heading-m);
    padding: 1.5rem 0;

    &:hover {
      background-color: var(--color-sun-hover);
    }

    ${media.phone} {
      font-size: var(--font-size-body);
      padding: 1.2rem 0;
    }
  }

  &.menuBtnSection {
    max-width: 25.6rem;
    width: 100%;
    color: var(--color-alabaster);
    background-color: ${(props) =>
      props['aria-pressed']
        ? 'var(--color-pickled-bluewood)'
        : 'var(--color-jungle-mist)'};
    padding: 1rem 0;
    font-size: var(--font-size-heading-s);

    &.small {
      max-width: 11.9rem;
      width: 100%;
    }

    &:hover {
      background-color: ${(props) =>
        props['aria-pressed']
          ? 'var(--color-pickled-bluewood)'
          : 'var(--color-hippie-blue)'};
    }

    ${media.phone} {
      font-size: var(--font-size-heading-s-mobile);
    }
  }

  &.btnPrimary {
    max-width: 12.7rem;
    width: 100%;
    color: var(--color-alabaster);
    background-color: var(--color-sun);
    font-size: var(--font-size-heading-xs);
    padding: 1.4rem 0;

    &:hover {
      background-color: var(--color-sun-hover);
    }

    ${media.phone} {
      font-size: var(--font-size-heading-s-mobile);
    }
  }

  &.btnSecondary {
    max-width: 14.9rem;
    width: 100%;
    color: var(--color-pickled-bluewood);
    background-color: #dfe7ec;
    padding: 1.4rem 0;
    font-size: var(--font-size-heading-xs);

    &:hover {
      background-color: var(--color-hippie-blue);
      color: var(--color-alabaster);
    }
  }
`;
