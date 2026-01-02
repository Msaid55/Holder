import { useEffect, useMemo, useState } from "react";
import { FiTrash2, FiMinus, FiPlus } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

import StandardHeader from "./StandardHeader";
import Footerct from "./useCart";
import Footer from "./Footer";
import { readCart, writeCart } from "./useCart";

export default function Cart() {
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();

  // ✅ load once from useCart
  useEffect(() => {
    setCart(readCart());
  }, []);

  // ✅ helpers
  const sync = (nextCart) => {
    setCart(nextCart);
    writeCart(nextCart); // ✅ saves + dispatch cart_updated
  };

  const inc = (id) => {
    const next = cart.map((it) =>
      it.id === id ? { ...it, qty: (it.qty || 1) + 1 } : it
    );
    sync(next);
  };

  const dec = (id) => {
    const next = cart.map((it) =>
      it.id === id ? { ...it, qty: Math.max(1, (it.qty || 1) - 1) } : it
    );
    sync(next);
  };

  const remove = (id) => {
    const next = cart.filter((it) => it.id !== id);
    sync(next);
  };

  const clearAll = () => sync([]);

  // ✅ totals
  const subtotal = useMemo(() => {
    return cart.reduce((sum, it) => {
      const priceNum = Number(String(it.price).replace("$", "")) || 0;
      return sum + priceNum * (it.qty || 1);
    }, 0);
  }, [cart]);

  const shipping = cart.length ? 10 : 0;
  const total = subtotal + shipping;

  return (
    <div className="bg-white relative">
      <StandardHeader />

      <section className="w-full bg-white py-14">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
          <div className="flex items-start justify-between gap-6 flex-col md:flex-row">
            {/* LEFT - Items */}
            <div className="w-full md:flex-1">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-[28px] font-bold text-black">Your Cart</h2>

                {cart.length > 0 && (
                  <button
                    onClick={clearAll}
                    className="text-sm font-semibold text-[#FF4033] hover:underline"
                  >
                    Clear all
                  </button>
                )}
              </div>

              {cart.length === 0 ? (
                <div className="bg-[#f6fbfa] border border-emerald-100 rounded-2xl p-8">
                  <p className="text-black font-semibold text-lg">
                    Your cart is empty 🛒
                  </p>
                  <p className="text-gray-600 mt-2">
                    Add some items from the menu and come back here.
                  </p>

                  <button
                    onClick={() => navigate("/menu")}
                    className="mt-6 px-8 py-3 rounded-full bg-[#007a59] text-white font-semibold hover:bg-[#036149] transition"
                  >
                    Go to Menu
                  </button>
                </div>
              ) : (
                <div className="flex flex-col gap-4">
                  {cart.map((it) => (
                    <div
                      key={it.id}
                      className="bg-white rounded-2xl border border-gray-100 shadow-sm p-4 flex gap-4 items-center"
                    >
                      {/* image */}
                      <div className="w-[92px] h-[92px] rounded-2xl bg-[#f6fbfa] flex items-center justify-center overflow-hidden shrink-0">
                        <img
                          src={it.img}
                          alt={it.title}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      {/* info */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-3">
                          <div>
                            <h3 className="text-[18px] font-bold text-black truncate">
                              {it.title}
                            </h3>
                            <p className="text-sm text-gray-500">
                              {it.category || "Food"}
                            </p>
                          </div>

                          <button
                            onClick={() => remove(it.id)}
                            className="w-10 h-10 rounded-full border border-[#FF4033] text-[#FF4033] flex items-center justify-center hover:bg-[#FF4033] hover:text-white transition"
                            title="Remove"
                          >
                            <FiTrash2 size={18} />
                          </button>
                        </div>

                        <div className="flex items-center justify-between mt-3">
                          {/* counter */}
                          <div className="flex items-center gap-2">
                            <button
                              onClick={() => dec(it.id)}
                              className="w-9 h-9 rounded-full bg-[#FF4033] text-white flex items-center justify-center hover:scale-110 transition"
                            >
                              <FiMinus />
                            </button>

                            <span className="w-10 text-center font-bold text-black">
                              {it.qty || 1}
                            </span>

                            <button
                              onClick={() => inc(it.id)}
                              className="w-9 h-9 rounded-full bg-[#007a59] text-white flex items-center justify-center hover:scale-110 transition"
                            >
                              <FiPlus />
                            </button>
                          </div>

                          {/* price */}
                          <div className="text-right">
                            <p className="text-sm text-gray-500">Price</p>
                            <p className="text-[18px] font-extrabold text-black">
                              {it.price}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* RIGHT - Summary */}
            <div className="w-full md:w-[380px] shrink-0">
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
                <h3 className="text-[20px] font-bold text-black mb-4">
                  Order Summary
                </h3>

                <div className="space-y-3 text-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Subtotal</span>
                    <span className="font-semibold text-black">
                      ${subtotal.toFixed(2)}
                    </span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Shipping</span>
                    <span className="font-semibold text-black">
                      ${shipping.toFixed(2)}
                    </span>
                  </div>

                  <div className="h-px bg-gray-100 my-2" />

                  <div className="flex items-center justify-between">
                    <span className="text-black font-bold">Total</span>
                    <span className="text-black font-extrabold text-[20px]">
                      ${total.toFixed(2)}
                    </span>
                  </div>
                </div>

                <button
                  disabled={cart.length === 0}
                  className={[
                    "mt-6 w-full h-[48px] rounded-full font-bold text-white transition",
                    cart.length
                      ? "bg-[#007a59] hover:bg-[#036149]"
                      : "bg-[#007a59]/50 cursor-not-allowed",
                  ].join(" ")}
                  onClick={() => alert("Checkout (later)")}
                >
                  Checkout
                </button>

                <button
                  className="mt-3 w-full h-[48px] rounded-full font-bold border border-[#FF4033] text-[#FF4033] hover:bg-[#FF4033] hover:text-white transition"
                  onClick={() => navigate("/menu")}
                >
                  Continue Shopping
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
