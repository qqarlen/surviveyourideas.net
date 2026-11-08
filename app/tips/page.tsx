import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import FaqSection from "@/components/FaqSection";
import { WORDS } from "@/lib/words";
import { AdsterraBannerContent } from "@/components/AdsterraBannerContent";

export const metadata: Metadata = {
  title: "Survive Your Ideas Tips — How to Win & Survive Longer",
  description:
    "Survive Your Ideas advanced tips: reading words before they spawn, hazard-family counter-play, writer-turn strategy, endgame discipline, Word Diary economy and the loadout logic that wins matches.",
  alternates: { canonical: "/tips" },
};

const faqs = [
  {
    q: "What is the single biggest skill in Survive Your Ideas?",
    a: "Reading the typed word the instant it appears. Every word is public before its effect spawns, and that reaction window is the difference between survivors and casualties. Players who move on the word rather than the spawn consistently outlive faster-reacting players who wait for the hazard to materialize.",
  },
  {
    q: "How do I survive long matches (60+ words)?",
    a: "Route planning over reflexes. Persistent hazards shrink safe ground every minute, so the winners re-plan continuously instead of parking on a perch. Keep two escape routes at all times, avoid dense crowds when new words land, save mobility resources for the endgame, and treat high ground as a renewable position rather than a permanent home.",
  },
  {
    q: "Should I type dangerous words or safe words on my turn?",
    a: "Both, in sequence: safe catalogued words early in matches (calm arena, diary bonuses land), pressure words late (fewer survivors mean each word matters more). A player who banks three diary entries per match funds Meta Words roughly twice as fast as one who only types NUKE every turn — and still gets endgame eliminations when they matter.",
  },
  {
    q: "What's the best endgame strategy?",
    a: "Resource discipline. Enter the final circles with unspent Force Field and mobility charges — the last players alive are usually the ones who didn't panic-spend early. Position near cover but not in dead ends, let other survivors cluster, and save your biggest word for the moment the lobby compresses into a small space.",
  },
  {
    q: "How do I avoid dying to stacked hazards?",
    a: "Solve for the oldest hazard first when retreating, because your escape route is usually blocked by something that landed earlier. New words demand immediate reads but old hazards kill during the retreat. The stacked-arena death sequence is almost always: dodging the newest thing directly into the oldest thing.",
  },
  {
    q: "Do items matter more than positioning?",
    a: "Positioning, always. Every documented hazard is survivable with movement alone — high ground beats floods, open routes beat chasers, cover beats bombardment. Items are the insurance layer that converts 'probably survivable' into 'definitely survivable', which is why the community core is one mobility plus one defense item, not five offensive picks.",
  },
  {
    q: "How should I use my Cash — spins or Meta Words?",
    a: "Meta Words first. Every regular spin costs $10,000 and a single /double costs 250,000 — the math is not close. Lucky Spins from codes cover item rolls for free, so the efficient pattern is: code spins for items, earned Cash for slash-commands, and the Cash Planner to see exactly when each unlock lands at your pace.",
  },
];

export default function TipsPage() {
  return (
    <div>
      <PageHero
        title="Survive Your Ideas Tips & Winning Strategy"
        subtitle={`${WORDS.length} documented hazards · word-reading discipline · endgame resource play · economy tips that fund the meta`}
        image="/images/official/shot-107168990409225.png"
        breadcrumb={[{ href: "/", label: "Home" }, { label: "Tips" }]}
      />
      <AdsterraBannerContent />

      <section className="prose-syi mt-8 max-w-none">
        <h2>The Hierarchy Of Skills</h2>
        <p>
          Survive Your Ideas looks like a chaos game, but consistent winners
          share a learnable skill stack. In order of impact:{" "}
          <strong>word reading</strong> (moving on the typed word, not the
          spawn), <strong>route discipline</strong> (two escape routes,
          always, re-planned every few minutes), <strong>crowd sense</strong>{" "}
          (never standing where the panic will run),{" "}
          <strong>turn strategy</strong> (diary words early, pressure words
          late), and <strong>economy management</strong> (Cash to Meta Words,
          code spins to items). This page walks each layer, building on the{" "}
          <Link href="/how-to-play" className="text-brand-700 font-bold hover:underline">
            beginner guide
          </Link>
          .
        </p>

        <h2>Skill One: Read The Word, Not The Spawn</h2>
        <p>
          The game's core information loop is public and instant: every typed
          word appears on screen the moment it is entered, while the effect
          takes a visible delay to materialize. That gap is your reaction
          window, and treating it as sacred is the whole skill. Practical
          drills: when any word lands, name its family in your head before
          you move (blast? flood? chaser? persistent?) — the{" "}
          <Link href="/words" className="text-brand-700 font-bold hover:underline">
            words list
          </Link>{" "}
          gives you the catalog, and after a few matches family recognition
          is instant. Second drill: move on the word, then adjust on the
          spawn. The first move wins the race; the second fixes the read.
        </p>
        <p>
          The failure mode is watching the effect. New players stare at the
          tsunami forming, the dinosaur emerging — and burn their reaction
          window on spectacle. The word told you everything a second earlier;
          the spawn is just confirmation. Players who internalize this one
          habit routinely double their survival time without touching any
          other part of their game.
        </p>

        <h2>Skill Two: Route Discipline In A Stacking Arena</h2>
        <p>
          Words stack — the documented core escalation — so the arena you
          planned around sixty seconds ago no longer exists. The discipline
          that survives this: <strong>two escape routes, always</strong>, one
          primary and one backup, mentally refreshed every time a new word
          lands. The backup route is what separates survivors from
          statistics, because stacked-hazard deaths follow one pattern with
          mechanical reliability: dodging the newest hazard directly into
          the oldest one.
        </p>
        <p>
          Retreat order matters: when the arena compresses, solve for the
          <em> oldest</em> active hazard first, because its footprint is the
          one your retreat path crosses. New effects demand reads but old
          hazards kill during the retreat. And re-verify height: floods
          reward verticality, but persistent aerial words (METEOR) turn the
          highest perch into a fixed target — the "safe spot" is a rotating
          designation, not a permanent address.
        </p>

        <h2>Skill Three: Crowd Sense</h2>
        <p>
          Forty players share impulses: loot attracts, bottlenecks compress,
          and "safe" spots draw crowds. Every crowd is a future disaster
          zone — area words typed into a clustered lobby do their worst
          work, and panic movement after each new word kills more players
          than the hazards themselves. The habits: spawn-side positioning
          away from obvious attractors, crossing bottlenecks immediately or
          late (never in the middle wave), and letting the crowd fight the
          chaser while you take the long quiet route. Crowd avoidance is
          also the offensive playbook's mirror: the{" "}
          <Link href="/best-words" className="text-brand-700 font-bold hover:underline">
            best-words timing
          </Link>{" "}
          section is essentially this skill in reverse — hunting crowds
          instead of leaving them.
        </p>

        <h2>Skill Four: Your Writer Turn Is A Budget</h2>
        <p>
          You get limited turns, and each one is spent from three accounts:
          pressure (eliminations), collection (diary bonuses), and comedy
          (clips). The allocation that wins: safe catalogued words early —
          the calm opening minutes are when banking undiscovered entries
          costs nothing — pressure words held for the late game when the
          survivor count makes each one decisive, and at most one gag input
          per session. The economy behind this is covered on the{" "}
          <Link href="/words" className="text-brand-700 font-bold hover:underline">
            words page
          </Link>{" "}
          (diary mechanics) and quantified on the{" "}
          <Link href="/cash-planner" className="text-brand-700 font-bold hover:underline">
            Cash Planner
          </Link>
          . Meta Words extend the budget further: /double doubles a turn's
          value, /secret denies the lobby's read entirely — the full arsenal
          with prices is on the{" "}
          <Link href="/meta-words" className="text-brand-700 font-bold hover:underline">
            Meta Words page
          </Link>
          .
        </p>

        <h2>Skill Five: Endgame Discipline</h2>
        <p>
          The final circles are won by resources, not reflexes. The players
          still standing at word sixty are the ones who did not panic-spend
          Force Field at word twenty or burn mobility cooldowns on cosmetic
          dodges. The checklist for endgame: unspent defense item, mobility
          ready, position near cover but out of dead ends, and your biggest
          held word ready for the final compression. Champion and Unstoppable
          are decided here — the{" "}
          <Link href="/badges" className="text-brand-700 font-bold hover:underline">
            badges page
          </Link>{" "}
          maps which achievements each skill feeds.
        </p>

        <h2>The Economy Layer Under Everything</h2>
        <p>
          Long-run improvement is funded: Cash buys Meta Words, diary
          bonuses compound, and code-funded Lucky Spins cover the item grind
          without touching your savings. The two rules that protect the
          engine: never buy regular spins while a Meta Word is within reach
          (ten spins equal one /double), and redeem{" "}
          <Link href="/codes" className="text-brand-700 font-bold hover:underline">
            codes
          </Link>{" "}
          after every update — free rolls are rolls that keep the fund
          intact. For the item-side logic (which slots to fill, in what
          order), the{" "}
          <Link href="/items" className="text-brand-700 font-bold hover:underline">
            items page
          </Link>{" "}
          has the loadout breakdown, and the{" "}
          <Link href="/spin-planner" className="text-brand-700 font-bold hover:underline">
            Spin Planner
          </Link>{" "}
          prices your roll decisions in Meta Word time.
        </p>
      </section>

      <FaqSection faqs={faqs} title="Tips FAQ" />
    </div>
  );
}
