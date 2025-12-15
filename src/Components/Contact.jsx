import React, { useState, useEffect, useRef } from 'react'
import Button2 from './Button2';

const Contact = () => {
  // Store rotation angles for left and right eyes separately
  const [rotateLeft, setRotateLeft] = useState(0);
  const [rotateRight, setRotateRight] = useState(0);
  
  // Store position offset for black pupils (simulates eye movement within socket)
  const [leftEyePos, setLeftEyePos] = useState({ x: 0, y: 0 });
  const [rightEyePos, setRightEyePos] = useState({ x: 0, y: 0 });
  
  // Refs to get the actual position of each eye element
  const leftEyeRef = useRef(null);
  const rightEyeRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      let mouseX = e.clientX;
      let mouseY = e.clientY;

      // Calculate angle and movement for LEFT eye
      if (leftEyeRef.current) {
        const leftRect = leftEyeRef.current.getBoundingClientRect();
        const leftCenterX = leftRect.left + leftRect.width / 2;
        const leftCenterY = leftRect.top + leftRect.height / 2;
        
        const deltaXLeft = mouseX - leftCenterX;
        const deltaYLeft = mouseY - leftCenterY;
        
        const distanceLeft = Math.sqrt(deltaXLeft * deltaXLeft + deltaYLeft * deltaYLeft);
        
        const maxMove = 15;
        const moveXLeft = (deltaXLeft / distanceLeft) * Math.min(distanceLeft / 20, maxMove);
        const moveYLeft = (deltaYLeft / distanceLeft) * Math.min(distanceLeft / 20, maxMove);
        
        setLeftEyePos({ x: moveXLeft, y: moveYLeft });
        
        const angleLeft = Math.atan2(deltaYLeft, deltaXLeft) * (180 / Math.PI);
        setRotateLeft(angleLeft - 180);
      }

      // Calculate angle and movement for RIGHT eye
      if (rightEyeRef.current) {
        const rightRect = rightEyeRef.current.getBoundingClientRect();
        const rightCenterX = rightRect.left + rightRect.width / 2;
        const rightCenterY = rightRect.top + rightRect.height / 2;
        
        const deltaXRight = mouseX - rightCenterX;
        const deltaYRight = mouseY - rightCenterY;
        
        const distanceRight = Math.sqrt(deltaXRight * deltaXRight + deltaYRight * deltaYRight);
        
        const maxMove = 15;
        const moveXRight = (deltaXRight / distanceRight) * Math.min(distanceRight / 20, maxMove);
        const moveYRight = (deltaYRight / distanceRight) * Math.min(distanceRight / 20, maxMove);
        
        setRightEyePos({ x: moveXRight, y: moveYRight });
        
        const angleRight = Math.atan2(deltaYRight, deltaXRight) * (180 / Math.PI);
        setRotateRight(angleRight - 180);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    // Sticky positioning makes this section stick at top and appear over Rating
    // h-screen for full page slide effect
    // z-20 ensures it appears above Rating (z-10)
    // mb-screen pushes Footer down so it starts sticking after Contact is fully visible
    <div className='sticky top-0 min-h-screen mb-screen w-full bg-[#CDEA68] gap-[6vh] rounded-tl-[25px] flex flex-col rounded-tr-[25px] pb-[15vh] z-20'>
      <div className='flex justify-center mt-[12vh]'>
        <h1 className='uppercase text-center text-black font-founders text-[30vh] leading-[22vh]'>ready <br /> to start <br />the project</h1>
      </div>
      
      {/* Eyes in center of page, moved 5vh upward */}
      <div className='absolute top-[calc(50%-8vh)] left-1/2 -translate-x-[50%] -translate-y-[50%] flex gap-10'>
        {/* LEFT EYE - tracks cursor independently */}
        <div ref={leftEyeRef} className='left-eye h-[25vh] w-[25vh] bg-white rounded-[50%] flex justify-center items-center'>
          <div 
            style={{
              transform: `translate(${leftEyePos.x}px, ${leftEyePos.y}px)`,
              transition: 'transform 0.3s ease-out'
            }}
            className='left-black-eye h-[16vh] w-[16vh] bg-black rounded-[50%] relative'
          >
            <div style={{transform: `translate(-50%, -50%) rotate(${rotateLeft}deg)`}} className='line w-full h-[3vh] flex items-center absolute top-1/2 left-1/2'>
              <div className='w-[2.5vh] h-[2.5vh] bg-white rounded-[50%]'></div>
            </div>
          </div>
        </div>
        
        {/* RIGHT EYE - tracks cursor independently */}
        <div ref={rightEyeRef} className='right-eye h-[25vh] w-[25vh] bg-white rounded-[50%] flex justify-center items-center'>
          <div 
            style={{
              transform: `translate(${rightEyePos.x}px, ${rightEyePos.y}px)`,
              transition: 'transform 0.3s ease-out'
            }}
            className='right-black-eye h-[16vh] w-[16vh] bg-black rounded-[50%] relative'
          >
            <div style={{transform: `translate(-50%, -50%) rotate(${rotateRight}deg)`}} className='line w-full h-[3vh] flex items-center absolute top-1/2 left-1/2'>
              <div className='w-[2.5vh] h-[2.5vh] bg-white rounded-[50%]'></div>
            </div>
          </div>
        </div>
      </div>

      <div className='flex flex-col items-center gap-[17px]'>
        <Button2 text="start the project"/>
        <h3 className='uppercase text-black '>or</h3>
        <Button2 text="hello@ochi.design"/>
      </div>
    </div>
  )
}

export default Contact
