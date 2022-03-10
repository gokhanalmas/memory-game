import styled from 'styled-components';

export const Main = styled.main`
  width: 100%;
  min-height: inherit;
  background-color: ${(props) =>
    props.page === 'settings'
      ? 'var(--color-big-stone)'
      : 'var(--color-alabaster)'};

  padding: 4.3rem;

  @media (max-width: 480px) {
    padding: 3.6rem;
  }
`;
