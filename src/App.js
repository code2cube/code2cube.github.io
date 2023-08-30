import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/Main';
import Tools from './pages/Tools';
import NoPage from './pages/NoPage';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Main />} />
          <Route path="/tools" element={<Tools />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;