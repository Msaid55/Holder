import React, { useState } from "react";
import Capa from "../assets/Capa.svg"; 
import { FiSearch, FiShoppingBag, FiMenu, FiX } from "react-icons/fi";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="w-full bg-white ">
      <div className="mx-auto px-4 md:px-8 lg:px-16 flex items-center justify-between h-[120px]">
        <div className="flex items-center gap-3">
          <img src={Capa} alt="logo" className="w-[161.84px] h-[45px]" />
        </div>

        <nav className="hidden md:flex items-center gap-8">
          <a href="#" className="px-4 py-2 bg-emerald-700 text-white rounded-full">Home</a>
          <a href="" className="text-black hover:text-emerald-700">Menu</a>
          <a href="#" className="text-black hover:text-emerald-700">Contact Us</a>
          <a href="#" className="text-black hover:text-emerald-700">About Us</a>
          <a href="#" className="text-black hover:text-emerald-700">Blog</a>
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <div className="w-10 h-10 flex items-center justify-center rounded-full bg-emerald-700 text-white cursor-pointer">
            <FiSearch size={20} />
          </div>
          <div className="w-10 h-10 flex items-center justify-center rounded-full bg-emerald-700 text-white cursor-pointer">
            <FiShoppingBag size={20} />
          </div>
        </div>

        <div className="md:hidden flex items-center">
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-sm">
          <nav className="flex flex-col items-start p-4 space-y-3">
            <a href="#" className="w-full px-4 py-2 bg-emerald-700 text-white rounded-full">Home</a>
            <a href="#" className="w-full text-gray-700 hover:text-emerald-700">Menu</a>
            <a href="#" className="w-full text-gray-700 hover:text-emerald-700">Contact Us</a>
            <a href="#" className="w-full text-gray-700 hover:text-emerald-700">About Us</a>
            <a href="#" className="w-full text-gray-700 hover:text-emerald-700">Blog</a>
            <div className="flex items-center gap-4 pt-2">
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-emerald-700 text-white">
                <FiSearch size={20} />
              </div>
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-emerald-700 text-white">
                <FiShoppingBag size={20} />
              </div>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
