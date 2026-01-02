import { useEffect, useMemo, useState } from "react";

const KEY = "cart_items";

const getId = (p) => p.id || `${p.category}-${p.title}`.replaceAll(" ", "");

export function readCart() {
  try {
    return JSON.parse(localStorage.getItem(KEY)) || [];
  } catch {
    return [];
  }
}

export function writeCart(cart) {
  localStorage.setItem(KEY, JSON.stringify(cart));
  window.dispatchEvent(new Event("cart_updated"));
}

export function addToCart(product, qty = 1) {
  const cart = readCart();
  const id = getId(product);

  const existing = cart.find((c) => getId(c) === id);

  let updated;
  if (existing) {
    updated = cart.map((c) =>
      getId(c) === id
        ? { ...c, id, qty: (c.qty || 1) + qty }
        : { ...c, id: getId(c) }
    );
  } else {
    updated = [
      ...cart.map((c) => ({ ...c, id: getId(c) })),
      { ...product, id, qty },
    ];
  }

  writeCart(updated);
  return updated;
}

export default function useCartCount() {
  const [cart, setCart] = useState(readCart());

  useEffect(() => {
    const sync = () => setCart(readCart());
    window.addEventListener("cart_updated", sync);
    window.addEventListener("storage", sync);
    return () => {
      window.removeEventListener("cart_updated", sync);
      window.removeEventListener("storage", sync);
    };
  }, []);

  const count = useMemo(
    () => cart.reduce((sum, it) => sum + (it.qty || 1), 0),
    [cart]
  );

  return count;
}
