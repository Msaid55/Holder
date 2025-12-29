import { useState } from "react";
import BGitems from "../images/BGitems.png";
import Capa from "../assets/Capa.svg";
import { NavLink, useLocation } from "react-router-dom";
import { FiSearch, FiShoppingBag, FiChevronDown } from "react-icons/fi";
import UserMenu from "./UserMenu";
export default function StandardHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Home", to: "/" },
    { name: "Menu", to: "/menu" },
    { name: "Booking", to: "/booking" },
    { name: "About Us", to: "/about" },
    { name: "Blog", to: "/blog" },
  ];

  // ✅ match بدون حساسية لحروف كبيرة/صغيرة + يدعم /booking/anything
  const pathname = location.pathname.toLowerCase();

  const activeItem =
    navItems.find((item) =>
      item.to === "/"
        ? pathname === "/"
        : pathname.startsWith(item.to.toLowerCase())
    ) || navItems[0];

  const desktopLinkClass = ({ isActive }) =>
    isActive
      ? "px-4 py-2 bg-emerald-700 text-white rounded-full transition-all"
      : "text-white hover:text-emerald-200 transition-all";

  const mobileLinkClass = ({ isActive }) =>
    isActive
      ? "w-full px-4 py-2 bg-emerald-700 text-white rounded-lg"
      : "w-full px-4 py-2 text-gray-800 hover:bg-gray-50 rounded-lg";

  return (
    <div className="relative w-full">
      {/* ✅ الخلفية بس اللي overflow-hidden */}
      <div className="relative h-[367px] overflow-hidden">
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

          {/* ✅ Mobile Dropdown Trigger (يعرض اسم الصفحة الصح) */}
          <div className="md:hidden px-4 pb-3">
            <button
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              className="w-full flex items-center justify-between bg-emerald-700 text-white px-5 py-3 rounded-full"
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
          </div>

          {/* ✅ Mobile Dropdown Menu (مش هيتقص) */}
          {mobileMenuOpen && (
            <div className="md:hidden px-4 pb-4 relative z-50">
              <div className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden">
                <nav className="flex flex-col items-start py-2 space-y-1 px-3">
                  {navItems
                    .filter((item) => item.name !== activeItem.name)
                    .map((item) => (
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
                </nav>

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
      </div>
    </div>
  );
}
