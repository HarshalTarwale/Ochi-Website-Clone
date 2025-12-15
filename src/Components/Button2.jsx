import React from 'react'
import { IoMdArrowUp } from "react-icons/io"

const Button2 = ({ 
  text = "Read more",
  bgColor = "bg-black",
  textColor = "text-white",
  dotBgColor = "bg-white",
  arrowColor = "text-black",
  onClick,
  href,
  className = ""
}) => {
  const Component = href ? 'a' : 'button';
  
  return (
    <Component
      href={href}
      onClick={onClick}
      className={`button2 uppercase ${textColor} mt-2.5 ${bgColor} rounded-[36px] pr-[0.9vh] pl-[2.9vh] py-[0.9vh] flex items-center group/btn2 border border-black  ${className}`}
    >
      {text}
      <div className="outer-dot ml-[0.9vw] flex justify-center items-center h-[40px] w-[40px] bg-transparent rounded-[50%] relative overflow-hidden">
        <div className={`inner-dot h-[10px] w-[10px] ${dotBgColor} rounded-[50%] flex justify-center items-center transition-all duration-[0.1s] ease-out group-hover/btn2:h-full group-hover/btn2:w-full rotate-45 absolute`}>
          <IoMdArrowUp className={`${arrowColor} h-[25px] w-[25px] opacity-0 group-hover/btn2:opacity-100 transition-opacity`}/>
        </div>
      </div>
    </Component>
  )
}

export default Button2
