import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import MainLayOut from './layout/MainLayOut';
import HomePage from './pages/HomePage';
import Oferta from './pages/OfertaPage';
import KontaktPage from './pages/KontaktPage';
import PageNotFound from './components/PageNotFound';

const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path='/' element={<MainLayOut />}>
          <Route index element={<HomePage />} />
          <Route path='oferta' element={<Oferta />} />
          <Route path='kontakt' element={<KontaktPage />} />
          <Route path='*' element={<PageNotFound />} />
        </Route>
      </Routes>
    </HashRouter>
  );
};

export default App;