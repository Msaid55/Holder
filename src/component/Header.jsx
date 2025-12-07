import React, { useState } from "react";
import Capa from "../assets/Capa.svg";
import { FiSearch, FiShoppingBag, FiChevronDown } from "react-icons/fi";

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

  const desktopLinkClass = (name) =>
    name === activeLink
      ? "px-4 py-2 bg-emerald-700 text-white rounded-full transition-all duration-300 ease-in-out"
      : "text-black hover:text-emerald-700 transition-all duration-300 ease-in-out";

  const mobileLinkClass = () =>
    "w-full px-4 py-2 text-gray-800 hover:bg-gray-50";

  return (
    <header className="w-full bg-white">
      {/* TOP BAR */}
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
              onClick={(e) => {
                e.preventDefault();
                setActiveLink(item.name);
              }}
              className={desktopLinkClass(item.name)}
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* Desktop Icons */}
        <div className="hidden md:flex items-center gap-4">
          <div className="w-10 h-10 flex items-center justify-center rounded-full bg-emerald-700 text-white cursor-pointer">
            <FiSearch size={20} />
          </div>
          <div className="w-10 h-10 flex items-center justify-center rounded-full bg-emerald-700 text-white cursor-pointer">
            <FiShoppingBag size={20} />
          </div>
        </div>
      </div>

      {/* MOBILE DROPDOWN TRIGGER */}
      <div className="md:hidden px-4 pb-3">
        <button
          onClick={() => setMobileMenuOpen((prev) => !prev)}
          className="w-full flex items-center justify-between bg-emerald-700 text-white px-5 py-3 rounded-full"
        >
          <span className="font-medium">{activeLink}</span>
          <span
            className={`transition-transform duration-200 ${
              mobileMenuOpen ? "rotate-180" : ""
            }`}
          >
            <FiChevronDown size={18} />
          </span>
        </button>
      </div>

      {/* MOBILE DROPDOWN MENU */}
      {mobileMenuOpen && (
        <div className="md:hidden px-4 pb-4">
          <div className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden">
            <nav className="flex flex-col items-start py-2 space-y-1">
              {/* هنا الفلترة: بنشيل الـ active من الليست */}
              {navItems
                .filter((item) => item.name !== activeLink)
                .map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      setActiveLink(item.name);
                      setMobileMenuOpen(false);
                    }}
                    className={mobileLinkClass(item.name)}
                  >
                    {item.name}
                  </a>
                ))}
            </nav>
            {/* Mobile icons inside dropdown */}
            <div className="flex items-center gap-4 px-4 py-3 border-t border-gray-100">
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-emerald-700 text-white">
                <FiSearch size={20} />
              </div>
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-emerald-700 text-white">
                <FiShoppingBag size={20} />
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}