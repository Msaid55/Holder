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

  // ✅ Detect active page name for mobile dropdown label
  const pathname = location.pathname.toLowerCase();
  const activeItem =
    navItems.find((item) =>
      item.to === "/"
        ? pathname === "/"
        : pathname.startsWith(item.to.toLowerCase())
    ) || navItems[0];

  return (
    <div className="relative w-full">
      <div className="relative h-[400px] overflow-hidden">
        <img
          src={BGitems}
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />

        <header className="relative z-20 w-full">
          {/* TOP BAR */}
          <div className="mx-auto px-4 md:px-8 lg:px-16 flex items-center justify-between h-[120px]">
            {/* LOGO */}
            <img src={Capa} alt="logo" className="w-[161px] h-[45px]" />

            {/* DESKTOP NAV */}
            <nav className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.to}
                  end={item.to === "/"}
                  className={({ isActive }) =>
                    isActive
                      ? "px-4 py-2 bg-emerald-700 text-white rounded-full transition-all"
                      : "text-white hover:text-emerald-200 transition-all"
                  }
                >
                  {item.name}
                </NavLink>
              ))}
            </nav>

            {/* RIGHT ICONS (DESKTOP) */}
            <div className="hidden md:flex items-center gap-4">
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-emerald-700 text-white cursor-pointer hover:scale-110 transition">
                <FiSearch size={20} />
              </div>
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-emerald-700 text-white cursor-pointer hover:scale-110 transition">
                <FiShoppingBag size={20} />
              </div>
              <UserMenu />
            </div>

            {/* ✅ MOBILE ICONS (Search + Cart) in SAME ROW as LOGO */}
            <div className="md:hidden flex items-center gap-3">
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-emerald-700 text-white cursor-pointer hover:scale-110 transition">
                <FiSearch size={20} />
              </div>

              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-emerald-700 text-white cursor-pointer hover:scale-110 transition">
                <FiShoppingBag size={20} />
              </div>
            </div>
          </div>

          {/* ✅ MOBILE DROPDOWN ROW (Nav dropdown + UserMenu) */}
          <div className="md:hidden px-4 pb-3">
            <div className="flex items-center gap-3">
              <button
                onClick={() => setMobileMenuOpen((prev) => !prev)}
                className="flex-1 flex items-center justify-between bg-emerald-700 text-white px-5 py-3 rounded-full"
              >
                {/* ✅ shows current page */}
                <span className="font-medium">{activeItem.name}</span>

                <FiChevronDown
                  size={18}
                  className={`transition-transform duration-200 ${
                    mobileMenuOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* USER MENU beside nav dropdown */}
              <UserMenu />
            </div>
          </div>

          {/* DROPDOWN MENU */}
          {mobileMenuOpen && (
            <div className="md:hidden px-4 pb-4 relative z-50">
              <div className="bg-white rounded-2xl text-black shadow-md border border-gray-100 overflow-hidden">
                <nav className="flex flex-col py-2">
                  {navItems
                    .filter((item) => item.name !== activeItem.name)
                    .map((item) => (
                      <NavLink
                        key={item.name}
                        to={item.to}
                        end={item.to === "/"}
                        className="px-4 py-3 hover:bg-gray-100 transition"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.name}
                      </NavLink>
                    ))}
                </nav>
              </div>
            </div>
          )}
        </header>
      </div>
    </div>
  );
}
