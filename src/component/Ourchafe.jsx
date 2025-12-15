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
        <section className="w-full bg-white h-[600px]">
            <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 py-10">

                {/* العنوان */}
                <div className="flex justify-center mb-35">
                    <div className="flex flex-col items-center gap-1">
                        <h1 className="text-[#007a59] text-[22px] sm:text-[26px] md:text-[28px] font-semibold">
                            Our Chafe
                        </h1>
                        <img src={Group48} alt="" className="w-[120px] h-[6px]" />
                    </div>
                </div>
                    
                {/* الكروت */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {chefs.map((chef, index) => (
                        <div
                            key={index}
                            className="relative group transition-all duration-500"
                        >
                            {/* صورة الشيف */}
                            <div
                                className="
                                    absolute -top-25 -right-7.5 z-10
                                    transition-all duration-500
                                    group-hover:-translate-y-2
                                "
                            >
                                <div
                                    className="relative
                                        w-[184px] h-[184px] bg-[#FFA000]
                                        rounded-2xl flex items-center justify-center
                                        shadow-lg
                                        transition-all duration-500
                                        group-hover:scale-105 overflow-hidden
                                    "
                                >
                                    <img
                                        src={chef.img}
                                        alt={chef.name}
                                        className="absolute top-7
                                            w-[125.82px] h-[159px] object-contain
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
                                    pt-16 pb-6 px-6 w-[386px] h-[240px] 
                                    shadow-sm
                                    transition-all duration-500
                                    group-hover:shadow-lg
                                "
                            >
                                <h3 className="text-[25px] font-bold text-black leading-tight -mt-9">
                                    {chef.name}
                                </h3>
                                <p className="text-[14px] text-black mt-2">
                                    {chef.role}
                                </p>

                                {/* التقييم */}
                                <div className="flex gap-1 mb-2">
                                    {Array.from({ length: 5 }).map((_, i) => (
                                        <span key={i} className="text-[#ffe100] text-[20px]">★</span>
                                    ))}
                                </div>

                                {/* الوصف */}
                                <p className="text-[14px] text-black w-[346px] h-[110px]">
                                    {chef.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}