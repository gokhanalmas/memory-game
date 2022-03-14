import GlobalStyles from './styles/GlobalStyles';
import { useSelector } from 'react-redux';
import { AnimatePresence } from 'framer-motion';

import { Main } from './styles/Styles';

import SettingsContent from './componets/settings/Settings';
import Game from './componets/game/Game';
import Modal from './componets/modal/Modal';
import MenuModalContent from './componets/modal-content/MenuModalContent';
import ResultModalContent from './componets/modal-content/ResultModalContent';

function App() {
  const { gameIsRunning, isModalOpen, gameIsEnded } = useSelector(
    (state) => state.memory
  );
  return (
    <>
      <GlobalStyles />
      <Main game={gameIsRunning}>
        {gameIsRunning ? <Game /> : <SettingsContent />}
        <AnimatePresence>
          {isModalOpen && (
            <Modal>
              {gameIsEnded ? <ResultModalContent /> : <MenuModalContent />}
            </Modal>
          )}
        </AnimatePresence>
      </Main>
    </>
  );
}

export default App;
