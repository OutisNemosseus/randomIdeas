// src/components/ParamSlider.jsx
import React, { useState, useRef, useEffect } from "react";

export default function ParamSlider({ label, value, min, max, step, unit, onChange, disabled }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const intervalRef = useRef(null);

  const togglePlay = () => {
    if (isPlaying) {
      clearInterval(intervalRef.current);
      setIsPlaying(false);
    } else {
      setIsPlaying(true);
      let currentValue = value;
      intervalRef.current = setInterval(() => {
        currentValue = currentValue + step;
        if (currentValue > max) {
          currentValue = min;
          clearInterval(intervalRef.current);
          setIsPlaying(false);
        }
        onChange(currentValue);
      }, 100);
    }
  };

  useEffect(() => {
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <div className="param-row">
      <button className="play-btn" onClick={togglePlay} disabled={disabled}>
        {isPlaying ? "⏸" : "▶"}
      </button>
      <div className="slider-container">
        <div className="slider-label-line">
          <span>{label}</span>
          <span className="value-display">
            {typeof value === "number" ? value.toFixed(step < 0.01 ? 3 : 1) : value} {unit}
          </span>
        </div>
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          disabled={disabled}
        />
      </div>
    </div>
  );
}
