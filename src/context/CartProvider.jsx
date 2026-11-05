import React, { createContext, useContext } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage.js";

export const CartContext = createContext(null);

export function CartProvider({ children }) {
  // State synchronized with local storage so it survives a refresh
  const [cart, setCart] = useLocalStorage("campus-eats-cart", []);
  const [orders, setOrders] = useLocalStorage("campus-eats-orders", []);

  // Calculate cart total amount
  const total = cart.reduce(
    (sum, item) => sum + item.price * (item.qty || item.quantity || 1),
    0,
  );

  const addToCart = (item) => {
    setCart((prevCart) => {
      const existing = prevCart.find((i) => i.id === item.id);
      if (existing) {
        return prevCart.map((i) =>
          i.id === item.id
            ? {
                ...i,
                qty: (i.qty || i.quantity || 1) + 1,
                quantity: (i.quantity || i.qty || 1) + 1,
              }
            : i,
        );
      }
      return [...prevCart, { ...item, qty: 1, quantity: 1 }];
    });
  };

  const changeQty = (id, delta) => {
    setCart((prevCart) => {
      return prevCart
        .map((i) => {
          if (i.id === id) {
            const currentQty = i.qty || i.quantity || 1;
            const newQty = currentQty + delta;
            return newQty > 0 ? { ...i, qty: newQty, quantity: newQty } : null;
          }
          return i;
        })
        .filter(Boolean);
    });
  };

  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((i) => i.id !== id));
  };

  const clearCart = () => {
    setCart([]);
  };

  const placeOrder = (form) => {
    const newOrder = {
      id: Date.now().toString().slice(-6),
      ...form,
      items: [...cart],
      total,
      date: new Date().toISOString(),
    };
    setOrders((prevOrders) => [newOrder, ...prevOrders]);
    clearCart();
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        orders,
        total,
        addToCart,
        changeQty,
        removeFromCart,
        clearCart,
        placeOrder,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
