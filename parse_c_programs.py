#!/usr/bin/env python3
"""
Parse all C files from K&R solutions and create a JavaScript data file
Similar to how DSP programs are structured
"""
import os
import json
import re
from pathlib import Path

BASE_DIR = Path(r"C:\Users\tongs\OneDrive\桌面\RandomIdeas")
SOURCE_DIR = BASE_DIR / "the-c-programming-language-2nd-edition-solutions"
OUTPUT_FILE = BASE_DIR / "CSrc" / "src" / "data" / "c-programs.js"

def extract_program_info(c_file_path):
    """Extract program information from file path and content"""
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

    # Generate title and description from comments
    lines = code.split('\n')
    description = ""
    for line in lines[:10]:  # Check first 10 lines for comments
        if line.strip().startswith('//') or line.strip().startswith('/*'):
            desc_line = re.sub(r'/\*|\*/|//', '', line).strip()
            if desc_line and len(desc_line) > 10:
                description = desc_line
                break

    if not description:
        description = filename.replace('.c', '').replace('_', ' ').title()

    # Generate ID
    program_id = f"ex{ex_major:02d}{ex_minor:02d}"

    # Create title
    title = f"Exercise {ex_major}.{ex_minor}: {description}"

    return {
        'id': program_id,
        'title': title,
        'displayName': f"Ex {ex_major}.{ex_minor}: {filename.replace('.c', '').replace('_', ' ').title()}",
        'description': description,
        'chapter': f"{chapter_num:02d}",
        'category': f"K&R - Chapter {chapter_num}",
        'cCode': code,
        'tags': [
            f'chapter{chapter_num:02d}',
            f'exercise{ex_major}-{ex_minor}',
            'kandr',
            'c-programming'
        ]
    }

def escape_js_string(s):
    """Escape string for JavaScript"""
    return s.replace('\\', '\\\\').replace('`', '\\`').replace('$', '\\$')

def main():
    print("Parsing C files...")

    # Collect all C files
    c_files = list(SOURCE_DIR.glob("chapter_*/exercise_*/*.c"))
    print(f"Found {len(c_files)} C files")

    programs = []
    for c_file in sorted(c_files):
        info = extract_program_info(c_file)
        programs.append(info)
        print(f"  {info['id']}: {info['displayName']}")

    # Create output directory
    OUTPUT_FILE.parent.mkdir(parents=True, exist_ok=True)

    # Generate JavaScript file
    js_content = "// Auto-generated from K&R C Programming Language solutions\n\n"
    js_content += "const programs = [\n"

    for i, prog in enumerate(programs):
        js_content += "  {\n"
        js_content += f"    id: '{prog['id']}',\n"
        js_content += f"    title: '{escape_js_string(prog['title'])}',\n"
        js_content += f"    displayName: '{escape_js_string(prog['displayName'])}',\n"
        js_content += f"    description: '{escape_js_string(prog['description'])}',\n"
        js_content += f"    chapter: '{prog['chapter']}',\n"
        js_content += f"    category: '{prog['category']}',\n"
        js_content += f"    cCode: `{escape_js_string(prog['cCode'])}`,\n"
        js_content += f"    tags: {json.dumps(prog['tags'])}\n"
        js_content += "  }" + ("," if i < len(programs) - 1 else "") + "\n"

    js_content += "]\n\n"
    js_content += "export default programs\n"

    OUTPUT_FILE.write_text(js_content, encoding='utf-8')

    print(f"\nGenerated {len(programs)} programs")
    print(f"Output: {OUTPUT_FILE}")

if __name__ == "__main__":
    main()
