import React from 'react';
import { BrowserRouter, Routes, Route, HashRouter } from 'react-router-dom';
import MainLayOut from './layout/MainLayOut';
import HomePage from './pages/HomePage';
import Oferta from './pages/OfertaPage';
import KontaktPage from './pages/KontaktPage';
import PageNotFound from './components/PageNotFound';

const isGitHubPages = window.location.hostname.includes('github.io');

const App = () => {
  const Router = isGitHubPages ? HashRouter : BrowserRouter;

  return (
    <Router>
      <Routes>
        <Route path="paterka" element={<MainLayOut />}>
          <Route index element={<HomePage />} />
          <Route path="oferta" element={<Oferta />} />
          <Route path="kontakt" element={<KontaktPage />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </Router>
  );
};


export default App;