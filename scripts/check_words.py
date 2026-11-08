#!/usr/bin/env python3
"""Word-count audit: runs built HTML from .next/server/app against the 1200-word floor."""
import re, sys, pathlib

root = pathlib.Path(__file__).parent.parent / ".next" / "server" / "app"
FLOOR = 1200
# legal + about + contact exempt
EXEMPT = {"privacy-policy", "terms-of-service", "about", "contact", "not-found", "_not-found", "global-error", "_global-error"}

def count_words(html: str) -> int:
    h = re.sub(r"<(script|style)[^>]*>.*?</\1>", " ", html, flags=re.S)
    h = re.sub(r"<[^>]+>", " ", h)
    return len(re.findall(r"[A-Za-z]{2,}", h))

pages = sorted(root.rglob("*.html"))
fails = []
print(f"{'page':55s} {'words':>6s}  status")
for p in pages:
    rel = str(p.relative_to(root)).replace(".html", "").replace("index", "/").replace("\\", "/")
    name = rel.strip("/") or "/"
    slug = name.split("/")[-1] if name != "/" else "/"
    exempt = slug in EXEMPT
    wc = count_words(p.read_text(encoding="utf-8", errors="ignore"))
    ok = wc >= FLOOR
    mark = "EXEMPT" if exempt else ("OK" if ok else "FAIL")
    if not ok and not exempt:
        fails.append(name)
    print(f"{name:55s} {wc:6d}  {mark}")

print(f"\n{len(fails)} page(s) below {FLOOR} words")
if fails:
    print("\n".join(fails))
    sys.exit(1)
