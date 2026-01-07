import StandardHeader from "./StandardHeader";
import DotsAll from "../images/DotsAll.svg";
import Header2 from "./Header2";
import Allitems from "./Allitems";
import { useState } from "react";
import Footer from "./Footer";
import UseScrollReveal from "./UseScrollReveal";
export default function Menu() {
  UseScrollReveal();
  const [activeTab, setActiveTab] = useState("Break Fast");

  return (
    <div className="bg-white  w-full">
      <div className="">
      {/* Hero */}
      <div className="relative">
        <StandardHeader />

        {/* Centered Title */}
        <div
          className=" absolute  top-1/2 left-1/2  -translate-x-1/2 -translate-y-1/2 z-30  flex flex-col items-center justify-center  text-white  pointer-events-none mt-20 md:mt-0 reveal"
        >
          <h1 className="text-[30px] md:text-[100px] font-bold leading-none">
            All Items
          </h1>
          <img src={DotsAll} alt="" className="mt-2" />
        </div>
      </div>

      {/* Tabs + Items */}
      <div className="max-w-8xl mx-auto px-4 md:px-8 lg:px-16">
        <Header2 active={activeTab} setActive={setActiveTab} />
      <Allitems activeTab={activeTab} />
      
      </div>
      <Footer/>
      </div>
    </div>
  );
}
