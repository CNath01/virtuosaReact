import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import './index.css';

import Inicio from './pages/Inicio';
import Maquillaje from './pages/Maquillaje';
import Moda from './pages/Moda';
import Tips from './pages/Tips';
import Experiencias from './pages/Experiencias';
import Error404 from './pages/Error404';

import Vestidos from './pages/ropa/VestidosRS';
import Descuentos from './pages/ropa/DescuentosRS';
import Diseña from './pages/ropa/DiseñaRS';
import Tendencias from './pages/ropa/TendenciasRS';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Inicio />} ></Route>
      <Route path='/maquillaje' element={<Maquillaje />}></Route>
      <Route path='/moda' element={<Moda />}></Route>
      <Route path='/tips' element={<Tips />}></Route>
      <Route path='/experiencias' element={<Experiencias />}></Route>

      <Route path='/moda-vestidos' element={<Vestidos />}></Route>
      <Route path='/moda-descuentos' element={<Descuentos />}></Route>
      <Route path='/moda-diseña' element={<Diseña />}></Route>
      <Route path='/moda-tendencias' element={<Tendencias />}></Route>

      <Route path='*' element={<Error404 />}></Route>

      <Route path='/home' element={<Navigate replace to={"/"} />}></Route>

    </Routes>
  </BrowserRouter>

);