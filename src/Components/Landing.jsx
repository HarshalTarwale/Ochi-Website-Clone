import React from "react";
import { IoMdArrowUp } from "react-icons/io";

const Landing = () => {
  return (
    <div className="w-full h-screen bg-zinc-900 pt-1 text-white">
      <div className="headind-container mt-38 px-15 ">
        {["We create", "eye-opening", "presentations"].map((item, index) => {
          return (
            <div className="masker">
              <div className="w-fit flex items-center">
                {index === 1 && (<div className="w-[9.5vw] h-[6vw] bg-red-700 mt-[1.6vh] rounded-[10px] mr-[2vh]"></div>)}
                <h1 className="uppercase text-[9vw] leading-[7vw] font-founders ">{item}</h1>
              </div>
            </div>
          );
        })}
      </div>
      <div className="border-t-[2px] border-zinc-800 mt-42 px-15">
        <div className="p1-footer flex justify-between mt-[2vh] text-[2.2vh]">
          <h1>Presentation and storytelling agency</h1>
          <h1 className="ml-[10vw]">For innovation teams and global brands</h1>
          <div className="p1-btn flex gap-1.5 items-center items-center">
            <button className="start border rounded-[25px] px-[1.7vh] py-[0.4vh] flex items-centern uppercase text-[2vh]">Start the project</button>
            <div className="start-circle h-8 w-8 border rounded-[50%] flex items-center justify-center rotate-[45deg] text-[22px]"><IoMdArrowUp /></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
