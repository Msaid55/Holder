import { useEffect, useState } from "react";

export default function useCartCount() {
  const [count, setCount] = useState(0);

  const calc = () => {
    const saved = localStorage.getItem("cart_items");
    const cart = saved ? JSON.parse(saved) : [];
    const total = cart.reduce((sum, it) => sum + (it.qty || 1), 0);
    setCount(total);
  };

  useEffect(() => {
    calc();

    const onStorage = () => calc();
    window.addEventListener("storage", onStorage);

    const onCartUpdated = () => calc();
    window.addEventListener("cart_updated", onCartUpdated);

    return () => {
      window.removeEventListener("storage", onStorage);
      window.removeEventListener("cart_updated", onCartUpdated);
    };
  }, []);

  return count;
}
