import styled from 'styled-components';

import { motion } from 'framer-motion';
import { media } from '../../styles/GlobalStyles';

export const BackDropWrapper = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 20;

  background-color: rgba(0, 0, 0, 0.3);
`;

export const ModalOverlayWrapper = styled(motion.div)`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 2.4rem;
  z-index: 30;
`;

export const ContentWrapper = styled.div`
  margin-top: 15.4rem;
  max-width: 65rem;
  width: 100%;
  border-radius: 2rem;
  padding: 4.4rem 5.6rem;
  background-color: var(--color-concrete);

  ${media.phone} {
    padding: 2.4rem;
  }
`;
