import { motion } from 'framer-motion'
import React, { useEffect, useRef } from 'react'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const Marquee = () => {
  const marqueeRef = useRef(null);

  useEffect(() => {
    const element = marqueeRef.current;
    
    // Animate Marquee section from bottom (100vh) to its normal position (0)
    // Animation triggers when scrolling to the BOTTOM of Marquee section
    // This reveals Eyes page behind as Marquee scrolls away
    gsap.fromTo(element,
      { y: 0 }, // Start position: normal position
      {
        y: '-39vh', // End position: move up and out of view
        scrollTrigger: {
          trigger: element, // Animation triggers when this element is in view
          start: 'top-[99%]', // Start when bottom of element hits bottom of viewport
          end: 'bottom top', // End when bottom of element reaches top of viewport
          scrub: 1, // Smooth animation tied to scroll progress
        }
      }
    );
  }, []);

  return (
    <div ref={marqueeRef} className='w-full py-20 relative z-[11] rounded-tl-[25px] rounded-tr-[25px] bg-[#004D43]'>
      <div className='text border-t-2 border-b-2 border-zinc-300 flex gap-[10px] whitespace-nowrap overflow-hidden items-center'>
        <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease: "linear",repeat:Infinity,duration:5}} className='text-[26vw] leading-none uppercase font-founders mt-[-40px] mr-2.5'>we are ochi</motion.h1>
        <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease: "linear",repeat:Infinity,duration:5}} className='text-[26vw] leading-none uppercase font-founders mt-[-40px]'>we are ochi</motion.h1>        
      </div>
    </div>
  )
}

export default Marquee
