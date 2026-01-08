import React, { useEffect, useRef, useState } from "react";
import FrameM from "../images/FrameM.svg";
import Vector from "../images/Vector.svg";
import FrameD from "../images/FrameD.svg";

export default function Boxs() {
  const containerRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisible(true);
          observer.disconnect();  
        }
      },
      {
        threshold: 0.2,  
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-teal-900 py-10" ref={containerRef}>
      <div className="max-w-8xl mx-auto px-4 md:px-8 lg:px-16 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div
            className={`bg-white rounded-lg shadow p-5 flex gap-4 items-center opacity-0 ${
              visible ? "animate-up" : ""
            }`}
            style={{ animationDelay: "0.2s" }}
          >
            <div className="w-[97px] h-[97px] flex items-center justify-center border-10 border-teal-900 rounded-full">
              <img className="w-6 h-6" src={FrameM} alt="" />
            </div>

            <div className="flex flex-col max-w-[239.33px]">
              <h3 className="font-bold text-gray-900 text-base mb-1">
                Easy To Order
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed ">
                Easily order food by selecting a platform, choosing your
                location, picking a restaurant, adding items to the cart, and
                confirming your order. Then, sit back and track the delivery.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div
            className={`bg-white rounded-lg shadow p-5 flex gap-4 items-center opacity-0 ${
              visible ? "animate-up" : ""
            }`}
            style={{ animationDelay: "0.4s" }}
          >
            <div className="w-[97px] h-[97px] flex items-center justify-center border-10 border-teal-900 rounded-full">
              <img className="w-6 h-6" src={Vector} alt="" />
            </div>

            <div className="flex flex-col max-w-[239.33px]">
              <h3 className="font-bold text-gray-900 text-base mb-1">
                Fasted Delivery
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Get your food delivered fast by choosing nearby restaurants,
                placing your order quickly, and selecting express delivery
                options if available. Enjoy hot meals in less time!
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div
            className={`bg-white rounded-lg shadow p-5 flex gap-4 items-center opacity-0 ${
              visible ? "animate-up" : ""
            }`}
            style={{ animationDelay: "0.6s" }}
          >
            <div className="w-[97px] h-[97px] flex items-center justify-center border-10 border-teal-900 rounded-full">
              <img className="w-6 h-6" src={FrameD} alt="" />
            </div>

            <div className="flex flex-col max-w-[239.33px]">
              <h3 className="font-bold text-gray-900 text-base mb-1">
                Best Quality
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Enjoy the best quality food made with fresh ingredients,
                prepared by top-rated restaurants, and delivered with care to
                ensure great taste and satisfaction.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
