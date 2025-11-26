// src/components/DynamicCalculation.jsx
import React, { useEffect } from "react";

const EPS0 = 8.854187817e-12;

export default function DynamicCalculation({ V, A, d, k }) {
  // 计算各个值
  const C = EPS0 * A / d;
  const C_k = k * C;
  const E = 0.5 * C_k * V * V;

  // 触发MathJax重新渲染
  useEffect(() => {
    if (window.MathJax && window.MathJax.typesetPromise) {
      window.MathJax.typesetPromise();
    }
  }, [V, A, d, k]);

  return (
    <div className="dynamic-calculation-section">
      <h3>🧮 实时计算步骤</h3>

      <div className="calc-step">
        <p className="step-title">1. 真空下平行板电容</p>
        <p className="step-formula">
          {"\\[C = \\varepsilon_0 \\frac{A}{d}\\]"}
        </p>
        <p className="step-substitution">
          代入数值：
          {"\\[C = " + EPS0.toExponential(3) + " \\times \\frac{" + A.toFixed(1) + "}{" + d.toFixed(3) + "}\\]"}
        </p>
        <p className="step-result">
          {"\\[C = " + C.toExponential(4) + "\\,\\text{F}\\]"}
        </p>
      </div>

      <div className="calc-step">
        <p className="step-title">2. 加入介质后的电容</p>
        <p className="step-formula">
          {"\\[C' = k \\times C\\]"}
        </p>
        <p className="step-substitution">
          代入数值：
          {"\\[C' = " + k.toFixed(1) + " \\times " + C.toExponential(4) + "\\]"}
        </p>
        <p className="step-result">
          {"\\[C' = " + C_k.toExponential(4) + "\\,\\text{F}\\]"}
        </p>
      </div>

      <div className="calc-step">
        <p className="step-title">3. 储存的能量</p>
        <p className="step-formula">
          {"\\[E = \\frac{1}{2} C' V^2\\]"}
        </p>
        <p className="step-substitution">
          代入数值：
          {"\\[E = \\frac{1}{2} \\times " + C_k.toExponential(4) + " \\times " + V.toFixed(1) + "^2\\]"}
        </p>
        <p className="step-result">
          {"\\[E = " + E.toExponential(4) + "\\,\\text{J}\\]"}
        </p>
      </div>

      <div className="summary-box">
        <p><strong>汇总结果：</strong></p>
        <ul>
          <li>真空电容 {"\\(C = " + C.toExponential(3) + "\\,\\text{F}\\)"}</li>
          <li>介质电容 {"\\(C' = " + C_k.toExponential(3) + "\\,\\text{F}\\)"}</li>
          <li>储能 {"\\(E = " + E.toExponential(3) + "\\,\\text{J}\\)"}</li>
        </ul>
      </div>
    </div>
  );
}
