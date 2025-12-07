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
      <div className="w-full bg-white">

        <div className="mx-auto px-4 md:px-8 lg:px-16 py-10
                        flex flex-col md:flex-row items-center md:items-start 
                        justify-between gap-10">
          

          <section className="w-full md:w-[609px] md:h-[513px]">
            <div className="w-full h-full">
              <h1
                className="text-[32px] sm:text-[40px] md:text-[60px] font-bold 
                           leading-tight text-black 
                           text-center md:text-left 
                           slide-left opacity-0"
                style={{ animationDelay: "0s" }}
              >
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

              <p
                className="mt-4 text-[16px] md:text-[20px] text-black 
                           max-w-[508px] mx-auto md:mx-0 
                           text-center md:text-left 
                           slide-left opacity-0"
                style={{ animationDelay: ".2s" }}
              >
                A restaurant is an establishment that prepares and serves food
                and drinks to customers, typically for consumption on the
                premises, but also offering take-out or delivery.
              </p>

              <div
                className="flex mt-8 md:mt-10 gap-4 
                           justify-center md:justify-start
                           slide-left opacity-0"
                style={{ animationDelay: ".4s" }}
              >
                <button className="w-[145px] h-[46px] bg-[#065B5E] flex items-center justify-center text-[#Ffff] rounded-full text-[18px] md:text-[22px] shadow-[#b3becc]">
                  Order Now
                </button>
                <button className="w-[109px] h-[46px] bg-[#ffff] flex items-center justify-center text-[#FF4033] rounded-full text-[18px] md:text-[22px] border-[#FF4033] border-2 shadow-[#b3becc]">
                  Sign In
                </button>
              </div>
            </div>
          </section>


          <div className="w-full flex justify-center md:justify-end">
            <Hero2 />
          </div>
        </div>
      </div>
    </>
  );
}
