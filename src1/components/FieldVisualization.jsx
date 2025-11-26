// src/components/FieldVisualization.jsx
import React, { useMemo } from "react";

export default function FieldVisualization({ V, A, d, k }) {
  // 计算电场强度 E = V/d
  const fieldStrength = V / d;

  // 根据介电常数调整颜色
  const dielectricColor = useMemo(() => {
    if (k <= 1) return "rgba(200, 200, 255, 0.1)"; // 空气 - 淡蓝
    if (k <= 3) return "rgba(150, 255, 150, 0.3)"; // 塑料 - 淡绿
    if (k <= 10) return "rgba(255, 200, 100, 0.3)"; // 玻璃 - 橙
    return "rgba(100, 150, 255, 0.5)"; // 水 - 深蓝
  }, [k]);

  // 根据电场强度决定电场线数量和颜色
  const numLines = Math.min(Math.max(Math.floor(fieldStrength / 50), 3), 15);
  const lineColor = useMemo(() => {
    const intensity = Math.min(fieldStrength / 2000, 1);
    return `rgba(${255 * intensity}, ${100 * (1 - intensity)}, ${255 * (1 - intensity)}, 0.8)`;
  }, [fieldStrength]);

  // 生成电场线位置
  const fieldLines = useMemo(() => {
    const lines = [];
    const plateWidth = 300;
    const spacing = plateWidth / (numLines + 1);

    for (let i = 1; i <= numLines; i++) {
      lines.push({
        x: 50 + i * spacing,
        y1: 50,
        y2: 150,
      });
    }
    return lines;
  }, [numLines]);

  // 板间距离的可视化比例
  const visualGap = 100; // 固定视觉高度
  const plateThickness = 10;

  return (
    <div className="field-viz-container">
      <h3>⚡ 电场可视化</h3>
      <svg width="400" height="220" className="field-svg">
        <defs>
          {/* 箭头标记 */}
          <marker
            id="arrowhead"
            markerWidth="10"
            markerHeight="7"
            refX="9"
            refY="3.5"
            orient="auto"
          >
            <polygon points="0 0, 10 3.5, 0 7" fill={lineColor} />
          </marker>
        </defs>

        {/* 上极板 (正极) */}
        <rect
          x="50"
          y="40"
          width="300"
          height={plateThickness}
          fill="#e74c3c"
          stroke="#c0392b"
          strokeWidth="2"
        />
        <text x="360" y="48" fontSize="18" fill="#e74c3c" fontWeight="bold">
          +
        </text>

        {/* 下极板 (负极) */}
        <rect
          x="50"
          y={40 + plateThickness + visualGap}
          width="300"
          height={plateThickness}
          fill="#3498db"
          stroke="#2980b9"
          strokeWidth="2"
        />
        <text x="360" y={40 + plateThickness + visualGap + 8} fontSize="18" fill="#3498db" fontWeight="bold">
          −
        </text>

        {/* 介质区域 */}
        <rect
          x="50"
          y={40 + plateThickness}
          width="300"
          height={visualGap}
          fill={dielectricColor}
          stroke="rgba(100, 100, 100, 0.3)"
          strokeWidth="1"
          strokeDasharray="5,5"
        />

        {/* 电场线 */}
        {fieldLines.map((line, i) => (
          <g key={i}>
            <line
              x1={line.x}
              y1={40 + plateThickness}
              x2={line.x}
              y2={40 + plateThickness + visualGap}
              stroke={lineColor}
              strokeWidth="2"
              markerEnd="url(#arrowhead)"
            />
            {/* 箭头动画效果 */}
            <circle
              cx={line.x}
              cy={40 + plateThickness + visualGap / 2}
              r="3"
              fill={lineColor}
              opacity="0.6"
            >
              <animate
                attributeName="cy"
                from={40 + plateThickness}
                to={40 + plateThickness + visualGap}
                dur="2s"
                repeatCount="indefinite"
              />
              <animate
                attributeName="opacity"
                values="0.8;0.3;0.8"
                dur="2s"
                repeatCount="indefinite"
              />
            </circle>
          </g>
        ))}

        {/* 标注信息 */}
        <text x="200" y="200" textAnchor="middle" fontSize="12" fill="#555">
          电场强度 E = {fieldStrength.toFixed(0)} V/m
        </text>
        <text x="200" y="215" textAnchor="middle" fontSize="11" fill="#777">
          介电常数 k = {k.toFixed(1)} | 电场线数: {numLines}
        </text>
      </svg>

      <div className="field-info">
        <div className="info-item">
          <span className="info-label">板间电压:</span>
          <span className="info-value">{V.toFixed(1)} V</span>
        </div>
        <div className="info-item">
          <span className="info-label">板间距离:</span>
          <span className="info-value">{(d * 1000).toFixed(1)} mm</span>
        </div>
        <div className="info-item">
          <span className="info-label">电场强度:</span>
          <span className="info-value">{fieldStrength.toFixed(0)} V/m</span>
        </div>
        <div className="info-item">
          <span className="info-label">介质类型:</span>
          <span className="info-value">
            {k === 1 ? "真空/空气" : k <= 3 ? "塑料/陶瓷" : k <= 10 ? "玻璃" : "水"}
          </span>
        </div>
      </div>
    </div>
  );
}
