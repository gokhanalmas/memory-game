import GlobalStyles from './styles/GlobalStyles';
import { useSelector } from 'react-redux';

import { Main } from './styles/Styles';

import SettingsContent from './componets/settings/Settings';
import Game from './componets/game/Game';

function App() {
  const { gameIsRunning } = useSelector((state) => state.memory);
  return (
    <>
      <GlobalStyles />
      <Main game={gameIsRunning}>
        {gameIsRunning ? <Game /> : <SettingsContent />}
      </Main>
    </>
  );
}

export default App;
