// src/components/PresetButtons.jsx
import React from "react";

const presets = [
  { name: "🌬️ Air", V: 5, A: 1.0, d: 0.01, k: 1.0, desc: "真空/空气介质" },
  { name: "🔬 Glass", V: 5, A: 1.0, d: 0.01, k: 5.0, desc: "玻璃介质 (k≈5)" },
  { name: "🧪 Teflon", V: 5, A: 1.0, d: 0.01, k: 2.1, desc: "聚四氟乙烯 (k≈2.1)" },
  { name: "💧 Water", V: 5, A: 1.0, d: 0.01, k: 80, desc: "水介质 (k≈80)" },
  { name: "⚡ High Voltage", V: 15, A: 0.5, d: 0.005, k: 1.0, desc: "高压小电容" },
  { name: "📦 Large Plate", V: 5, A: 2.0, d: 0.02, k: 2.0, desc: "大面积板" },
];

export default function PresetButtons({ onApply }) {
  return (
    <div className="preset-section">
      <h3>⚡ 快速预设场景</h3>
      <div className="preset-grid">
        {presets.map((preset) => (
          <button
            key={preset.name}
            className="preset-btn"
            onClick={() => onApply(preset)}
            title={preset.desc}
          >
            <div className="preset-name">{preset.name}</div>
            <div className="preset-desc">{preset.desc}</div>
          </button>
        ))}
      </div>
    </div>
  );
}
