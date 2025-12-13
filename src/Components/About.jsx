import React from "react";
import Button2 from './Button2';

const About = () => {
  return (
    <div className="w-full py-25 pb-15 px-12 bg-[#CDEA68] rounded-tl-[25px] rounded-tr-[25px]">
      <h1 className="text-black text-[3.4vw] leading-none w-[90%] ">
        We craft category-defining presentations, brand identities, and digital
        experiences that drive funding, sales, and market leadership.
      </h1>
      <div className="border-t border-b border-zinc-800 text-black flex justify-between pt-[3vh] pb-[15vh] mt-[10vh] text-[2vh]">
        <h1>What you can expect:</h1>
        <div className="flex-col w-[19vw] ml-[15vw] gap-y-5">
          <h1 className="">
            We don't just make slides. We shape strategy, storytelling, design
            scalable brand systems, and build presentations that make people
            say: "I want in!"
          </h1>
          <h1 className="mt-[4vh]">
            Our clients make the world go round from deep tech, aerospace and
            robotics to music festivals and Michelin-starred restaurants.
          </h1>
          <h1 className="mt-[4vh]">
            Since 2019, we've been the go-to partner for Yahoo, Medallia, Uber,
            Lexus, Salience Labs, Trawa and AllThingsGo.
          </h1>
        </div>
        <h1 className="w-[2vh] mr-[15vw] mt-[30vh]">S: <br /> Instagram Behance Facebook Linkedin</h1>
      </div>
      <div className="flex justify-between">
        <div className="left text-black">
          <h1 className="text-[6vh]">How we can help:</h1>
          <Button2 text="read more" />
        </div>
        <img className="h-[60vh] w-auto rounded-[15px] mt-4" src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-1326x939.jpg" alt="" />
      </div>
    </div>
  );
};

export default About;
