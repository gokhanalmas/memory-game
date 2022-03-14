import styled from 'styled-components';

import { media } from '../../../styles/GlobalStyles';

export const ModeWrapper = styled.div`
  max-width: 54rem;
  width: 100%;
  display: flex;
  gap: 3rem;
  margin: 0 auto;

  ${media.phone} {
    gap: 2.5rem;
  }
`;
