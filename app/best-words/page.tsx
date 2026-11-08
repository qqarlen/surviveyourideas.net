import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import FaqSection from "@/components/FaqSection";
import { WORDS } from "@/lib/words";
import { AdsterraBannerContent } from "@/components/AdsterraBannerContent";

export const metadata: Metadata = {
  title: "Best Words to Type in Survive Your Ideas — Ranked by Situation",
  description:
    "Best Survive Your Ideas words ranked by what you actually want: instant eliminations (NUKE, TSUNAMI), all-match pressure (ZOMBIES, METEOR), safe Word Diary progress (TACOS), and the timing that makes each one land.",
  alternates: { canonical: "/best-words" },
};

const faqs = [
  {
    q: "What is the single best word in Survive Your Ideas?",
    a: "For raw elimination power, NUKE — it is officially confirmed, instantly understood by every player, and punishes anyone mid-action. But the smarter answer is situational: ZOMBIES typed in minute one applies more total pressure across a whole match than any single moment-hazard, because its effect persists until the round ends. Power per moment vs. power per match is the core distinction this page is built around.",
  },
  {
    q: "What are the best words for eliminating players?",
    a: "NUKE and TSUNAMI head the list for instant area denial — the blast clears crowded space and the flood punishes anyone still on low ground. Against clustered lobbies, area words typed right after a jackpot rain or during a bottleneck crossing routinely take multiple players at once, which is also the fast route to the Deadly Idea badge (eliminate 3 players with one word).",
  },
  {
    q: "What are the funniest words with real effects?",
    a: "TACOS is the official signature gag word — a full taco flood is the game's most clipped moment. Unknown words are the real comedy engine, though: inputs not in the catalog spawn an NPC named after whatever you typed, so one player's 'FLYING SOFA' becomes everyone's problem. Just remember unknown words do not unlock Word Diary entries.",
  },
  {
    q: "Which words should I type early in a match?",
    a: "Persistent ones. ZOMBIES and METEOR stay active for the entire match, so typing them early maximizes their total pressure — a zombie tide typed in minute two grinds the lobby down through minute twelve. Early is also when the arena is calmest, making it the safe window to bank any catalogued words you have not discovered yet for Word Diary progress.",
  },
  {
    q: "What words are best for Word Diary progress?",
    a: "Any confirmed catalog word you have not personally logged yet — each new discovery pays a one-time Cash bonus toward Meta Words. The efficient pattern: bank safe discoveries (TACOS and similar low-threat entries) early in matches when the floor is calm, and leave pressure typing for the endgame. Check the words list for the full confirmed catalog with evidence.",
  },
  {
    q: "Do Meta Words like /double change what the best word is?",
    a: "Yes — that is their whole point. /double fires your next word twice, which converts a persistent word (ZOMBIES, METEOR) into double duration or an area word into a double spawn. /secret hides your input, denying everyone the reaction window that makes strong words survivable. Pairing Meta Words with the right base word matters more than the base word alone.",
  },
  {
    q: "Why does everyone see the word before the effect spawns?",
    a: "The typed word is public information — everyone reads it at the same moment, which creates the game's signature reaction window. Advanced play is built on moving when the word APPEARS, not when the effect finishes spawning. It is also why /secret exists as a purchasable Meta Word: hiding your input removes the counter-play entirely.",
  },
];

type RankedWord = {
  word: string;
  slug: string;
  tier: "S" | "A" | "B";
  forWhat: string;
  timing: string;
  why: string;
};

const RANKING: RankedWord[] = [
  {
    word: "NUKE",
    slug: "nuke",
    tier: "S",
    forWhat: "Instant eliminations",
    timing: "When the lobby clusters",
    why: "The blast punishes stillness. Type it while players are mid-climb, mid-loot or crowding a jackpot rain, and the removal count spikes. Also the fastest route to the Deadly Idea badge (3 eliminations off one word).",
  },
  {
    word: "ZOMBIES",
    slug: "zombies",
    tier: "S",
    forWhat: "All-match pressure",
    timing: "Minute one or two",
    why: "Persists until the match ends — documented exception alongside METEOR. Every minute it stays active is another minute of attrition on every other player. The earlier it lands, the more total damage it does to the lobby's stamina and positioning.",
  },
  {
    word: "TSUNAMI",
    slug: "tsunami",
    tier: "S",
    forWhat: "Area denial + verticality check",
    timing: "After a word that forced people low",
    why: "The flood punishes low ground and rewards players who kept height — so its kill count depends on lobby state. Combo it after a hazard that dragged everyone down, and it is arguably the highest single-word kill potential in the game.",
  },
  {
    word: "METEOR",
    slug: "meteor",
    tier: "A",
    forWhat: "Anti-camping pressure",
    timing: "When campers hold high ground",
    why: "The other persistent word. Aerial bombardment punishes static high-ground play — the standard survival perch does not work against it. Slightly below ZOMBIES in total value because its targets are the safest players rather than the weakest.",
  },
  {
    word: "DINOSAUR",
    slug: "dinosaur",
    tier: "A",
    forWhat: "Sustained chaser pressure",
    timing: "Mid-match, when space opens up",
    why: "A committed chaser keeps every player moving for its whole lifespan, and panicked movement kills more players than the creature itself. Best mid-match when the arena still has room to run but crowded corners already exist.",
  },
  {
    word: "TACOS",
    slug: "tacos",
    tier: "B",
    forWhat: "Safe Word Diary progress",
    timing: "Early, while the floor is calm",
    why: "Officially confirmed, chaotic but rarely lethal, and it banks an Index discovery for one-time Cash. The correct first-turn word for a player still filling the diary — comedy value plus economy value in one input.",
  },
  {
    word: "SHARK",
    slug: "shark",
    tier: "A",
    forWhat: "Terrain denial",
    timing: "When players hide in terrain pockets",
    why: "The cover-art word. It bursts through terrain, which makes it the counter to players treating landscape as safety — a niche the other chasers do not fill as hard.",
  },
  {
    word: "BLACK HOLE",
    slug: "black-hole",
    tier: "B",
    forWhat: "Pull-type disruption (community-reported)",
    timing: "Open-ground endgames",
    why: "Community-tier evidence: survival tooling ships an 'Anti Black Hole' toggle, implying a drag-type hazard that punishes open positioning. Listed for completeness until official sources name it — treat the specifics as provisional.",
  },
];

const TIER_STYLE: Record<string, string> = {
  S: "bg-red-100 border-red-300 text-red-700",
  A: "bg-blue-100 border-blue-300 text-blue-700",
  B: "bg-slate-100 border-slate-300 text-slate-600",
};

export default function BestWordsPage() {
  return (
    <div>
      <PageHero
        title="Best Words to Type in Survive Your Ideas"
        subtitle={`${RANKING.length} confirmed words ranked by situation · S-tier picks flagged · timing matters more than raw power`}
        image="/images/official/shot-125644641492243.png"
        breadcrumb={[{ href: "/", label: "Home" }, { label: "Best Words" }]}
      />
      <AdsterraBannerContent />

      <section className="prose-syi mt-8 max-w-none">
        <h2>The Short Answer, Then The Real One</h2>
        <p>
          If you want one word for one moment: <strong>NUKE</strong> — instant,
          area-wide, and officially confirmed. If you want one word for the
          whole match: <strong>ZOMBIES</strong> — it persists from spawn to
          final whistle, and no resolving hazard comes close on total
          pressure. Those two answers cover the split that actually decides
          word value in this game: <em>power per moment</em> versus{" "}
          <em>power per match</em>. Everything else on this page is that same
          distinction applied to timing, lobby state and your personal goals
          (eliminations vs. Word Diary progress vs. entertainment).
        </p>
        <p>
          One framing note before the table: every word below is a{" "}
          <strong>confirmed</strong> entry from our{" "}
          <Link href="/words" className="text-brand-700 font-bold hover:underline">
            words list
          </Link>{" "}
          — officially described or multi-outlet verified, with the one
          community-tier exception flagged. Rankings of this kind are
          inherently judgment layered on evidence: the evidence says what each
          word does, the judgment says when that matters. We mark which is
          which, and the ranking updates when updates change word behavior.
        </p>
      </section>

      {/* Tier table */}
      <section className="mt-8">
        <h2 className="text-2xl font-extrabold border-b-2 border-blue-200 pb-2 mb-4">
          The Ranking: S / A / B By Situation
        </h2>
        <div className="space-y-4">
          {RANKING.map((r) => (
            <div key={r.slug} className="rounded-xl border border-blue-200 bg-white p-5">
              <div className="flex items-center gap-3 flex-wrap">
                <span className={`inline-flex items-center justify-center w-9 h-9 rounded-lg border-2 font-extrabold text-lg ${TIER_STYLE[r.tier]}`}>
                  {r.tier}
                </span>
                <Link href={`/words/${r.slug}`} className="font-mono text-xl font-extrabold text-slate-900 hover:text-brand-700">
                  {r.word}
                </Link>
                <span className="text-sm font-bold text-slate-500">{r.forWhat}</span>
                {r.word === "BLACK HOLE" && (
                  <span className="text-xs text-amber-600 font-bold">🔶 community-reported</span>
                )}
              </div>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                <strong className="text-slate-800">Timing:</strong> {r.timing}. {r.why}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Timing deep-dive */}
      <section className="prose-syi mt-10 max-w-none">
        <h2>Timing: The Hidden Half Of Every Word</h2>
        <p>
          The typed word is public the instant it is entered — every player in
          a 40-player lobby reads it at the same time, and the effect spawns
          on a delay. That gap is the whole skill floor of Survive Your Ideas:
          strong players move when the word <em>appears</em>, average players
          move when the effect <em>lands</em>. It follows that the best word
          to type is partly a function of what the lobby can still react to.
          A TSUNAMI into a lobby that is already on high ground kills nobody;
          the same word two minutes earlier, or right after a hazard that
          forced everyone low, clears half the map.
        </p>
        <p>
          Persistence changes the timing calculus completely. ZOMBIES and
          METEOR never resolve, so their value is a simple product of{" "}
          <em>time active × lobby pressure</em> — which peaks the earlier they
          are typed. Moment hazards are the opposite: their value is{" "}
          <em>lobby state at spawn</em>, so they want to be held like a card
          until the board state favors them. The practical discipline: type
          persistent words in minute one, bank safe diary entries while the
          floor is calm, and hoard your moment word for the moment the lobby
          clusters. That sequence, more than any individual pick, is what
      separates consistent winners from lucky ones.
        </p>

        <h2>Pairing Words With Meta Words</h2>
        <p>
          The Meta Words layer multiplies everything above.{" "}
          <strong>/double</strong> (250K Cash) fires your next word twice —
          the highest-leverage pairing is a persistent word, effectively
          extending match-long pressure or stacking two spawns of an area
          hazard. <strong>/secret</strong> (250K) hides your input, which
          removes the public reaction window and turns even mid-tier words
          into elimination tools. <strong>/undo</strong> (400K) reverses a
          misfire, which matters most when your plan hinges on a specific
          timing window. The full pricing, effects and a recommended purchase
          order live on the{" "}
          <Link href="/meta-words" className="text-brand-700 font-bold hover:underline">
            Meta Words page
          </Link>
          , and the{" "}
          <Link href="/cash-planner" className="text-brand-700 font-bold hover:underline">
            Cash Planner
          </Link>{" "}
          tells you when /double lands at your actual play pace.
        </p>

        <h2>Words That Look Good But Usually Aren't</h2>
        <p>
          The lure of the funny word is real — unknown inputs spawn NPCs named
          after whatever you typed, and the clips are why the game is
          trending. But understand the trade: unknown words do not unlock
          Word Diary entries, and an improvised NPC is usually less lethal
          than a catalogued hazard. If you are chasing clips, by all means,
          type the absurd string. If you are chasing wins or Cash efficiency,
          the confirmed catalog is strictly better value per turn. The
          compromise most experienced players land on: one gag input early
          when the lobby is calm, catalogued pressure for everything after.
        </p>
        <p>
          Similarly, resist the reflex to always type the biggest word. A
          lobby that just survived a NUKE is primed for flood damage; a lobby
          mid-jackpot-rain is a clustered target; an endgame circle of five
          survivors fears a chaser more than an area wipe they can climb away
          from. Reading the board state each time your turn comes around is
          the actual skill — the ranking above just gives you the menu to
          order from.
        </p>
      </section>

      <FaqSection faqs={faqs} title="Best Words FAQ" />
    </div>
  );
}
