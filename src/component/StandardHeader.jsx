import { useEffect, useState } from "react";
import BGitems from "../images/BGitems.png";
import Capa from "../assets/Capa.svg";
import { NavLink, useLocation, Link } from "react-router-dom";
import { FiSearch, FiShoppingBag, FiChevronDown } from "react-icons/fi";
import UserMenu from "./UserMenu";
import useCartCount from "./useCart"; // ✅ hook

export default function StandardHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isFixed, setIsFixed] = useState(false);
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

  // ✅ لما نعمل سكرول: الهيدر يبقى fixed
  useEffect(() => {
    const onScroll = () => {
      setIsFixed(window.scrollY > 80); // غير الرقم لو عايزها أسرع/أبطأ
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const badge = (count) =>
    count > 0 ? (
      <span
        className="
          absolute -top-2 -right-2
          min-w-[20px] h-[20px]
          px-1
          rounded-full
          bg-[#FF4033] text-white
          text-[12px] font-bold
          flex items-center justify-center
          leading-none
        "
      >
        {count}
      </span>
    ) : null;

  return (
    <div className="relative w-full">
      {/* ✅ جزء الصورة + العنوان زي ما هو */}
      <div className="relative h-[400px] overflow-hidden">
        <img src={BGitems} alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/50" />

        {/* ✅ الهيدر نفسه */}
        <header
          className={[
            "w-full z-50 transition-all duration-300",
            isFixed
              ? "md:fixed top-0 left-0 bg-white/70 backdrop-blur-md shadow-md"
              : "relative bg-transparent",
          ].join(" ")}
        >
          {/* ✅ TOP BAR */}
          <div className="mx-auto px-4 md:px-8 lg:px-16 flex items-center justify-between h-[120px]">
            {/* LOGO */}
            <Link to="/" className="shrink-0">
              <img src={Capa} alt="logo" className="w-[161px] h-[45px]" />
            </Link>

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
                      : isFixed
                      ? "text-black hover:text-emerald-700 transition-all"
                      : "text-white hover:text-emerald-200 transition-all"
                  }
                >
                  {item.name}
                </NavLink>
              ))}
            </nav>

            {/* RIGHT ICONS (DESKTOP) */}
            <div className="hidden md:flex items-center gap-4">
              <div
                className={[
                  "w-10 h-10 flex items-center justify-center rounded-full cursor-pointer hover:scale-110 transition",
                  isFixed ? "bg-emerald-700 text-white" : "bg-emerald-700 text-white",
                ].join(" ")}
              >
                <FiSearch size={20} />
              </div>

              {/* CART ICON + BADGE */}
              <Link
                to="/cart"
                className={[
                  "relative w-10 h-10 flex items-center justify-center rounded-full cursor-pointer hover:scale-110 transition",
                  "bg-emerald-700 text-white",
                ].join(" ")}
              >
                <FiShoppingBag size={20} />
                {badge(cartCount)}
              </Link>

              <UserMenu />
            </div>

            {/* MOBILE ICONS */}
            <div className="md:hidden flex items-center gap-3">
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-emerald-700 text-white cursor-pointer hover:scale-110 transition">
                <FiSearch size={20} />
              </div>

              <Link
                to="/cart"
                className="relative w-10 h-10 flex items-center justify-center rounded-full bg-emerald-700 text-white cursor-pointer hover:scale-110 transition"
              >
                <FiShoppingBag size={20} />
                {badge(cartCount)}
              </Link>
            </div>
          </div>

          {/* ✅ MOBILE DROPDOWN ROW */}
          <div className="md:hidden px-4 pb-3">
            <div className="flex items-center gap-3">
              <button
                onClick={() => setMobileMenuOpen((prev) => !prev)}
                className="flex-1 flex items-center justify-between bg-emerald-700 text-white px-5 py-3 rounded-full"
              >
                <span className="font-medium">{activeItem.name}</span>
                <FiChevronDown
                  size={18}
                  className={`transition-transform duration-200 ${mobileMenuOpen ? "rotate-180" : ""}`}
                />
              </button>

              <UserMenu />
            </div>
          </div>

          {/* ✅ DROPDOWN MENU */}
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

        {/* ✅ spacer عشان لما يبقى fixed مايغطيش المحتوى */}
        {isFixed && <div className="h-[120px]" />}
      </div>
    </div>
  );
}
