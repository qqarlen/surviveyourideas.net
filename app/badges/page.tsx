import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import FaqSection from "@/components/FaqSection";
import { BADGES } from "@/lib/items";
import { DIARY_TARGET } from "@/lib/words";
import { AdsterraBannerContent } from "@/components/AdsterraBannerContent";

export const metadata: Metadata = {
  title: "Survive Your Ideas Badges — All 8 Requirements & Tips (Official Data)",
  description:
    "All 8 Survive Your Ideas badges with official requirements: Welcome, My First Idea, Survivor (60 words), Unstoppable, Champion, Deadly Idea, Collector (150 words) and Veteran (100 matches) — with practical tips for each.",
  alternates: { canonical: "/badges" },
};

const faqs = [
  {
    q: "How many badges are in Survive Your Ideas?",
    a: "Eight, straight from the official Roblox badges API: Welcome, My First Idea, Survivor, Unstoppable, Champion, Deadly Idea, Collector and Veteran. The list was pulled directly from Roblox's badge endpoint for the game's universe, so requirements below are the official descriptions — not community guesses.",
  },
  {
    q: "What is the Collector badge in Survive Your Ideas?",
    a: "Collector asks you to 'Discover 150 words in your Word Diary' — the game's long-game collection badge. Each new catalogued word you log unlocks its Index entry and pays a one-time Cash bonus, so Collector progress doubles as Meta Word funding. It is the grind badge that quietly makes you richer every match you play.",
  },
  {
    q: "What's the hardest badge to get?",
    a: "By requirement shape, Unstoppable (win 2 matches in a row) is the skill check — it demands back-to-back lobbies against live opposition. Deadly Idea (eliminate 3 players with one word) is the timing check. Veteran and Collector are pure playtime and collection grinds — not hard, just long. Survivor (survive 60 words in one match) is the stamina test that most players hit naturally after a few long lobbies.",
  },
  {
    q: "Do badges give rewards in Survive Your Ideas?",
    a: "Badges themselves are Roblox profile achievements — the reward is the badge on your profile. The game's internal rewards flow through the systems badges measure: Word Diary discoveries pay Cash bonuses (that's the Collector loop), survival time pays Cash, and wins pay position. No badge has been documented to grant Cash or items directly upon unlock.",
  },
  {
    q: "What's the fastest way to get Deadly Idea?",
    a: "Type area words when the lobby clusters. The classic setups: right after a jackpot rain (everyone converges on free Cash), during a bottleneck crossing, or into a crowd already fleeing another hazard. NUKE and TSUNAMI are the standard tools — check the best-words ranking for timing details.",
  },
  {
    q: "How long does Veteran (100 matches) take?",
    a: "Matches regularly run past 10 minutes, so 100 matches is 15-20 hours of play minimum — spread over a couple of weeks for a regular player. It accumulates passively while you grind Collector and chase wins, which is why it is listed as the pure playtime badge. No shortcut exists or is needed.",
  },
  {
    q: "Which badges should a new player chase first?",
    a: "The starter pair (Welcome, My First Idea) happen automatically. Then Survivor — long matches teach the game better than short ones and the 60-word threshold arrives naturally. From there, chase Champion once you know the hazard families, then the grind badges (Collector, Veteran) fill in as you play. Deadly Idea and Unstoppable are the endgame skill badges.",
  },
];

const DIFF_STYLE: Record<string, string> = {
  starter: "bg-emerald-100 text-emerald-700",
  easy: "bg-blue-100 text-blue-700",
  medium: "bg-amber-100 text-amber-700",
  hard: "bg-red-100 text-red-700",
  grind: "bg-purple-100 text-purple-700",
};

export default function BadgesPage() {
  return (
    <div>
      <PageHero
        title="Survive Your Ideas Badges"
        subtitle={`${BADGES.length} official badges · requirements from Roblox's badges API · tips for the skill checks`}
        image="/images/official/shot-81392951073628.png"
        breadcrumb={[{ href: "/", label: "Home" }, { label: "Badges" }]}
      />
      <AdsterraBannerContent />

      <section className="prose-syi mt-8 max-w-none">
        <h2>All 8 Badges, Straight From The Source</h2>
        <p>
          Badges are the game's achievement layer, and this page's data is as
          clean as wiki data gets: the requirements below come directly from
          Roblox's official badges API for Survive Your Ideas' universe —
          developer-written descriptions, not paraphrases from coverage. The
          difficulty ratings and tips are our editorial layer, clearly
          separated from the official text.
        </p>
        <p>
          Two structural notes before the list. First, badges here measure the
          game's three loops: survival (Survivor, Champion, Unstoppable),
          collection (Collector) and offensive skill (Deadly Idea) — which
          makes the badge shelf a map of how to actually play well. Second,
          none of the badges pay internal rewards on unlock; the paying
          systems are the ones the badges measure (diary discoveries pay
          Cash, survival pays Cash, wins pay position), so chasing badges and
          building your economy are the same activity.
        </p>
      </section>

      {/* Badge cards */}
      <section className="mt-8 space-y-4">
        {BADGES.map((b, i) => (
          <div key={b.name} className="rounded-xl border border-blue-200 bg-white p-5">
            <div className="flex items-center gap-3 flex-wrap">
              <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-blue-600 text-white font-extrabold text-sm">
                {i + 1}
              </span>
              <h2 className="text-xl font-extrabold text-slate-900">{b.name}</h2>
              <span className={`rounded-lg px-2.5 py-1 text-xs font-extrabold uppercase tracking-wide ${DIFF_STYLE[b.difficulty]}`}>
                {b.difficulty}
              </span>
            </div>
            <p className="mt-2 text-sm text-slate-700 font-semibold">
              Official requirement: <em>"{b.requirement}"</em>
            </p>
            <p className="mt-1 text-sm text-slate-600 leading-relaxed">
              <strong className="text-slate-800">Tip:</strong> {b.tip}
            </p>
          </div>
        ))}
      </section>

      {/* Deep dives */}
      <section className="prose-syi mt-10 max-w-none">
        <h2>Collector: The Badge That Pays You</h2>
        <p>
          Collector deserves its own section because it is the only badge
          wired into the economy. Its official requirement — discover{" "}
          <strong>{DIARY_TARGET} words in your Word Diary</strong> — makes it
          the longest chase in the game, but every step of that chase pays
          one-time Cash into your Meta Word fund. The efficient pattern is
          counterintuitive: spend your early-match writer turns typing
          catalogued words you have not logged yet (the arena is calmest in
          the opening minutes), then save pressure words for the endgame
          when eliminations matter. A player who banks three new diary
          entries per match funds /double roughly twice as fast as one who
          only types NUKE every turn — same playtime, better economy. Track
          what that pace unlocks on the{" "}
          <Link href="/cash-planner" className="text-brand-700 font-bold hover:underline">
            Cash Planner
          </Link>
          , and see which words are worth banking on the{" "}
          <Link href="/words" className="text-brand-700 font-bold hover:underline">
            confirmed words list
          </Link>
          .
        </p>
        <p>
          The {DIARY_TARGET}-word target also answers the community's most-asked
          question by implication: the game contains <em>at least</em>{" "}
          {DIARY_TARGET} catalogued entries, and the diary is the only
          authoritative catalog. No public source enumerates all of them —
          which is why this wiki's{" "}
          <Link href="/words" className="text-brand-700 font-bold hover:underline">
            words list
          </Link>{" "}
          only covers entries with real evidence instead of padding a fake
          table to {DIARY_TARGET}.
        </p>

        <h2>The Skill Badges: Champion, Unstoppable, Deadly Idea</h2>
        <p>
          These three measure offense, and they share one prerequisite:
          reading the typed word the instant it appears. The game shows every
          player's word publicly, and effects spawn on a delay — moving on
          the word rather than the spawn is the documented edge that
          separates consistent survivors from lucky ones.{" "}
          <strong>Champion</strong> (last one standing) rewards resource
          discipline: entering the endgame with unspent Force Field and
          Grapple charges beats entering with a spent inventory.{" "}
          <strong>Unstoppable</strong> (2 wins in a row) is mostly a queueing
          decision — busy hours mean full lobbies, and full lobbies mean
          weaker average opposition per match. <strong>Deadly Idea</strong>{" "}
          (3 eliminations per word) is pure timing: area words into clustered
          players, and the classic cluster moments are jackpot rains,
          bottleneck crossings and post-hazard escape crushes. The{" "}
          <Link href="/best-words" className="text-brand-700 font-bold hover:underline">
            best words ranking
          </Link>{" "}
          covers the timing windows for each.
        </p>

        <h2>The Grind Badges: Survivor, Veteran</h2>
        <p>
          Neither is hard; both are commitments. <strong>Survivor</strong>{" "}
          (survive 60 words in a single match) is really a stamina and
          positioning exam — the run ends when either your movement or your
          route planning fails, and long-match survival is exactly the skill
          that wins Champion anyway. Treat it as free practice for the badge
          you actually want. <strong>Veteran</strong> (100 matches) is pure
          playtime that accumulates while you do everything else — no
          strategy exists, none is needed, and 15-20 hours of matches happen
          naturally over a couple of weeks of regular play. If you are
          grinding Collector deliberately, Veteran arrives almost on its own.
        </p>
      </section>

      <FaqSection faqs={faqs} title="Badges FAQ" />
    </div>
  );
}
