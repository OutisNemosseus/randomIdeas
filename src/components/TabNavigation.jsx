// src/components/TabNavigation.jsx
import React from "react";

const tabs = [
  { id: "simulation", label: "🔬 模拟器", icon: "🔬" },
  { id: "formulas", label: "📐 公式", icon: "📐" },
  { id: "example", label: "📝 例题", icon: "📝" },
  { id: "code", label: "💻 代码", icon: "💻" },
];

export default function TabNavigation({ activeTab, onTabChange }) {
  return (
    <div className="tab-navigation">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          className={`tab-btn ${activeTab === tab.id ? "active" : ""}`}
          onClick={() => onTabChange(tab.id)}
        >
          <span className="tab-icon">{tab.icon}</span>
          <span className="tab-label">{tab.label}</span>
        </button>
      ))}
    </div>
  );
}
