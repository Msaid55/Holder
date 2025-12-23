import { useState } from "react";
import BGitems from "../images/BGitems.png";
import Capa from "../assets/Capa.svg";
import { NavLink } from "react-router-dom";
import { FiSearch, FiShoppingBag, FiChevronDown } from "react-icons/fi";

export default function StandardHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", to: "/" },
    { name: "Menu", to: "/menu" },
    { name: "Contact Us", to: "/contact" },
    { name: "About Us", to: "/about" },
    { name: "Blog", to: "/blog" },
  ];

  const desktopLinkClass = ({ isActive }) =>
    isActive
      ? "px-4 py-2 bg-emerald-700 text-white rounded-full transition-all"
      : "text-white hover:text-emerald-200 transition-all";

  const mobileLinkClass = ({ isActive }) =>
    isActive
      ? "w-full px-4 py-2 bg-emerald-700 text-white rounded-lg"
      : "w-full px-4 py-2 text-gray-800 hover:bg-gray-50 rounded-lg";

  return (
    <div className="relative w-full h-[367px] overflow-hidden">
      {/* Background */}
      <img
        src={BGitems}
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Header */}
      <header className="relative z-20 w-full">
        <div className="mx-auto px-4 md:px-8 lg:px-16 flex items-center justify-between h-[120px]">
          <img src={Capa} alt="logo" className="w-[161px] h-[45px]" />

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.to}
                className={desktopLinkClass}
                end={item.to === "/"}
              >
                {item.name}
              </NavLink>
            ))}
          </nav>

          {/* Icons */}
          <div className="hidden md:flex items-center gap-4">
            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-emerald-700 text-white">
              <FiSearch size={20} />
            </div>
            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-emerald-700 text-white">
              <FiShoppingBag size={20} />
            </div>
          </div>
        </div>

        {/* Mobile Button */}
        <div className="md:hidden px-4 pb-3">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="w-full flex justify-between bg-emerald-700 text-white px-5 py-3 rounded-full"
          >
            Menu
            <FiChevronDown
              className={`transition ${mobileMenuOpen ? "rotate-180" : ""}`}
            />
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden px-4 pb-4">
            <div className="bg-white rounded-2xl shadow-md p-3 space-y-1">
              {navItems.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.to}
                  className={mobileLinkClass}
                  end={item.to === "/"}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </NavLink>
              ))}
            </div>
          </div>
        )}
      </header>
    </div>
  );
}
