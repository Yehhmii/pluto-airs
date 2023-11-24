// import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Nav from './Components/navBar/nav';
import Header from './Components/Header/Header';
import About from './Components/About/About';
import Form from './Components/Form/Form';
import Clip from './Components/Clip/Clip';
import Destination from './Components/Destination/Destination';
import Testimonial from './Components/Testimonial/Testimonial';
import Contact from './Components/Contact-Us/Contact';
import Footer from './Components/Footer/Footer';

function App() {
  

  return (
    <>
      <Nav />
      <Header />
      <Form />
      <About />
      <Clip />
      <Destination />
      <Testimonial />
      <Contact />
      <Footer />
    </>
  )
}

export default App
