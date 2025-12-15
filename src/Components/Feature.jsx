import { span } from "framer-motion/client";
import React from "react";
import Button from './Button';
import Card from './Card';
import Button2 from './Button2';
import { IoMdArrowUp } from "react-icons/io";

const Feature = () => {
  return (
    // relative z-10 ensures this section appears above the sticky Eyes section (z-0)
    // This continues to scroll over Eyes after About has passed
    <div className="w-full py-20 bg-white relative z-10 rounded-tl-[25px] rounded-tr-[25px]">
      <div className="px-15">
        <h1 className="text-[7.5vh] text-black">Featured projects</h1>
      </div>
      <div className="border-t-[0.5px] mt-[4vh] border-gray-300"></div>
      <div className="cards w-full flex gap-[20px] px-16 mt-[60px]">
        {/* Left Card */}
        <Card 
          heading="SALIENCE LABS"
          hoverHeading="SALIENCE LAB"
          image="https://ochi.design/wp-content/uploads/2025/02/Salience_Website_cover-663x551.png"
          buttons={["BRAND IDENTITY", "PITCH DECK"]}
          hoverHeadingPosition="left"
        />
        
        {/* Right Card */}
        <Card 
          heading="MEDALLIA EXPERIENCE"
          hoverHeading="MEDALLIA EXPERIANCE"
          image="https://ochi.design/wp-content/uploads/2025/08/Med_Website_0.png"
          buttons={["WEB DESIGN", "DEVELOPMENT"]}
          hoverHeadingPosition="right"
        />
      </div>
      <div className="cards w-full flex gap-[20px] px-16 mt-[60px]">
        {/* Left Card */}
        <Card 
          heading="AH2 & Matt Horn"
          hoverHeading="AH2 & Matt Horn"
          image="https://ochi.design/wp-content/uploads/2024/08/Frame-481692-1-663x551.png"
          buttons={["PITCH DECK"]}
          hoverHeadingPosition="left"
        />
        
        {/* Right Card */}
        <Card 
          heading="Vise"
          hoverHeading="Vise"
          image="https://ochi.design/wp-content/uploads/2025/02/Vise_Front-1-663x551.png"
          buttons={["Ageny", "company presentation"]}
          hoverHeadingPosition="right"
        />
      </div>
      <div className="cards w-full flex gap-[20px] px-16 mt-[60px]">
        {/* Left Card */}
        <Card 
          heading="Softstart"
          hoverHeading="Softstart"
          image="https://ochi.design/wp-content/uploads/2022/06/Frame-3898-1-663x551.jpg"
          buttons={["BRANDed template", "sales DECK"]}
          hoverHeadingPosition="left"
        />
        
        {/* Right Card */}
        <Card 
          heading="Fyde"
          hoverHeading="Fyde"
          image="https://ochi.design/wp-content/uploads/2025/02/Fyde_Front-1-663x551.png"
          buttons={["audit", "copywriting","sales deck","slides design"]}
          hoverHeadingPosition="right"
        />
      </div>
      <div className="cards w-full flex gap-[20px] px-16 mt-[60px]">
        {/* Left Card */}
        <Card 
          heading="All Things Go"
          hoverHeading="All Things Go"
          image="https://ochi.design/wp-content/uploads/2025/02/ATG_Website_1-663x551.png"
          buttons={["BRAND IDENTITY", "PITCH DECK"]}
          hoverHeadingPosition="left"
        />
        
        {/* Right Card */}
        <Card 
          heading="Trawa"
          hoverHeading="MEDALLIA EXPERIANCE"
          image="https://ochi.design/wp-content/uploads/2023/08/Frame-3875-663x551.jpg"
          buttons={["brand identity", "design research","investor deck"]}
          hoverHeadingPosition="right"
        />
      </div>
      <div className="cards w-full flex gap-[20px] px-16 mt-[60px]">
        {/* Left Card */}
        <Card 
          heading="Cardboard Spaceship"
          hoverHeading="All Things Go"
          image="https://ochi.design/wp-content/uploads/2024/08/CS_Website_1-663x551.png"
          buttons={["BRANDed Templete", "sales DECK", "social media templetes"]}
          hoverHeadingPosition="left"
        />
        
        {/* Right Card */}
        <Card 
          heading="Premium Blend"
          hoverHeading="MEDALLIA EXPERIANCE"
          image="https://ochi.design/wp-content/uploads/2022/12/PB-Front-4-663x551.png"
          buttons={["branded template"]}
          hoverHeadingPosition="right"
        />
      </div> 
      <div className="flex justify-center mt-[12vh]">
        <Button2 text="view all case studies" />
      </div>
    </div>
  );
};

export default Feature;
