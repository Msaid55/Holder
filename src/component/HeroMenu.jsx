import React from 'react'
import BGitems from "../images/BGitems.png";
import Header from "./Header";

export default function HeroMenu() {
  return (
    <div className="relative w-full h-[367px] overflow-hidden">
      
      {/* Background Image */}
      <img
        src={BGitems}
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Header فوق الخلفية */}
      <div className="relative z-20">
        <Header transparent  className="text-white" />
      </div>

      {/* Title */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full text-white">
        <h1 className="text-5xl font-bold">All Items</h1>
        <div className="mt-4 w-32 border-b border-dotted border-white"></div>
      </div>

    </div>
  );
}

