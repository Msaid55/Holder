import React, { useState } from "react";
import Capa from "../assets/Capa.svg"; 
import { FiSearch, FiShoppingBag, FiMenu, FiX } from "react-icons/fi";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("Home");

  const navItems = [
    { name: "Home", href: "#" },
    { name: "Menu", href: "#" },
    { name: "Contact Us", href: "#" },
    { name: "About Us", href: "#" },
    { name: "Blog", href: "#" },
  ];

  return (
    <header className="w-full bg-white shadow-sm">
      <div className="container mx-auto px-4 md:px-8 lg:px-16 flex items-center justify-between h-[120px]">
        <div className="flex items-center gap-3">
          <img src={Capa} alt="logo" className="w-[161.84px] h-[45px]" />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setActiveLink(item.name)}
              className={
                activeLink === item.name
                  ? "px-4 py-2 bg-emerald-700 text-white rounded-full"
                  : "text-black hover:text-emerald-700"
              }
            >
              {item.name}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <div className="w-10 h-10 flex items-center justify-center rounded-full bg-emerald-700 text-white cursor-pointer">
            <FiSearch size={20} />
          </div>
          <div className="w-10 h-10 flex items-center justify-center rounded-full bg-emerald-700 text-white cursor-pointer">
            <FiShoppingBag size={20} />
          </div>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-sm">
          <nav className="flex flex-col items-start p-4 space-y-3">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setActiveLink(item.name)}
                className={
                  activeLink === item.name
                    ? "w-full px-4 py-2 bg-emerald-700 text-white rounded-full"
                    : "w-full text-gray-700 hover:text-emerald-700"
                }
              >
                {item.name}
              </a>
            ))}

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