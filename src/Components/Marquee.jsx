import { motion } from 'framer-motion'
import React from 'react'


const Marquee = () => {
  return (
    <div className='w-full py-20  rounded-tl-[25px]  rounded-tr-[25px] bg-[#004D43]'>
      <div className='text border-t-2 border-b-2 border-zinc-300 flex gap-1.5 whitespace-nowrap overflow-hidden items-center'>
        <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease: "linear",repeat:Infinity,duration:5}} className='text-[26vw] leading-none uppercase font-founders mt-[-40px]'>we are ochi</motion.h1>
        <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease: "linear",repeat:Infinity,duration:5}} className='text-[26vw] leading-none uppercase font-founders mt-[-40px]'>we are ochi</motion.h1>        
      </div>
    </div>
  )
}

export default Marquee
