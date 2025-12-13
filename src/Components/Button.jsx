 import React from 'react'

const Button = ({ text = "BUTTON", onClick, href, className = "" }) => {
  // If href is provided, render as a link, otherwise as a button
  const Component = href ? 'a' : 'button';
  
  return (
    <Component
      href={href}
      onClick={onClick}
      className={`uppercase rounded-[34px] px-3 py-1 text-white border-1 border-white bg-transparent relative overflow-hidden group transition-all duration-300 ease-[cubic-bezier(0.23,1,0.320,1)] hover:scale-110 hover:text-black active:scale-100 ${className}`}
    >
      {/* Circle expands from center on hover to fill entire button */}
      <span className="absolute inset-0 m-auto w-[50px] h-[50px] rounded-[34px] bg-white scale-0 -z-10 transition-all duration-600 ease-[cubic-bezier(0.23,1,0.320,1)] group-hover:scale-[5]"></span>
      {/* Text stays on top */}
      <span className="relative z-10">{text}</span>
    </Component>
  )
}

export default Button
