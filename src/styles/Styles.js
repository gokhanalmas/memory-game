import styled from 'styled-components';

export const Main = styled.main`
  width: 100%;
  min-height: inherit;
  background-color: ${(props) =>
    props.game ? 'var(--color-alabaster)' : 'var(--color-big-stone)'};

  padding: 4.3rem;

  @media (max-width: 480px) {
    padding: 2.4rem;
  }
`;
