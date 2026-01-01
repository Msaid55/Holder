import { useLocation, useNavigate } from "react-router-dom";
import { useMemo, useState, useEffect } from "react";
import { FiShoppingBag } from "react-icons/fi";
import { ITEM_DETAILS } from "./ItemDetailsData";

export default function ItemsCounter() {
  const location = useLocation();
  const navigate = useNavigate();

  if (!location.state) {
    return <div className="text-center py-20 text-xl">No product selected</div>;
  }

  const { item, items } = location.state;

  // ✅ العنصر المختار (هيتغير لما تضغطي على الصور الصغيرة)
  const [selectedItem, setSelectedItem] = useState(item);

  // لو الصفحة اتفتحت على item جديد (لو رجعتي وفتحتي عنصر تاني)
  useEffect(() => {
    setSelectedItem(item);
    setCount(1);
  }, [item]);

  // ✅ details dynamic حسب العنصر المختار
  const details = ITEM_DETAILS[selectedItem.title] || {
    desc: "Fresh and delicious food made with love.",
    oldPrice: "",
    rating: 5,
  };

  // ✅ نفس الكاتيجوري + استبعد نفس الايتم المختار
  const relatedImages = useMemo(
    () =>
      items.filter(
        (i) =>
          i.category === selectedItem.category &&
          i.title !== selectedItem.title
      ),
    [items, selectedItem.category, selectedItem.title]
  );

  const [count, setCount] = useState(1);

  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* LEFT - Images */}
        <div>
          <div className="w-full flex justify-center">
            <img
              src={selectedItem.img}
              alt={selectedItem.title}
              className="w-[420px] max-w-full"
            />
          </div>

          {/* Thumbs */}
          <div className="flex gap-4 justify-center mt-8">
            {[selectedItem, ...relatedImages].slice(0, 4).map((imgItem, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setSelectedItem(imgItem)}
                className={[
                  "w-16 h-16 rounded-full overflow-hidden border",
                  selectedItem.img === imgItem.img
                    ? "border-emerald-700"
                    : "border-gray-200",
                ].join(" ")}
              >
                <img
                  src={imgItem.img}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        {/* RIGHT - Details */}
        <div className="flex flex-col">
          <h2 className="text-3xl text-black font-bold mb-4">
            {selectedItem.title}
          </h2>

          {/* ✅ description dynamic */}
          <p className="text-gray-600 leading-7 mb-6">{details.desc}</p>

          {/* counter + price row */}
          <div className="flex items-center justify-between mt-2">
            {/* Counter */}
            <div className="flex items-center gap-4">
              <button
                onClick={() => setCount((c) => Math.max(1, c - 1))}
                className="w-10 h-10 rounded-full bg-[#FF4033] text-white text-xl flex items-center justify-center"
              >
                −
              </button>

              <span className="text-lg text-black font-semibold">{count}</span>

              <button
                onClick={() => setCount((c) => c + 1)}
                className="w-10 h-10 rounded-full bg-[#007a59] text-white text-xl flex items-center justify-center"
              >
                +
              </button>
            </div>

            {/* Price */}
            <div className="text-right">
              {/* ✅ oldPrice from details */}
              {details.oldPrice && (
                <div className="text-sm text-gray-500 line-through">
                  {details.oldPrice}
                </div>
              )}

              <div className="text-3xl font-bold text-black">
                {selectedItem.price}
              </div>

              {/* ✅ rating from details */}
              <div className="flex justify-end gap-1 mt-2">
                {Array.from({ length: details.rating || 5 }).map((_, i) => (
                  <span key={i} className="text-[#ffb400] text-[16px]">
                    ★
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex items-center gap-4 mt-8">
            <button className="px-10 py-3 rounded-full bg-[#007a59] text-white font-semibold hover:bg-[#036149] transition">
              Order Now
            </button>

            <button
              className="px-10 py-3 rounded-full border border-[#FF4033] text-[#FF4033] font-semibold hover:bg-[#FF4033] hover:text-white transition flex items-center gap-2"
              onClick={() => alert("Added to Cart")}
            >
              <FiShoppingBag size={20} />
              Add to Cart
            </button>
          </div>

          {/* back */}
          <button
            className="mt-8 text-sm text-gray-500 hover:text-black w-fit"
            onClick={() => navigate(-1)}
          >
            ← Back
          </button>
        </div>
      </div>
    </section>
  );
}
