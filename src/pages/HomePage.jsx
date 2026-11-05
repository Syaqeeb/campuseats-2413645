import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useVendors } from "../hooks/useVendors.js";

/**
 * Component: HomePage
 * Purpose: Displays available campus vendors in a responsive grid layout.
 * Features: Includes a custom countdown timer for the Daily Special feature (Matric requirement ending in 5).
 */
export function HomePage() {
  // Read vendor data and async status from custom hook
  const { vendors, loading, error } = useVendors();

  // 1. Personal Feature (Matric Last Digit 5): State for countdown timer
  const [timeLeft, setTimeLeft] = useState({
    hours: 4,
    minutes: 15,
    seconds: 30,
  });

  // 2. Timer Effect: Decrements countdown every 1 second (1000ms)
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: 59, seconds: 59 };
        if (prev.hours > 0)
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        return prev; // Stop at 00:00:00
      });
    }, 1000);

    // Memory Leak Cleanup: Clear timer interval when user leaves the page
    return () => clearInterval(timer);
  }, []);

  // 3. Conditional Rendering: Display loading status or error banner if fetch fails
  if (loading) return <div className="status-msg">Loading vendors...</div>;
  if (error) return <div className="status-msg error">{error}</div>;

  return (
    <div className="home-page">
      {/* Feature Requirement (Matric ending in 5): Daily Special Promo Banner */}
      <div className="daily-special-banner">
        <div>
          <h3>🔥 Today's Special: Nasi Lemak Ayam</h3>
          <p>Get 10% off at Pinggan Panas before time runs out!</p>
          <Link to="/vendor/2413645-pinggan-panas" className="special-btn">
            Order Now
          </Link>
        </div>
        <div className="countdown">
          <span>Offer Ends In:</span>
          <strong>
            {/* Format numbers to double digits with padStart */}
            {String(timeLeft.hours).padStart(2, "0")}:
            {String(timeLeft.minutes).padStart(2, "0")}:
            {String(timeLeft.seconds).padStart(2, "0")}
          </strong>
        </div>
      </div>

      <h2>Campus Vendors</h2>

      {/* 4. Render Vendor Grid */}
      <div className="vendor-grid">
        {vendors.map((vendor) => (
          <div key={vendor.id} className="vendor-card">
            <h3>{vendor.name}</h3>
            <p>📍 {vendor.location}</p>
            <p>🕒 {vendor.openHours}</p>

            {/* Dynamic CSS class binding for Open/Closed status */}
            <span className={`badge ${vendor.isOpen ? "open" : "closed"}`}>
              {vendor.isOpen ? "OPEN" : "CLOSED"}
            </span>
            <br />

            {/* Dynamic Client-Side Route Link using template literals */}
            <Link to={`/vendor/${vendor.id}`} className="view-menu-btn">
              View Menu
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
