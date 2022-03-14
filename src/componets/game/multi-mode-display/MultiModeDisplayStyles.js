import styled from 'styled-components';
import { media } from '../../../styles/GlobalStyles';

export const ModeWrapper = styled.div`
  display: flex;
  gap: 3rem;
  justify-content: center;
  ${media.tablet} {
    gap: 1.1rem;
  }
  ${media.phone} {
    gap: 2.5rem;
  }
`;
