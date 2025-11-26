// src/components/CapacitorSimulator.jsx
import React, { useEffect, useRef, useState, useCallback } from "react";
import ParamSlider from "./ParamSlider";
import PresetButtons from "./PresetButtons";
import FieldVisualization from "./FieldVisualization";
import TabNavigation from "./TabNavigation";
import DynamicCalculation from "./DynamicCalculation";

const pythonCode = `
import numpy as np
import io, base64
import matplotlib
matplotlib.use("Agg")
import matplotlib.pyplot as plt

EPS0 = 8.854187817e-12

def calculate_parallel_capacitance(capacitances):
    caps = np.asarray(capacitances, dtype=float)
    return float(np.sum(caps))

def calculate_series_capacitance(capacitances):
    caps = np.asarray(capacitances, dtype=float)
    inv_sum = np.sum(1.0 / caps)
    return float(1.0 / inv_sum)

def calculate_energy_stored_scalar(capacitance, voltage):
    return 0.5 * float(capacitance) * float(voltage) ** 2

def calculate_capacitance_with_dielectric(capacitance, dielectric_constant):
    return float(capacitance) * float(dielectric_constant)

def parallel_plate_capacitance_scalar(area, distance, eps0=EPS0):
    return eps0 * float(area) / float(distance)

def cylindrical_capacitance(length, inner_radius, outer_radius, eps0=EPS0):
    L = float(length)
    a = float(inner_radius)
    b = float(outer_radius)
    return float((2 * np.pi * eps0 * L) / np.log(b / a))

def spherical_capacitance(inner_radius, outer_radius, eps0=EPS0):
    a = float(inner_radius)
    b = float(outer_radius)
    return float((4 * np.pi * eps0) / ((1.0 / a) - (1.0 / b)))

def generate_capacitor_figure(voltage, area, distance, k, eps0=EPS0):
    series_caps   = [1e-6, 2e-6, 3e-6]
    parallel_caps = [1e-6, 2e-6, 3e-6]

    c_series   = calculate_series_capacitance(series_caps)
    c_parallel = calculate_parallel_capacitance(parallel_caps)
    c_pp       = parallel_plate_capacitance_scalar(area, distance, eps0)
    energy     = calculate_energy_stored_scalar(c_pp, voltage)
    c_pp_k     = calculate_capacitance_with_dielectric(c_pp, k)
    c_cyl      = cylindrical_capacitance(1.0, 0.01, 0.02, eps0)
    c_sph      = spherical_capacitance(0.01, 0.02, eps0)

    text = (
        f"Series Equivalent Capacitance: {c_series:.6e} F\\n"
        f"Parallel Equivalent Capacitance: {c_parallel:.6e} F\\n"
        f"Parallel-Plate Capacitance: {c_pp:.6e} F\\n"
        f"Energy Stored in Capacitor: {energy:.6e} J (V = {voltage})\\n"
        f"Capacitance with Dielectric (k={k}): {c_pp_k:.6e} F\\n"
        f"Cylindrical Capacitance: {c_cyl:.6e} F\\n"
        f"Spherical Capacitance: {c_sph:.6e} F"
    )

    fig = plt.figure(figsize=(8, 6))

    distances = np.linspace(0.001, 0.02, 200)
    c_vs_d = eps0 * area / distances
    ax1 = fig.add_subplot(2, 2, 1)
    ax1.plot(distances, c_vs_d)
    ax1.set_title("Parallel-Plate C vs Distance")
    ax1.set_xlabel("d (m)")
    ax1.set_ylabel("C (F)")
    ax1.grid(True)

    V = np.linspace(0, 10, 200)
    E_vs_V = 0.5 * c_pp * V**2
    ax2 = fig.add_subplot(2, 2, 2)
    ax2.plot(V, E_vs_V)
    ax2.set_title("Energy vs Voltage")
    ax2.set_xlabel("V (volts)")
    ax2.set_ylabel("E (J)")
    ax2.grid(True)

    k_vals = np.linspace(1, 10, 50)
    C_with_k_curve = c_pp * k_vals
    ax3 = fig.add_subplot(2, 2, 3)
    ax3.plot(k_vals, C_with_k_curve)
    ax3.set_title("Capacitance vs Dielectric Constant")
    ax3.set_xlabel("k")
    ax3.set_ylabel("C (F)")
    ax3.grid(True)

    ax4 = fig.add_subplot(2, 2, 4)
    ax4.axis("off")
    ax4.text(0.03, 0.5, text, fontsize=10, va="center")

    buf = io.BytesIO()
    fig.tight_layout()
    fig.savefig(buf, format="png", dpi=120, bbox_inches="tight")
    plt.close(fig)
    buf.seek(0)
    img_b64 = base64.b64encode(buf.read()).decode("ascii")
    img_src = "data:image/png;base64," + img_b64

    return text, img_src
`;

export default function CapacitorSimulator() {
  const [V, setV] = useState(5.0);
  const [A, setA] = useState(1.0);
  const [d, setD] = useState(0.01);
  const [k, setK] = useState(2.0);

  // Manual input states
  const [manualV, setManualV] = useState(5.0);
  const [manualA, setManualA] = useState(1.0);
  const [manualD, setManualD] = useState(0.01);
  const [manualK, setManualK] = useState(2.0);

  const [status, setStatus] = useState("Loading Pyodide…");
  const [isReady, setIsReady] = useState(false);
  const [activeTab, setActiveTab] = useState("simulation");
  const [theme, setTheme] = useState("light");

  const plotRef = useRef(null);
  const textRef = useRef(null);
  const codeRef = useRef(null);
  const pyodideRef = useRef(null);

  // 初始化 Pyodide
  useEffect(() => {
    async function init() {
      try {
        setStatus("Loading Pyodide core…");
        const loader = window.loadPyodide;
        if (!loader) {
          setStatus("Pyodide script not loaded.");
          return;
        }

        const pyodide = await loader();
        pyodideRef.current = pyodide;

        setStatus("Loading numpy & matplotlib…");
        await pyodide.loadPackage(["numpy", "matplotlib"]);

        setStatus("Initializing Python code…");
        await pyodide.runPythonAsync(pythonCode);

        setIsReady(true);
        setStatus("Ready. 调整滑块或输入数值即可更新。");
      } catch (e) {
        console.error(e);
        setStatus("Error initializing Pyodide: " + e);
      }
    }

    init();
  }, []);

  // 更新图像
  const updatePlot = useCallback(async () => {
    if (!isReady || !pyodideRef.current) return;

    const pyodide = pyodideRef.current;
    setStatus(`Rendering (V=${V}, A=${A}, d=${d}, k=${k}) …`);

    try {
      const code = `
text, img = generate_capacitor_figure(voltage=${V}, area=${A}, distance=${d}, k=${k})
(text, img)
`;
      const result = await pyodide.runPythonAsync(code);
      const text = result[0];
      const imgSrc = result[1];

      if (textRef.current) {
        textRef.current.textContent = text;
      }
      if (plotRef.current) {
        plotRef.current.src = imgSrc;
      }

      setStatus("Rendered.");
    } catch (e) {
      console.error(e);
      setStatus("Error updating plot: " + e);
    }
  }, [V, A, d, k, isReady]);

  // 参数变化时更新
  useEffect(() => {
    updatePlot();
  }, [updatePlot]);

  // 代码高亮
  useEffect(() => {
    if (codeRef.current) {
      codeRef.current.textContent = pythonCode;
      // 尝试高亮，如果hljs未加载也没关系
      if (window.hljs) {
        window.hljs.highlightElement(codeRef.current);
      }
    }
  }, [activeTab]);

  // MathJax 排版
  useEffect(() => {
    if (window.MathJax && window.MathJax.typesetPromise) {
      window.MathJax.typesetPromise();
    }
  }, [activeTab]);

  // 应用预设
  const applyPreset = useCallback((preset) => {
    setV(preset.V);
    setA(preset.A);
    setD(preset.d);
    setK(preset.k);
  }, []);

  // 复制代码
  const copyCode = async () => {
    try {
      await navigator.clipboard.writeText(pythonCode);
      alert("已复制 Python 代码！");
    } catch (e) {
      alert("复制失败：" + e);
    }
  };

  // 应用手动输入
  const applyManualInputs = () => {
    setV(manualV);
    setA(manualA);
    setD(manualD);
    setK(manualK);
  };

  // 同步手动输入框与滑块值
  useEffect(() => {
    setManualV(V);
    setManualA(A);
    setManualD(d);
    setManualK(k);
  }, [V, A, d, k]);

  return (
    <div className={`app-container ${theme}`}>
      {/* 标题栏 */}
      <header className="app-header">
        <h1>⚡ Capacitor Simulator (Pyodide)</h1>
        <button className="theme-toggle" onClick={() => setTheme(t => t === "light" ? "dark" : "light")}>
          {theme === "light" ? "🌙" : "☀️"}
        </button>
      </header>

      <p className="app-description">
        交互式平行板电容模拟：拖动参数或使用预设，实时查看等效电容与能量变化。
        使用公式 {"\\(C = \\varepsilon_0\\,k\\,A/d\\)"} 和 {"\\(E = \\tfrac{1}{2} C V^2\\)"}。
      </p>

      {/* 预设按钮 */}
      <PresetButtons onApply={applyPreset} />

      {/* 标签导航 */}
      <TabNavigation activeTab={activeTab} onTabChange={setActiveTab} />

      {/* 模拟器面板 */}
      {activeTab === "simulation" && (
        <div className="tab-content simulation-layout">
          {/* 左侧面板：参数控制 */}
          <div className="left-panel">
            <div className="controls-section">
              <h3>🎛️ 参数控制</h3>
              <ParamSlider
                label="Voltage \\(V\\)"
                value={V}
                min={0}
                max={20}
                step={0.5}
                unit="V"
                onChange={setV}
                disabled={!isReady}
              />
              <ParamSlider
                label="Area \\(A\\)"
                value={A}
                min={0.1}
                max={2.0}
                step={0.1}
                unit="m²"
                onChange={setA}
                disabled={!isReady}
              />
              <ParamSlider
                label="Distance \\(d\\)"
                value={d}
                min={0.001}
                max={0.02}
                step={0.001}
                unit="m"
                onChange={setD}
                disabled={!isReady}
              />
              <ParamSlider
                label="Dielectric constant \\(k\\)"
                value={k}
                min={1.0}
                max={10.0}
                step={0.5}
                unit=""
                onChange={setK}
                disabled={!isReady}
              />

              <div id="controls-bottom">
                <button id="run-btn" disabled={!isReady} onClick={updatePlot}>
                  🔄 Generate Once
                </button>
                <span id="status">{status}</span>
              </div>
            </div>

            {/* 手动输入区域 */}
            <div className="manual-inputs-section">
              <h3>✏️ Manual Input Calculator</h3>
              <p>在这里直接输入数值（会同步到上面的滑块，并重新计算）：</p>
              <div className="manual-inputs-grid">
                <div className="manual-input-group">
                  <label>Voltage {"\\(V\\)"} (V)</label>
                  <input
                    type="number"
                    step="0.5"
                    value={manualV}
                    onChange={(e) => setManualV(Number(e.target.value))}
                    onKeyDown={(e) => e.key === "Enter" && applyManualInputs()}
                    disabled={!isReady}
                  />
                </div>
                <div className="manual-input-group">
                  <label>Area {"\\(A\\)"} (m²)</label>
                  <input
                    type="number"
                    step="0.1"
                    value={manualA}
                    onChange={(e) => setManualA(Number(e.target.value))}
                    onKeyDown={(e) => e.key === "Enter" && applyManualInputs()}
                    disabled={!isReady}
                  />
                </div>
                <div className="manual-input-group">
                  <label>Distance {"\\(d\\)"} (m)</label>
                  <input
                    type="number"
                    step="0.001"
                    value={manualD}
                    onChange={(e) => setManualD(Number(e.target.value))}
                    onKeyDown={(e) => e.key === "Enter" && applyManualInputs()}
                    disabled={!isReady}
                  />
                </div>
                <div className="manual-input-group">
                  <label>Dielectric {"\\(k\\)"}</label>
                  <input
                    type="number"
                    step="0.5"
                    value={manualK}
                    onChange={(e) => setManualK(Number(e.target.value))}
                    onKeyDown={(e) => e.key === "Enter" && applyManualInputs()}
                    disabled={!isReady}
                  />
                </div>
              </div>
              <button
                className="apply-inputs-btn"
                onClick={applyManualInputs}
                disabled={!isReady}
              >
                Apply Inputs
              </button>
            </div>
          </div>

          {/* 右侧面板：输出结果 */}
          <div className="right-panel">
            {/* 动态计算步骤 */}
            <DynamicCalculation V={V} A={A} d={d} k={k} />

            {/* 电场可视化 */}
            <FieldVisualization V={V} A={A} d={d} k={k} />

            {/* 计算结果 */}
            <div className="results-section">
              <h3>📊 Python计算结果</h3>
              <div id="text-output" ref={textRef}></div>
              <img id="plot" ref={plotRef} alt="Capacitor figure will appear here" />
            </div>
          </div>
        </div>
      )}

      {/* 公式面板 */}
      {activeTab === "formulas" && (
        <div className="tab-content">
          <section id="latex-section">
            <h2>📐 Formulas</h2>
            <p>等效电容：</p>
            <ul>
              <li>
                并联：
                <br />
                {"\\[C_{\\text{eq}}^{(\\text{parallel})} = \\sum_i C_i\\]"}
              </li>
              <li>
                串联：
                <br />
                {"\\[\\frac{1}{C_{\\text{eq}}^{(\\text{series})}} = \\sum_i \\frac{1}{C_i}\\]"}
              </li>
            </ul>

            <p>平行板电容：</p>
            <ul>
              <li>
                空气/真空：
                <br />
                {"\\[C = \\varepsilon_0 \\frac{A}{d}\\]"}
              </li>
              <li>
                有介质：
                <br />
                {"\\[C' = k C = k \\varepsilon_0 \\frac{A}{d}\\]"}
              </li>
            </ul>

            <p>储能：</p>
            <ul>
              <li>
                {"\\[E = \\tfrac{1}{2} C V^2\\]"}
              </li>
            </ul>

            <p>圆柱电容（同轴）：</p>
            <p>
              {"\\[C_{\\text{cyl}} = \\frac{2\\pi \\varepsilon_0 L}{\\ln\\left(\\dfrac{b}{a}\\right)}\\]"}
            </p>

            <p>球形电容：</p>
            <p>
              {"\\[C_{\\text{sph}} = \\frac{4\\pi \\varepsilon_0}{\\dfrac{1}{a} - \\dfrac{1}{b}}\\]"}
            </p>
          </section>
        </div>
      )}

      {/* 例题面板 */}
      {activeTab === "example" && (
        <div className="tab-content">
          <section id="example-section">
            <h2>📝 Example</h2>
            <p>已知平行板电容器参数：</p>
            <ul>
              <li>电压：{"\\(V = 5\\,\\text{V}\\)"}</li>
              <li>板面积：{"\\(A = 1.0\\,\\text{m}^2\\)"}</li>
              <li>板间距：{"\\(d = 0.01\\,\\text{m}\\)"}</li>
              <li>介电常数：{"\\(k = 2.0\\)"}</li>
            </ul>

            <p>1. 先计算真空下平行板电容：</p>
            <p>
              {"\\[C = \\varepsilon_0 \\frac{A}{d} = 8.854\\times 10^{-12} \\cdot \\frac{1.0}{0.01} = 8.854\\times 10^{-10}\\,\\text{F}\\]"}
            </p>

            <p>2. 加入介质后的电容：</p>
            <p>
              {"\\[C' = k C = 2.0 \\times 8.854\\times 10^{-10} = 1.7708\\times 10^{-9}\\,\\text{F}\\]"}
            </p>

            <p>3. 储能：</p>
            <p>
              {"\\[E = \\tfrac{1}{2} C' V^2 = \\tfrac{1}{2} \\cdot 1.7708\\times 10^{-9} \\cdot 5^2 \\approx 2.2135\\times 10^{-8}\\,\\text{J}\\]"}
            </p>

            <p>你可以在"模拟器"标签中输入这些参数，验证数值与计算是否一致。</p>
          </section>
        </div>
      )}

      {/* 代码面板 */}
      {activeTab === "code" && (
        <div className="tab-content">
          <section id="code-section">
            <h2>💻 Python 代码（NumPy + Matplotlib）</h2>
            <button id="copy-btn" onClick={copyCode}>
              📋 复制 Python 代码
            </button>
            <pre>
              <code id="py-code" className="language-python" ref={codeRef}></code>
            </pre>
          </section>
        </div>
      )}
    </div>
  );
}
