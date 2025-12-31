import React, { useState } from "react";
import Capa from "../assets/Capa.svg";
import { Link, useLocation } from "react-router-dom";
import { FiSearch, FiShoppingBag, FiChevronDown } from "react-icons/fi";
import UserMenu from "./UserMenu";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Home", to: "/" },
    { name: "Menu", to: "/menu" },
    { name: "Booking", to: "/booking" },
    { name: "About Us", to: "/about" },
    { name: "Blog", to: "/blog" },
  ];

  const pathname = location.pathname.toLowerCase();
  const activeItem =
    navItems.find((item) =>
      item.to === "/"
        ? pathname === "/"
        : pathname.startsWith(item.to.toLowerCase())
    ) || navItems[0];

  const desktopLinkClass = (name) =>
    name === activeItem.name
      ? "px-4 py-2 bg-emerald-700 text-white rounded-full transition-all duration-300 ease-in-out"
      : "text-black hover:text-emerald-700 transition-all duration-300 ease-in-out";

  const mobileLinkClass = () =>
    "w-full px-4 py-3 text-gray-800 hover:bg-gray-50 rounded-lg";

  return (
    <header className="w-full">
      {/* ===== TOP BAR ===== */}
      <div className="mx-auto px-4 md:px-8 lg:px-16 flex items-center justify-between h-[120px]">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img src={Capa} alt="logo" className="w-[161.84px] h-[45px]" />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.to}
              className={desktopLinkClass(item.name)}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Desktop Right Side */}
        <div className="hidden md:flex items-center gap-4">
          <div className="w-10 h-10 flex items-center justify-center hover:scale-110 transition rounded-full bg-emerald-700 text-white cursor-pointer">
            <FiSearch size={20} />
          </div>
           feature/Cart
          <Link to="/Cart"
          className="w-10 h-10 flex items-center justify-center rounded-full bg-emerald-700 text-white cursor-pointer">
 
          <div className="w-10 h-10 flex items-center justify-center hover:scale-110 transition rounded-full bg-emerald-700 text-white cursor-pointer">
            main
            <FiShoppingBag size={20} />
          </Link>
          <UserMenu />
        </div>

        {/* ✅ Mobile Icons in same row with Logo */}
        <div className="md:hidden flex items-center gap-3">
          <div className="w-10 h-10 flex items-center justify-center hover:scale-110 transition rounded-full bg-emerald-700 text-white">
            <FiSearch size={20} />
          </div>
          <div className="w-10 h-10 flex items-center justify-center hover:scale-110 transition rounded-full bg-emerald-700 text-white">
            <FiShoppingBag size={20} />
          </div>
        </div>
      </div>

      {/* ✅ Mobile Row: NAV dropdown + USER dropdown جنب بعض */}
      <div className="md:hidden px-4 pb-3 flex items-center gap-3">
        <button
          onClick={() => setMobileMenuOpen((prev) => !prev)}
          className="flex-1 w-full flex items-center justify-between bg-emerald-700 text-white px-5 py-3 rounded-full"
        >
          <span className="font-medium">{activeItem.name}</span>
          <span
            className={`transition-transform duration-200 ${
              mobileMenuOpen ? "rotate-180" : ""
            }`}
          >
            <FiChevronDown size={18} />
          </span>
        </button>

        {/* ✅ User dropdown جنب nav dropdown */}
        <UserMenu />
      </div>

      {/* ✅ Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden px-4 pb-4 relative z-50">
          <div className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden">
            <nav className="flex flex-col items-start py-2 space-y-1 px-3">
              {navItems
                .filter((item) => item.name !== activeItem.name)
                .map((item) => (
                  <Link
                    key={item.name}
                    to={item.to}
                    onClick={() => setMobileMenuOpen(false)}
                    className={mobileLinkClass()}
                  >
                    {item.name}
                  </Link>
                ))}
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
