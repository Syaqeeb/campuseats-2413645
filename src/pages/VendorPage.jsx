import React from "react";
import { useParams, Link } from "react-router-dom";
import { useVendors } from "../hooks/useVendors.js";
import { useCart } from "../hooks/useCart.js";

/**
 * Component: VendorPage
 * Purpose: Dynamic page that reads a vendor ID from the URL parameters,
 * looks up the corresponding vendor details, and displays their food menu.
 */
export function VendorPage() {
  // 1. Extract dynamic route parameter ":id" from the URL path (/vendor/:id)
  const { id } = useParams();

  // 2. Access vendor data hook and global cart state hook
  const { vendors, loading } = useVendors();
  const { addToCart } = useCart();

  // 3. Early exit: Show loading status while hook resolves vendor list
  if (loading) return <div className="status-msg">Loading vendor...</div>;

  // 4. Find matching vendor record using array .find()
  const vendor = vendors.find((v) => v.id === id);

  // 5. Fallback Guard Clause: Render error view if invalid vendor ID is provided in URL
  if (!vendor) {
    return (
      <div className="status-msg">
        <h2>Vendor Not Found</h2>
        <p>No vendor exists with ID: {id}</p>
        <Link to="/">Back to Home</Link>
      </div>
    );
  }

  return (
    <div className="vendor-page">
      {/* Vendor Header Metadata Card */}
      <div className="vendor-header-box">
        <h2>{vendor.name}</h2>
        <p className="vendor-meta">
          📍 {vendor.location} &nbsp;|&nbsp; 🕒 {vendor.openHours}
        </p>
      </div>

      <h3 className="section-title">Menu Items</h3>

      {/* 6. Menu Grid Display */}
      <div className="menu-grid">
        {vendor.menu.map((item) => (
          <div key={item.id} className="menu-card">
            <h4>{item.name}</h4>
            <p>{item.description}</p>

            {/* Currency formatting ensuring 2 decimal digits */}
            <strong>RM {item.price.toFixed(2)}</strong>

            {/* Action button disabled conditionally when item is unavailable */}
            <button
              disabled={!item.available}
              onClick={() => addToCart(item, vendor.id, vendor.name)}
            >
              {item.available ? "Add to Cart" : "Out of Stock"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
