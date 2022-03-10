import GlobalStyles from './styles/GlobalStyles';
import { Route, Routes, Navigate } from 'react-router-dom';

import Settings from './pages/Settings';
import Game from './pages/Game';

function App() {
  return (
    <>
      <GlobalStyles />

      <Routes>
        <Route path={'/'} element={<Navigate to="/settings" />} />
        <Route path={'/settings'} element={<Settings />} />
        <Route path={'/game'} element={<Game />} />
      </Routes>
    </>
  );
}

export default App;
