// src/capacitor-main.jsx
import React from "react";
import ReactDOM from "react-dom";
import CapacitorSimulator from "./components/CapacitorSimulator";
import "./styles.css";

ReactDOM.render(
  <React.StrictMode>
    <CapacitorSimulator />
  </React.StrictMode>,
  document.getElementById("root")
);
