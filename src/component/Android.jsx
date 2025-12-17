import Group58 from "../images/Group58.svg";
import Group140 from "../images/Group140.svg";
import Vector22 from "../images/Vector22.svg";
import RedChilli2 from "../images/RedChilli2.svg";
import Rectangle from "../images/Rectangle.svg";

export default function Android() {
    return (
        <section className="w-full bg-white hidden md:block">
            <div className="max-w-8xl mx-auto px-4 md:px-8 lg:px-16 pt-5 pb-20">

                {/* العنوان */}
                <div className="flex flex-col items-center gap-1 mt-7">
                    <h1 className="text-[#007a59] text-[30px] sm:text-[26px] md:text-[28px] font-bold">
                        App for Android and ISO
                    </h1>
                    <img src={Group58} alt="" className="w-[335px] h-[6px]" />
                </div>

                <div className="flex justify-between">
                {/* الجزء الشمال */}
                <div className="w-full md:w-[637px] md:h-[513px]">
                    <div className="w-[469.58px] h-[376.58px]">
                        <img src={RedChilli2} alt="" /></div>
                    <div className="w-full h-[133px]">
                        <p className="text-[18px] text-[#000000]">Get to easily find your best food</p>
                        <p className="text-[45px] text-black font-bold">Download The Food App</p>
                        <p className="text-[18px] text-black">Download this app and order your food online to get the fastest delivery.</p>
                    </div>
                    <div className="mt-5">
                        <img src={Group140} alt="" />
                    </div>
                </div>
                {/* الجزء اليمين */}
                <div className="w-[439px] h-[530px] mt-3">
                    <img src={Vector22} alt="" className="absolute flex right-30 mt-9"/>
                    <img src={Rectangle} alt="" className="relative h-[590px]" />
                </div>
                
                </div>


            </div>
        </section>
    )
}
