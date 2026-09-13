#!/usr/bin/env python3
"""
Process CC-CEDICT.txt into corpus-dictionary.js for the pinyin input app.

Input:  CC-CEDICT.txt  (raw CC-CEDICT file, UTF-8)
Output: corpus-dictionary.js

Format of output:
    window.DICTIONARY = {
      "key": [ { hanzi: "...", english: "..." }, ... ],
      ...
    }
"""

import re
import sys

INPUT_FILE  = "CC-CEDICT.txt"
OUTPUT_FILE = "corpus-dictionary.js"

# Matches lines like:
#   傳統 传统 [chuan2 tong3] /tradition/traditional/
#   亞當·斯密 亚当·斯密 [Ya4 dang1 · Si1 mi4] /Adam Smith .../
LINE_RE = re.compile(r'^(\S+)\s+(\S+)\s+\[([^\]]+)\]\s+/(.+)/\s*$')

# Any CJK unified ideograph
CJK_RE = re.compile(r'[\u4e00-\u9fff]')

# Strips a trailing tone digit from a syllable: chuan2 -> chuan
TONE_DIGIT_RE = re.compile(r'[0-9]')

# After tones are stripped, any remaining uppercase letter or digit
# means the bracket was junk (e.g. "AA zhi4", "san1 C", "11 Qu1").
BAD_PINYIN_RE = re.compile(r'[A-Z0-9]')


def strip_tones(pinyin_bracket):
    """
    Convert 'chuan2 tong3' -> 'chuantong'
    Convert 'nu:3' -> 'nu'
    Returns lowercase toneless string, or None if the bracket looks
    like it contains junk (uppercase, digits, etc.).
    """
    # Normalise separators and the u: vowel marker
    cleaned = pinyin_bracket.replace('·', ' ').replace('u:', 'u').replace('U:', 'u')

    # Remove tone digits
    cleaned = TONE_DIGIT_RE.sub('', cleaned)

    # Now any leftover uppercase or digit is junk -> skip entry
    if BAD_PINYIN_RE.search(cleaned):
        return None

    # Remove all remaining spaces -> single toneless key
    cleaned = cleaned.replace(' ', '').lower()

    # Must contain at least one Latin letter
    if not re.search(r'[a-z]', cleaned):
        return None

    return cleaned


def process():
    dictionary = {}
    total_lines = 0
    skipped_bad_format = 0
    skipped_no_cjk = 0
    skipped_bad_pinyin = 0
    kept = 0

    with open(INPUT_FILE, 'r', encoding='utf-8') as f:
        for raw_line in f:
            line = raw_line.rstrip('\r\n')

            # Skip metadata and comments
            if line.startswith('#'):
                continue
            if not line.strip():
                continue

            total_lines += 1

            m = LINE_RE.match(line)
            if not m:
                skipped_bad_format += 1
                continue

            traditional, simplified, pinyin_bracket, defs_bracket = m.groups()

            # Must contain at least one CJK character
            if not CJK_RE.search(simplified):
                skipped_no_cjk += 1
                continue

            key = strip_tones(pinyin_bracket)
            if key is None:
                skipped_bad_pinyin += 1
                continue

            # First English definition only
            definitions = defs_bracket.split('/')
            english = definitions[0].strip() if definitions else ""

            entry = { "hanzi": simplified, "english": english }

            dictionary.setdefault(key, []).append(entry)
            kept += 1

    # Sort keys alphabetically for a tidy file
    sorted_keys = sorted(dictionary.keys())

    with open(OUTPUT_FILE, 'w', encoding='utf-8') as out:
        out.write("// Auto-generated from CC-CEDICT.\n")
        out.write("// CC-CEDICT is licensed under CC BY-SA 4.0.\n")
        out.write("// https://creativecommons.org/licenses/by-sa/4.0/\n")
        out.write("//\n")
        out.write("// Do not edit by hand. Regenerate with process_cedict.py.\n\n")
        out.write("window.DICTIONARY = {\n")
        for key in sorted_keys:
            out.write(f'  "{key}": [\n')
            for entry in dictionary[key]:
                hanzi = entry["hanzi"].replace('\\', '\\\\').replace('"', '\\"')
                english = entry["english"].replace('\\', '\\\\').replace('"', '\\"')
                out.write(f'    {{ hanzi: "{hanzi}", english: "{english}" }},\n')
            out.write('  ],\n')
        out.write("};\n")

    print(f"Total data lines read:        {total_lines}")
    print(f"Entries kept:                 {kept}")
    print(f"Skipped (bad line format):    {skipped_bad_format}")
    print(f"Skipped (no CJK in simpl.):   {skipped_no_cjk}")
    print(f"Skipped (bad pinyin bracket): {skipped_bad_pinyin}")
    print(f"Unique toneless keys:         {len(sorted_keys)}")
    print(f"Wrote {OUTPUT_FILE}")


if __name__ == "__main__":
    process()