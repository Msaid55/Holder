import RedChilli3 from '../images/RedChilli3.svg';
import InputField from "./InputField";
import { BsTelephone } from "react-icons/bs";
import { SiGmail } from "react-icons/si";
import { FaInstagram } from "react-icons/fa";
import { LuYoutube } from "react-icons/lu";
import UseScrollReveal from "./UseScrollReveal";

export default function Contact() {
  UseScrollReveal();
  return (
    <section className="w-full  bg-white py-16">
      <div className="bg-[#007A59] w-full  rounded-2xl">
        <div
          className="
            max-w-8xl mx-auto 
            px-4 md:px-8 lg:px-16 
            py-10
            flex flex-col lg:flex-row 
            gap-10
          "
        >

          {/* LEFT – FORM */}
          <div className="flex  reveal justify-center lg:justify-start w-full">
            <div
              className="
                bg-white rounded-2xl shadow-xl 
                p-6 md:p-8 
                w-full max-w-[560px]
              "
            >
              <form className="flex flex-col gap-4">

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <InputField label="Your Name*" />
                  <InputField label="Email*" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <InputField label="Phone Number*" />
                  <InputField label="Number of Guests*" />
                </div>

                <InputField label="Date of Reservation*" />
                <InputField label="Time of Reservation*" />

                <div>
                  <label className="text-sm text-black font-medium">
                    Special Request
                  </label>
                  <textarea
                    rows="3"
                    className="
                      w-full mt-1 
                      border rounded-md 
                      px-3 py-2 
                      outline-none 
                      focus:ring-2 focus:ring-green-600 
                      resize-none
                    "
                  />
                </div>

                <button
                  className="
                    w-fit 
                    bg-[#007a59] text-white 
                    px-8 py-2 
                    rounded-full 
                    mt-4
                  "
                >
                  Book
                </button>
              </form>
            </div>
          </div>

          {/* RIGHT – INFO */}
          <div className="flex  reveal justify-center lg:justify-start w-full">
            <div className="relative text-white w-full max-w-md">

              {/* Pepper Image – Desktop only */}
              <img
                src={RedChilli3}
                alt=""
                className="
                  hidden lg:block
                  absolute
                  w-[308px] h-auto
                "
              />

              <div className="space-y-6 mt-4 lg:mt-70">

                <div>
                  <h3 className="font-bold text-[22px] md:text-[25px]">
                    Address
                  </h3>
                  <p className="text-[16px] md:text-[18px] font-light opacity-90">
                    57, Sultan Market (4th Floor), Dakshin Khan,
                    Dhaka-1230, Bangladesh
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-[22px] md:text-[25px]">
                    Open Time
                  </h3>
                  <p className="text-[16px] md:text-[18px] font-light">
                    Mon - Fri : 11:00 AM - 10:00 PM
                  </p>
                  <p className="text-[16px] md:text-[18px] font-light">
                    Sat - Sun : 09:00 AM - 11:00 PM
                  </p>
                </div>

                <div>
                  <p className="text-[22px] md:text-[25px] font-bold mb-2">
                    Contact we are
                  </p>

                  <div className="flex gap-3">
                    {[<BsTelephone />, <SiGmail />, <FaInstagram />, <LuYoutube />]
                      .map((icon, i) => (
                        <div
                          key={i}
                          className="
                            w-10 h-10 
                            rounded-full 
                            bg-white 
                            text-[#007A59] 
                            flex items-center justify-center
                          "
                        >
                          {icon}
                        </div>
                      ))}
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
