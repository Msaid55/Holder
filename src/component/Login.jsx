import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiMail, FiLock, FiEye, FiEyeOff } from "react-icons/fi";
import UseScrollReveal from "./UseScrollReveal";
export default function Login() {
  UseScrollReveal();
  const navigate = useNavigate();
  const [showPass, setShowPass] = useState(false);

  const [form, setForm] = useState({
    email: "",
    password: "",
    remember: true,
  });

  const onChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((p) => ({ ...p, [name]: type === "checkbox" ? checked : value }));
  };

  const onSubmit = (e) => {
    e.preventDefault();

    //  هنا هنربط بباك اند بعدين
    // دلوقتي بس هنمشي المستخدم للهوم
    navigate("/");
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
          {/* Left side (Brand Card) */}
          <div className="hidden reveal lg:block">
            <div className="rounded-3xl p-10 bg-[#fbf3e6] border border-black/5 shadow-sm">
              <h2 className="text-[42px] font-extrabold leading-tight text-[#007a59]">
                Welcome back 👋
              </h2>
              <p className="mt-4 text-[16px] text-gray-700 leading-7 max-w-lg">
                Log in to manage your orders, reservations, and explore new menu
                items.
              </p>

              <div className="mt-8 flex items-center gap-3">
                <span className="inline-block w-3 h-3 rounded-full bg-[#007a59]" />
                <span className="inline-block w-3 h-3 rounded-full bg-[#FF4033]" />
                <span className="inline-block w-3 h-3 rounded-full bg-amber-400" />
              </div>

              <div className="mt-10">
                <Link
                  to="/"
                  className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-[#007a59] text-white font-semibold hover:bg-[#036149] transition"
                >
                  Go to Home
                </Link>
              </div>
            </div>
          </div>

          {/* Right side (Form) */}
          <div className="w-full reveal">
            <div className="w-full max-w-[520px] mx-auto bg-white rounded-3xl shadow-[0_14px_40px_rgba(0,0,0,0.06)] border border-black/5 p-7 sm:p-10">
              <div className="flex flex-col items-center text-center">
                <h1 className="text-[28px] sm:text-[32px] font-extrabold text-[#007a59]">
                  Login
                </h1>
                <p className="mt-2 text-gray-500">
                  Please enter your details to sign in
                </p>

                <div className="mt-4 w-[120px] h-[6px] bg-[#FF4033] rounded-full" />
              </div>

              <form onSubmit={onSubmit} className="mt-8 space-y-4">
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

                {/* Row */}
                <div className="flex items-center justify-between">
                  <label className="flex items-center gap-2 text-sm text-gray-600">
                    <input
                      type="checkbox"
                      name="remember"
                      checked={form.remember}
                      onChange={onChange}
                      className="accent-emerald-700"
                    />
                    Remember me
                  </label>

                  <Link
                    to="/forgot-password"
                    className="text-sm font-semibold text-[#FF4033] hover:underline"
                  >
                    Forgot Password?
                  </Link>
                </div>

                {/* Button */}
                <button
                  type="submit"
                  className="w-full h-[52px] rounded-full bg-[#007a59] text-white font-bold hover:bg-[#036149] transition"
                >
                  Sign in
                </button>

                {/* Divider */}
                <div className="flex items-center gap-4 py-2">
                  <div className="h-px flex-1 bg-gray-200" />
                  <span className="text-xs text-gray-400">OR</span>
                  <div className="h-px flex-1 bg-gray-200" />
                </div>

                {/* Social (optional) */}
                <button
                  type="button"
                  className="w-full h-[52px] rounded-full border border-gray-200 font-semibold text-gray-700 hover:bg-gray-50 transition"
                >
                  Continue with Google
                </button>

                <p className="text-center text-sm text-gray-600 pt-2">
                  Don’t have an account?{" "}
                  <Link
                    to="/register"
                    className="font-bold text-[#FF4033] hover:underline"
                  >
                    Create one
                  </Link>
                </p>
              </form>
            </div>

            {/* small note */}
            <p className="mt-6 text-center text-xs text-gray-400">
              By continuing, you agree to our Terms & Privacy Policy.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
