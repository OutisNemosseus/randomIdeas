#!/usr/bin/env python3
"""
Generate HTML pages for K&R C Programming exercises
Each exercise gets its own standalone HTML page with the CCompiler IDE
"""
import os
import glob
import re
from pathlib import Path

# Base directory
BASE_DIR = Path(r"C:\Users\tongs\OneDrive\桌面\RandomIDeas")
SOURCE_DIR = BASE_DIR / "the-c-programming-language-2nd-edition-solutions"
OUTPUT_DIR = BASE_DIR / "kandr"

# Read the CCompiler template
CCOMPILER_TEMPLATE = (BASE_DIR / "CCompiler.html").read_text(encoding='utf-8')

def extract_exercise_info(c_file_path):
    """Extract exercise information from file path and content"""
    parts = c_file_path.parts
    chapter = parts[-3]  # chapter_N
    exercise = parts[-2]  # exercise_N_NN
    filename = parts[-1]  # name.c

    # Parse chapter number
    chapter_num = int(re.search(r'chapter_(\d+)', chapter).group(1))

    # Parse exercise number
    ex_match = re.search(r'exercise_(\d+)_(\d+)', exercise)
    ex_major = int(ex_match.group(1))
    ex_minor = int(ex_match.group(2))

    # Read C code
    try:
        code = c_file_path.read_text(encoding='utf-8', errors='ignore')
    except:
        code = "// Error reading file"

    # Generate title
    title = f"Exercise {ex_major}.{ex_minor}: {filename.replace('.c', '').replace('_', ' ').title()}"

    return {
        'chapter': chapter_num,
        'exercise': f"{ex_major}-{ex_minor}",
        'exercise_num': f"{ex_major}.{ex_minor}",
        'title': title,
        'code': code,
        'filename': filename,
        'url': f"chapter-{chapter_num}/exercise-{ex_major}-{ex_minor}.html"
    }

def create_exercise_page(info):
    """Create a standalone HTML page for an exercise"""
    # Escape the code for JavaScript
    code_escaped = info['code'].replace('\\', '\\\\').replace('`', '\\`').replace('$', '\\$')

    html = f'''<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>{info['title']} - K&R C Programming</title>

  <style>
    body {{
      margin: 0; padding: 0;
      font-family: system-ui, -apple-system, Segoe UI, sans-serif;
      height: 100vh; display: flex; flex-direction: column;
      background: #0b1020; color: #e5e7eb;
    }}
    header {{
      padding: 0.6rem 1rem;
      display: flex; align-items: center; gap: 0.6rem;
      border-bottom: 1px solid #1f2937;
      background: #0f172a;
    }}
    header h1 {{ font-size: 1rem; margin: 0; font-weight: 600; }}
    header .breadcrumb {{
      font-size: 0.9rem; color: #9ca3af;
      margin-left: auto;
    }}
    header .breadcrumb a {{
      color: #60a5fa; text-decoration: none;
    }}
    header .breadcrumb a:hover {{
      text-decoration: underline;
    }}
    button {{
      padding: 0.35rem 0.8rem; border-radius: 999px;
      border: 1px solid #334155; background: #111827; color: #e5e7eb;
      cursor: pointer; font-size: 0.9rem;
    }}
    button:hover {{ background: #1f2937; }}
    button:disabled {{ opacity: 0.5; cursor: default; }}

    .main {{
      flex: 1; display: grid;
      grid-template-columns: 1.2fr 0.8fr;
      min-height: 0;
    }}
    #editor {{ height: 100%; }}
    .right {{
      border-left: 1px solid #1f2937;
      display: flex; flex-direction: column; min-height: 0;
    }}
    .panel {{
      padding: 0.6rem 0.8rem; border-bottom: 1px solid #1f2937;
      background: #0b1224; font-size: 0.9rem;
    }}
    #status {{ color: #9ca3af; }}
    #output {{
      flex: 1; padding: 0.8rem; margin: 0;
      font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
      font-size: 0.85rem; white-space: pre-wrap; overflow: auto;
      background: #050814;
    }}
    .success {{ color: #4ade80; }}
    .error {{ color: #fca5a5; }}

    footer {{
      padding: 0.4rem 0.8rem; font-size: 0.8rem; color: #9ca3af;
      border-top: 1px solid #1f2937; background: #0f172a;
    }}
  </style>

  <script src="https://cdn.jsdelivr.net/npm/monaco-editor@0.52.0/min/vs/loader.js"></script>
</head>

<body>
  <header>
    <h1>{info['title']}</h1>
    <button id="runBtn" disabled>▶ Compile & Run</button>
    <span id="status">Loading editor…</span>
    <div class="breadcrumb">
      <a href="../index.html">K&R Exercises</a> /
      <a href="index.html">Chapter {info['chapter']}</a> /
      Exercise {info['exercise_num']}
    </div>
  </header>

  <div class="main">
    <div id="editor"></div>

    <div class="right">
      <div class="panel">Output</div>
      <pre id="output">Click "Compile & Run" to execute your code...</pre>
    </div>
  </div>

  <footer>
    K&R C Programming Language Exercises • Wandbox API • Monaco Editor
  </footer>

<script>
let editor = null;

require.config({{
  paths: {{ vs: "https://cdn.jsdelivr.net/npm/monaco-editor@0.52.0/min/vs" }}
}});

require(["vs/editor/editor.main"], () => {{
  editor = monaco.editor.create(document.getElementById("editor"), {{
    value: `{code_escaped}`,
    language: "c",
    theme: "vs-dark",
    fontSize: 14,
    minimap: {{ enabled: false }},
    automaticLayout: true
  }});

  runBtn.disabled = false;
  status("Editor ready. Press Compile & Run.");
}});

const runBtn = document.getElementById("runBtn");
const outputEl = document.getElementById("output");
const statusEl = document.getElementById("status");

function status(msg){{ statusEl.textContent = msg; }}
function out(msg="", className=""){{
  outputEl.textContent = msg;
  outputEl.className = className;
}}

runBtn.addEventListener("click", async () => {{
  out("Compiling and running...");
  status("Running...");
  runBtn.disabled = true;

  const code = editor.getValue();

  try {{
    const response = await fetch('https://wandbox.org/api/compile.json', {{
      method: 'POST',
      headers: {{ 'Content-Type': 'application/json' }},
      body: JSON.stringify({{
        compiler: 'gcc-head',
        code: code,
        options: 'warning,gnu++1y',
        stdin: '',
        'compiler-option-raw': '-lm'
      }})
    }});

    const result = await response.json();

    let outputText = '';
    if (result.program_output) {{
      outputText += '✅ Output:\\n' + result.program_output;
    }}
    if (result.program_error) {{
      outputText += '\\n⚠️ Errors:\\n' + result.program_error;
    }}
    if (result.compiler_error) {{
      outputText += '\\n❌ Compile Error:\\n' + result.compiler_error;
    }}

    out(outputText || '✅ Program completed successfully (no output)',
        result.compiler_error ? 'error' : 'success');
    status(result.compiler_error ? "Compile error." : "Run complete.");

  }} catch (e) {{
    out('❌ Error: ' + (e.message || String(e)), 'error');
    status("Error.");
  }} finally {{
    runBtn.disabled = false;
  }}
}});
</script>

</body>
</html>
'''
    return html

def create_chapter_index(chapter_num, exercises):
    """Create an index page for a chapter"""
    exercises.sort(key=lambda x: float(x['exercise_num']))

    exercise_list = '\n'.join([
        f'    <li><a href="exercise-{ex["exercise"]}.html">{ex["title"]}</a></li>'
        for ex in exercises
    ])

    html = f'''<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>Chapter {chapter_num} - K&R C Programming</title>
  <style>
    body {{
      margin: 0; padding: 2rem;
      font-family: system-ui, -apple-system, Segoe UI, sans-serif;
      background: #0b1020; color: #e5e7eb;
      max-width: 800px; margin: 0 auto;
    }}
    h1 {{ color: #60a5fa; margin-bottom: 0.5rem; }}
    .breadcrumb {{
      font-size: 0.9rem; color: #9ca3af; margin-bottom: 2rem;
    }}
    .breadcrumb a {{
      color: #60a5fa; text-decoration: none;
    }}
    .breadcrumb a:hover {{ text-decoration: underline; }}
    ul {{
      list-style: none; padding: 0;
    }}
    li {{
      padding: 0.8rem 1rem; margin-bottom: 0.5rem;
      background: #1f2937; border-radius: 8px;
      border: 1px solid #334155;
    }}
    li:hover {{
      background: #2d3748; border-color: #60a5fa;
    }}
    a {{
      color: #e5e7eb; text-decoration: none;
      display: block; font-size: 1.05rem;
    }}
  </style>
</head>
<body>
  <div class="breadcrumb">
    <a href="../index.html">← Back to All Chapters</a>
  </div>
  <h1>Chapter {chapter_num}</h1>
  <p>Select an exercise to view and run:</p>
  <ul>
{exercise_list}
  </ul>
</body>
</html>
'''
    return html

def create_main_index(chapters_data):
    """Create the main index page"""
    chapter_list = '\n'.join([
        f'    <li><a href="chapter-{ch}/index.html">Chapter {ch} ({len(exs)} exercises)</a></li>'
        for ch, exs in sorted(chapters_data.items())
    ])

    html = f'''<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>K&R C Programming Language Exercises</title>
  <style>
    body {{
      margin: 0; padding: 2rem;
      font-family: system-ui, -apple-system, Segoe UI, sans-serif;
      background: #0b1020; color: #e5e7eb;
      max-width: 800px; margin: 0 auto;
    }}
    h1 {{ color: #60a5fa; margin-bottom: 0.5rem; }}
    p {{ color: #9ca3af; margin-bottom: 2rem; }}
    ul {{
      list-style: none; padding: 0;
    }}
    li {{
      padding: 0.8rem 1rem; margin-bottom: 0.5rem;
      background: #1f2937; border-radius: 8px;
      border: 1px solid #334155;
    }}
    li:hover {{
      background: #2d3748; border-color: #60a5fa;
    }}
    a {{
      color: #e5e7eb; text-decoration: none;
      display: block; font-size: 1.05rem;
    }}
    footer {{
      margin-top: 3rem; padding-top: 2rem;
      border-top: 1px solid #1f2937;
      color: #9ca3af; font-size: 0.9rem;
      text-align: center;
    }}
  </style>
</head>
<body>
  <h1>The C Programming Language (K&R) - Solutions</h1>
  <p>Interactive exercises from "The C Programming Language" by Kernighan and Ritchie</p>
  <ul>
{chapter_list}
  </ul>
  <footer>
    Each exercise includes a Monaco code editor and runs via Wandbox API<br>
    Based on solutions from the-c-programming-language-2nd-edition-solutions
  </footer>
</body>
</html>
'''
    return html

def main():
    print("Generating K&R C Programming exercise pages...")

    # Collect all C files
    c_files = list(SOURCE_DIR.glob("chapter_*/exercise_*/*.c"))
    print(f"Found {len(c_files)} C files")

    # Group by chapter
    chapters_data = {}
    all_exercises = []

    for c_file in c_files:
        info = extract_exercise_info(c_file)
        all_exercises.append(info)

        if info['chapter'] not in chapters_data:
            chapters_data[info['chapter']] = []
        chapters_data[info['chapter']].append(info)

    # Create output directory
    OUTPUT_DIR.mkdir(exist_ok=True)

    # Generate pages for each chapter
    for chapter_num, exercises in chapters_data.items():
        chapter_dir = OUTPUT_DIR / f"chapter-{chapter_num}"
        chapter_dir.mkdir(exist_ok=True)

        print(f"  Chapter {chapter_num}: {len(exercises)} exercises")

        # Create exercise pages
        for ex in exercises:
            page_html = create_exercise_page(ex)
            page_path = OUTPUT_DIR / ex['url']
            page_path.write_text(page_html, encoding='utf-8')

        # Create chapter index
        chapter_index_html = create_chapter_index(chapter_num, exercises)
        (chapter_dir / "index.html").write_text(chapter_index_html, encoding='utf-8')

    # Create main index
    main_index_html = create_main_index(chapters_data)
    (OUTPUT_DIR / "index.html").write_text(main_index_html, encoding='utf-8')

    print(f"\nGenerated {len(all_exercises)} exercise pages across {len(chapters_data)} chapters")
    print(f"Output directory: {OUTPUT_DIR}")
    print(f"Open: {OUTPUT_DIR / 'index.html'}")

if __name__ == "__main__":
    main()
