import { useEffect, useState, useRef } from "react";
import Group83 from '../images/Group83.svg';

export default function About() {

    // ---------------- COUNTER FUNCTION ----------------
    function Counter({ end, startCounting }) {
        const [value, setValue] = useState(0);

        useEffect(() => {
            if (!startCounting) return; // يبدأ بس لما startCounting تبقى true

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
                    setStartCounting(true);  // يبدأ العداد
                }
            },
            {
                threshold: 0.3, // 30% من ظهور العنصر يكفي
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
            <div className="max-w-7xl px-4 md:px-8 lg:px-16 py-10">

                <section 
                    ref={sectionRef}
                    className="w-[1190px] flex flex-col md:flex-row justify-between items-center gap-10"
                >

                    {/* LEFT CIRCLE IMAGE */}
                    <div className="w-[570px] h-[570px] rounded-full overflow-hidden bg-gray-200">
                        <img 
                            src="https://images.unsplash.com/photo-1555992336-cbf8a106fdde"
                            alt="about"
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* RIGHT TEXT AREA */}
                    <div className="max-w-[590px] h-[487px]">

                        <div className="flex flex-col items-start gap-2">
                            <h1 className="text-[#007a59] text-3xl font-semibold">About Us</h1>
                            <img src={Group83} alt="" className="w-[125px] h-1.5" />
                        </div>

                        <p className="font-bold text-black text-[20px] leading-7 mt-[25px]">
                            Bringing people together through delicious food, warm hospitality, 
                            and a passion for great service.
                        </p>

                        <p className="text-black text-[17px] leading-[26px] mt-5">
                            Platea nisi aliquet ipsum faucibus tincidunt mattis pellentesque pulvinar. 
                            Aliquam urna lorem venenatis amet ipsum. Duis nec volutpat sagittis enim 
                            non vitae aenean fringilla lacinia. Egestas tempor sit facilisi neque 
                            mattisquis.
                        </p>

                        {/* ---------------- COUNTERS ---------------- */}
                        <div className="flex flex-wrap gap-10 mt-10 w-full h-[90px] justify-between">

                            {/* Counter 1 */}
                            <div>
                                <p className="text-4xl font-bold text-red-600">
                                    <Counter end={10000} startCounting={startCounting} />+
                                </p>
                                <p className="text-black text-sm font-bold mt-1">
                                    Happy Customer
                                </p>
                            </div>

                            {/* Counter 2 */}
                            <div>
                                <p className="text-4xl font-bold text-green-600">
                                    <Counter end={98} startCounting={startCounting} />+
                                </p>
                                <p className="text-black text-sm font-bold mt-1">
                                    Guest Satisfactions
                                </p>
                            </div>

                            {/* Counter 3 */}
                            <div>
                                <p className="text-4xl font-bold text-yellow-500">
                                    <Counter end={5} startCounting={startCounting} />★
                                </p>
                                <p className="text-black text-sm font-bold mt-1">
                                    Guest Experience
                                </p>
                            </div>
                        </div>

                        {/* Owner */}
                        <div className="mt-1">
                            <h4 className="font-bold text-black text-[30px]">Jack Arthur</h4>
                            <p className="text-[#B8B8B8] text-[15px] border-t-2 w-[47px]">Owner</p>
                        </div>

                    </div>
                </section>
            </div>
        </div>
    );
}
