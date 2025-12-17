
import { FiShoppingBag } from "react-icons/fi";


import Meat1 from "../images/Meat1.svg";
import Meal2 from "../images/Meal2.svg";
import Meal3 from "../images/Meal3.svg";
import Meal4 from "../images/Meal4.svg";
import Meal5 from "../images/Meal5.svg";
import Meal6 from "../images/Meal6.svg";
import Meal7 from "../images/Meal7.svg";

export default function Allitems() {
  const items = [
    { title: "Croissant", price: "$55", img: Meat1 },
    { title: "Muffin", price: "$30", img: Meal2 },
    { title: "Waffles", price: "$45", img: Meal3 },
    { title: "Bacon", price: "$25", img: Meal4 },
    { title: "Caesar Salad", price: "$25", img: Meal5 },
    { title: "Oatmeal", price: "$60", img: Meal6 },
    { title: "Cobb Salad", price: "$20", img: Meal7 },
    { title: "Coleslaw", price: "$35", img: Meat1 },
  ];

  return (
    <div>
      <div className="w-full">
        <div className="">
          {/* الكروت */}
          <div
            className="
              grid 
              grid-cols-1 
              sm:grid-cols-2 
              md:grid-cols-2 
              lg:grid-cols-3 
              xl:grid-cols-4 
              gap-6 
              mt-10
            "
          >
            {items.map((item, index) => (
              <div
                key={index}
                className="
                  relative bg-white rounded-3xl px-6 pt-8 pb-6 
                  shadow-[0_14px_40px_rgba(0,0,0,0.05)] 
                  overflow-visible group
                "
              >
                {/* الخلفية الفاتحة */}
                <div
                  className="
                    absolute bottom-0 left-0 w-full h-[75%] 
                    bg-[#e9f4f2] rounded-xl 
                    origin-bottom scale-y-0 
                    transition-all duration-300 ease-in-out 
                    group-hover:scale-y-100
                  "
                ></div>

                {/* الصورة */}
                <div className="relative z-20 flex justify-center">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="
                      w-[212px] h-[213px] object-contain mt-[-40px]
                      transition-all duration-300
                      group-hover:-translate-y-2
                    "
                  />
                </div>

                {/* جسم الكارد */}
                <div className="relative z-30 mt-14">
                  <div className="flex items-center justify-between w-[230px] h-[45px]">
                    <h3 className="text-[20px] font-bold text-[#111]">
                      {item.title}
                    </h3>
                    <div className="text-[18px] font-extrabold text-[#111]">
                      {item.price}
                    </div>
                  </div>

                  <div className="flex gap-1 mt-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <span key={i} className="text-[#ffb400] text-[14px]">
                        ★
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between mt-5">
                    <button
                      className="
                        px-8 py-2.5 rounded-full bg-[#007a59] text-white 
                        text-[16px] font-semibold transition duration-200 
                        hover:bg-[#036149]
                      "
                    >
                      Order Now
                    </button>

                    <button
                      className="
                        w-[45px] h-[45px] rounded-full border border-[#FF4033] 
                        text-[#FF4033] flex items-center justify-center 
                        transition-all duration-200 cursor-pointer
                      "
                    >
                      <div className="w-10 h-10 flex items-center justify-center rounded-full text-[#FF4033]">
                        <FiShoppingBag size={24} />
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* ✅ See More Link (دايمًا ظاهر - من غير شرط ولا لوجيك) */}
          {/* ⭐ See More Button (LINK) */}
<div className="flex justify-center mt-10">
  <a
    href="/all-items"
    className="
      px-12 py-3 rounded-full 
      bg-[#FF4033] text-white 
      text-[16px] font-semibold 
      transition duration-200
      hover:bg-[#e6392d]
      w-[168px] h-[56px]
      flex items-center justify-center
    "
  >
    See More
  </a>
</div>


        </div>
      </div>
    </div>
  );
}
