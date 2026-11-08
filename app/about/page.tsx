import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "About This Site",
  description:
    "About SurviveYourIdeas.net: our data standards, source policy, update process, and independence statement.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <div>
      <PageHero
        title="About This Site"
        subtitle="Data standards · source policy · independence · contact"
        breadcrumb={[{ href: "/", label: "Home" }, { label: "About" }]}
      />
      <section className="prose-syi mt-8 max-w-none">
        <h2>What This Site Is</h2>
        <p>
          SurviveYourIdeas.net is an independent fan-made reference for the
          Roblox game Survive Your Ideas by developer SlayHatt and the
          Survive Your Ideas group. We track the things players actually
          look up: working codes checked daily, the confirmed words with
          evidence, best-word strategy, all 10 Meta Words with verified
          prices, the items and spins economy, official badges, and the
          calculators that turn game numbers into personal decisions. The
          site is not affiliated with Roblox Corporation or the game's
          developers; all game art on this site is official promotional
          material used for identification, and all game names are property
          of their respective owners.
        </p>

        <h2>Our Data Standards</h2>
        <p>
          Every factual claim on this site comes from a source, and sources
          are cross-checked before publication. Three evidence tiers are used
          across the wiki: <strong>official</strong> (the developer's own
          description, first-party art, or the Roblox public API),
          <strong>multi-source</strong> (confirmed across independent
          outlets), and <strong>community-reported</strong> (single-source
          material, always flagged). Where two sources agree, we state the
          figure plainly. Where they conflict, we say so instead of picking
          one. Where no reliable data exists — the full 150-word catalog,
          exact spin odds — we say "unknown" rather than inventing numbers.
          This site would rather have gaps than fabrications.
        </p>
        <p>
          The verification loop: official Roblox pages and the Roblox public
          API come first (game stats, badge requirements, update timestamps,
          description changes); cross-checked media coverage comes second;
          and every claim is re-checked after game updates. The "Last data
          check" date in the footer and on data-heavy pages reflects the most
          recent pass, and the{" "}
          <Link href="/updates" className="text-brand-700 font-bold hover:underline">
            update log
          </Link>{" "}
          records what changed and when.
        </p>

        <h2>The Words Policy (Our Most Important Rule)</h2>
        <p>
          Survive Your Ideas' most-searched topic is its word catalog, and
          no verified public catalog of all 150+ entries exists. Many sites
          respond by publishing neat 150-row tables — invented, borrowed, or
          silently padded. This site's answer is the opposite: our{" "}
          <Link href="/words" className="text-brand-700 font-bold hover:underline">
            words list
          </Link>{" "}
          only includes entries with real evidence (official copy, first-party
          art, or multi-outlet coverage), every entry carries its evidence
          tier, and the list grows only as words get confirmed. The same
          discipline applies everywhere: single-source loadout advice is
          labeled community-reported, undocumented spin odds are declared
          absent, and nothing is invented for search traffic.
        </p>

        <h2>The Codes Policy</h2>
        <p>
          Codes land on the{" "}
          <Link href="/codes" className="text-brand-700 font-bold hover:underline">
            codes page
          </Link>{" "}
          only once confirmable — either working in-game for us or reported
          identically by at least two independent outlets. Each code carries
          its reward, date and sources; expired codes are archived with
          dates rather than quietly deleted; and fake codes are named as
          fakes in the warning section rather than listed for traffic.
        </p>

        <h2>The Tools</h2>
        <p>
          The{" "}
          <Link href="/cash-planner" className="text-brand-700 font-bold hover:underline">
            Cash Planner
          </Link>{" "}
          and{" "}
          <Link href="/spin-planner" className="text-brand-700 font-bold hover:underline">
            Spin Planner
          </Link>{" "}
          run entirely in your browser — nothing you enter is uploaded,
          logged or shared. Their math is exact; their inputs (your play
          schedule, your earnings rate) are yours to set. Constants in the
          calculators (Meta Word prices, spin costs) come from the same
          sourced data layer as the rest of the site.
        </p>

        <h2>Contact</h2>
        <p>
          Corrections, data tips and feedback: reach the site via the
          contact form on our{" "}
          <Link href="/contact" className="text-brand-700 font-bold hover:underline">
            contact page
          </Link>
          . Data corrections with sources get priority — if you've verified
          something we have wrong, you're our favorite kind of email.
        </p>
      </section>
    </div>
  );
}
