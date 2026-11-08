import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import FaqSection from "@/components/FaqSection";
import SpinPlanner from "@/components/SpinPlanner";
import { SPIN_ECONOMY } from "@/lib/items";
import { AdsterraBannerContent } from "@/components/AdsterraBannerContent";

export const metadata: Metadata = {
  title: "Survive Your Ideas Spin Planner — Lucky Spins vs $10,000 Cash Rolls",
  description:
    "Free Survive Your Ideas spin calculator: compare your Lucky Spins from codes against $10,000 Cash rolls, see the Cash value of your free spins, and get a roll-or-hold verdict before you spend.",
  alternates: { canonical: "/spin-planner" },
};

const faqs = [
  {
    q: "What does the Spin Planner calculate?",
    a: "It takes your Lucky Spin stock (from codes), your Cash bank and how many rolls you want, then computes: how many spins your Lucky stock covers, how many Cash rolls you can actually afford, what your remaining bank looks like after the plan, and the Cash value of your free spins. It ends with a verdict — roll, wait for codes, or hold entirely.",
  },
  {
    q: "How much is a regular spin in Survive Your Ideas?",
    a: "$10,000 Cash per regular spin, per community-reported item guides. The developer has not published an official price sheet, but the figure is consistent across current coverage. Lucky Spins — the alternative roll type — come from codes like THANKYOU (5 spins) and are effectively $50,000 of rolls you did not grind.",
  },
  {
    q: "Are Lucky Spins actually better than regular spins?",
    a: "Two reasons they are treated as the premium roll: they are free (code-funded), and community guides report that rarity is gated by spin type — meaning Lucky Spins are the path reported for high-tier drops, not just a price-free duplicate of the Cash roll. Specific per-spin odds have not been published by the developer and are not guessed here.",
  },
  {
    q: "Should I ever spend Cash on regular spins?",
    a: "The standard advice is no — every spin delays Meta Words (/double and /secret cost 250,000 each, so ten spins equal one) and Lucky Spins from code waves cover item needs for free. The defensible exception: you keep dying to one hazard family, your five slots have a real hole, and no code wave is live. Targeted rolls to fill a specific hole can be worth it — the verdict above tells you if you are in that case.",
  },
  {
    q: "How do I get more Lucky Spins?",
    a: "Redeem codes — that is the only confirmed free source. THANKYOU grants 5 Lucky Spins as of November 2026, and new codes appear around game milestones. Our codes page tracks every working code daily, so checking it after each update is the reliable way to keep your stock growing without touching Cash.",
  },
  {
    q: "What are the item rarities I'm rolling for?",
    a: "Six tiers from Common up to Mythical (community-reported scale). The five-slot loadout means rolls only matter until your role coverage is complete — one mobility item, one defense item and three flex picks. Past that point, every additional roll is a marginal upgrade rather than a power jump, which is exactly when saving Cash for Meta Words becomes the better spend.",
  },
  {
    q: "Does the planner send my numbers anywhere?",
    a: "No. Everything computes locally in your browser — nothing is uploaded or logged. It is a static page with math in it.",
  },
];

export default function SpinPlannerPage() {
  return (
    <div>
      <PageHero
        title="Survive Your Ideas Spin Planner"
        subtitle={`Lucky Spins vs $${SPIN_ECONOMY.regularSpinCost.toLocaleString()} Cash rolls · the Cash value of every free spin · roll-or-hold verdicts`}
        breadcrumb={[{ href: "/", label: "Home" }, { label: "Spin Planner" }]}
      />
      <AdsterraBannerContent />

      <section className="prose-syi mt-8 max-w-none">
        <h2>The Spin Economy, Made Visible</h2>
        <p>
          Survive Your Ideas sells rolls in two currencies: Lucky Spins (free,
          from codes) and Cash at {SPIN_ECONOMY.regularSpinCost.toLocaleString()}{" "}
          per regular roll. The trap is that both buttons sit in the same
          menu, and a 100K bank feels rich right up until you notice that
          ten rolls equal an entire /double. This planner exists to make the
          trade explicit before you click: enter your stock and your goal,
          and it tells you what the plan costs, what your code spins are
          already worth, and whether rolling right now is a good idea at all.
        </p>
        <p>
          The context that makes Lucky Spins special, per community-reported
          guides: rarity appears to be gated by spin type, not playtime.
          Grinding matches never rolls Mythicals the way spins do, and the
          Lucky roll is the reported path for the high end of the six-tier
          scale. Combine that with codes being free, and the optimal pattern
          almost writes itself — let{" "}
          <Link href="/codes" className="text-brand-700 font-bold hover:underline">
            code drops
          </Link>{" "}
          drive item rolls, and route every earned Cash toward the Meta Word
          shelf instead. This tool is the check on the exceptions to that
          pattern.
        </p>
      </section>

      {/* Calculator */}
      <section className="mt-8">
        <h2 className="text-2xl font-extrabold border-b-2 border-blue-200 pb-2 mb-4">
          The Calculator
        </h2>
        <SpinPlanner />
      </section>

      {/* How to use */}
      <section className="prose-syi mt-10 max-w-none">
        <h2>How To Use The Spin Planner (Step By Step)</h2>
        <p>
          <strong>Step 1 — Count your Lucky Spins.</strong> Redeem whatever
          codes are live first (the{" "}
          <Link href="/codes" className="text-brand-700 font-bold hover:underline">
            codes page
          </Link>{" "}
          lists them checked daily), then check your spin inventory in-game.
          THANKYOU alone is worth 5 rolls — entering it in the calculator
          immediately shows you the $50,000 you did not have to grind.
        </p>
        <p>
          <strong>Step 2 — Enter your real Cash bank.</strong> Not what you
          wish you had. The comparison only works against truth, and the
          most common planner outcome — "you are X Cash short of the plan" —
          is only useful if the number is honest.
        </p>
        <p>
          <strong>Step 3 — Set the spins-wanted goal.</strong> The honest
          framing: you are not rolling for fun, you are rolling to fill a
          role hole. One mobility item missing? Two or three rolls is a
          realistic goal. Chasing Mythicals before your five slots even have
          answers? Twenty rolls will not reliably get you there, and the
          verdict will say so.
        </p>
        <p>
          <strong>Step 4 — Read the verdict, then zoom out.</strong> The
          verdict line gives the direct answer for this plan: roll with
          Lucky stock only, cover the gap with Cash, or hold entirely. Then
          take the Cash-left-after number to the{" "}
          <Link href="/cash-planner" className="text-brand-700 font-bold hover:underline">
            Cash Planner
          </Link>{" "}
          and see what it did to your Meta Word timeline — that second view
          is where the real cost of a spin session becomes visible.
        </p>
      </section>

      <section className="prose-syi max-w-none">
        <h2>Three Recurring Use Patterns</h2>
        <p>
          <strong>Pattern one: the fresh-code check.</strong> A new code wave
          just dropped and your Lucky stock jumped. Before rolling all of
          it, run the numbers — if your five slots already have their core
          answers, the planner usually shows that saving part of the stock
          for the next gap beats impulse-rolling everything on the same day.
          Lucky Spins do not expire, but opportunities to waste them do.
        </p>
        <p>
          <strong>Pattern two: the hole-filler.</strong> You keep getting
          eliminated the same way — no mobility for blasts, no defense for
          chasers. Enter a small spins-wanted number (2-3), and if the plan
          is affordable, roll exactly that many and stop. The calculator's
          cash-left-after figure shows you how much of your Meta Word fund
          survived the operation, which is the number that keeps targeted
          rolling from becoming a habit.
        </p>
        <p>
          <strong>Pattern three: the collection ceiling.</strong> Late-game
          players with complete five-slot coverage face a different
          question: is a Mythical chase worth delaying /jackpot? Run a
          large spins-wanted number and read the verdict honestly — the
          planner will show the Cash cost of the chase, and the Meta Words
          page will show what the same Cash buys on the slash-command shelf.
          Usually the answer is: wait for the next code wave, roll free,
          keep grinding. But now you know rather than guess.
        </p>
      </section>

      <FaqSection faqs={faqs} title="Spin Planner FAQ" />
    </div>
  );
}
