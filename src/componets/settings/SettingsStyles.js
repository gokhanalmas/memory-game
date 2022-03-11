import styled from 'styled-components';

import { media } from '../../styles/GlobalStyles';

export const SettingsWrapper = styled.section`
  max-width: 65.4rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 7.8rem;
  margin: 0 auto;
  margin-top: 5rem;

  .logo {
    color: var(--color-alabaster);
    font-size: 4rem;
  }
`;

export const SettingsCard = styled.div`
  width: 100%;
  background-color: var(--color-alabaster);
  border-radius: 2rem;
  padding: 5.6rem;
  display: flex;
  flex-direction: column;
  gap: 3.3rem;

  h3 {
    color: var(--color-gothic);

    ${media.phone} {
      font-size: var(--font-size-heading-xs-mobile);
      gap: 2.3rem;
    }
  }

  ${media.phone} {
    padding: 2.4rem;
  }
`;

export const SettingsSelectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;

  ${media.phone} {
    gap: 1.1rem;
  }
`;

export const SettingsBtnWrapper = styled.div`
  display: flex;
  gap: ${(props) => (props.size === 'small' ? '2.2rem' : '3rem')};

  ${media.phone} {
    gap: ${(props) => (props.size === 'small' ? '1.1rem' : '1rem')};
  }
`;
