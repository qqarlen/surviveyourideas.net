import Link from "next/link";

export default function NotFound() {
  return (
    <div className="text-center py-20">
      <div className="type-bubble mx-auto mb-6 w-fit text-base">
        404<span className="animate-pulse">|</span>
        <span className="send-key">SEND</span>
      </div>
      <h1 className="text-3xl font-extrabold text-slate-900">
        This idea never came to life
      </h1>
      <p className="mt-3 text-slate-600 max-w-md mx-auto leading-relaxed">
        The page you typed isn't in our catalog. Unlike the game, we don't
        improvise — but everything you're looking for is one click away.
      </p>
      <div className="mt-6 flex flex-wrap justify-center gap-3">
        <Link
          href="/"
          className="rounded-lg bg-brand-500 hover:bg-brand-600 text-white font-extrabold px-5 py-3 shadow transition"
        >
          Wiki Home
        </Link>
        <Link
          href="/codes"
          className="rounded-lg bg-grass-500 hover:bg-grass-600 text-white font-extrabold px-5 py-3 shadow transition"
        >
          Working Codes
        </Link>
        <Link
          href="/words"
          className="rounded-lg border-2 border-slate-300 bg-white hover:bg-slate-50 text-slate-800 font-extrabold px-5 py-3 transition"
        >
          Words List
        </Link>
      </div>
    </div>
  );
}
