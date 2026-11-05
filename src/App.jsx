import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartProvider.jsx";
import "./App.css";

// Import all layout templates and page components
import { Layout } from "./pages/Layout.jsx";
import { HomePage } from "./pages/HomePage.jsx";
import { VendorPage } from "./pages/VendorPage.jsx";
import { CartPage } from "./pages/CartPage.jsx";
import { OrdersPage } from "./pages/OrdersPage.jsx";
import { NotFoundPage } from "./pages/NotFoundPage.jsx";

/**
 * Component: App
 * Purpose: Root application component. Configures client-side routing,
 * wraps the app with global state providers, and sets up path mappings.
 */
export default function App() {
  return (
    // 1. BrowserRouter enables client-side URL routing using HTML5 history API
    <BrowserRouter>
      {/* 2. CartProvider wraps the app to supply global cart state & persistence */}
      <CartProvider>
        <Routes>
          {/* 3. Parent Layout Route: Renders persistent header, footer, and <Outlet /> */}
          <Route element={<Layout />}>
            {/* Index route renders at the root URL ("/") */}
            <Route index element={<HomePage />} />

            {/* Dynamic route with parameter `:id` for individual vendors */}
            <Route path="vendor/:id" element={<VendorPage />} />

            {/* Cart checkout page route */}
            <Route path="cart" element={<CartPage />} />

            {/* Order history tracking page route */}
            <Route path="orders" element={<OrdersPage />} />

            {/* 4. Catch-all wildcard route for handling 404 Not Found errors */}
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </CartProvider>
    </BrowserRouter>
  );
}
