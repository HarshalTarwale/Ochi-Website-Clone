import React, { useState, useEffect, useRef } from 'react'

const Eyes = () => {
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

      // Calculate angle and movement for LEFT eye based on its center position
      if (leftEyeRef.current) {
        const leftRect = leftEyeRef.current.getBoundingClientRect();
        const leftCenterX = leftRect.left + leftRect.width / 2;
        const leftCenterY = leftRect.top + leftRect.height / 2;
        
        const deltaXLeft = mouseX - leftCenterX;
        const deltaYLeft = mouseY - leftCenterY;
        
        // Calculate distance from eye center to cursor
        const distanceLeft = Math.sqrt(deltaXLeft * deltaXLeft + deltaYLeft * deltaYLeft);
        
        // Normalize movement - max 15px movement in any direction (adjust for more/less movement)
        const maxMove = 15;
        const moveXLeft = (deltaXLeft / distanceLeft) * Math.min(distanceLeft / 20, maxMove);
        const moveYLeft = (deltaYLeft / distanceLeft) * Math.min(distanceLeft / 20, maxMove);
        
        // Set position with smooth transition
        setLeftEyePos({ x: moveXLeft, y: moveYLeft });
        
        const angleLeft = Math.atan2(deltaYLeft, deltaXLeft) * (180 / Math.PI);
        setRotateLeft(angleLeft - 180);
      }

      // Calculate angle and movement for RIGHT eye based on its center position
      if (rightEyeRef.current) {
        const rightRect = rightEyeRef.current.getBoundingClientRect();
        const rightCenterX = rightRect.left + rightRect.width / 2;
        const rightCenterY = rightRect.top + rightRect.height / 2;
        
        const deltaXRight = mouseX - rightCenterX;
        const deltaYRight = mouseY - rightCenterY;
        
        // Calculate distance from eye center to cursor
        const distanceRight = Math.sqrt(deltaXRight * deltaXRight + deltaYRight * deltaYRight);
        
        // Normalize movement - max 15px movement in any direction
        const maxMove = 15;
        const moveXRight = (deltaXRight / distanceRight) * Math.min(distanceRight / 20, maxMove);
        const moveYRight = (deltaYRight / distanceRight) * Math.min(distanceRight / 20, maxMove);
        
        // Set position with smooth transition
        setRightEyePos({ x: moveXRight, y: moveYRight });
        
        const angleRight = Math.atan2(deltaYRight, deltaXRight) * (180 / Math.PI);
        setRotateRight(angleRight - 180);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className='eyes h-screen w-full overflow-hidden'>
      <div className='relative w-full h-full bg-cover bg-center bg-[url("/Eyes-sec-bg.jpg")]'>
        <div className='absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] flex gap-10'>
            {/* LEFT EYE - tracks cursor independently using leftEyeRef for position */}
            <div ref={leftEyeRef} className='left-eye h-[27vh] w-[27vh] bg-white rounded-[50%] flex justify-center items-center'>
                {/* Black pupil moves slightly toward cursor with smooth transition */}
                <div 
                  style={{
                    transform: `translate(${leftEyePos.x}px, ${leftEyePos.y}px)`,
                    transition: 'transform 0.3s ease-out' // Smooth slow movement
                  }}
                  className='left-black-eye h-[16vh] w-[16vh] bg-black rounded-[50%] relative'
                >
                    {/* Rotate based on left eye's angle to cursor */}
                    <div style={{transform: `translate(-50%, -50%) rotate(${rotateLeft}deg)`}} className='line w-full h-[3vh] flex items-center absolute top-1/2 left-1/2'>
                        <div className='w-[2.5vh] h-[2.5vh] bg-white rounded-[50%]'></div>
                    </div>
                </div>
            </div>
            {/* RIGHT EYE - tracks cursor independently using rightEyeRef for position */}
            <div ref={rightEyeRef} className='right-eye h-[27vh] w-[27vh] bg-white rounded-[50%] flex justify-center items-center'>
                {/* Black pupil moves slightly toward cursor with smooth transition */}
                <div 
                  style={{
                    transform: `translate(${rightEyePos.x}px, ${rightEyePos.y}px)`,
                    transition: 'transform 0.3s ease-out' // Smooth slow movement
                  }}
                  className='right-black-eye h-[16vh] w-[16vh] bg-black rounded-[50%] relative'
                >
                    {/* Rotate based on right eye's angle to cursor */}
                    <div style={{transform: `translate(-50%, -50%) rotate(${rotateRight}deg)`}} className='line w-full h-[3vh] flex items-center absolute top-1/2 left-1/2'>
                        <div className='w-[2.5vh] h-[2.5vh] bg-white rounded-[50%]'></div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Eyes
