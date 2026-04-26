
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiUser, FiMail, FiLock, FiEye, FiEyeOff } from "react-icons/fi";
import UseScrollReveal from "./UseScrollReveal";
import { registerUser } from "../api/api";

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
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  // ✅ FIXED (async)
  const onSubmit = async (e) => {
    e.preventDefault();

    if (form.password !== form.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    if (!form.agree) {
      alert("Please accept Terms & Privacy Policy.");
      return;
    }

    try {
      await registerUser(form);
      alert("Account created successfully!");
      navigate("/login");
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="relative overflow-hidden">
        <div className="absolute -top-24 -left-24 w-[260px] h-[260px] rounded-full bg-emerald-700/10 blur-2xl" />
        <div className="absolute -bottom-24 -right-24 w-[280px] h-[280px] rounded-full bg-[#FF4033]/10 blur-2xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 py-12">
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          
          {/* LEFT */}
          <div className="hidden reveal lg:block">
            <div className="rounded-3xl p-10 bg-[#fbf3e6] border border-black/5 shadow-sm">
              <h2 className="text-[42px] font-extrabold text-[#007a59]">
                Create Account ✨
              </h2>

              <p className="mt-4 text-gray-700">
                Join us to order faster and manage your account easily.
              </p>

              <div className="mt-10">
                <Link
                  to="/login"
                  className="px-8 py-3 rounded-full bg-[#007a59] text-white font-semibold hover:bg-[#036149]"
                >
                  Already have an account? Login
                </Link>
              </div>
            </div>
          </div>

          {/* RIGHT FORM */}
          <div className="w-full reveal">
            <div className="max-w-[520px] mx-auto bg-white rounded-3xl shadow p-8">

              <h1 className="text-3xl font-bold text-center text-[#007a59]">
                Register
              </h1>

              <form onSubmit={onSubmit} className="mt-6 space-y-4">

                {/* NAME */}
                <input
                  type="text"
                  name="fullName"
                  value={form.fullName}
                  onChange={onChange}
                  placeholder="Full Name"
                  className="w-full p-3 border rounded-xl"
                  required
                />

                {/* EMAIL */}
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={onChange}
                  placeholder="Email"
                  className="w-full p-3 border rounded-xl"
                  required
                />

                {/* PASSWORD */}
                <div className="relative">
                  <input
                    type={showPass ? "text" : "password"}
                    name="password"
                    value={form.password}
                    onChange={onChange}
                    placeholder="Password"
                    className="w-full p-3 border rounded-xl"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPass(!showPass)}
                    className="absolute right-3 top-3"
                  >
                    {showPass ? <FiEyeOff /> : <FiEye />}
                  </button>
                </div>

                {/* CONFIRM */}
                <div className="relative">
                  <input
                    type={showConfirm ? "text" : "password"}
                    name="confirmPassword"
                    value={form.confirmPassword}
                    onChange={onChange}
                    placeholder="Confirm Password"
                    className="w-full p-3 border rounded-xl"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirm(!showConfirm)}
                    className="absolute right-3 top-3"
                  >
                    {showConfirm ? <FiEyeOff /> : <FiEye />}
                  </button>
                </div>

                {/* CHECK */}
                <label className="flex gap-2 text-sm">
                  <input
                    type="checkbox"
                    name="agree"
                    checked={form.agree}
                    onChange={onChange}
                  />
                  I agree to Terms
                </label>

                {/* BUTTON */}
                <button
                  type="submit"
                  className="w-full py-3 bg-[#007a59] text-white rounded-xl"
                >
                  Create Account
                </button>

                <p className="text-center text-sm">
                  Already have an account?{" "}
                  <Link to="/login" className="text-red-500">
                    Login
                  </Link>
                </p>

              </form>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

