import React from "react";
import Group48 from "../images/Group48.svg";
import Header2 from "./Header2";
import Allitems from "./Allitems";

export default function HeadItem() {
 
  return (
    <div className="w-full h-[1300px] bg-white">
      <div className="max-w-8xl mx-auto px-4 md:px-8 lg:px-16 py-10">
        {/* العنوان + الدكورات + النقاط على اليمين */}
        <div className="flex justify-center">
          <div className="flex flex-col items-center justify-center gap-1">
            <h1 className="text-[#007a59] text-[30px] sm:text-[26px] md:text-[28px] font-bold text-center">
              All Items
            </h1>
            <img src={Group48} alt="" className="w-[125px] h-1.5 mt-1" />
          </div>
        </div>
        <Header2 />
        <Allitems/>



       

      </div>
    </div>
  );
}
