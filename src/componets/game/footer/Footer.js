import React from 'react';

import { useSelector } from 'react-redux';

import { FooterWrapper } from './FooterStyles';
import SingleModeDisplay from '../single-mode-display/SingleModeDisplay';
import MultiModeDisplay from '../multi-mode-display/MultiModeDisplay';

const Footer = () => {
  const { players } = useSelector((state) => state.memory);
  return (
    <FooterWrapper>
      {players.length === 1 ? <SingleModeDisplay /> : <MultiModeDisplay />}
    </FooterWrapper>
  );
};

export default Footer;
