import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header';
import Historia from './pages/Historia';
import Galeria from './pages/Galeria';
import Inicio from './pages/Inicio';
import Album from './pages/Album';
import Credito from './pages/Credito';


import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Router basename="/erwin">
        <Header />
        <Routes>
          <Route path="/" element={<Inicio />}  />
          <Route path="/historia" element={<Historia />} /> 
          <Route path="/galeria" element={<Galeria />} /> 
          <Route path="/album" element={<Album />} /> 
          <Route path="/credito" element={<Credito />} /> 
         
          
        </Routes>
        
      </Router>
      <Footer/>
    </>
  );
}

export default App