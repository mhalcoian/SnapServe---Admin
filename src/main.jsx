import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "./container.css";
import "./auth.css";
import "./dashboard.css";
import "./vendors.css";
import "./stores.css";
import "./users.css";
import "./reports.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
