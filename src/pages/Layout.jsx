import { Outlet, NavLink, Link } from "react-router-dom";
import { useCart } from "../hooks/useCart.js"; // <-- Add this line!

export function Layout() {
  // Read cart from global Cart Context and calculate total item count
  const { cart } = useCart();
  const count = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className="app-container">
      {/* Persistent Global Header & Navigation */}
      <header className="header">
        <Link to="/" className="brand">
          CampusEats
        </Link>
        <nav className="nav-links">
          {/* NavLink automatically applies active styling classes; 'end' prevents wildcard matching */}
          <NavLink to="/" end>
            Vendors
          </NavLink>
          <NavLink to="/orders">My Orders</NavLink>
          <NavLink to="/cart" className="cart-link">
            Cart {count > 0 && <span className="cart-badge">{count}</span>}
          </NavLink>
        </nav>
      </header>

      {/* Main Content Area: React Router renders the active child route component here */}
      <main className="main-content">
        <Outlet />
      </main>

      {/* Persistent Footer */}
      <footer className="footer">
        <p>© 2026 CampusEats - BICS 3301, IIUM</p>
      </footer>
    </div>
  );
}
