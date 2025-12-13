import React from 'react';
import Navbar from './Components/Navbar';
import Landing from './Components/Landing';
import Marquee from './Components/Marquee';
import About from './Components/About';
import Eyes from './Components/Eyes';
import Feature from './Components/Feature';
import Rating from './Components/Rating';

const App = () => {
  return (
    <div className='w-full min-h-screen bg-zinc-900 text-amber-50'>
      <Navbar/>
      <Landing/>
      <Marquee/>
      <About/>
      <Eyes/>
      <Feature/>
      <Rating/>
    </div>
  )
}

export default App
