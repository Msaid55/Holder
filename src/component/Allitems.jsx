import { useEffect, useMemo, useRef, useState } from "react";
import { FiShoppingBag } from "react-icons/fi";
import { NavLink, Link } from "react-router-dom";
import UseScrollReveal from "./UseScrollReveal";
import toast from "react-hot-toast";
import { addToCart } from "./useCart";
import { MdOutlineStar } from "react-icons/md";

export default function Allitems({ activeTab = "Breakfast" }) {
  UseScrollReveal();

  const STRAPI_URL =
    import.meta.env.VITE_STRAPI_URL || "http://localhost:1337";

  const cacheRef = useRef({});

  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);

  const normalize = (s) =>
    (s || "").toString().toLowerCase().replace(/\s+/g, "").trim();

  useEffect(() => {
    let mounted = true;

    const loadProductsByCategory = async () => {
      const cacheKey = normalize(activeTab);

      if (cacheRef.current[cacheKey]) {
        setItems(cacheRef.current[cacheKey]);
        return;
      }

      try {
        setLoading(true);

        const url =
          `${STRAPI_URL}/api/products` +
          `?filters[category][title][$eq]=${encodeURIComponent(activeTab)}` +
          `&populate=*` +
          `&pagination[pageSize]=8`;

        const res = await fetch(url);

        if (!res.ok) {
          throw new Error(`Products fetch failed: ${res.status}`);
        }

        const json = await res.json();
        const products = json?.data || [];

        const mapped = products.map((product) => ({
          id: product.id,
          title: product.title || "Untitled",
          price: product.price != null ? `$${product.price}` : "$0",
          img: product?.image?.url || "",
          category: product?.category?.title || activeTab,
          _raw: product,
        }));

        cacheRef.current[cacheKey] = mapped;

        if (mounted) {
          setItems(mapped);
        }
      } catch (error) {
        console.log("products error:", error);
        if (mounted) {
          setItems([]);
        }
      } finally {
        if (mounted) {
          setLoading(false);
        }
      }
    };

    loadProductsByCategory();

    return () => {
      mounted = false;
    };
  }, [activeTab, STRAPI_URL]);

  const filteredItems = useMemo(() => items.slice(0, 8), [items]);

  const handleOrderNow = (product) => {
    addToCart(product, 1);
    toast.success(`${product.title} added to cart 🛒`);
  };

  return (
    <div className="w-full">
      {loading ? (
        <div className="py-16 text-center text-gray-500">Loading...</div>
      ) : (
        <div
          className="
            grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4
            gap-6 mt-10 reveal
          "
        >
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="
                relative bg-white rounded-3xl px-6 pt-8 pb-6
                shadow-[0_14px_40px_rgba(0,0,0,0.05)]
                overflow-visible group
              "
            >
              <div
                className="
                  absolute bottom-0 left-0 w-full h-[75%]
                  bg-[#e9f4f2] rounded-xl
                  origin-bottom scale-y-0
                  transition-all duration-300 ease-in-out
                  group-hover:scale-y-100
                "
              />

              <NavLink
                to="/ItemsDetails"
                state={{ item, items: filteredItems }}
                className="relative z-20 flex justify-center"
              >
                {item.img ? (
                  <img
                    src={item.img}
                    alt={item.title}
                    loading="lazy"
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                      const fallback = e.currentTarget.nextElementSibling;
                      if (fallback) fallback.style.display = "flex";
                    }}
                    className="
                      w-[212px] h-[213px] object-contain mt-[-40px]
                      transition-all duration-300
                      group-hover:-translate-y-2
                    "
                  />
                ) : null}

                <div
                  style={{ display: item.img ? "none" : "flex" }}
                  className="
                    w-[212px] h-[213px] mt-[-40px]
                    items-center justify-center text-gray-400
                  "
                >
                  No Image
                </div>
              </NavLink>

              <div className="relative z-30 mt-14">
                <div className="flex items-center justify-between w-[230px] h-[45px]">
                  <h3 className="text-[20px] font-bold text-[#111]">
                    {item.title}
                  </h3>

                  <div className="text-[18px] font-extrabold text-[#111]">
                    {item.price}
                  </div>
                </div>

                <div className="flex gap-1 mt-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span key={i} className="text-[#ffb400] text-[14px]">
                      <MdOutlineStar />
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between mt-5">
                  <button
                    onClick={() => handleOrderNow(item)}
                    className="
                      px-8 py-2.5 rounded-full bg-[#007a59] text-white
                      text-[16px] font-semibold transition duration-200
                      hover:bg-[#036149]
                    "
                  >
                    Order Now
                  </button>

                  <Link
                    to="/cart"
                    className="
                      w-[45px] h-[45px] rounded-full border border-[#FF4033]
                      text-[#FF4033] flex items-center justify-center
                      transition-all duration-200 cursor-pointer
                      hover:bg-[#FF4033] hover:text-white hover:scale-110
                    "
                  >
                    <FiShoppingBag size={24} />
                  </Link>
                </div>
              </div>
            </div>
          ))}

          {!filteredItems.length && (
            <div className="col-span-full py-10 text-center text-gray-500">
              No items found for this category.
            </div>
          )}
        </div>
      )}
    </div>
  );
}