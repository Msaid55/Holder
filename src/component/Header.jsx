import React, { useEffect, useState } from "react";
import Capa from "../assets/Capa.svg";
import { Link, useLocation } from "react-router-dom";
import { FiSearch, FiShoppingBag, FiChevronDown } from "react-icons/fi";
import UserMenu from "./UserMenu";
import useCartCount from "./useCart";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const location = useLocation();

  const cartCount = useCartCount();

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
      item.to === "/" ? pathname === "/" : pathname.startsWith(item.to.toLowerCase())
    ) || navItems[0];

  const desktopLinkClass = (name) =>
    name === activeItem.name
      ? "px-4 py-2 bg-emerald-700 text-white rounded-full transition-all duration-300 ease-in-out"
      : "text-black hover:text-emerald-700 transition-all duration-300 ease-in-out";

  const mobileLinkClass = () =>
    "w-full px-4 py-3 text-gray-800 hover:bg-gray-50 rounded-lg";

  // ✅ Sticky on scroll
  useEffect(() => {
    const onScroll = () => {
      setIsSticky(window.scrollY > 60);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* ✅ HEADER WRAPPER */}
      <header
        className={[
          "w-full transition-all duration-300",
          isSticky
            ? "fixed top-0 left-0 z-[9999] bg-white/70 backdrop-blur-md shadow-sm"
            : "relative bg-transparent",
        ].join(" ")}
      >
        {/* ===== TOP BAR ===== */}
        <div className="mx-auto px-4 md:px-8 lg:px-16 flex items-center justify-between h-[120px]">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img src={Capa} alt="logo" className="w-[161.84px] h-[45px]" />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link key={item.name} to={item.to} className={desktopLinkClass(item.name)}>
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Desktop Right Side */}
          <div className="hidden md:flex items-center gap-4">
            <div className="w-10 h-10 flex items-center justify-center hover:scale-110 transition rounded-full bg-emerald-700 text-white cursor-pointer">
              <FiSearch size={20} />
            </div>

            {/* ✅ Cart with badge (Desktop) */}
            <Link
              to="/cart"
              className="relative w-10 h-10 flex items-center justify-center hover:scale-110 transition rounded-full bg-emerald-700 text-white cursor-pointer"
            >
              <FiShoppingBag size={20} />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 min-w-[20px] h-[20px] px-1 rounded-full bg-[#FF4033] text-white text-[12px] font-bold flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Link>

            <UserMenu />
          </div>

          {/* ✅ Mobile Icons */}
          <div className="md:hidden flex items-center gap-3">
            <div className="w-10 h-10 flex items-center justify-center hover:scale-110 transition rounded-full bg-emerald-700 text-white">
              <FiSearch size={20} />
            </div>

            <Link
              to="/cart"
              className="relative w-10 h-10 flex items-center justify-center rounded-full bg-emerald-700 text-white hover:scale-110 transition"
            >
              <FiShoppingBag size={20} />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 min-w-[20px] h-[20px] px-1 rounded-full bg-[#FF4033] text-white text-[12px] font-bold flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Link>
          </div>
        </div>

        {/* ✅ Mobile dropdown row */}
        <div className="md:hidden px-4 pb-3 flex items-center gap-3">
          <button
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="flex-1 w-full flex items-center justify-between bg-emerald-700 text-white px-5 py-3 rounded-full"
          >
            <span className="font-medium">{activeItem.name}</span>
            <span className={`transition-transform duration-200 ${mobileMenuOpen ? "rotate-180" : ""}`}>
              <FiChevronDown size={18} />
            </span>
          </button>
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

      {/* ✅ Spacer علشان لما يبقى fixed ما يغطيش المحتوى */}
      {isSticky && <div className="h-[120px]" />}
    </>
  );
}
