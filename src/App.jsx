import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import { Easy } from '../pages/easy';
import { Home } from '../pages/home';
import './App.css'
import React from 'react';
import { Normal } from '../pages/normal';

function App() {

  return (
    <BrowserRouter basename="/TenAnswersReact">
      <Routes>
        <Route>
        <Route path="/" element={<Home/>} />
        <Route path="/easy" element={<Easy />} />
        <Route path="/normal" element={<Normal />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
