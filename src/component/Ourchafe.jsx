// صور الشيفات
import Chaf1 from "../images/Chaf1.svg";
import MaleChafe from "../images/MaleChafe.svg";
import GirlChafe from "../images/GirlChafe.svg";
import Group48 from "../images/Group48.svg";

export default function Ourchafe() {
  const chefs = [
    {
      name: "Owen Grant",
      role: "Chafe",
      img: Chaf1,
      desc:
        "Lorem ipsum dolor sit amet consectetur. Porttitor nulla urna hac nam arcu cras ut gravida ut. Non imperdiet cursus senectus posuere purus natoque. Feugiat cursus in urna aliquam est pulvinar scelerisque. Mus morbi ultrices lectus.",
    },
    {
      name: "Liam John",
      role: "Chafe",
      img: MaleChafe,
      desc:
        "Lorem ipsum dolor sit amet consectetur. Porttitor nulla urna hac nam arcu cras ut gravida ut. Non imperdiet cursus senectus posuere purus natoque. Feugiat cursus in urna aliquam est pulvinar scelerisque. Mus morbi ultrices lectus.",
    },
    {
      name: "Harry Callum",
      role: "Chafe",
      img: GirlChafe,
      desc:
        "Lorem ipsum dolor sit amet consectetur. Porttitor nulla urna hac nam arcu cras ut gravida ut. Non imperdiet cursus senectus posuere purus natoque. Feugiat cursus in urna aliquam est pulvinar scelerisque. Mus morbi ultrices lectus.",
    },
  ];

  return (
    <section className="w-full bg-white mt-12 h-auto">
      {/* ✅ نفس الكونتينر بالظبط */}
      <div className="max-w-[1415px] mx-auto px-4 ">

        {/* العنوان */}
        <div className="flex justify-center mb-12">
          <div className="flex flex-col items-center gap-1">
            <h1 className="text-[#007a59] text-[22px] sm:text-[26px] md:text-[28px] font-semibold">
              Our Chafe
            </h1>
            <img src={Group48} alt="" className="w-[120px] h-[6px]" />
          </div>
        </div>

        {/* الكروت - Flex */}
        <div className="w-full flex justify-between gap-10 flex-wrap">

          {chefs.map((chef, index) => (
            <div key={index} className="relative group transition-all duration-500">
              
              {/* عرض كارد مناسب لعرض 1415px */}
              <div className="w-full md:w-[420px] flex-shrink-0 flex items-end h-[360px]">

                {/* صورة الشيف */}
                <div
                  className="
                    absolute top-0 right-0 z-10
                    transition-all duration-500
                    group-hover:-translate-y-2
                  "
                >
                  <div
                    className="
                      relative w-[180px] h-[180px] bg-[#FFA000]
                      rounded-2xl flex items-center justify-center
                      shadow-lg transition-all duration-500
                      group-hover:scale-105 overflow-hidden
                    "
                  >
                    <img
                      src={chef.img}
                      alt={chef.name}
                      className="
                        absolute top-6
                        w-[130px] h-[165px] object-contain
                        transition-all duration-500
                        group-hover:scale-110
                      "
                    />
                  </div>
                </div>

                {/* الكارد */}
                <div
                  className="
                    bg-[#fafafa] rounded-2xl
                    pt-16 pb-6 px-6 h-[260px]
                    shadow-sm transition-all duration-500
                    group-hover:shadow-lg
                    w-full
                  "
                >
                  <h3 className="text-[26px] font-bold text-black leading-tight -mt-9">
                    {chef.name}
                  </h3>

                  <p className="text-[14px] text-black mt-2">{chef.role}</p>

                  {/* التقييم */}
                  <div className="flex gap-1 mb-2">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <span key={i} className="text-[#ffe100] text-[18px]">
                        ★
                      </span>
                    ))}
                  </div>

                  {/* الوصف */}
                  <p className="text-[14px] text-black w-full leading-6">
                    {chef.desc}
                  </p>
                </div>

              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
