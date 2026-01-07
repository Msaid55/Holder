import React from "react";
import StandardHeader from "./StandardHeader";
import Group48 from "../images/Group48.svg";
import ChefSlider from "./ChefSlider";   
import Footer from "./Footer"; 
import UseScrollReveal from "./UseScrollReveal"; 

export default function AboutUs() {
  UseScrollReveal();
  return (
    <div className="bg-white relative">
      <StandardHeader />

      {/* Centered Title */}
      <div
        className=" absolute top-55 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 flex flex-col items-center justify-center  text-white  pointer-events-none mt-10 md:mt-0 reveal"
      >
        <h1 className="text-[30px] md:text-[90px] font-bold leading-none">
          About Us
        </h1>
        <img src={Group48} alt="" className="mt-6 md:w-[215px] w-[65px] h-[6px]"
        />
      </div>
       
        <ChefSlider />
        <Footer />
      </div>
    
  );
}
