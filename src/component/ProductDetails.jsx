import { useLocation } from "react-router-dom";
import { useState } from "react";
import { FiShoppingBag } from "react-icons/fi";

export default function ProductDetails() {
    const location = useLocation();

    if (!location.state) {
      return (
        <div className="text-center py-20 text-xl">
          No product selected
        </div>
      );
    }
    
    const { item, items } = location.state;
    

  const relatedImages = items.filter(
    (i) => i.category === item.category
  );

  const [mainImage, setMainImage] = useState(item.img);
  const [count, setCount] = useState(1);

  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12">

        {/* الصور */}
        <div>
          <div className="w-full flex justify-center">
            <img
              src={mainImage}
              alt={item.title}
              className="w-[350px]"
            />
          </div>

          {/* الصور الصغيرة */}
          <div className="flex gap-4 justify-center mt-6">
            {relatedImages.slice(0, 4).map((imgItem, i) => (
              <img
                key={i}
                src={imgItem.img}
                onClick={() => setMainImage(imgItem.img)}
                className="w-16 h-16 rounded-full cursor-pointer border"
              />
            ))}
          </div>
        </div>

        {/* التفاصيل */}
        <div>
          <h2 className="text-3xl font-bold mb-4">
            {item.title}
          </h2>

          <p className="text-gray-600 mb-6">
            Fresh and delicious food made with love.
          </p>

          {/* العداد */}
          <div className="flex items-center gap-4 mb-6">
            <button
              onClick={() => setCount(Math.max(1, count - 1))}
              className="w-8 h-8 rounded-full bg-red-500 text-white"
            >
              -
            </button>
            <span className="text-xl font-semibold">{count}</span>
            <button
              onClick={() => setCount(count + 1)}
              className="w-8 h-8 rounded-full bg-green-500 text-white"
            >
              +
            </button>
          </div>

          {/* السعر */}
          <div className="text-2xl font-bold mb-6">
            {item.price}
          </div>

          {/* أزرار */}
          <div className="flex gap-4">
            <button className="px-8 py-3 rounded-full bg-[#007a59] text-white">
              Order Now
            </button>

            <button className="px-6 py-3 rounded-full border border-red-500 text-red-500">
              <FiShoppingBag size={22} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
