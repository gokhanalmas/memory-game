import React from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { memoryActions } from '../../store';

import {
  SettingsWrapper,
  SettingsCard,
  SettingsSelectionWrapper,
  SettingsBtnWrapper,
} from './SettingsStyles';

import { Button } from '../UI/ButtonsStyles';

const SettingsContent = () => {
  const dispatch = useDispatch();
  const { theme, grid, numOfPlayers } = useSelector((state) => state.memory);

  const updateSettingsHandler = (e) => {
    const setting = e.target.dataset.setting;
    const value = e.target.dataset.value;
    dispatch(
      memoryActions.updateSettings({
        setting,
        value,
      })
    );
  };

  const startGameHandler = () => {
    dispatch(memoryActions.startGame());
  };

  return (
    <SettingsWrapper>
      <p className="logo">hafıza</p>
      <SettingsCard>
        <SettingsSelectionWrapper>
          <h3>Temayı Seç</h3>

          <SettingsBtnWrapper size="big">
            <Button
              className="menuBtnSection"
              data-value="numbers"
              data-setting="theme"
              aria-pressed={theme === 'numbers'}
              onClick={updateSettingsHandler}
            >
              Sayılar
            </Button>
            <Button
              className="menuBtnSection"
              data-value="icons"
              data-setting="theme"
              aria-pressed={theme === 'icons'}
              onClick={updateSettingsHandler}
            >
              Simgeler
            </Button>
          </SettingsBtnWrapper>
        </SettingsSelectionWrapper>
        <SettingsSelectionWrapper>
          <h3>Oyuncu Sayısı</h3>
          <SettingsBtnWrapper size="small">
            <Button
              className="menuBtnSection small"
              data-value="1"
              data-setting="numOfPlayers"
              aria-pressed={numOfPlayers === '1'}
              onClick={updateSettingsHandler}
            >
              1
            </Button>
            <Button
              className="menuBtnSection small"
              data-value="2"
              data-setting="numOfPlayers"
              aria-pressed={numOfPlayers === '2'}
              onClick={updateSettingsHandler}
            >
              2
            </Button>
            <Button
              className="menuBtnSection small"
              data-value="3"
              data-setting="numOfPlayers"
              aria-pressed={numOfPlayers === '3'}
              onClick={updateSettingsHandler}
            >
              3
            </Button>
            <Button
              className="menuBtnSection small"
              data-value="4"
              data-setting="numOfPlayers"
              aria-pressed={numOfPlayers === '4'}
              onClick={updateSettingsHandler}
            >
              4
            </Button>
          </SettingsBtnWrapper>
        </SettingsSelectionWrapper>
        <SettingsSelectionWrapper>
          <h3>Izgara Boyutu</h3>
          <SettingsBtnWrapper size="big">
            <Button
              className="menuBtnSection"
              data-value="4"
              data-setting="grid"
              aria-pressed={grid === '4'}
              onClick={updateSettingsHandler}
            >
              4x4
            </Button>
            <Button
              className="menuBtnSection"
              data-value="6"
              data-setting="grid"
              aria-pressed={grid === '6'}
              onClick={updateSettingsHandler}
            >
              6x6
            </Button>
          </SettingsBtnWrapper>
        </SettingsSelectionWrapper>
        <Button className="menuBtnBig" onClick={startGameHandler}>
          Oyunu Başlat
        </Button>
      </SettingsCard>
    </SettingsWrapper>
  );
};

export default SettingsContent;
