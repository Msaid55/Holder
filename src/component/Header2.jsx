import React, { useState } from "react";
import { FiChevronDown } from "react-icons/fi";

export default function Header2() {
  const tabs = ["Break Fast", "Lunch", "Dinner", "Pizza", "Burger", "Drinks", "Desert"];
  const [active, setActive] = useState("Break Fast");

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="w-full flex flex-col items-center mt-10">

      {/* ⭐⭐ Desktop Version ⭐⭐ */}
      <div className="hidden md:flex flex-col items-center">
        {/* الخط الأحمر */}
        <div className="w-[1312px] h-[12px] bg-[#FF4033] rounded-full"></div>

        {/* التابات فوق الخط */}
        <div className="w-[816px] h-[50px] flex gap-15 justify-center -mt-2.5">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActive(tab)}
              className={`
                text-[18px] font-semibold transition-all duration-300
                ${active === tab 
                  ? "text-white bg-[#FF4033] px-6 py-2 rounded-xl shadow-lg"
                  : "text-[#007a59]"
                }
              `}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>


      {/* ⭐⭐ Mobile Dropdown Trigger ⭐⭐ */}
      <div className="md:hidden w-full px-5 pb-3">
        <button
          onClick={() => setMobileMenuOpen(prev => !prev)}
          className="w-full flex items-center justify-between bg-[#FF4033] text-white px-5 py-3 rounded-xl"
        >
          <span className="font-semibold">{active}</span>
          <span
            className={`transition-transform duration-200 ${
              mobileMenuOpen ? "rotate-180" : ""
            }`}
          >
            <FiChevronDown size={20} />
          </span>
        </button>
      </div>

      {/* ⭐⭐ Mobile Dropdown Menu ⭐⭐ */}
      {mobileMenuOpen && (
  <div className="md:hidden w-full px-5 pb-4">
    <div className="bg-white rounded-2xl shadow-md border border-gray-100">

      {/* التابات عمودي زي المينيو الأولى */}
      <div className="flex flex-col w-full px-4 py-3 gap-2">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => {
              setActive(tab);
              setMobileMenuOpen(true);
            }}
            className={`
              text-left w-full text-[16px] font-semibold transition-all duration-300
              ${active === tab 
                ? "text-white bg-[#FF4033] px-5 py-2 rounded-xl shadow-lg"
                : "text-[#007a59]"
              }
            `}
          >
            {tab}
          </button>
        ))}
      </div>

    </div>
  </div>
)}


    </div>
  );
}
