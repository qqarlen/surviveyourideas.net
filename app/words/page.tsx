import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import FaqSection from "@/components/FaqSection";
import { WORDS, WORD_CATEGORIES, UNKNOWN_WORD_BEHAVIOR, DIARY_TARGET } from "@/lib/words";
import { AdsterraBannerContent } from "@/components/AdsterraBannerContent";

export const metadata: Metadata = {
  title: "Survive Your Ideas Words List — All Confirmed Words (November 2026)",
  description:
    "Every confirmed Survive Your Ideas word: NUKE, TSUNAMI, DINOSAUR, ZOMBIES, METEOR, TACOS, SHARK and more — what each does, which persist all match, and how to survive each one. Evidence-based, no guessed catalog.",
  alternates: { canonical: "/words" },
};

const faqs = [
  {
    q: "How many words are in Survive Your Ideas?",
    a: "The official Collector badge asks you to 'Discover 150 words in your Word Diary', which puts the verified floor at about 150 catalogued entries. The real number is likely higher and changes with updates — and typed words that are NOT in the catalog still do something (they map to the closest effect or spawn a same-named NPC), so the practical space of words is far larger than the fixed list.",
  },
  {
    q: "Which words persist for the whole match?",
    a: "ZOMBIES and METEOR are the two documented persistent words — Sportskeeda's beginner guide notes their effects 'remain active for the duration of the match' instead of resolving like normal hazards. That makes them the highest total-pressure words in the game, and it is why typing them early maximizes their value.",
  },
  {
    q: "What happens if you type a word that isn't in the game?",
    a: "Two things can happen, per the documented behavior. The game either maps your input to the closest existing effect and triggers that, or it spawns an NPC that carries the name of whatever you typed. That second path is why social media is full of absurd custom creations — the game embraces unknown words instead of rejecting them.",
  },
  {
    q: "Why doesn't this page list 150 words?",
    a: "Because no verified public catalog exists. The game's Word Diary is the only complete source, it lives inside the game, and nobody — including the biggest fan wikis — has published a confirmed full list. Every site showing a neat 150-word table right now is guessing. We list words with actual evidence (official description, first-party art, or multi-outlet coverage) and grow the list as new entries get confirmed.",
  },
  {
    q: "What is the Word Diary in Survive Your Ideas?",
    a: "It is the in-game collection notebook that tracks which catalogued words you have personally triggered or witnessed. Each new discovery unlocks the corresponding Index entry and pays a one-time Cash bonus, and the Collector badge (one of the game's 8 official badges) asks for 150 discoveries. Word Diary progress is account-wide, so discoveries persist across matches.",
  },
  {
    q: "What is the best word to type for beginners?",
    a: "TACOS is the safest useful word: it is officially confirmed, it produces chaos rather than concentrated lethality, and it banks an Index discovery while the floor is still calm. Once your Diary has the safe entries, graduate to pressure words — NUKE and TSUNAMI for immediate impact, ZOMBIES or METEOR early in a match for all-match persistence.",
  },
  {
    q: "Do words stack in Survive Your Ideas?",
    a: "Yes — stacking is the game's core escalation mechanic. Official copy says 'words stack up, chaos keeps growing', and current coverage confirms old hazards keep acting while new ones spawn. By late-match you can be dodging flood water, a chaser and persistent zombies simultaneously, which is why endgame survival is about route planning more than reflexes.",
  },
];

export default function WordsPage() {
  return (
    <div>
      <PageHero
        title="Survive Your Ideas Words List"
        subtitle={`${WORDS.length} confirmed words with evidence · persistent hazards flagged · no guessed catalog`}
        image="/images/official/shot-128957347570067.png"
        breadcrumb={[{ href: "/", label: "Home" }, { label: "Words" }]}
      />
      <AdsterraBannerContent />

      <section className="prose-syi mt-8 max-w-none">
        <h2>Every Confirmed Word, With Evidence</h2>
        <p>
          Survive Your Ideas runs on a fixed catalog of words that trigger
          real effects, wrapped in a system that also accepts anything else
          you type. The distinction matters: catalogued words produce their
          documented hazard, unlock an Index entry and pay a one-time Cash
          bonus in your Word Diary — while unknown inputs improvise. This page
          lists only words with verified evidence, organized by hazard family,
          with survival counter-play for each. Word detail pages go deeper on
          the individual heavyweights.
        </p>
        <p>
          Before the list, the honest framing: the game's official Collector
          badge asks for <strong>{DIARY_TARGET} discovered words</strong>, and no
          verified public catalog of all {DIARY_TARGET} exists. The Word Diary
          lives inside the game, and no outlet — us included — has
          documentably enumerated every entry. What we can do is what this
          page does: every word below cites its evidence (official copy,
          first-party art, or multi-outlet coverage), and the list grows the
          moment new words are confirmed rather than being padded with
          guesses.
        </p>
      </section>

      {/* Category cards */}
      <div className="mt-6 grid md:grid-cols-2 gap-4">
        {WORD_CATEGORIES.filter((c) => WORDS.some((w) => w.category === c.id)).map((c) => (
          <div key={c.id} className="rounded-xl border border-blue-200 bg-white p-4">
            <h3 className="font-extrabold text-slate-900">{c.label}</h3>
            <p className="text-sm text-slate-600 mt-1">{c.blurb}</p>
            <div className="mt-2 flex flex-wrap gap-2">
              {WORDS.filter((w) => w.category === c.id).map((w) => (
                <Link
                  key={w.slug}
                  href={`/words/${w.slug}`}
                  className="inline-flex items-center gap-1 rounded-lg border border-slate-300 bg-slate-50 px-2.5 py-1 font-mono text-sm font-bold text-slate-800 hover:border-brand-400 hover:bg-blue-50 transition"
                >
                  {w.word}
                  {w.persistent && <span title="persists all match">♾️</span>}
                  {w.evidence === "community" && <span title="community-reported">🔶</span>}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Full table */}
      <section className="mt-10">
        <h2 className="text-2xl font-extrabold border-b-2 border-blue-200 pb-2 mb-4">
          Complete Confirmed Words Table
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr>
                <th className="bg-blue-100 border border-blue-200 px-3 py-2 text-left font-bold">Word</th>
                <th className="bg-blue-100 border border-blue-200 px-3 py-2 text-left font-bold">Family</th>
                <th className="bg-blue-100 border border-blue-200 px-3 py-2 text-left font-bold">Duration</th>
                <th className="bg-blue-100 border border-blue-200 px-3 py-2 text-left font-bold">Evidence</th>
                <th className="bg-blue-100 border border-blue-200 px-3 py-2 text-left font-bold">Counter-play</th>
              </tr>
            </thead>
            <tbody>
              {WORDS.map((w) => (
                <tr key={w.slug}>
                  <td className="border border-slate-200 px-3 py-2">
                    <Link href={`/words/${w.slug}`} className="font-mono font-bold text-brand-700 hover:underline">
                      {w.word}
                    </Link>
                  </td>
                  <td className="border border-slate-200 px-3 py-2 capitalize">{w.category}</td>
                  <td className="border border-slate-200 px-3 py-2">
                    {w.persistent ? (
                      <span className="font-bold text-red-600">Whole match ♾️</span>
                    ) : (
                      "Resolves"
                    )}
                  </td>
                  <td className="border border-slate-200 px-3 py-2">
                    {w.evidence === "official" ? (
                      <span className="font-bold text-emerald-700">Official</span>
                    ) : w.evidence === "media" ? (
                      <span className="font-bold text-brand-700">Multi-outlet</span>
                    ) : (
                      <span title="community-reported">🔶 Community</span>
                    )}
                  </td>
                  <td className="border border-slate-200 px-3 py-2 text-slate-600">
                    {w.survival.split(".")[0]}.
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Unknown words behavior */}
      <section className="prose-syi mt-10 max-w-none">
        <h2>What Happens When You Type An Unknown Word</h2>
        <p>
          Unknown inputs are one of the game's best features, and the behavior
          is documented rather than mysterious. When your word is not in the
          catalog:
        </p>
        <ul>
          {UNKNOWN_WORD_BEHAVIOR.map((b, i) => (
            <li key={i}>{b}</li>
          ))}
        </ul>
        <p>
          That second path — a same-named NPC spawning from whatever string
          you typed — is why the game's social feeds overflow with bespoke
          chaos. It also means the gap between the catalog and the practical
          word space is enormous: every player is a content generator, and
          the fixed {DIARY_TARGET}-entry diary only tracks the documented layer.
          For picking words with intent (rather than for laughs), the{" "}
          <Link href="/best-words" className="text-brand-700 font-bold hover:underline">
            best words ranking
          </Link>{" "}
          sorts the confirmed list by situation, and the{" "}
          <Link href="/meta-words" className="text-brand-700 font-bold hover:underline">
            Meta Words page
          </Link>{" "}
          covers the purchased slash-commands that supercharge any word you type.
        </p>

        <h2>How The Word Diary And Index Work</h2>
        <p>
          The Word Diary is your personal discovery log. When you enter a
          catalogued word — or it appears in a match you are in, per current
          community reports — its Index entry unlocks and pays a one-time
          Cash bonus. Index entries are grouped into sections, and the
          discoveries roll toward the <strong>Collector badge</strong>, whose
          official requirement is exactly {DIARY_TARGET} words. There is a real
          strategic tension here: your writer turns are limited, so every turn
          spent typing a safe unknown-to-you catalog entry is a turn not spent
          pressuring the lobby. Experienced players bank diary entries early
          in matches (when the arena is calm) and save pressure words for the
          late game — the reverse of what most first-timers do.
        </p>
        <p>
          Word Diary progress also feeds the economy. Those one-time discovery
          bonuses are the main non-survival Cash source, and Cash is the gate
          on all six Cash-side Meta Words (250K to 750K each, 2.55M for the
          full set). In other words: the player who methodically fills the
          diary buys /double weeks before the player who only types NUKE.
          Our{" "}
          <Link href="/cash-planner" className="text-brand-700 font-bold hover:underline">
            Cash Planner
          </Link>{" "}
          turns your play schedule into exact unlock dates for each one.
        </p>

        <h2>Words We Are Watching For</h2>
        <p>
          The catalog grows — the game was updated the same morning this page
          was last verified, and update waves have been adding words since
          early November (one tracked update log cites "40+ words" in a
          single content patch, community-reported). Coverage priority goes to
          words that appear in official copy first, then multi-outlet
          confirmations, then in-game screenshots from the developer's own
          channels. When a new word clears that bar, it joins the table above
          with its evidence noted — and when a word's behavior changes in an
          update, the entry gets re-verified rather than left stale. If you
          spot a word in-game that is missing here, the evidence bar is
          simple: a screenshot from an official channel or two independent
          written sources.
        </p>
      </section>

      <FaqSection faqs={faqs} />
    </div>
  );
}
