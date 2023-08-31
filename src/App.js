import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/Main';
import Contact from './pages/Contact';
import ThanksPage from './pages/ThanksPage';
import NoPage from './pages/NoPage';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Main />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/thanks" element={<ThanksPage />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;