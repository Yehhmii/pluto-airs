import React from 'react'
import Header from './Components/Header/Header';
import About from './Components/About/About';
import Form from './Components/Form/Form';
import Clip from './Components/Clip/Clip';
import Destination from './Components/Destination/Destination';
import Testimonial from './Components/Testimonial/Testimonial';
import Contact from './Components/Contact-Us/Contact';

export default function Home() {
  return (
    <>
      <Header />
      <Form />
      <About />
      <Clip />
      <Destination />
      <Testimonial />
      <Contact />
    </>
  )
}
