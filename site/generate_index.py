import os
import re
import html

# 当前目录
ROOT = os.path.dirname(os.path.abspath(__file__))

# 找出所有 html 文件（排除 index.html）
html_files = []
for name in os.listdir(ROOT):
    if not name.lower().endswith(".html"):
        continue
    if name.lower() == "index.html":
        continue
    html_files.append(name)

html_files.sort()  # 按文件名排序，也可以改成别的排序规则

def extract_title(path):
    """从 html 文件里抓 <title>，找不到就用文件名。"""
    try:
        with open(path, "r", encoding="utf-8", errors="ignore") as f:
            text = f.read()
    except FileNotFoundError:
        return os.path.basename(path)

    m = re.search(r"<title>(.*?)</title>", text, re.IGNORECASE | re.DOTALL)
    if m:
        title = m.group(1).strip()
        if title:
            return title
    return os.path.basename(path)

entries = []
for fname in html_files:
    full_path = os.path.join(ROOT, fname)
    title = extract_title(full_path)
    entries.append((fname, title))

# 生成 index.html 内容
head = """<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Random Ideas · Home</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background: #f5f5f5;
            padding: 40px;
            color: #333;
        }
        h1 {
            text-align: center;
            margin-bottom: 40px;
        }
        .container {
            max-width: 600px;
            margin: auto;
            background: white;
            padding: 30px;
            border-radius: 10px;
            box-shadow: 0 2px 8px rgba(0,0,0,0.1);
        }
        .link-item {
            padding: 15px 20px;
            border: 1px solid #ddd;
            border-radius: 6px;
            margin-bottom: 15px;
            font-size: 18px;
            background: #fafafa;
            transition: 0.2s;
        }
        .link-item:hover {
            background: #eaeaea;
        }
        a {
            text-decoration: none;
            color: #0066cc;
        }
    </style>
</head>
<body>

<div class="container">
    <h1>Random Ideas</h1>
"""

tail = """
</div>

</body>
</html>
"""

items_html = []
for fname, title in entries:
    safe_title = html.escape(title)
    safe_href = html.escape(fname)
    items_html.append(f'''    <div class="link-item">
        <a href="{safe_href}" target="_blank">➡ {safe_title}</a>
    </div>''')

full_html = head + "\n".join(items_html) + tail

index_path = os.path.join(ROOT, "index.html")
with open(index_path, "w", encoding="utf-8") as f:
    f.write(full_html)

print(f"index.html updated with {len(entries)} entries.")
