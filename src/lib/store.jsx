import React, { createContext, useContext, useEffect, useState, useCallback } from "react";

const CART_KEY = "shopflow_cart";
const FAV_KEY = "shopflow_favorites";

const StoreContext = createContext(null);

function readJSON(key, fallback) {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch {
    return fallback;
  }
}

export function StoreProvider({ children }) {
  const [cart, setCart] = useState(() => readJSON(CART_KEY, []));
  const [favorites, setFavorites] = useState(() => readJSON(FAV_KEY, []));
  const [cartPulse, setCartPulse] = useState(0);

  useEffect(() => {
    localStorage.setItem(CART_KEY, JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem(FAV_KEY, JSON.stringify(favorites));
  }, [favorites]);

  const addToCart = useCallback((product, qty = 1) => {
    setCart((prev) => {
      const existing = prev.find((i) => i.id === product.id);
      if (existing) {
        return prev.map((i) =>
          i.id === product.id ? { ...i, qty: i.qty + qty } : i
        );
      }
      return [...prev, { id: product.id, name: product.name, price: product.price, image: product.image, qty }];
    });
    setCartPulse((n) => n + 1);
  }, []);

  const updateQty = useCallback((id, qty) => {
    setCart((prev) =>
      prev.map((i) => (i.id === id ? { ...i, qty: Math.max(1, qty) } : i))
    );
  }, []);

  const removeFromCart = useCallback((id) => {
    setCart((prev) => prev.filter((i) => i.id !== id));
  }, []);

  const clearCart = useCallback(() => setCart([]), []);

  const toggleFavorite = useCallback((id) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((f) => f !== id) : [...prev, id]
    );
  }, []);

  const isFavorite = useCallback((id) => favorites.includes(id), [favorites]);

  const cartCount = cart.reduce((sum, i) => sum + i.qty, 0);
  const cartTotal = cart.reduce((sum, i) => sum + i.qty * i.price, 0);

  const value = {
    cart,
    favorites,
    cartCount,
    cartTotal,
    cartPulse,
    addToCart,
    updateQty,
    removeFromCart,
    clearCart,
    toggleFavorite,
    isFavorite,
  };

  return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>;
}

export function useStore() {
  const ctx = useContext(StoreContext);
  if (!ctx) throw new Error("useStore must be used within StoreProvider");
  return ctx;
}