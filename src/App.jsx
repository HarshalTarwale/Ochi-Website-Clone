import React, { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';
import Navbar from './Components/Navbar';
import Landing from './Components/Landing';
import Marquee from './Components/Marquee';
import About from './Components/About';
import Eyes from './Components/Eyes';
import Feature from './Components/Feature';
import Rating from './Components/Rating';

const App = () => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

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
