import Link from "next/link";
import type { Metadata } from "next";
import { SITE, TOOL_PAGES } from "@/lib/site";
import FaqSection from "@/components/FaqSection";
import { AdsterraBannerContent } from "@/components/AdsterraBannerContent";
import { CODES_STATE } from "@/lib/codes";
import { WORDS } from "@/lib/words";
import { CASH_META_WORDS, ROBUX_META_WORDS, CASH_META_TOTAL } from "@/lib/meta-words";

export const metadata: Metadata = {
  title: `Survive Your Ideas Wiki — Codes, Words List, Best Words & Guides`,
  description:
    "The independent Survive Your Ideas wiki: working codes checked daily (NEWMAPSCOMING, BIG5, FIRSTUPDATE + THANKYOU), every confirmed word with counter-play, all 10 Meta Words priced, badges and beginner guides.",
  alternates: { canonical: "/" },
};

const faqs = [
  {
    q: "Are there any working Survive Your Ideas codes right now?",
    a: "Yes. As of November 11, 2026 there are four active codes: NEWMAPSCOMING (30 Free Spins, dropped November 10 with the new-maps teaser), BIG5 (5 Lucky Spins, also November 10), FIRSTUPDATE (free rewards, from the November 8 update) and THANKYOU (5 Lucky Spins, live since around November 7, confirmed by Destructoid, Dexerto and ProGameGuides). You redeem them through the Codes icon in the upper-left corner of the game. Our codes page is re-checked daily so new drops land there within a day.",
  },
  {
    q: "What is Survive Your Ideas on Roblox?",
    a: "It is a free multiplayer survival game by the Survive Your Ideas group (developer SlayHatt), released October 6, 2026. Each round, one random player types any word — and that word comes to life in the arena. A TSUNAMI floods the map, a DINOSAUR starts chasing players, TACOS rains from the sky. Hazards stack on top of each other, and the last player alive wins. The game passed 50,000 concurrent players and hit #3 on third-party global charts within its first month.",
  },
  {
    q: "What are the best words to type in Survive Your Ideas?",
    a: "It depends on your goal. For raw elimination power, NUKE and TSUNAMI clear crowded areas fastest. For sustained pressure, ZOMBIES and METEOR persist for the entire match — type them early and they grind everyone down. For safe Index progress, TACOS is a low-risk discovery. Our best words page ranks every confirmed word by situation.",
  },
  {
    q: "How many words are in Survive Your Ideas?",
    a: "The official Collector badge asks you to discover 150 words in your Word Diary, which sets the floor at around 150 catalogued effects. No complete public catalog exists — the game maps unknown inputs to the closest existing effect or spawns an NPC with the name you typed, so typed words go far beyond the fixed list. Our words list covers every word that is officially confirmed or cross-verified, without guessing.",
  },
  {
    q: "What are Meta Words and how much do they cost?",
    a: "Meta Words are 10 unlockable slash-commands bought in the lobby. The six Cash words total 2,550,000 Cash: /double (250K), /secret (250K), /lag (400K), /undo (400K), /ghost (500K) and /jackpot (750K). The four Robux words are /god (79), /chaos (159), /reset (199) and /admin (360), with a 797-Robux bundle that has been seen at 570 during promotions. Full prices and strategy live on our Meta Words page.",
  },
  {
    q: "What do Lucky Spins do in Survive Your Ideas?",
    a: "Spins roll items for your five equipment slots, with rarities from Common up to Mythical. Regular spins cost $10,000 Cash each; Lucky Spins are the alternative roll — and so far they come free from codes, which is why the THANKYOU code matters. Community guides recommend banking Cash for Meta Words and treating Lucky Spins as your main upgrade path.",
  },
  {
    q: "Is Survive Your Ideas free to play?",
    a: "Yes, completely. Robux purchases exist (Meta Words, potential in-game offers) but nothing is required to play or win a match. The game has no energy system, no paywalled maps and no mandatory premium currency — the Cash you earn in matches funds every Meta Word on the Cash side.",
  },
  {
    q: "Why does this wiki exist when the game is so new?",
    a: "Because the game's own search demand exploded faster than any official documentation. Players are searching for codes, the words list and best-word strategy in massive numbers, and most coverage right now is thin single-page articles. This site is a proper database: every claim sourced, single-source claims labeled, and nothing invented — including a words catalog nobody has actually verified.",
  },
];

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE.name,
    url: SITE.url,
    description: SITE.description,
  };

  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* HERO */}
      <div className="relative overflow-hidden rounded-2xl hero-glow border border-blue-200 shadow-sm">
        <div className="absolute inset-0" aria-hidden>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/official/shot-106796956241875.png"
            alt=""
            className="absolute inset-0 w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-sky-50 via-sky-50/85 to-sky-50/40" />
        </div>

        <div className="relative px-6 py-12 md:px-10 md:py-16">
          <div className="type-bubble mb-5 text-sm md:text-base">
            SHARK<span className="animate-pulse">|</span>
            <span className="send-key">SEND</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 max-w-3xl drop-shadow-sm">
            Survive Your Ideas Wiki
          </h1>
          <p className="mt-4 text-lg font-bold text-slate-700 max-w-2xl drop-shadow-sm">
            Codes checked daily, every confirmed word with counter-play, all 10
            Meta Words priced, and survival math — for the Roblox game where
            anything you type comes to life.
          </p>
          <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-3 max-w-2xl">
            <div className="data-card">
              <div className="text-xs font-bold text-slate-500">Platform</div>
              <div className="font-extrabold text-slate-900">Roblox · Free</div>
            </div>
            <div className="data-card">
              <div className="text-xs font-bold text-slate-500">Developer</div>
              <div className="font-extrabold text-slate-900">SlayHatt</div>
            </div>
            <div className="data-card">
              <div className="text-xs font-bold text-slate-500">Released</div>
              <div className="font-extrabold text-slate-900">Oct 6, 2026</div>
            </div>
            <div className="data-card">
              <div className="text-xs font-bold text-slate-500">Concurrent players</div>
              <div className="font-extrabold text-brand-700">{SITE.stats.ccu}</div>
            </div>
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/codes"
              className="rounded-lg bg-brand-500 hover:bg-brand-600 text-white font-extrabold px-5 py-3 shadow transition"
            >
              Working Codes
            </Link>
            <Link
              href="/best-words"
              className="rounded-lg bg-grass-500 hover:bg-grass-600 text-white font-extrabold px-5 py-3 shadow transition"
            >
              Best Words Ranked
            </Link>
            <a
              href={SITE.game.robloxUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border-2 border-slate-300 bg-white/70 hover:bg-white text-slate-800 font-extrabold px-5 py-3 transition"
            >
              ▶ Play on Roblox
            </a>
          </div>
        </div>
      </div>

      <AdsterraBannerContent />

      {/* TOOLS */}
      <section className="mt-10">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-extrabold text-slate-900">🧮 Free Tools</h2>
          <span className="text-xs font-bold text-slate-500">No login, no ads-wall — just math</span>
        </div>
        <div className="grid md:grid-cols-2 gap-5">
          {TOOL_PAGES.map((t) => (
            <Link
              key={t.href}
              href={t.href}
              className="group rounded-2xl border-2 border-emerald-200 bg-gradient-to-b from-emerald-50/60 to-white p-6 shadow-sm hover:shadow-md hover:border-emerald-400 transition"
            >
              <div className="text-xs font-extrabold uppercase tracking-wide text-emerald-600 mb-2">
                {t.tag}
              </div>
              <h3 className="text-xl font-extrabold text-slate-900 group-hover:text-emerald-700">
                {t.title}
              </h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">{t.desc}</p>
              <span className="mt-3 inline-block text-sm font-extrabold text-emerald-600 group-hover:translate-x-1 transition">
                Open tool →
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* START CARDS */}
      <div className="mt-10 grid md:grid-cols-3 gap-5">
        {[
          {
            href: "/codes",
            title: "Codes (Checked Daily)",
            body: "NEWMAPSCOMING, BIG5, FIRSTUPDATE and THANKYOU are all live right now — 30 Free Spins plus three Lucky/rewards drops. We watch the official group, the developer's channels and the big trackers daily, so the next drop lands here with its reward and date before the stale sites update.",
            tag: "4 working codes",
          },
          {
            href: "/words",
            title: "Confirmed Words List",
            body: "Every word with verified evidence: NUKE, TSUNAMI, DINOSAUR, ZOMBIES, METEOR, TACOS, SHARK and more — with what each one does, which hazards persist for the whole match, and how to survive each. No guessed catalog, because nobody has verified 150 entries and we refuse to invent them.",
            tag: `${WORDS.length} words with evidence`,
          },
          {
            href: "/meta-words",
            title: "All 10 Meta Words Priced",
            body: "The complete slash-command arsenal: /double and /secret at 250K Cash, /undo and /lag at 400K, /ghost at 500K, /jackpot at 750K — plus all four Robux words and the bundle math. Prices cross-checked on two independent sources, with a purchase-order recommendation for your first million.",
            tag: "2,550,000 Cash total",
          },
        ].map((c) => (
          <Link
            key={c.href}
            href={c.href}
            className="group rounded-2xl border border-blue-200 bg-white p-6 shadow-sm hover:shadow-md hover:border-brand-400 transition"
          >
            <div className="text-xs font-extrabold uppercase tracking-wide text-brand-600 mb-2">
              {c.tag}
            </div>
            <h2 className="text-xl font-extrabold text-slate-900 group-hover:text-brand-700">
              {c.title}
            </h2>
            <p className="mt-2 text-sm text-slate-600 leading-relaxed">{c.body}</p>
          </Link>
        ))}
      </div>

      {/* ABOUT THE GAME */}
      <section className="prose-syi mt-12 max-w-none">
        <h2>What Is Survive Your Ideas?</h2>
        <p>
          Survive Your Ideas is a free Roblox survival game by the group{" "}
          <a href={SITE.game.groupUrl} target="_blank" rel="noopener noreferrer" className="text-brand-700 font-bold hover:underline">
            Survive Your Ideas
          </a>{" "}
          (developer SlayHatt), released on October 6, 2026. The pitch is one
          sentence long and genuinely unlike anything else on the platform:
          every round, one random player gets to type a word, and that word
          comes to life. Type TSUNAMI and a flood sweeps the arena. Type
          DINOSAUR and something with far too many teeth starts hunting
          everyone. Type TACOS and, well — tacos. The round continues with each
          new word stacking on top of everything still active, and the last
          player alive wins the match.
        </p>
        <p>
          The growth curve explains why you are reading about it now. The game
          passed <strong>{SITE.stats.visits} visits</strong> and{" "}
          <strong>{SITE.stats.favorites} favorites</strong> in its first month,
          held around <strong>{SITE.stats.ccu} concurrent players</strong> at
          the time of our last check, and climbed third-party global charts
          from outside the top 100 to <strong>#3 in three days</strong> during
          early November. The group behind it counts{" "}
          <strong>{SITE.stats.groupMembers} members</strong> and the game was
          updated the same morning this page was written. Matches run 40
          players per server, which is exactly why typed words are so
          devastating: one player's idea becomes forty players' problem.
        </p>
        <p>
          What makes the game sticky — and why a wiki is genuinely useful — is
          the layer of systems under the typing gimmick. There is a{" "}
          <strong>Word Diary</strong> that tracks the words you have
          discovered, tied to a Collector badge that asks for 150 entries and
          pays one-time Cash for each new discovery. There are{" "}
          <strong>10 Meta Words</strong> — slash-commands like /double,
          /secret and /jackpot — that you unlock with match earnings and that
          fundamentally change how you play your turns. There is an{" "}
          <strong>item system</strong> with five loadout slots and rarities
          from Common to Mythical, fed by spins that cost either $10,000 Cash
          or the Lucky Spins you get from codes. And there are{" "}
          <strong>8 badges</strong> covering everything from writing your
          first word to surviving 60 of them in a single match. Every one of
          those systems generates questions players actually search for, and
          every one has a page here.
        </p>

        <h2>How A Match Plays Out</h2>
        <p>
          Your first match has a predictable shape. You spawn on an open field
          with up to 39 other players. Every player gets writer duty once
          before anyone repeats, so the early minutes are a tour of whatever
          the lobby's imagination produces — some words are disasters, some
          spawn creatures that chase people, some are pure comedy. Because
          hazards <strong>stack</strong> rather than replace each other, the
          arena gets progressively more hostile: by minute ten you might be
          dodging persistent zombies, climbing past flood water and steering
          around a dinosaur at the same time. Survival basics are movement
          fundamentals — keep escape routes open, avoid dense crowds when a
          new word lands, and prefer high ground against floods and open
          ground against chasers.
        </p>
        <p>
          Your turn is where strategy lives. The game recognizes a fixed
          catalog of words, and typing an entry you have not logged before
          unlocks it in your <strong>Word Diary/Index</strong> for one-time
          Cash — so there is a real tension between <em>helping yourself</em>{" "}
          (typing dangerous words that eliminate rivals) and{" "}
          <em>helping your collection</em> (typing safe words you have not
          discovered yet). Unknown inputs are not wasted, either: the game
          maps them to the closest existing effect or spawns an NPC named
          after whatever you typed, which is how clips of absurd creations
          end up all over social media. Between turns you react to everyone
          else's ideas — and reading the typed word the instant it appears,
          before the effect even finishes spawning, is the single biggest
          survival edge recognized in advanced play.
        </p>
        <p>
          Meta Words add the second layer. Once you have banked some Cash —
          earned from survival time and Index unlocks — the lobby's Meta
          Words menu sells you slash-commands: /double makes your next word
          fire twice, /secret hides your input from other players, /undo
          reverses the last word when a plan misfires. The full Cash set
          costs {CASH_META_TOTAL.toLocaleString()} Cash, and our{" "}
          <Link href="/cash-planner" className="text-brand-700 font-bold hover:underline">Cash Planner</Link>{" "}
          tells you exactly how many days of your actual play schedule each
          one is worth. Item spins (regular spins cost $10,000, Lucky Spins
          come from codes like THANKYOU) round out the meta with a five-slot
          loadout — the community-standard core being a Grapple Hook for
          mobility and a Force Field for blast words.
        </p>

        <h2>Why Trust This Wiki</h2>
        <p>
          Two rules govern every page here. First,{" "}
          <strong>every factual claim is sourced</strong> — codes are
          cross-checked against at least two independent trackers before they
          appear, prices are verified on two outlets, and single-source
          claims (like specific loadout advice) are explicitly labeled
          community-reported. Second,{" "}
          <strong>we do not invent data to fill gaps</strong> — the game's
          full 150-word catalog has no verified public source, so instead of
          fabricating 150 word pages like some sites quietly do, our{" "}
          <Link href="/words" className="text-brand-700 font-bold hover:underline">words list</Link>{" "}
          only includes entries with real evidence, and grows as new words
          get confirmed. When the game updates — and it updates fast — we
          re-check the codes page, the prices and the roster, and the log of
          what changed lives on the{" "}
          <Link href="/updates" className="text-brand-700 font-bold hover:underline">updates page</Link>.
        </p>
      </section>

      <AdsterraBannerContent />

      <FaqSection faqs={faqs} />
    </div>
  );
}
