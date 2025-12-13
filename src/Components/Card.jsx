import React from 'react'
import Button from './Button'

const Card = ({ 
  heading = "PROJECT NAME", 
  hoverHeading = "HOVER TEXT", 
  image = "", 
  buttons = ["BUTTON 1"], 
  hoverHeadingPosition = "left" // "left" or "right"
}) => {
  return (
    <div className="card-container w-1/2 relative z-[1] hover:z-[10]">
      {/* Heading with dot */}
      <div className="heading flex gap-[10px] items-center mb-2.5 ">
        <div className="rounded-[50%] h-[14px] w-[14px] bg-white"></div>
        <h3 className="text-[16px] uppercase">{heading}</h3>
      </div>
      
      {/* Card with image and hover text - scales down on hover */}
      <div className="card-bg w-full h-[72vh] rounded-[15px] mb-4 relative transition-transform duration-500 ease-out group/card hover:scale-95">
        <div className="card w-full h-full rounded-[15px] overflow-hidden">
          {/* Hover heading - characters appear one by one with stagger animation */}
          <h1 
            className={`hover-heading absolute ${
              hoverHeadingPosition === "left" 
                ? "left-full -translate-x-1/2" 
                : "right-full translate-x-1/2"
            } -translate-y-1/2 top-1/2 text-[17vh] z-[100] font-founders whitespace-nowrap text-[#CDEA68]`}
          >
            {hoverHeading.split("").map((item, index) => (
              <span 
                key={index}
                className="inline-block opacity-0 translate-y-[25%] group-hover/card:opacity-100 group-hover/card:translate-y-0 transition-all duration-300 ease-out"
                style={{ transitionDelay: `${index * 15}ms` }}
              >
                {item}
              </span>
            ))}
          </h1>
          
          {/* Image - scales up when card scales down (inverse effect) */}
          <img
            className="w-full h-full bg-cover object-cover transition-transform duration-500 ease-out group-hover/card:scale-110"
            src={image}
            alt={heading}
          />
        </div>
      </div>
      
      {/* Buttons - render based on array - isolated from card hover */}
      <div className="buttons flex gap-[10px] relative z-[2]">
        {buttons.map((buttonText, index) => (
          <Button key={index} text={buttonText} />
        ))}
      </div>
    </div>
  )
}

export default Card
