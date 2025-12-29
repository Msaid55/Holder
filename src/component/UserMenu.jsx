import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { FiUser, FiChevronDown } from "react-icons/fi";

export default function UserMenu() {
  const [open, setOpen] = useState(false);
  const wrapRef = useRef(null);

  // close on outside click
  useEffect(() => {
    const handler = (e) => {
      if (!wrapRef.current) return;
      if (!wrapRef.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  // close on ESC
  useEffect(() => {
    const handler = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, []);

  return (
    <div ref={wrapRef} className="relative">
      {/* Trigger */}
      <button
        type="button"
        onClick={() => setOpen((p) => !p)}
        className="
          flex items-center gap-2
          px-4 py-2 rounded-full
          bg-black/10  
          text-black
          transition hover:bg-black/60
        "
      >
        <span className="font-semibold">User</span>

        <span
          className="
            w-9 h-9 rounded-full
            bg-emerald-700 text-white
            flex items-center justify-center
          "
        >
          <FiUser size={18} />
        </span>

        <FiChevronDown
          className={`transition ${open ? "rotate-180" : ""}`}
          size={16}
        />
      </button>

      {/* Dropdown */}
      {open && (
        <div
          className="
            absolute right-0 mt-2 w-48
            rounded-md overflow-hidden
            bg-black/90 backdrop-blur
            shadow-xl border
            z-50
          "
        >
          <Link
            to="/login"
            onClick={() => setOpen(false)}
            className="
              block px-5 py-3
              text-black font-semibold
              bg-emerald-700 hover:text-black
              transition
            "
          >
            Login
          </Link>

          <Link
            to="/register"
            onClick={() => setOpen(false)}
            className="
              block px-5 py-3
              text-emerald-700 font-semibold
              hover:bg-emerald-700 hover:text-black
              transition
            "
          >
            Sign up
          </Link>
        </div>
      )}
    </div>
  );
}
