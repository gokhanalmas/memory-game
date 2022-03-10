import styled from 'styled-components';

export const SettingsWrapper = styled.section`
  margin-top: 16.9rem;
  max-width: 65.4rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 7.8rem;
  margin: 0 auto;

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
`;

export const SettingsSelectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
`;

export const SettingsBtnWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
