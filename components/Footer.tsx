import Link from "next/link";
import { NAV_GROUPS, POPULAR_PAGES, SITE } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="mt-16 border-t-2 border-blue-200 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-10 grid grid-cols-2 md:grid-cols-4 gap-8">
        <div className="col-span-2 md:col-span-1">
          <div className="flex items-center gap-2 mb-3">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/official/icon-512.png"
              alt="Survive Your Ideas"
              className="w-9 h-9 rounded-lg border border-blue-300"
            />
            <span className="font-extrabold">SYI Wiki</span>
          </div>
          <p className="text-sm text-slate-600 leading-relaxed">
            An independent fan wiki for Survive Your Ideas on Roblox — animal
            data, food prices, zone rosters, training math and codes status,
            checked against live sources.
          </p>
        </div>
        <div>
          <h3 className="font-extrabold text-sm mb-3 text-brand-700">Popular</h3>
          <ul className="space-y-2 text-sm">
            {POPULAR_PAGES.map((p) => (
              <li key={p.href}>
                <Link href={p.href} className="text-slate-600 hover:text-brand-700 font-semibold">
                  {p.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="font-extrabold text-sm mb-3 text-brand-700">Sections</h3>
          <ul className="space-y-2 text-sm">
            {NAV_GROUPS.flatMap((g) => g.items).slice(0, 7).map((p) => (
              <li key={p.href}>
                <Link href={p.href} className="text-slate-600 hover:text-brand-700 font-semibold">
                  {p.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="font-extrabold text-sm mb-3 text-brand-700">Official Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href={SITE.game.robloxUrl} target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-brand-700 font-semibold">
                Play on Roblox →
              </a>
            </li>
            <li>
              <a href={SITE.game.groupUrl} target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-brand-700 font-semibold">
                Survive Your Ideas Group →
              </a>
            </li>
            <li>
              <Link href="/about" className="text-slate-600 hover:text-brand-700 font-semibold">About</Link>
            </li>
            <li>
              <Link href="/privacy-policy" className="text-slate-600 hover:text-brand-700 font-semibold">Privacy Policy</Link>
            </li>
            <li>
              <Link href="/terms-of-service" className="text-slate-600 hover:text-brand-700 font-semibold">Terms of Service</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-slate-100">
        <div className="mx-auto max-w-6xl px-4 py-4 text-xs text-slate-500 flex flex-wrap gap-2 justify-between">
          <span>© {new Date().getFullYear()} {SITE.domain} · Not affiliated with Roblox Corporation or Survive Your Ideas</span>
          <span>Last data check: {SITE.lastDataCheck}</span>
        </div>
      </div>
    </footer>
  );
}
