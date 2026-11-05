// src/pages/OrdersPage.jsx
import React from "react";
import { useCart } from "../hooks/useCart.js";

/**
 * Component: OrdersPage
 * Purpose: Retrieves and displays the user's order history
 * from global state, listing order IDs, customer details, pickup times, and items.
 */
export function OrdersPage() {
  // 1. Retrieve saved orders array from global Cart Context
  const { orders } = useCart();

  // 2. Empty State Guard Clause: Render message if no orders have been placed yet
  if (orders.length === 0)
    return <div className="status-msg">No orders placed yet.</div>;

  return (
    <div className="orders-page">
      <h2>My Orders</h2>

      {/* 3. Iterate through each placed order */}
      {orders.map((order) => (
        <div key={order.id} className="order-card">
          <h3>Order #{order.id}</h3>
          <p>
            <strong>Customer:</strong> {order.name} ({order.mahallah})
          </p>
          <p>
            <strong>Pickup Time:</strong> {order.pickupTime}
          </p>
          <p>
            <strong>Total Paid:</strong> RM {order.total.toFixed(2)}
          </p>

          {/* 4. Nested iteration to display items inside this specific order */}
          <ul>
            {order.items.map((item) => (
              <li key={item.id}>
                {item.name} x {item.qty}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
