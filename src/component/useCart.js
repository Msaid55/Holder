import { useEffect, useMemo, useState } from "react";

const getCurrentUser = () => {
  try {
    return JSON.parse(localStorage.getItem("user"));
  } catch {
    return null;
  }
};

const getCartKey = () => {
  const user = getCurrentUser();
  return user?.id ? `cart_items_user_${user.id}` : "cart_items_guest";
};

const getId = (p) =>
  p.id || `${p.category || "item"}-${p.title || "product"}`.replaceAll(" ", "");

export function readCart() {
  try {
    return JSON.parse(localStorage.getItem(getCartKey())) || [];
  } catch {
    return [];
  }
}

export function writeCart(cart) {
  localStorage.setItem(getCartKey(), JSON.stringify(cart));
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

export function removeFromCart(productId) {
  const cart = readCart();
  const updated = cart.filter((item) => getId(item) !== productId);
  writeCart(updated);
  return updated;
}

export function clearCart() {
  writeCart([]);
}

export default function useCartCount() {
  const [cart, setCart] = useState(readCart());

  useEffect(() => {
    const sync = () => setCart(readCart());

    window.addEventListener("cart_updated", sync);
    window.addEventListener("storage", sync);
    window.addEventListener("user_changed", sync);

    return () => {
      window.removeEventListener("cart_updated", sync);
      window.removeEventListener("storage", sync);
      window.removeEventListener("user_changed", sync);
    };
  }, []);

  const count = useMemo(
    () => cart.reduce((sum, it) => sum + (it.qty || 1), 0),
    [cart]
  );

  return count;
}