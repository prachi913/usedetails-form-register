import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Register } from './Register'
import { Table } from './Table';
import { Home } from './Home';

export const Mainroute = () => {
  return (
    <div>
      <Routes>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/user" element={<Table />}></Route>
        <Route path="/" element={<Home/>}></Route>
      </Routes>
    </div>
  );
}
