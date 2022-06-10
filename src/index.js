import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import './index.css';

import Inicio from './pages/Inicio';

import Error404 from './pages/Error404';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/virtuosaReact/' element={<Inicio />} ></Route>
     
      <Route path='*' element={<Error404 />}></Route>

      <Route path='/home' element={<Navigate replace to={"/"} />}></Route>

    </Routes>
  </BrowserRouter>

);