import os
import re

ROOT = os.path.dirname(os.path.abspath(__file__))

# 一个标记：如果 HTML 已经有这个，就不重复添加
FOOTER_TAG = "<!-- AUTO-FOOTER -->"

FOOTER_HTML = f"""
<!-- AUTO-FOOTER -->
<footer style="margin-top:40px; padding:20px; text-align:center; font-size:14px; color:#666;">
    <a href="index.html" style="color:#0066cc; text-decoration:none;">
        ⬅ Back to Home
    </a>
</footer>
</body>
</html>
"""

def process_html(path):
    """给单个 HTML 文件追加 footer"""
    try:
        with open(path, "r", encoding="utf-8") as f:
            content = f.read()
    except:
        return False

    # 已经有 footer，跳过
    if FOOTER_TAG in content:
        print(f"[Skip] Footer already exists in {path}")
        return False

    # 找到 </body> 或 </html> 的位置，插入 footer
    m = re.search(r"</body\s*>", content, flags=re.IGNORECASE)
    if m:
        # 替换整个文件结构：删掉原来的 </body></html>，添加 footer
        before = content[:m.start()]
        new_content = before + FOOTER_HTML
    else:
        # 没 body 的怪文件，直接末尾添加
        new_content = content + FOOTER_HTML

    with open(path, "w", encoding="utf-8") as f:
        f.write(new_content)

    print(f"[OK] Footer added → {path}")
    return True


def main():
    for name in os.listdir(ROOT):
        if not name.lower().endswith(".html"):
            continue
        if name.lower() == "index.html":
            continue  # 不改 index.html

        path = os.path.join(ROOT, name)
        process_html(path)


if __name__ == "__main__":
    main()
