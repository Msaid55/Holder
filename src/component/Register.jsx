import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiUser, FiMail, FiLock, FiEye, FiEyeOff } from "react-icons/fi";
import UseScrollReveal from "./UseScrollReveal";
export default function Register() {
  UseScrollReveal();
  const navigate = useNavigate();
  const [showPass, setShowPass] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const [form, setForm] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    agree: false,
  });

  const onChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((p) => ({ ...p, [name]: type === "checkbox" ? checked : value }));
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (form.password !== form.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    if (!form.agree) {
      alert("Please accept Terms & Privacy Policy.");
      return;
    }

    //  هنا هتربطي باك اند بعدين
    // دلوقتي هنوديه لصفحة اللوجين
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-white">
      {/* background soft blocks */}
      <div className="relative overflow-hidden">
        <div className="absolute -top-24 -left-24 w-[260px] h-[260px] rounded-full bg-emerald-700/10 blur-2xl" />
        <div className="absolute -bottom-24 -right-24 w-[280px] h-[280px] rounded-full bg-[#FF4033]/10 blur-2xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 py-12">
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Left side */}
          <div className="hidden reveal lg:block">
            <div className="rounded-3xl p-10 bg-[#fbf3e6] border border-black/5 shadow-sm">
              <h2 className="text-[42px] font-extrabold leading-tight text-[#007a59]">
                Create Account ✨
              </h2>
              <p className="mt-4 text-[16px] text-gray-700 leading-7 max-w-lg">
                Join us to order faster, manage reservations, and get updates on
                new menu items.
              </p>

              <div className="mt-8 flex items-center gap-3">
                <span className="inline-block w-3 h-3 rounded-full bg-[#007a59]" />
                <span className="inline-block w-3 h-3 rounded-full bg-[#FF4033]" />
                <span className="inline-block w-3 h-3 rounded-full bg-amber-400" />
              </div>

              <div className="mt-10">
                <Link
                  to="/login"
                  className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-[#007a59] text-white font-semibold hover:bg-[#036149] transition"
                >
                  Already have an account? Login
                </Link>
              </div>
            </div>
          </div>

          {/* Right side (Form) */}
          <div className="w-full reveal">
            <div className="w-full max-w-[520px] mx-auto bg-white rounded-3xl shadow-[0_14px_40px_rgba(0,0,0,0.06)] border border-black/5 p-7 sm:p-10">
              <div className="flex flex-col items-center text-center">
                <h1 className="text-[28px] sm:text-[32px] font-extrabold text-[#007a59]">
                  Sign Up
                </h1>
                <p className="mt-2 text-gray-500">
                  Create your account in a few seconds
                </p>
                <div className="mt-4 w-[120px] h-[6px] bg-[#FF4033] rounded-full" />
              </div>

              <form onSubmit={onSubmit} className="mt-8 space-y-4">
                {/* Full Name */}
                <div>
                  <label className="text-sm font-semibold text-gray-700">
                    Full Name
                  </label>
                  <div className="mt-2 relative">
                    <FiUser className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input
                      type="text"
                      name="fullName"
                      value={form.fullName}
                      onChange={onChange}
                      placeholder="Your name"
                      className="w-full pl-11 pr-4 py-3 rounded-2xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-700/30 focus:border-emerald-700"
                      required
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label className="text-sm font-semibold text-gray-700">
                    Email
                  </label>
                  <div className="mt-2 relative">
                    <FiMail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={onChange}
                      placeholder="example@email.com"
                      className="w-full pl-11 pr-4 py-3 rounded-2xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-700/30 focus:border-emerald-700"
                      required
                    />
                  </div>
                </div>

                {/* Password */}
                <div>
                  <label className="text-sm font-semibold text-gray-700">
                    Password
                  </label>
                  <div className="mt-2 relative">
                    <FiLock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input
                      type={showPass ? "text" : "password"}
                      name="password"
                      value={form.password}
                      onChange={onChange}
                      placeholder="••••••••"
                      className="w-full pl-11 pr-12 py-3 rounded-2xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-700/30 focus:border-emerald-700"
                      required
                      minLength={6}
                    />
                    <button
                      type="button"
                      onClick={() => setShowPass((p) => !p)}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                      aria-label="toggle password"
                    >
                      {showPass ? <FiEyeOff size={18} /> : <FiEye size={18} />}
                    </button>
                  </div>
                </div>

                {/* Confirm Password */}
                <div>
                  <label className="text-sm font-semibold text-gray-700">
                    Confirm Password
                  </label>
                  <div className="mt-2 relative">
                    <FiLock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input
                      type={showConfirm ? "text" : "password"}
                      name="confirmPassword"
                      value={form.confirmPassword}
                      onChange={onChange}
                      placeholder="••••••••"
                      className="w-full pl-11 pr-12 py-3 rounded-2xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-700/30 focus:border-emerald-700"
                      required
                      minLength={6}
                    />
                    <button
                      type="button"
                      onClick={() => setShowConfirm((p) => !p)}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                      aria-label="toggle confirm password"
                    >
                      {showConfirm ? <FiEyeOff size={18} /> : <FiEye size={18} />}
                    </button>
                  </div>
                </div>

                {/* Terms */}
                <label className="flex items-start gap-2 text-sm text-gray-600">
                  <input
                    type="checkbox"
                    name="agree"
                    checked={form.agree}
                    onChange={onChange}
                    className="mt-1 accent-emerald-700"
                  />
                  <span>
                    I agree to the{" "}
                    <span className="font-bold text-[#FF4033]">Terms</span> &{" "}
                    <span className="font-bold text-[#FF4033]">Privacy Policy</span>
                  </span>
                </label>

                {/* Button */}
                <button
                  type="submit"
                  className="w-full h-[52px] rounded-full bg-[#007a59] text-white font-bold hover:bg-[#036149] transition"
                >
                  Create Account
                </button>

                <p className="text-center text-sm text-gray-600 pt-1">
                  Already have an account?{" "}
                  <Link
                    to="/login"
                    className="font-bold text-[#FF4033] hover:underline"
                  >
                    Login
                  </Link>
                </p>
              </form>
            </div>

            <p className="mt-6 text-center text-xs text-gray-400">
              By creating an account, you agree to our Terms & Privacy Policy.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
