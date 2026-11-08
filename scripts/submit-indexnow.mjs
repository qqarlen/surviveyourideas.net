// Self-contained IndexNow submitter.
// Usage: node scripts/submit-indexnow.mjs [url1 url2 ...]
// No args = submit all sitemap URLs.
import { readFileSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, "..");

const keyFile = readFileSync(resolve(root, ".env.indexnow"), "utf8").trim();
const key = keyFile.split("=").pop().trim();
const host = process.env.INDEXNOW_HOST ?? "www.surviveyourideas.net";
const endpoint = `https://api.indexnow.org/indexnow?key=${key}&host=${host}&keyLocation=https://${host}/${key}.txt`;

async function getSitemapUrls() {
  const res = await fetch(`https://${host}/sitemap.xml`);
  const xml = await res.text();
  return [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
}

const args = process.argv.slice(2);
const urls = args.length ? args : await getSitemapUrls();
if (!urls.length) {
  console.error("No URLs to submit. Is the site live?");
  process.exit(1);
}

const body = JSON.stringify({
  host,
  key,
  keyLocation: `https://${host}/${key}.txt`,
  urlList: urls,
});

const res = await fetch(endpoint, {
  method: "POST",
  headers: { "Content-Type": "application/json; charset=utf-8" },
  body,
});
console.log(`IndexNow: submitted ${urls.length} URLs -> HTTP ${res.status}`);
if (res.status >= 400) console.log(await res.text());
