import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import FaqSection from "@/components/FaqSection";
import CashPlanner from "@/components/CashPlanner";
import { CASH_META_TOTAL } from "@/lib/meta-words";
import { AdsterraBannerContent } from "@/components/AdsterraBannerContent";

export const metadata: Metadata = {
  title: "Survive Your Ideas Cash Planner — When You Can Afford Each Meta Word",
  description:
    "Free Survive Your Ideas Cash calculator: enter your match schedule and earnings rate to see exactly when you can afford /double, /secret, /lag, /undo, /ghost and /jackpot — with a recommended purchase order.",
  alternates: { canonical: "/cash-planner" },
};

const faqs = [
  {
    q: "How does the Cash Planner work?",
    a: "It converts your play schedule into daily Cash, then divides each Meta Word's price by that rate. Enter matches per day, minutes per match, your observed Cash-per-minute rate (the game shows your earnings at match end) and your current bank. The calculator outputs a per-word unlock timeline plus a recommended purchase order, all computed locally in your browser.",
  },
  {
    q: "Where does Cash come from in Survive Your Ideas?",
    a: "Two documented sources: survival time in matches (paid by the minute you stay alive) and one-time bonuses for each new Word Diary/Index discovery. The diary bonuses are the hidden lever — a player banking three new entries per match funds Meta Words dramatically faster than one who only types the same NUKE every turn.",
  },
  {
    q: "How accurate is the Cash-per-minute estimate?",
    a: "The calculator is exact arithmetic — accuracy depends on your inputs. Your Cash-per-minute varies with survival length and lobby pace, so check your match-end earnings screen and use a recent average. Regular players see it climb as their survival improves; re-enter your rate weekly and the timeline adjusts automatically.",
  },
  {
    q: "Should I ever buy regular spins instead of Meta Words?",
    a: "The standard advice is no: every $10,000 spin is a twenty-fifth of /double, and Lucky Spins from codes cover item rolls for free. The exception is if you specifically need items for a hazard you keep dying to and no code wave is live — then a few targeted rolls can be the right call. Our Spin Planner compares the two paths with your actual numbers.",
  },
  {
    q: "What should I buy first with 250,000 Cash?",
    a: "/double or /secret — both cost 250,000 and are the two cheapest Meta Words. /double doubles your next word's effect (the power pick); /secret hides your typed word from other players (the information pick that removes their reaction window). The full reasoning and the rest of the order lives on the Meta Words page.",
  },
  {
    q: "How long until I can afford the full 2.55M Cash set?",
    a: "At an active-evening pace (6 matches, 10 minutes each, ~1,500 Cash per minute) the reference math lands around 4-5 weeks of regular play. Your actual pace depends on survival skill and how much Word Diary you have left to fill — which is exactly what the calculator above personalizes.",
  },
  {
    q: "Does the calculator send my data anywhere?",
    a: "No. All math runs locally in your browser — nothing is uploaded, logged or shared. It is a static page with a calculator in it, nothing more.",
  },
];

export default function CashPlannerPage() {
  return (
    <div>
      <PageHero
        title="Survive Your Ideas Cash Planner"
        subtitle={`Your play schedule → unlock dates for all 6 Cash Meta Words · ${CASH_META_TOTAL.toLocaleString()} Cash full set · runs in your browser`}
        breadcrumb={[{ href: "/", label: "Home" }, { label: "Cash Planner" }]}
      />
      <AdsterraBannerContent />

      <section className="prose-syi mt-8 max-w-none">
        <h2>Why A Cash Planner (And Not Another Prices List)</h2>
        <p>
          Survive Your Ideas' biggest long-term grind is the Meta Word shelf:
          six Cash-side slash-commands ranging from 250,000 to 750,000, with
          the full set costing {CASH_META_TOTAL.toLocaleString()} Cash. Every
          prices page on the internet shows you those numbers. What none of
          them show is <em>your</em> timeline — when YOUR match schedule
          actually funds /double, and whether /jackpot is months away or
          never. That gap is what this tool closes: put in your real play
          pattern, get real dates back.
        </p>
        <p>
          The economics underneath are simple and fully documented on our{" "}
          <Link href="/meta-words" className="text-brand-700 font-bold hover:underline">
            Meta Words page
          </Link>
          : Cash flows from survival time and one-time Word Diary discovery
          bonuses, Meta Words are permanent unlocks (not consumables), and
          every regular spin you buy is Cash diverted from that fund. The
          planner's job is to make the trade-offs visible — how many evening
          sessions a spin purchase costs, how much faster /secret arrives if
          you bank diary entries instead of duplicating NUKE turns.
        </p>
      </section>

      {/* The calculator */}
      <section className="mt-8">
        <h2 className="text-2xl font-extrabold border-b-2 border-blue-200 pb-2 mb-4">
          The Calculator
        </h2>
        <CashPlanner />
      </section>

      {/* How to use */}
      <section className="prose-syi mt-10 max-w-none">
        <h2>How To Use The Cash Planner (Step By Step)</h2>
        <p>
          <strong>Step 1 — Count your matches per day.</strong> Be honest
          rather than aspirational: if you usually play three matches on
          weekdays and ten on weekends, enter your average (about five). The
          tool multiplies this by everything else, so an inflated number
          gives you a fantasy timeline.
        </p>
        <p>
          <strong>Step 2 — Set minutes per match.</strong> Survive Your Ideas
          matches commonly run past ten minutes for players who survive deep
          into the stack — use your typical survival length, not the
          theoretical maximum. Newer players who die early should enter their
          real number; the plan will show them that improving survival is
          their fastest Meta Word unlock, because Cash scales with time
          alive.
        </p>
        <p>
          <strong>Step 3 — Find your Cash-per-minute rate.</strong> After a
          match, the results screen shows your earnings. Divide by the match
          length (or just eyeball a few matches and average). Enter it with a
          K-suffix if you prefer — the input accepts 1500, 1.5K and similar
          formats. This is the one input that changes as you improve, so
          re-check it weekly.
        </p>
        <p>
          <strong>Step 4 — Enter your current Cash and read the verdicts.</strong>{" "}
          The table ranks all six words by when they land, and the verdict
          column tells you what to do about each: buy now, hold and skip
          spins, or grind on. The purchase-order card underneath gives the
          canonical sequence — two cheap multipliers first, the win-more
          card dead last — adjusted for what you can already afford.
        </p>
      </section>

      <section className="prose-syi max-w-none">
        <h2>Three Recurring Use Patterns</h2>
        <p>
          <strong>Pattern one: the new player check.</strong> Fresh accounts
          run low earnings rates, and the planner makes the honest math
          visible — at starter rates, /double is genuinely a week or more
          away, and that knowledge reframes everything: survival improvement
          raises Cash-per-minute, diary completion pays discovery bonuses,
          and{" "}
          <Link href="/codes" className="text-brand-700 font-bold hover:underline">
            code Lucky Spins
          </Link>{" "}
          cover item rolls without touching the fund. New players who see the
          timeline stop wasting Cash on impulse spins.
        </p>
        <p>
          <strong>Pattern two: the spin temptation audit.</strong> You have
          100K banked and the item shop is right there. Run the numbers: ten
          regular spins cost your entire /double. The planner is the
          cheapest possible way to talk yourself out of it — or, if you have
          banked far past the next unlock anyway, to see that a few rolls
          genuinely are free. Pair with the{" "}
          <Link href="/spin-planner" className="text-brand-700 font-bold hover:underline">
            Spin Planner
          </Link>{" "}
          for the roll-side math.
        </p>
        <p>
          <strong>Pattern three: the weekly re-check.</strong> As survival
          improves, Cash-per-minute climbs and every timeline compresses.
          Players who re-enter their rate weekly tend to find /double
          arriving days earlier than their original estimate — and the
          visible acceleration is its own motivation loop. Bookmark this
          page; the calculator needs no update when the game changes, only
          when prices change (and when they do, we update the data layer the
          same day).
        </p>
      </section>

      <FaqSection faqs={faqs} title="Cash Planner FAQ" />
    </div>
  );
}
