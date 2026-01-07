import React from "react";
import Capa from "../assets/Capa.svg"; 
 
export default function SplashLoader() {
  return (
    <div className="fixed inset-0 z-[9999] bg-white flex items-center justify-center px-4">
      <div className="flex flex-col items-center gap-6">
        {/* Logo */}
        <div className="flex items-center justify-center">
          <img src={Capa} alt="logo" className="w-[170px] h-auto" />
        </div>

        {/* Spinner */}
        <div className="relative w-24 h-24">
          <div className="absolute inset-0 rounded-full border-4 border-emerald-100"></div>
          <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-emerald-700 border-r-[#FF4033] animate-spin"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-4 h-4 rounded-full bg-[#FF4033] animate-pulse"></div>
          </div>
        </div>

        {/* Text */}
        <div className="text-center">
          <p className="text-emerald-700 font-semibold text-lg">
            Loading...
          </p>
          <p className="text-gray-400 text-sm mt-1">
            Please wait a moment
          </p>
        </div>

        {/* Bar */}
        <div className="w-[280px] sm:w-[340px] h-2 rounded-full bg-emerald-100 overflow-hidden">
          <div className="h-full w-1/3 bg-[#FF4033] rounded-full animate-[loaderMove_1.2s_ease-in-out_infinite]"></div>
        </div>
      </div>

      <style>{`
        @keyframes loaderMove {
          0% { transform: translateX(-120%); }
          50% { transform: translateX(120%); }
          100% { transform: translateX(120%); }
        }
      `}</style>
    </div>
  );
}
