import styled from 'styled-components';

import { media } from '../../../styles/GlobalStyles';

export const HeaderWrapper = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled.p`
  color: var(--color-big-stone);
  font-size: 4rem;

  ${media.phone} {
    font-size: 2.4rem;
  }
`;

export const ButtonsWrapper = styled.div`
  max-width: 29rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 1.6rem;
`;
