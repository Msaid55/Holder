import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import StandardHeader from "./StandardHeader";
import Footer from "./Footer";
import toast from "react-hot-toast";
import { readCart, writeCart } from "./useCart";


export default function Checkout() {
  const navigate = useNavigate();
  const cart = readCart();

  const subtotal = useMemo(() => {
    return cart.reduce((sum, it) => {
      const priceNum = Number(String(it.price).replace("$", "")) || 0;
      return sum + priceNum * (it.qty || 1);
    }, 0);
  }, [cart]);

  const shipping = cart.length ? 10 : 0;
  const total = subtotal + shipping;

  const [form, setForm] = useState({
    fullName: "",
    phone: "",
    email: "",
    address: "",
    city: "",
    notes: "",
    payment: "cash",
  });

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm((p) => ({ ...p, [name]: value }));
  };

  const validate = () => {
    if (!cart.length) {
      toast.error("Your cart is empty.");
      return false;
    }
    if (!form.fullName.trim()) return toast.error("Full name is required."), false;
    if (!form.phone.trim()) return toast.error("Phone is required."), false;
    if (!form.address.trim()) return toast.error("Address is required."), false;
    if (!form.city.trim()) return toast.error("City is required."), false;
    return true;
  };

  const placeOrder = () => {
    if (!validate()) return;

    // ✅ simulate order success
    toast.success("Order placed successfully ✅");

    // ✅ clear cart after order
    writeCart([]);

    // ✅ go home or menu
    setTimeout(() => navigate("/"), 800);
  };

  return (
    <div className="bg-white relative">
      <StandardHeader />

      <section className="w-full bg-white py-14">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
          <div className="flex items-start justify-between gap-6 flex-col lg:flex-row">
            {/* LEFT - FORM */}
            <div className="w-full lg:flex-1">
              <h2 className="text-[28px] font-bold text-black mb-6">Checkout</h2>

              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Field label="Full Name" name="fullName" value={form.fullName} onChange={onChange} />
                  <Field label="Phone" name="phone" value={form.phone} onChange={onChange} />
                  <Field label="Email (optional)" name="email" value={form.email} onChange={onChange} />
                  <Field label="City" name="city" value={form.city} onChange={onChange} />
                </div>

                <div className="mt-4">
                  <label className="text-sm font-semibold text-black">Address</label>
                  <textarea
                    name="address"
                    value={form.address}
                    onChange={onChange}
                    rows={3}
                    className="mt-2 w-full rounded-2xl border border-gray-200 px-4 py-3 outline-none focus:border-emerald-700"
                    placeholder="Street, building, apartment..."
                  />
                </div>

                <div className="mt-4">
                  <label className="text-sm font-semibold text-black">Order Notes (optional)</label>
                  <textarea
                    name="notes"
                    value={form.notes}
                    onChange={onChange}
                    rows={3}
                    className="mt-2 w-full rounded-2xl border border-gray-200 px-4 py-3 outline-none focus:border-emerald-700"
                    placeholder="Any extra instructions..."
                  />
                </div>

                <div className="mt-6">
                  <p className="text-sm font-semibold text-black mb-2">Payment Method</p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <PaymentOption
                      active={form.payment === "cash"}
                      onClick={() => setForm((p) => ({ ...p, payment: "cash" }))}
                      title="Cash on Delivery"
                      desc="Pay when your order arrives"
                    />
                    <PaymentOption
                      active={form.payment === "card"}
                      onClick={() => setForm((p) => ({ ...p, payment: "card" }))}
                      title="Credit / Debit Card"
                      desc="Pay online (demo)"
                    />
                  </div>
                </div>

                <button
                  onClick={placeOrder}
                  className="mt-6 w-full h-[52px] rounded-full bg-[#007a59] hover:bg-[#036149] text-white font-bold transition"
                >
                  Place Order
                </button>

                <button
                  onClick={() => navigate("/cart")}
                  className="mt-3 w-full h-[52px] rounded-full border border-[#FF4033] text-[#FF4033] font-bold hover:bg-[#FF4033] hover:text-white transition"
                >
                  Back to Cart
                </button>
              </div>
            </div>

            {/* RIGHT - SUMMARY */}
            <div className="w-full lg:w-[380px] shrink-0">
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
                <h3 className="text-[20px] font-bold text-black mb-4">Order Summary</h3>

                {cart.length === 0 ? (
                  <div className="bg-[#f6fbfa] border border-emerald-100 rounded-2xl p-5">
                    <p className="text-black font-semibold">Your cart is empty 🛒</p>
                    <p className="text-gray-600 mt-1 text-sm">Add items first then checkout.</p>
                  </div>
                ) : (
                  <div className="space-y-3">
                    {cart.map((it) => (
                      <div key={it.id} className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-xl bg-[#f6fbfa] overflow-hidden shrink-0">
                          <img src={it.img} alt={it.title} className="w-full h-full object-cover" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="font-semibold text-black truncate">{it.title}</p>
                          <p className="text-xs text-gray-500">Qty: {it.qty || 1}</p>
                        </div>
                        <p className="font-bold text-black">{it.price}</p>
                      </div>
                    ))}
                  </div>
                )}

                <div className="h-px bg-gray-100 my-5" />

                <div className="space-y-2 text-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Subtotal</span>
                    <span className="font-semibold text-black">${subtotal.toFixed(2)}</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Shipping</span>
                    <span className="font-semibold text-black">${shipping.toFixed(2)}</span>
                  </div>

                  <div className="h-px bg-gray-100 my-2" />

                  <div className="flex items-center justify-between">
                    <span className="text-black font-bold">Total</span>
                    <span className="text-black font-extrabold text-[20px]">${total.toFixed(2)}</span>
                  </div>
                </div>

                <p className="text-xs text-gray-500 mt-4">
                  This is a demo checkout page. You can connect it to a real payment API later.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

/* ---------- helpers ---------- */

function Field({ label, name, value, onChange }) {
  return (
    <div>
      <label className="text-sm font-semibold text-black">{label}</label>
      <input
        name={name}
        value={value}
        onChange={onChange}
        className="mt-2 w-full h-11 rounded-full border border-gray-200 px-4 outline-none focus:border-emerald-700"
        placeholder={label}
      />
    </div>
  );
}

function PaymentOption({ active, onClick, title, desc }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={[
        "flex-1 text-left p-4 rounded-2xl border transition",
        active ? "border-emerald-700 bg-[#f6fbfa]" : "border-gray-200 hover:border-emerald-300",
      ].join(" ")}
    >
      <p className="font-bold text-black">{title}</p>
      <p className="text-xs text-gray-500 mt-1">{desc}</p>
    </button>
  );
}
