import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

/**
 * Entry Point: main.jsx
 * Purpose: Targets the HTML root element, sets up React 18 concurrent root rendering,
 * wraps the app in StrictMode for development safety checks, and imports global styles.
 */
createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* Root application component that contains our router and providers */}
    <App />
  </StrictMode>,
);
