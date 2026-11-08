import Link from "next/link";
import { NAV_GROUPS, SITE } from "@/lib/site";

export function GamepadIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M6 9H4a1 1 0 0 0-1 1v.6l-.9 2.7a2.6 2.6 0 0 0 4.9 1.7h10a2.6 2.6 0 0 0 4.9-1.7L21 10.6V10a1 1 0 0 0-1-1h-2a5 5 0 0 0-4-2H10a5 5 0 0 0-4 2Zm1.5 1.2a.9.9 0 1 1 0 1.8.9.9 0 0 1 0-1.8Zm9 0a.9.9 0 1 1 0 1.8.9.9 0 0 1 0-1.8ZM12 12.4l.9 1.8h-1.8l.9-1.8Z" />
    </svg>
  );
}

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur slash">
      <div className="brand-bar h-1" />
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center gap-4">
        <Link href="/" className="flex items-center gap-2 shrink-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/official/icon-512.png"
            alt="Survive Your Ideas logo"
            className="w-10 h-10 rounded-xl border-2 border-blue-300 shadow"
          />
          <span className="font-extrabold text-lg leading-tight hidden sm:block">
            SYI<span className="text-brand-600"> Wiki</span>
          </span>
        </Link>
        <nav className="flex-1 hidden lg:flex items-center gap-1 justify-center">
          {NAV_GROUPS.map((g) => (
            <div key={g.title} className="relative group">
              <button className="px-3 py-2 rounded-lg font-bold text-sm text-slate-700 group-hover:bg-blue-100 group-hover:text-brand-700 transition flex items-center gap-1">
                {g.title}
                <svg viewBox="0 0 20 20" fill="currentColor" className="w-3 h-3 opacity-60"><path d="M5.5 7.5 10 12l4.5-4.5H5.5Z" /></svg>
              </button>
              {/* z-20: paints above .slash::after glow line (pseudo paints after plain children) */}
              <div className="absolute left-0 top-full pt-1 z-20 invisible opacity-0 translate-y-1 transition-all duration-150 delay-100 group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 group-hover:delay-0">
                <div className="rounded-xl border border-blue-200 bg-white shadow-lg py-2 w-56">
                  {g.items.map((it) => (
                    <Link
                      key={it.href}
                      href={it.href}
                      className="block px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-blue-50 hover:text-brand-700"
                    >
                      {it.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Link
            href="/codes"
            className="lg:hidden text-sm font-bold text-slate-600 hover:text-brand-700 px-2"
          >
            Codes
          </Link>
          <a
            href={SITE.game.robloxUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center gap-2 rounded-lg bg-brand-500 hover:bg-brand-600 text-white font-extrabold text-sm px-4 py-2 shadow transition"
          >
            <GamepadIcon className="w-4 h-4" />
            Play Survive Your Ideas
          </a>
          <a
            href={SITE.game.robloxUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Play Survive Your Ideas on Roblox"
            className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg bg-brand-500 text-white shadow"
          >
            <GamepadIcon className="w-5 h-5" />
          </a>
        </div>
      </div>
    </header>
  );
}
