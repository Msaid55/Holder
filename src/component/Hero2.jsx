import React from "react";
import dish from "../images/dish.svg";

export default function Hero2() {
  return (
    <div
      className="w-[570px] h-[570px] relative animate-dish-enter"
    >
      <img src={dish} alt="" className="w-full h-full" />
    </div>
  );
}
