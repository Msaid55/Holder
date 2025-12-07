import React, { useState, useEffect } from "react";
import Hero2 from "./Hero2";

export default function Hero1() {
  const words = ["Breakfast", "Dinner", "Lunch"];
  const colors = ["#FF4033", "#1D9BF0", "#06D6A0", "#AA33FF"];
  const [index, setIndex] = useState(0);
  const [animate, setAnimate] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimate(false);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % words.length);
        setAnimate(true);
      }, 50);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="w-full h-full bg-white">
        <div className="mx-auto h-[595px] flex justify-between relative px-4 md:px-8 lg:px-16">
          
            <section className="bg-white w-[609px] h-[513px] mt-[82px]">
              <div className="bg-white  w-[609px] h-full">
                <h1 className="text-[60px] font-bold  w-full h-[140px] leading-tight text-black">
                  The Power of Healthy Food{" "}
                  <span
                    style={{ color: colors[index] }}
                    className={`inline-block ${
                      animate ? "animate-slide-up" : ""
                    }`}
                  >
                    {words[index]}
                  </span>
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

                
              </div>
              
            </section>
                    
          
          <Hero2/>
        </div>
      </div>
    </>
  );
}
