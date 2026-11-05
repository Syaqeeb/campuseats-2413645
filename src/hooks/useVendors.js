import { useState, useEffect } from "react";
import vendorsData from "../data/vendors.js";

/**
 * Custom Hook: useVendors
 * Purpose: Encapsulates vendor data retrieval, loading states, and error handling,
 * replacing inline local data imports across multiple pages.
 */
export function useVendors() {
  // 1. Define states for vendors data, loading indicator, and error messaging
  const [vendors, setVendors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  /**
   * Helper function to load/reload vendor data.
   * Can easily be upgraded later to a real async fetch() API call.
   */
  const fetchVendors = () => {
    try {
      setLoading(true); // Show loading state while fetching
      setVendors(vendorsData); // Load local array data
      setError(null); // Clear any prior errors
    } catch (err) {
      setError("Failed to load vendors.");
    } finally {
      setLoading(false); // Stop loading state regardless of outcome
    }
  };

  // 2. Trigger fetchVendors once when the component using this hook mounts
  useEffect(() => {
    fetchVendors();
  }, []); // Empty array ensures it runs only on mount

  // 3. Return an object containing state variables and a reload function
  return { vendors, loading, error, reload: fetchVendors };
}
