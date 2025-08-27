import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import MainLayOut from './layout/MainLayOut';
import HomePage from './pages/HomePage';
import Oferta from './pages/OfertaPage';
import KontaktPage from './pages/KontaktPage';
import PageNotFound from './components/PageNotFound';
import OfertaPage from './pages/OfertaPage';

const router = createBrowserRouter(
  createRoutesFromElements(
  <Route path='/' element={<MainLayOut/>}>
    <Route index element={<Home/>}/>
    <Route path='/oferta' Component={<OfertaPage/>}/>
    <Route path='/kontakt' Component={<KontaktPage/>}/>
    <Route path='*' element={<PageNotFound/>}/>
  </Route>
  )
);

const App = () => {
  return <RouterProvider router={router}/>
};

export default App;