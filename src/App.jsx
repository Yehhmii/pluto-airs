// import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './Components/navBar/nav';

import Footer from './Components/Footer/Footer';
import Home from './Home';
import About from './Components/About/About';
import Destination from './Components/Destination/Destination';
import Contact from './Components/Contact-Us/Contact';

function App() {
  

  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path='/' Component={Home}/>
        <Route path='/about' Component={About}/>
        <Route path='/destionation' Component={Destination}/>
        <Route path='/contact' Component={Contact}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
