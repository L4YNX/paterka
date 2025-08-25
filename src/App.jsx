import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider} from 'react-router-dom'
import MainLayOut from './layout/MainLayOut'
import HomePage from './pages/HomePage'
import OfertaPage from './pages/OfertaPage'
import NotFoundPage from './components/PageNotFound'
import KontaktPage from './pages/KontaktPage'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/paterka' element={<MainLayOut />}>
      <Route index element={<HomePage />} />
      <Route path='oferta' element={<OfertaPage />} />
      <Route path='kontakt' element={<KontaktPage />} />
      <Route path='*' element={<NotFoundPage />} />
    </Route>
  )
);


function App() {
  return <RouterProvider router={router}/>;
}

export default App
