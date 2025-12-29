import { BsTelephone } from "react-icons/bs";
import { SiGmail } from "react-icons/si";
import { FaInstagram } from "react-icons/fa";
import { LuYoutube } from "react-icons/lu";

export default function ChefHeader({ chef }) {
  return (
    <div className="flex flex-col md:flex-row  items-start gap-10">
      
      {/* IMAGE */}
      <div
        className="
          relative w-[387px] h-[388px]

          bg-[#FFA000]
          rounded-2xl
          flex items-center justify-center
          shadow-lg
          transition-all duration-500
          group-hover:scale-105
          overflow-hidden
        "
      >
        <img
          src={chef.image}
          alt={chef.name}
          className="
            absolute top-6
            w-[299.13px] h-[387px]
            object-contain
            transition-all duration-500
            group-hover:scale-110
          "
        />
      </div>

      {/* TEXT CONTENT */}
      <div className="flex flex-col items-start  md:text-left">
        <h2 className="text-[30px] text-black font-bold mb-3">
          {chef.name}
        </h2>

        <p className="text-[20px] text-black mb-4">
          {chef.role}
        </p>

        <p className="text-black font-light text-[20px] mb-4 max-w-[793px]">
          {chef.bio}
        </p>

        <div>
          <p className="text-[20px] mb-4 text-black">Contact me</p>

          <div className="flex gap-3 justify-center md:justify-start">
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