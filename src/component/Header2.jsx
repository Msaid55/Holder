import { FiChevronDown } from "react-icons/fi";
import { useState } from "react";

export default function Header2({ active, setActive }) {
  const tabs = ["Break Fast", "Lunch", "Dinner", "Pizza", "Burger", "Drinks", "Desert"];
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="w-full flex flex-col items-center mt-10">

      {/* Desktop */}
      <div className="hidden md:flex flex-col items-center w-full">
        <div className="w-full h-[12px] bg-[#FF4033] rounded-full"></div>

        <div className="w-[816px] h-[50px] flex gap-12 justify-center -mt-2.5">
          {tabs.map(tab => (
            <button
              key={tab}
              onClick={() => setActive(tab)}
              className={`text-[18px] font-semibold transition
                ${active === tab
                  ? "bg-[#FF4033] text-white px-6 py-2 rounded-xl"
                  : "text-[#007a59]"}`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Mobile */}
      <div className="md:hidden w-full px-5">
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="w-full flex justify-between bg-[#FF4033] text-white px-5 py-3 rounded-xl"
        >
          {active}
          <FiChevronDown
            className={`transition ${mobileMenuOpen ? "rotate-180" : ""}`}
          />
        </button>

        {mobileMenuOpen && (
          <div className="bg-white rounded-xl mt-2 p-3">
            {tabs.map(tab => (
              <button
                key={tab}
                onClick={() => {
                  setActive(tab);
                  setMobileMenuOpen(false);
                }}
                className={`block w-full text-left py-2
                  ${active === tab ? "text-[#FF4033]" : "text-[#007a59]"}`}
              >
                {tab}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
