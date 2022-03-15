import styled from 'styled-components';

export const Main = styled.main`
  width: 100%;
  min-height: inherit;
  background-color: ${(props) =>
    props.game ? 'var(--color-alabaster)' : 'var(--color-big-stone)'};
  padding: 2.4rem;
`;
