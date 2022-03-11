import styled from 'styled-components';

export const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(${(state) => state.grid}, min-content);
  gap: ${(props) => (props.grid === '4' ? '2rem' : '1.6rem')};
  margin-top: ${(props) => (props.grid === '4' ? '10.5rem' : '8.5rem')};
`;
