import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Calculator from './components/Calculator/Calculator';
import Home from './components/Home/Home';
import NavBar from './components/NavBar/NavBar';
import Quote from './components/Quote/Quote';

const App = () => {
  useEffect(() => {}, []);
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/quote" element={<Quote />} />
      </Routes>
    </div>
  );
};

export default App;
