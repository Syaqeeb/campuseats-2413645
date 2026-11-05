import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../hooks/useCart.js";

/**
 * Component: CartPage
 * Purpose: Manages shopping cart items, quantities, removal actions,
 * and handles checkout form validation before placing an order.
 */
export function CartPage() {
  // 1. Destructure required state and actions from global useCart hook
  const { cart, total, changeQty, removeFromCart, placeOrder } = useCart();

  // 2. React Router navigation hook for programmatic redirects
  const navigate = useNavigate();

  // 3. Local form state for checkout inputs
  const [form, setForm] = useState({ name: "", mahallah: "", pickupTime: "" });

  /**
   * Handler: Form Submission
   * Validates that all fields are filled, saves the order via global context,
   * and programmatically redirects user to the orders page.
   */
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default browser page refresh on submit

    // Simple validation check
    if (!form.name || !form.mahallah || !form.pickupTime)
      return alert("Fill all fields");

    placeOrder(form); // Save order and clear cart in global context
    navigate("/orders"); // Programmatically navigate to orders history page
  };

  // 4. Empty Cart Guard Clause: Render message if no items exist in cart
  if (cart.length === 0)
    return <div className="status-msg">Your cart is empty.</div>;

  return (
    <div className="cart-page">
      <h2>Your Cart</h2>
      <div className="cart-container">
        {/* Cart Items List & Quantity Controls */}
        <div className="cart-items">
          {cart.map((item) => (
            <div key={item.id} className="cart-item">
              <div>
                <h4>{item.name}</h4>
                <p>RM {item.price.toFixed(2)} each</p>
              </div>
              <div className="qty-controls">
                {/* Decrease quantity (delta: -1) */}
                <button onClick={() => changeQty(item.id, -1)}>-</button>
                <span>{item.qty}</span>
                {/* Increase quantity (delta: +1) */}
                <button onClick={() => changeQty(item.id, 1)}>+</button>
                {/* Remove item entirely */}
                <button onClick={() => removeFromCart(item.id)}>Remove</button>
              </div>
            </div>
          ))}
          <h3>Total: RM {total.toFixed(2)}</h3>
        </div>

        {/* Checkout Form */}
        <form onSubmit={handleSubmit} className="checkout-form">
          <h3>Checkout</h3>

          {/* Controlled Name Input */}
          <input
            placeholder="Name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />

          {/* Controlled Mahallah Select Dropdown */}
          <select
            value={form.mahallah}
            onChange={(e) => setForm({ ...form, mahallah: e.target.value })}
          >
            <option value="">Select Mahallah...</option>
            <option value="Ali">Mahallah Ali</option>
            <option value="Siddiq">Mahallah Siddiq</option>
            <option value="Albuquerque">Mahallah Albuquerque</option>
          </select>

          {/* Controlled Time Input */}
          <input
            type="time"
            value={form.pickupTime}
            onChange={(e) => setForm({ ...form, pickupTime: e.target.value })}
          />

          <button type="submit">Place Order</button>
        </form>
      </div>
    </div>
  );
}
