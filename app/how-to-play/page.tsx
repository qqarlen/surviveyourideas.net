import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import FaqSection from "@/components/FaqSection";
import { SITE } from "@/lib/site";
import { REDEEM_STEPS } from "@/lib/codes";
import { AdsterraBannerContent } from "@/components/AdsterraBannerContent";

export const metadata: Metadata = {
  title: "How to Play Survive Your Ideas — Beginner Guide (November 2026)",
  description:
    "Survive Your Ideas beginner guide: how rounds work, what happens when words are typed, controls, Cash and the Word Diary, Meta Words, and the first-match plan that gets you to your first win.",
  alternates: { canonical: "/how-to-play" },
};

const faqs = [
  {
    q: "What is the objective in Survive Your Ideas?",
    a: "Be the last player alive. Every round, one random player types a word and that word comes to life as an arena hazard — floods, creatures, explosions, or pure comedy. Words stack on top of each other without clearing, so the arena gets more hostile every turn, and the match ends when only one survivor remains.",
  },
  {
    q: "How do controls work in Survive Your Ideas?",
    a: "Standard Roblox movement: WASD to move, Spacebar to jump, Left Shift to sprint, mouse for UI interaction. The skill is not the controls — it is reading each typed word the moment it appears and moving before the effect finishes spawning.",
  },
  {
    q: "What happens on your writer turn?",
    a: "You get to type one word, and the game brings it to life. Typed words are public — everyone reads them instantly. Catalogued words trigger their documented effect and unlock a Word Diary/Index entry for you (with one-time Cash); unknown words either map to the closest existing effect or spawn an NPC named after whatever you typed.",
  },
  {
    q: "How long is a match in Survive Your Ideas?",
    a: "Matches regularly run past 10 minutes because hazards resolve on spacing timers and every player gets writer duty once per cycle. Plan for a session, not a quick round — and note that the Survivor badge (survive 60 words in one match) is explicitly designed around long matches.",
  },
  {
    q: "What should I do in my first match?",
    a: "Survive the opening minutes, bank diary entries when the floor is calm, and keep escape routes open at all times. Don't worry about winning — first matches are for learning how hazard families move. The full first-session plan is in the guide below.",
  },
  {
    q: "How do you get Cash fast in Survive Your Ideas?",
    a: "Two levers: survive longer (Cash pays by the minute alive) and type catalogued words you have not logged yet (each new Word Diary discovery pays a one-time bonus). Both compound — better survival means more minutes, and diary completion means more bonuses per match.",
  },
  {
    q: "How many players are in one Survive Your Ideas server?",
    a: "40 per server. That matters for strategy: every typed word becomes 40 players' problem, crowds form around loot and bottlenecks, and area words typed into a crowd do the most damage — which is also the fast route to the Deadly Idea badge.",
  },
];

export default function HowToPlayPage() {
  return (
    <div>
      <PageHero
        title="How to Play Survive Your Ideas"
        subtitle="The complete beginner guide · round structure · your first-match plan · everything sourced"
        image="/images/official/shot-125644641492243.png"
        breadcrumb={[{ href: "/", label: "Home" }, { label: "How to Play" }]}
      />
      <AdsterraBannerContent />

      <section className="prose-syi mt-8 max-w-none">
        <h2>The One-Paragraph Version</h2>
        <p>
          Survive Your Ideas is a 40-player survival game where the hazards
          are made of words. Each round, one random player types anything —
          TSUNAMI, DINOSAUR, TACOS — and it comes to life. Words stack
          without clearing, so a match starts calm and ends as a triple
          disaster obstacle course. Last player alive wins. Your jobs, in
          priority order: read every typed word instantly, keep escape
          routes open, survive longer than everyone else, and spend your
          writer turns wisely (pressure when the lobby is weak, safe diary
          entries when it is calm).
        </p>

        <h2>Getting Started</h2>
        <p>
          Open the{" "}
          <a href={SITE.game.robloxUrl} target="_blank" rel="noopener noreferrer" className="text-brand-700 font-bold hover:underline">
            official game page
          </a>{" "}
          on Roblox and hit play — the game is completely free with no
          mandatory purchases. You spawn in a lobby where you can spend
          earned Cash on Meta Words (the slash-command abilities) and check
          your Word Diary progress. Matches launch in waves; a full server
          holds 40 players. Before your first round, do two things: redeem
          any live{" "}
          <Link href="/codes" className="text-brand-700 font-bold hover:underline">
            codes
          </Link>{" "}
          (THANKYOU currently grants 5 Lucky Spins — free item rolls), and
          skim the{" "}
          <Link href="/words" className="text-brand-700 font-bold hover:underline">
            confirmed words list
          </Link>{" "}
          so the first typed word you see is not your first surprise.
        </p>

        <h2>How A Round Actually Plays Out</h2>
        <p>
          A match is a cycle of writer turns. Every player gets duty once
          before anyone repeats, so with 40 players the word queue is long
          and the pace is steady — the game spaces out prompts so there is
          real time between effects. Early rounds are mostly single hazards
          with room to maneuver. The escalation is structural: words{" "}
          <strong>stack</strong> rather than replace each other, so by
          mid-match the arena holds several active hazards at once, and by
          the late game persistent threats (ZOMBIES and METEOR last the
          whole match) reshape every route you thought you had. Matches
          regularly pass the 10-minute mark for good lobbies — plan for a
          session.
        </p>
        <p>
          The single most important habit: <strong>read the word, not the
          spawn</strong>. Every typed word is public the instant it is
          entered, and effects take a moment to materialize. That gap is
          the whole skill floor — players who move on the word outrun
          players who wait for the effect to fully appear. Everything else
          in this guide builds on that one reflex.
        </p>

        <h2>Your Writer Turn: The Decision That Matters</h2>
        <p>
          When duty lands on you, you face a fork. Typing a{" "}
          <strong>pressure word</strong> (NUKE, TSUNAMI, DINOSAUR) attacks
          the lobby and creates elimination chances — the path to Champion
          and Deadly Idea badges. Typing a <strong>safe catalogued word</strong>{" "}
          you have not discovered yet banks a Word Diary entry with a
          one-time Cash bonus — the path to Collector and a funded Meta Word
          shelf. Unknown words are the comedy path: they improvise effects
          or spawn same-named NPCs, but do not unlock diary entries.
        </p>
        <p>
          The experienced pattern: safe diary words early (the arena is
          calmest in the opening minutes), pressure words late (when the
          surviving player count makes each word count), and one gag input
          early if you must — clips are worth something too. The situational
          menu with timings lives on the{" "}
          <Link href="/best-words" className="text-brand-700 font-bold hover:underline">
            best words ranking
          </Link>
          .
        </p>

        <h2>Survival Fundamentals By Hazard Family</h2>
        <p>
          Hazard families share counter-play shapes, which is why learning
          four patterns covers the whole roster:{" "}
          <strong>blasts</strong> (NUKE-family) punish position — leave the
          area or tank it with a Force Field; <strong>floods</strong>{" "}
          (TSUNAMI) punish low ground — take height early;{" "}
          <strong>chasers</strong> (DINOSAUR, SHARK) punish dead ends — keep
          two escape routes and never kite into corners;{" "}
          <strong>persistent words</strong> (ZOMBIES, METEOR) punish
          stillness over minutes — re-plan routes continuously instead of
          parking. Each family's details and evidence live on the{" "}
          <Link href="/words" className="text-brand-700 font-bold hover:underline">
            words list
          </Link>
          .
        </p>
        <p>
          Crowd awareness is the underrated half. Players cluster at loot,
          bottlenecks and "safe" spots — and crowds are exactly where area
          words do their worst work. When a new word lands, the crowd's
          panic movement is often more dangerous than the hazard itself:
          sprinting players fall into floods and corner themselves against
          chasers. Positioning away from dense groups, even at the cost of
          the optimal perch, is the survival play more often than not.
        </p>

        <h2>Between Matches: Cash, Diary, Meta Words, Items</h2>
        <p>
          The lobby is your progression hub. Cash earned from survival and
          diary bonuses buys <strong>Meta Words</strong> — permanent
          slash-commands from /double (250K) to /jackpot (750K) that
          supercharge your writer turns. The full price sheet and purchase
          order live on the{" "}
          <Link href="/meta-words" className="text-brand-700 font-bold hover:underline">
            Meta Words page
          </Link>
          , and the{" "}
          <Link href="/cash-planner" className="text-brand-700 font-bold hover:underline">
            Cash Planner
          </Link>{" "}
          personalizes the timeline to your play schedule. Items come from
          spins — {`$`}10,000 Cash per regular roll, or free Lucky Spins from
          codes — feeding a five-slot loadout where the community-standard
          core is a Grapple Hook (mobility) plus Force Field (defense). The
          details are on the{" "}
          <Link href="/items" className="text-brand-700 font-bold hover:underline">
            items page
          </Link>
          .
        </p>
        <p>
          One first-week ritual: redeem{" "}
          <Link href="/codes" className="text-brand-700 font-bold hover:underline">
            codes
          </Link>{" "}
          after every game update. THANKYOU-style drops cluster around
          milestones, and each Lucky Spin is item progress that never touches
          your Meta Word fund. The redemption flow takes seconds: Codes icon
          in the upper-left, type the code, press Redeem. Full steps below.
        </p>

        <h2>Redeeming Codes (30-Second Checklist)</h2>
        <ol className="list-decimal pl-6 mb-4 space-y-2">
          {REDEEM_STEPS.map((s, i) => (
            <li key={i}>{s}</li>
          ))}
        </ol>

        <h2>Your First Session, Step By Step</h2>
        <p>
          <strong>Match one:</strong> redeem any live codes before queueing,
          then play pure survival — no ambition beyond staying alive and
          reading words. Watch what each hazard family does before you touch
          anything. Expect elimination anyway; the lesson value is the
          point. <strong>Match two:</strong> use your writer turn on a safe
          catalogued word (TACOS is the classic) and bank your first diary
          entries while the floor is calm. <strong>Match three:</strong>{" "}
          hold a pressure word for the late game and feel the difference in
          endgame leverage — that timing instinct is the actual skill the
          game teaches. By match four or five, check your Cash total and
          start the /double countdown on the{" "}
          <Link href="/cash-planner" className="text-brand-700 font-bold hover:underline">
            Cash Planner
          </Link>
          . That's the whole on-ramp: the game's depth opens up from there on
          its own.
        </p>
      </section>

      <FaqSection faqs={faqs} title="Beginner FAQ" />
    </div>
  );
}
