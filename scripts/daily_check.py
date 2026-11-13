#!/usr/bin/env python3
"""
Survive Your Ideas daily check (codes watchtower + update radar).
Checks once per day, fully read-only:
  1. Roblox official API: CCU / visits / updated timestamp / description
  2. Codes verification: fetch known tracker pages, diff against lib/codes.ts working list
  3. New-code signals: official description + group page for code announcements
  4. Site health: homepage / codes / tools reachable, GA/GTM tag intact
  5. GSC sitemap status (errors must stay 0)
Outputs a summary text (stdout) for the automation to relay. Never mutates the site.
"""
import json, re, sys, time, base64, urllib.request, urllib.parse, pathlib

ROOT = pathlib.Path(__file__).resolve().parent.parent
SITE = "https://www.surviveyourideas.net"
UNIVERSE_ID = "10769671316"
PLACE_ID = "77900175935766"
GROUP_ID = "1111201510"
STATE_FILE = ROOT / "data" / "daily-check-state.json"
# codes.ts is the site's source of truth — diff tracker findings against it
CODES_FILE = ROOT / "lib" / "codes.ts"

TRACKER_URLS = [
    "https://www.destructoid.com/survive-your-ideas-codes/",
    "https://progamepilot.com/survive-your-ideas-codes/",
    "https://www.dexerto.com/roblox/survive-your-ideas-codes-3425583/",
]

# Cross-game noise that keeps landing in tracker pages (sidebar "related articles",
# codes-hunter widget ads). Verified false positives, 2026-11-09..12 runs:
#   ARES/IRON/VANGUARD — "ARES THE IRON VANGUARD" (unrelated mobile game) article title
#   RAIDS — Noob Tower Defense code + game "RAIDS: Slay 1 Million Zombies"
#   AOPG — "A One Piece Game" cross-promo link in article footers
#   NEWMAPSCOMING handled separately (real code, now in site list)
FALSE_POSITIVE_CODES = {"RAIDS", "ARES", "IRON", "VANGUARD", "AOPG"}

def fetch(url, timeout=30):
    req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64)"})
    return urllib.request.urlopen(req, timeout=timeout).read()

def fetch_text(url, timeout=30):
    return fetch(url, timeout).decode("utf-8", errors="ignore")

def strip_tags(html):
    html = re.sub(r"<(script|style)[^>]*>.*?</\1>", " ", html, flags=re.S | re.I)
    return re.sub(r"<[^>]+>", " ", html)

lines = []
alerts = []

# ---------- 1. Roblox official API ----------
roblox = {}
try:
    roblox = json.loads(fetch(f"https://games.roblox.com/v1/games?universeIds={UNIVERSE_ID}"))["data"][0]
    lines.append(f"[Roblox] CCU={roblox.get('playing'):,} visits={roblox.get('visits'):,} favs={roblox.get('favoritedCount'):,}")
    lines.append(f"[Roblox] updated={roblox.get('updated')} name={roblox.get('name')}")
except Exception as e:
    alerts.append(f"Roblox API fetch failed: {e}")

# ---------- 2. Codes: diff trackers against site list ----------
site_codes = set(re.findall(r'code:\s*"([^"]+)"', CODES_FILE.read_text(encoding="utf-8")))
tracker_codes = {}
for url in TRACKER_URLS:
    try:
        text = strip_tags(fetch_text(url, timeout=25))
        found = set()
        # Uppercase code-like strings near "code" context; conservative pattern
        for m in re.findall(r"\b([A-Z][A-Z0-9]{3,15})\b", text):
            if m in {"CODES", "CODE", "ACTIVE", "EXPIRED", "REDEEM", "NEW", "ROBLOX", "LUCKY", "SPINS", "SPIN", "FREE", "GUIDE", "COPY"}:
                continue
            # Known false positives (cross-game pollution from sidebar articles /
            # codes-hunter widget ads) — confirmed repeated misfires 2026-11-09..12.
            if m in FALSE_POSITIVE_CODES:
                continue
            ctx = text.find(m)
            window = text[max(0, ctx-120):ctx+120].lower()
            if ("code" in window or "redeem" in window) and ("spin" in window or "reward" in window or "expired" in window or "active" in window):
                found.add(m)
        tracker_codes[url.split("/")[2]] = found
    except Exception as e:
        lines.append(f"[Tracker] {url.split('/')[2]} fetch failed: {type(e).__name__}")

all_tracker = set().union(*tracker_codes.values()) if tracker_codes else set()
new_codes = all_tracker - site_codes - {"THANKYOU"}
if new_codes:
    alerts.append(f"🚨 POSSIBLE NEW CODES from trackers: {sorted(new_codes)} — verify in-game, then update lib/codes.ts")
else:
    lines.append(f"[Codes] site list ({sorted(site_codes)}) matches trackers — no new codes detected")

# ---------- 3. New-code signals from official description ----------
desc = (roblox.get("description") or "").lower()
signals = [s for s in ["new code", "code drop", "use code", "promo code"] if s in desc]
if signals:
    alerts.append(f"🚨 CODE SIGNALS in official description: {signals} — CHECK NOW")
else:
    lines.append("[Codes] no new-code signals in official description")

# ---------- State diff: game update timestamp ----------
prev = {}
if STATE_FILE.exists():
    try:
        prev = json.loads(STATE_FILE.read_text())
    except Exception:
        prev = {}
new_updated = roblox.get("updated")
if prev.get("updated") and new_updated and prev["updated"] != new_updated:
    alerts.append(f"⚠️ GAME UPDATED since last check ({prev['updated']} -> {new_updated}) — check for new words/mechanics; update /updates page + re-verify affected pages")
if new_updated:
    prev["updated"] = new_updated
    prev["checked"] = time.strftime("%Y-%m-%d %H:%M UTC", time.gmtime())
    try:
        STATE_FILE.parent.mkdir(exist_ok=True)
        STATE_FILE.write_text(json.dumps(prev, indent=2))
    except Exception:
        pass

# ---------- 4. Site health ----------
GA_TAG = None  # set after GA/GTM env is configured; skip check when None
for path in ["/", "/codes", "/cash-planner", "/spin-planner", "/words"]:
    try:
        html = fetch_text(SITE + path, timeout=25)
        words = len(re.findall(r"[A-Za-z]{2,}", strip_tags(html)))
        line = f"[Site] {path or '/'} 200 chars={len(html)} words={words}"
        if GA_TAG:
            ok = GA_TAG in html
            line += f" ga={'Y' if ok else 'MISSING!'}"
            if not ok:
                alerts.append(f"GA tag missing on {path}")
        lines.append(line)
        if words < 500 and path not in ("/",):
            alerts.append(f"{path} looks thin ({words} words rendered)")
    except Exception as e:
        alerts.append(f"Site page {path} unreachable: {e}")

# ---------- 5. GSC sitemap errors ----------
try:
    svc = json.load(open("C:/Users/arlen/.workbuddy/keys/ga4-service-account.json"))
    b64 = lambda d: base64.urlsafe_b64encode(d).rstrip(b"=")
    now = int(time.time())
    header = b64(json.dumps({"alg": "RS256", "typ": "JWT"}).encode())
    claim = b64(json.dumps({"iss": svc["client_email"], "scope": "https://www.googleapis.com/auth/webmasters.readonly", "aud": "https://oauth2.googleapis.com/token", "iat": now, "exp": now + 3600}).encode())
    from cryptography.hazmat.primitives.serialization import load_pem_private_key
    from cryptography.hazmat.primitives.hashes import SHA256
    from cryptography.hazmat.primitives.asymmetric import padding
    key = load_pem_private_key(svc["private_key"].encode(), password=None)
    jwt = (header + b"." + claim + b"." + b64(key.sign(header + b"." + claim, padding.PKCS1v15(), SHA256()))).decode()
    data = urllib.parse.urlencode({"grant_type": "urn:ietf:params:oauth:grant-type:jwt-bearer", "assertion": jwt}).encode()
    tok = json.load(urllib.request.urlopen(urllib.request.Request("https://oauth2.googleapis.com/token", data=data, method="POST"), timeout=30))["access_token"]
    site_enc = urllib.parse.quote("sc-domain:surviveyourideas.net", safe="")
    req = urllib.request.Request(f"https://searchconsole.googleapis.com/webmasters/v3/sites/{site_enc}/sitemaps", headers={"Authorization": f"Bearer {tok}"})
    sm = json.load(urllib.request.urlopen(req, timeout=30))
    for s in sm.get("sitemap", []):
        for c in s.get("contents", []):
            lines.append(f"[GSC] sitemap submitted={c.get('submitted')} indexed={c.get('indexed')} (growing weekly = healthy, first weeks 0 is normal)")
        if s.get("errors") not in ("0", 0, None):
            alerts.append(f"GSC sitemap errors={s.get('errors')} — investigate")
except Exception as e:
    lines.append(f"[GSC] check skipped/failed: {e} (normal before GSC property is set up)")

# ---------- output ----------
print("=" * 46)
print("SYI Daily Check —", time.strftime("%Y-%m-%d %H:%M UTC", time.gmtime()))
print("=" * 46)
for l in lines:
    print(l)
print("-" * 46)
if alerts:
    print(f"🚨 ALERTS ({len(alerts)}):")
    for a in alerts:
        print("  " + a)
else:
    print("✅ No alerts — everything nominal.")
