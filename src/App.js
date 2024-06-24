import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import { useState } from 'react';
import Contact from './components/Contact';
import Service from './components/Service';
import { Route, Routes } from 'react-router-dom';

function App() {
  
  return (
    <div className="App">
      <Navbar  />
      <Routes>
        <Route path="/" element={<About/>} />
        <Route path="/mohamed" element={<Contact/>}/>
        <Route path="/services" element={<Service/>}/>
      </Routes>
    </div>
  );
}

export default App;
