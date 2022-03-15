import styled from 'styled-components';

import { media } from '../../styles/GlobalStyles';

export const GameWrapper = styled.section`
  max-width: 111rem;
  width: 100%;
  height: 100vh;
  max-height: 91rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  ${media.phone} {
    max-height: 62rem;
  }
`;
