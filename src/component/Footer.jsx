import React from "react";
import { LuYoutube } from "react-icons/lu";
import { FiFacebook } from "react-icons/fi";
import Rectangle85 from "../images/Rectangle85.png";
import Capa from "../assets/Capa.svg";
import { TfiTwitter } from "react-icons/tfi";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import UseScrollReveal from "./UseScrollReveal";
export default function Footer() {
  UseScrollReveal();
  return (
    <footer className="w-full reveal pt-20">
      <div className="max-w-8xl mx-auto hpx-4 md:px-8 lg:px-16 relative">

        {/* البوكس الكبير */}
        <div className="relative mb-5 rounded-3xl overflow-hidden">

          {/* الخلفية */}
          <div
            className="absolute"
          ><img src={Rectangle85} alt="" />
          </div>

          {/* المحتوى */}
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-10 p-8 lg:p-14">

            {/* النص */}
            <div className="text-white flex flex-col justify-center">
              <h2 className="text-[25px] md:text-[40px] font-bold leading-tight mb-4">
                Bringing People Together <br /> Over Great Food
              </h2>

              <p className="text-[12px] md:text-[17px] text-white/80 leading-6 max-w-md">
                A cozy and welcoming restaurant offering freshly prepared meals,
                friendly service, and a relaxing atmosphere for all food lovers.
                Experience elegant dining with gourmet dishes crafted by expert chefs
                in a sophisticated setting.
              </p>
            </div>

            {/* الفورم */}
            <div className="rounded-2xl z-40 p-6 md:p-8 shadow-xl ">
              <form className="flex flex-col gap-4">

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-black md:text-white">First Name*</label>
                    <input
                      type="text"
                      className="w-full mt-1 border rounded-md px-3 py-2 outline-none focus:ring-2 focus:ring-green-600"
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium text-black">Last Name*</label>
                    <input
                      type="text"
                      className="w-full mt-1 border rounded-md px-3 py-2 outline-none focus:ring-2 focus:ring-green-600"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-black md:text-white">Email*</label>
                    <input
                      type="email"
                      className="w-full mt-1 border rounded-md px-3 py-2 outline-none focus:ring-2 focus:ring-green-600"
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium text-black">Phone number*</label>
                    <input
                      type="tel"
                      className="w-full mt-1 border rounded-md px-3 py-2 outline-none focus:ring-2 focus:ring-green-600"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium text-black md:text-white">Subject</label>
                  <input
                    type="text"
                    className="w-full mt-1 border rounded-md px-3 py-2 outline-none focus:ring-2 focus:ring-green-600"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-black md:text-white">Message*</label>
                  <textarea
                    rows="4"
                    className="w-full mt-1 border rounded-md px-3 py-2 outline-none focus:ring-2 focus:ring-green-600 resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-fit bg-[#007a59] text-white px-6 py-2 rounded-full mt-2 hover:bg-[#00664b] transition"
                >
                  Send a Message
                </button>

              </form>
            </div>

          </div>
        </div>

        {/* الجزء السفلي */}
        <div className="flex flex-col pb-5 md:flex-row items-center justify-between gap-4">

          {/* اللوجو */}
          <div className="flex items-center gap-2">
            <img src={Capa} alt="logo" className="h-8" />
          </div>

          {/* الحقوق */}
          <p className="text-sm text-black">
            © 2025 Lift Media. All rights reserved.
          </p>

          {/* السوشيال */}
          <div className="flex gap-3">
            <span className="w-9 h-9 flex items-center justify-center rounded-full bg-white shadow-lg cursor-pointer hover:bg-gray-200"><FiFacebook className="text-[#ff4033]" /></span>
            <span className="w-9 h-9 flex items-center justify-center rounded-full bg-white shadow-lg cursor-pointer hover:bg-gray-200"><LuYoutube  className="text-[#ff4033]"/></span>
            <span className="w-9 h-9 flex items-center justify-center rounded-full bg-white shadow-lg cursor-pointer hover:bg-gray-200"><TfiTwitter className="text-[#ff4033]" /></span>
            <span className="w-9 h-9 flex items-center justify-center rounded-full bg-white shadow-lg cursor-pointer hover:bg-gray-200"><FaWhatsapp className="text-[#ff4033]" /></span>
            <span className="w-9 h-9 flex items-center justify-center rounded-full bg-white shadow-lg cursor-pointer hover:bg-gray-200"><FaInstagram className="text-[#ff4033]" /></span>
          </div>

        </div>
      </div>
    </footer>
  );
}
