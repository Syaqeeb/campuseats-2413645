// src/pages/NotFoundPage.jsx
import React from "react";
import { Link } from "react-router-dom";

/**
 * Component: NotFoundPage
 * Purpose: Acts as a 404 error page fallback when a user navigates
 * to an invalid URL path that does not exist in the router.
 */
export function NotFoundPage() {
  return (
    <div className="status-msg">
      <h2>404 - Page Not Found</h2>
      <p>The page you are looking for does not exist.</p>

      {/* Client-side link to redirect the user back to the home page safely */}
      <Link to="/">Return to Home</Link>
    </div>
  );
}
