import React from "react";
import Group from "../images/Group.svg";

export default function Hero1() {
  return (
    <>
      {/* نفس عرض الهيدر بالظبط */}
      <div className="w-full bg-white">
        <div className="mx-auto px-4 md:px-8 lg:px-16">
          <div className="bg-white h-full w-full">
            <section className="left bg-white w-[609px] h-[745px]">
              <div className="pt-10">
                <h1 className="text-[60px] leading-tight text-black">
                  The Power of Healthy Food{" "}
                  <span className="text-[#FF4033]">Breakfast</span>
                </h1>

                <p className="w-[508px] mt-4 h-[105px] text-[20px] text-black">
                  A restaurant is an establishment that prepares and serves food
                  and drinks to customers, typically for consumption on the
                  premises, but also offering take-out or delivery.
                </p>

                <div className="flex w-[280px] mt-10 justify-between">
                  <button className="w-[145px] h-[46px] bg-[#065B5E] flex items-center justify-center text-[#Ffff] rounded-full text-[22px] shadow-[#b3becc]">
                    Order Now
                  </button>
                  <button className="w-[109px] h-[46px] bg-[#ffff] flex items-center justify-center text-[#FF4033] rounded-full text-[22px] border-[#FF4033] border-2 shadow-[#b3becc]">
                    Sign In
                  </button>
                </div>

                <div className="mt-25">
                  <img src={Group} alt="" />
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
