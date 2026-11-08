#!/usr/bin/env python3
"""GSC setup for surviveyourideas.net: JWT auth + add site + list. Proxy hardcoded (gsc_mcp pattern)."""
import json, time, base64, urllib.request, urllib.parse, sys

# Google API blocked direct — hardcode Clash proxy (gsc_mcp.py pattern, never read env)
PROXY = "http://127.0.0.1:7897"
opener = urllib.request.build_opener(urllib.request.ProxyHandler({"http": PROXY, "https": PROXY}))
urllib.request.install_opener(opener)

svc = json.load(open("C:/Users/arlen/.workbuddy/keys/ga4-service-account.json"))
b64 = lambda d: base64.urlsafe_b64encode(d if isinstance(d, bytes) else d.encode()).rstrip(b"=").decode()
now = int(time.time())
header = b64(json.dumps({"alg": "RS256", "typ": "JWT"}))
claim = b64(json.dumps({"iss": svc["client_email"], "scope": "https://www.googleapis.com/auth/webmasters", "aud": "https://oauth2.googleapis.com/token", "iat": now, "exp": now+3600}))
from cryptography.hazmat.primitives.serialization import load_pem_private_key
from cryptography.hazmat.primitives import hashes
from cryptography.hazmat.primitives.asymmetric import padding
key = load_pem_private_key(svc["private_key"].encode(), password=None)
jwt = header + "." + claim + "." + b64(key.sign((header + "." + claim).encode(), padding.PKCS1v15(), hashes.SHA256()))
data = urllib.parse.urlencode({"grant_type": "urn:ietf:params:oauth:grant-type:jwt-bearer", "assertion": jwt}).encode()
tok = json.load(urllib.request.urlopen(urllib.request.Request("https://oauth2.googleapis.com/token", data=data, method="POST"), timeout=30))["access_token"]
print("token OK")

site = "https://www.surviveyourideas.net/"
req = urllib.request.Request("https://searchconsole.googleapis.com/webmasters/v3/sites?websiteUrl=" + urllib.parse.quote(site, safe=""), method="PUT", headers={"Authorization": f"Bearer {tok}"})
try:
    resp = urllib.request.urlopen(req, timeout=30)
    print("add site:", resp.status)
except Exception as e:
    print("add site failed:", e)

req2 = urllib.request.Request("https://searchconsole.googleapis.com/webmasters/v3/sites", headers={"Authorization": f"Bearer {tok}"})
d = json.load(urllib.request.urlopen(req2, timeout=30))
for s in d.get("siteEntry", []):
    print(s.get("siteUrl"), "| permission:", s.get("permissionLevel"))
