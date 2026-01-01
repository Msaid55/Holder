import { BsTelephone } from "react-icons/bs";
import { SiGmail } from "react-icons/si";
import { FaInstagram } from "react-icons/fa";
import { LuYoutube } from "react-icons/lu";
import UseScrollReveal from "./UseScrollReveal";

export default function ChefHeader({ chef }) {
  UseScrollReveal();
  return (
    <div className="flex flex-col md:flex-row items-stretch gap-10 ">

      {/* IMAGE SECTION */}
      <div
        className="
          relative
          w-full md:w-[387px]
          h-auto md:h-[378px]
          bg-[#FFA000]
          rounded-2xl
          flex items-center justify-center
          overflow-hidden
        "
      >
        <img
          src={chef.image}
          alt={chef.name}
          className="
            
            w-[299.13px]
            h-[378px]
            object-contain
            transition-transform duration-500
            hover:scale-105
          "
        />
      </div>

      {/* TEXT SECTION */}
      <div className="flex flex-col reveal justify-start  gap-4">
        <h2 className="text-[30px] font-bold text-black">
          {chef.name}
        </h2>

        <p className="text-[20px] text-black">
          {chef.role}
        </p>

        <p className="text-[18px] max-w-[793px] text-black font-light leading-relaxed">
          {chef.bio}
        </p>

        <div>
          <p className="text-[18px] mb-3 text-black font-medium">Contact me</p>

          <div className="flex gap-3 ">
            {[<BsTelephone />, <SiGmail />, <FaInstagram />, <LuYoutube />].map(
              (icon, i) => (
                <div
                  key={i}
                  className="
                    w-10 h-10
                    rounded-full
                    bg-[#007A59]
                    text-white
                    flex items-center justify-center
                    hover:scale-110 transition
                  "
                >
                  {icon}
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
