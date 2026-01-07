import { useEffect, useState, useRef } from "react";
import Group83 from "../images/Group83.svg";
import Ellipse from "../images/Ellipse.svg";
import UseScrollReveal from "./UseScrollReveal";
import { MdOutlineStar } from "react-icons/md";



export default function About() {
    UseScrollReveal();
    // ---------------- COUNTER FUNCTION ----------------
    function Counter({ end, startCounting }) {
        const [value, setValue] = useState(0);

        useEffect(() => {
            if (!startCounting) return;

            let start = 0;
            const duration = 2000;
            const step = end / (duration / 16);

            const counter = setInterval(() => {
                start += step;
                if (start >= end) {
                    start = end;
                    clearInterval(counter);
                }
                setValue(Math.floor(start));
            }, 16);

            return () => clearInterval(counter);
        }, [end, startCounting]);

        return <span>{value}</span>;
    }

    // ----------- Intersection Observer -----------
    const sectionRef = useRef(null);
    const [startCounting, setStartCounting] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    setStartCounting(true);
                    observer.disconnect();
                }
            },
            {
                threshold: 0.3,
            }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) observer.unobserve(sectionRef.current);
        };
    }, []);

    // ------------------------------------------------

    return (
        <div className="w-full bg-white">
            <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 py-10">
                <section
                    ref={sectionRef}
                    className=" reveal flex flex-col-reverse md:flex-row items-center md:items-start gap-10 md:gap-16"
                >
                    {/* LEFT CIRCLE IMAGE (mobile: bottom, desktop: left) */}
                    <div
                        className="reveal w-[290px] h-[290px] sm:w-[320px] sm:h-[320px] md:w-[380px] md:h-[380px] lg:w-[450px] lg:h-[450p xl:w-[570px] xl:h-[570px] rounded-full overflow-hidden bg-gray-200 mx-auto md:mx-0 flex-shrink-0"
                    >
                        <img
                            src={Ellipse}
                            alt="about"
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* RIGHT TEXT AREA (mobile: top full card) */}
                    <div
                        className=" reveal w-full md:max-w-[590px] bg-white  rounded-md  px-4 py-5 sm:px-6 sm:py-6"
                    >
                        <div className="flex flex-col items-center md:items-start gap-1">
                            <h1 className="text-[#007a59] text-[22px] sm:text-[26px] md:text-[28px] font-semibold text-center md:text-left">
                                About Us
                            </h1>
                            <img
                                src={Group83}
                                alt=""
                                className="w-[120px] h-[6px] mt-1"
                            />
                        </div>

                        <p className="font-bold text-black text-[16px] sm:text-[18px] leading-7 mt-4 text-center  md:text-left">
                            Bringing people together through delicious food, warm
                            hospitality, and a passion for great service.
                        </p>

                        <p className="text-black text-[14px] sm:text-[15px] leading-[22px] mt-4 text-center md:text-left">
                            Platea nisi aliquet ipsum faucibus tincidunt mattis pellentesque
                            pulvinar. Aliquam urna lorem venenatis amet ipsum. Duis nec
                            volutpat sagittis enim non vitae aenean fringilla lacinia. Egestas
                            tempor sit facilisi neque mattisquis.
                        </p>

                        {/* ---------------- COUNTERS ---------------- */}
                        <div
                            className="flex flex-wrap justify-between items-start gap-6 mt-6"
                        >
                            {/* Counter 1 */}
                            <div className="text-center md:text-left">
                                <p className="text-3xl sm:text-4xl font-bold text-red-600">
                                    <Counter end={10000} startCounting={startCounting} />+
                                </p>
                                <p className="text-black text-xs sm:text-sm font-bold mt-1">
                                    Happy Customer
                                </p>
                            </div>

                            {/* Counter 2 */}
                            <div className="text-center md:text-left">
                                <p className="text-3xl sm:text-4xl font-bold text-green-600">
                                    <Counter end={98} startCounting={startCounting} />+
                                </p>
                                <p className="text-black text-xs sm:text-sm font-bold mt-1">
                                    Guest Satisfactions
                                </p>
                            </div>

                            {/* Counter 3 */}
                            <div className="text-center md:text-left ">
                                <p className="text-3xl sm:text-4xl font-bold text-yellow-500 flex">
                                    <Counter end={5} startCounting={startCounting} /><MdOutlineStar />
                                </p>
                                <p className="text-black text-xs sm:text-sm font-bold mt-1">
                                    Guest Experience
                                </p>
                            </div>
                        </div>

                        {/* Owner */}
                        <div className="mt-4 text-center md:text-left">
                            <h4 className="font-bold text-black text-[20px] sm:text-[24px]">
                                Jack Arthur
                            </h4>
                            <p className="text-[#B8B8B8] text-[13px] border-t-2 border-[#B8B8B8] w-[55px] mx-auto md:mx-0">
                                Owner
                            </p>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}
