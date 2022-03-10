import React from 'react';

import {
  SettingsWrapper,
  SettingsCard,
  SettingsSelectionWrapper,
  SettingsBtnWrapper,
} from './SettingsContentStyles';

import { Button } from '../UI/ButtonsStyles';

const SettingsContent = () => {
  return (
    <SettingsWrapper>
      <h className="logo">memory</h>
      <SettingsCard>
        <SettingsSelectionWrapper>
          <h3>Select Theme</h3>

          <SettingsBtnWrapper>
            <Button className="menuBtnSection" data-theme="numbers">
              Numbers
            </Button>
            <Button className="menuBtnSection" data-theme="icons">
              Icons
            </Button>
          </SettingsBtnWrapper>
        </SettingsSelectionWrapper>
        <SettingsSelectionWrapper>
          <h3>Number of Players</h3>
          <SettingsBtnWrapper>
            <Button className="menuBtnSection small" data-playernum="1">
              1
            </Button>
            <Button className="menuBtnSection small" data-playernum="2">
              2
            </Button>
            <Button className="menuBtnSection small" data-playernum="3">
              3
            </Button>
            <Button className="menuBtnSection small" data-playernum="4">
              4
            </Button>
          </SettingsBtnWrapper>
        </SettingsSelectionWrapper>
        <SettingsSelectionWrapper>
          <h3>Grid Size</h3>
          <SettingsBtnWrapper>
            <Button className="menuBtnSection" dara-grid="4">
              4x4
            </Button>
            <Button className="menuBtnSection">6X6</Button>
          </SettingsBtnWrapper>
        </SettingsSelectionWrapper>
        <Button className="menuBtnBig" dara-grid="6">
          Start Game
        </Button>
      </SettingsCard>
    </SettingsWrapper>
  );
};

export default SettingsContent;
