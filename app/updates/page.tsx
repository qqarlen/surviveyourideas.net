import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import FaqSection from "@/components/FaqSection";
import { SITE } from "@/lib/site";
import { AdsterraBannerContent } from "@/components/AdsterraBannerContent";

export const metadata: Metadata = {
  title: "Survive Your Ideas Update Log — Every Tracked Change (November 2026)",
  description:
    "Survive Your Ideas update history from the official Roblox API: launch (Oct 6), the early-November content wave with 40+ new words and Word Mastery (community-tracked), the code system arrival and both codes (THANKYOU, FIRSTUPDATE), plus what each change means for this wiki's data.",
  alternates: { canonical: "/updates" },
};

const faqs = [
  {
    q: "How often does Survive Your Ideas update?",
    a: "Very fast for a new game — the official Roblox API shows update timestamps in the game's 'updated' field, and the game was patched the same morning this log was last verified (November 8, 2026, with an [⭐UPD] tag visible on the game page). The first month already included the launch, a major early-November content wave, and the code system rollout.",
  },
  {
    q: "What did the early-November update add?",
    a: "The headline additions per community tracking: 40+ new words for the word catalog and a 'Word Mastery' system (community-reported — no official patch notes page exists yet). The same wave introduced the Codes icon and spin economy to the game UI, followed by the first code (THANKYOU) around November 7 and the second code (FIRSTUPDATE) with the November 8 patch. The game's chart climb from outside the top 100 to #3 happened in the same window.",
  },
  {
    q: "When did codes arrive in Survive Your Ideas?",
    a: "The redemption system went live during the early-November wave — coverage from November 7 shows the Codes icon documented in-game with THANKYOU as the first code ever released, and the November 8 patch added the second code (FIRSTUPDATE). Before that, from launch on October 6, the game had no code system at all. Our codes page tracks every working code daily.",
  },
  {
    q: "Where does this update log get its data?",
    a: "Three sources, in priority order: the official Roblox games API (update timestamps and description edits are objective data), the official game page and group, and community trackers for content details that lack official notes. Every entry below notes its evidence tier — API facts are marked as such, community-reported items are flagged.",
  },
  {
    q: "What is Word Mastery?",
    a: "A system referenced in community update tracking from early November (tracked as part of the 40+ words content wave). Full mechanics are not officially documented yet — when the developer publishes details or in-game documentation becomes verifiable, this log and the words pages will be updated with sourced information.",
  },
  {
    q: "Do updates change this wiki's data?",
    a: "Yes, and that is the point of this page. Update days re-trigger verification on the codes list, word behavior entries, and Meta Word prices. Changes get logged here with dates so you can see exactly when our data moved — which matters in a game updating this fast, where a week-old unverified page is already stale.",
  },
  {
    q: "How do I know when a new update drops?",
    a: "The game page's [⭐UPD] title tag and the group wall are the fastest official signals. If you want the wiki's digest instead: this log updates within a day of each tracked change, and update days are also when new codes are most likely to drop, so it doubles as a codes-watch page.",
  },
];

type UpdateEntry = {
  date: string;
  title: string;
  evidence: "api" | "official" | "community";
  body: string;
  wikiImpact: string;
};

const UPDATES: UpdateEntry[] = [
  {
    date: "November 8, 2026",
    title: "First update ships second code: FIRSTUPDATE",
    evidence: "official",
    body: "The November 8 patch ([⭐UPD] tag, API timestamp 2026-11-08T03:35Z) brought the game's second code: FIRSTUPDATE, granting free rewards. It was documented by Togame.io's codes tracker the same day, alongside the still-active THANKYOU. Concurrent player count held above 50K through the patch.",
    wikiImpact:
      "Codes page updated to two working codes (FIRSTUPDATE + THANKYOU), with the highlight card and FAQ rewritten. Full re-verification pass on word entries and Meta Word prices — no other data changes.",
  },
  {
    date: "November 7, 2026",
    title: "First code ever: THANKYOU (5 Lucky Spins)",
    evidence: "official",
    body: "The game's first code went live alongside its chart-topping week (the same window it climbed BloxControl's global ranks from #31 to #3). THANKYOU grants 5 Lucky Spins and is verified by three independent trackers (Destructoid, Dexerto, ProGameGuides). The redemption UI — Codes icon, upper-left corner — had arrived by this date per all three outlets' redemption steps.",
    wikiImpact:
      "Codes page launched as a live list rather than a watchtower. Spin Planner and items pages note the free-roll source.",
  },
  {
    date: "November 5-7, 2026",
    title: "Chart climb: outside top 100 → global #3 in three days",
    evidence: "community",
    body: "Third-party chart tracker BloxControl logged Survive Your Ideas entering its measured Top 100 on November 5 (rank 70), rising to 31 on November 6, and reaching #3 on November 7 with ~40,800 chart-active players and 79% approval. Regional visibility peaked at #2 in the UK and Italy, #3 in Austria/Switzerland/Germany/France and #5 in the US. Single-source tracker data, but with methodology published.",
    wikiImpact:
      "Home page stat cards updated to the verified numbers. No content changes required.",
  },
  {
    date: "Early November 2026 (exact date unverified)",
    title: "Content wave: 40+ new words + Word Mastery + codes UI (community-tracked)",
    evidence: "community",
    body: "Community update tracking describes a major content wave adding 40+ words to the catalog plus a 'Word Mastery' system, and the game UI gained the Codes icon and spin economy in the same window. No official patch notes have been published; the wave is reconstructed from tracker coverage and the in-game UI changes the codes articles document.",
    wikiImpact:
      "Words list marked as 'growing catalog — entries added as verified'. Word Mastery listed as community-reported pending official documentation.",
  },
  {
    date: "October 6, 2026",
    title: "Launch",
    evidence: "api",
    body: "Survive Your Ideas published on Roblox by the Survive Your Ideas group (developer SlayHatt). Official description from day one established the core loop: type any word, it comes to life, words stack, last one alive wins. Maximum 40 players per server, survival genre.",
    wikiImpact:
      "Baseline data: place ID, universe ID, group ID all anchored from the official API at this site's build time.",
  },
];

const EVIDENCE_BADGE: Record<string, { label: string; style: string }> = {
  api: { label: "Official API data", style: "bg-emerald-100 text-emerald-700" },
  official: { label: "Official / multi-source", style: "bg-blue-100 text-blue-700" },
  community: { label: "Community-reported", style: "bg-amber-100 text-amber-700" },
};

export default function UpdatesPage() {
  return (
    <div>
      <PageHero
        title="Survive Your Ideas Update Log"
        subtitle={`${UPDATES.length} tracked entries · evidence-tiered · this game updates fast, and so does this page`}
        image="/images/official/shot-81392951073628.png"
        breadcrumb={[{ href: "/", label: "Home" }, { label: "Update Log" }]}
      />
      <AdsterraBannerContent />

      <section className="prose-syi mt-8 max-w-none">
        <h2>Why Track Updates At All</h2>
        <p>
          Most game wikis quietly rot: a page written at launch still asserts
          launch-era facts months later. This log exists to prevent that —
          every meaningful change to the game lands here with a date and an
          evidence tier, and any wiki page affected by a change gets
          re-verified the same day. The game's own pace makes this
          non-optional: the official API showed a fresh patch the same
          morning this log was written, and the last month contained a
          launch, a major content wave and a code system rollout.
        </p>
        <p>
          Evidence tiers, so you can weigh each entry: <strong>API data</strong>{" "}
          comes straight from Roblox's official games endpoint (timestamps,
          description edits — objective); <strong>official / multi-source</strong>{" "}
          means confirmed by the developer's channels or multiple independent
          outlets; <strong>community-reported</strong> means tracked by
          community sources without official documentation, flagged in amber.
          Nothing on this page is invented to fill gaps — where the game
          ships no patch notes, the entry says so.
        </p>
      </section>

      {/* Timeline */}
      <section className="mt-8 space-y-4">
        {UPDATES.map((u, i) => (
          <div key={i} className="rounded-xl border border-blue-200 bg-white p-5">
            <div className="flex items-center gap-3 flex-wrap">
              <span className="text-xs font-extrabold uppercase tracking-wide text-slate-400">
                {u.date}
              </span>
              <span className={`rounded-lg px-2 py-0.5 text-xs font-extrabold ${EVIDENCE_BADGE[u.evidence].style}`}>
                {EVIDENCE_BADGE[u.evidence].label}
              </span>
            </div>
            <h2 className="mt-1 text-lg font-extrabold text-slate-900">{u.title}</h2>
            <p className="mt-2 text-sm text-slate-600 leading-relaxed">{u.body}</p>
            <p className="mt-2 text-sm text-slate-500 leading-relaxed border-l-2 border-blue-200 pl-3">
              <strong>Wiki impact:</strong> {u.wikiImpact}
            </p>
          </div>
        ))}
      </section>

      {/* What we watch */}
      <section className="prose-syi mt-10 max-w-none">
        <h2>What This Log Watches</h2>
        <p>
          The verification loop runs on several channels. The{" "}
          <strong>official Roblox API</strong> provides the update timestamp
          and description text — when the [⭐UPD] tag appears or the
          description changes, this wiki re-runs its checks. The{" "}
          <strong>game page and group</strong> (162,000+ members, run by
          developer SlayHatt) carry announcements; update days are also when
          new{" "}
          <Link href="/codes" className="text-brand-700 font-bold hover:underline">
            codes
          </Link>{" "}
          are most likely, so the codes list re-verifies first.{" "}
          <strong>Community trackers</strong> fill the gap where the game
          ships no patch notes — content additions like the 40+ words wave
          and Word Mastery currently live in that tier, flagged accordingly.
        </p>
        <p>
          What triggers a wiki-wide re-check rather than a log entry: any
          change to word behavior (the{" "}
          <Link href="/words" className="text-brand-700 font-bold hover:underline">
            words list
          </Link>{" "}
          re-verifies), any Meta Word price change (the{" "}
          <Link href="/meta-words" className="text-brand-700 font-bold hover:underline">
            pricing page
          </Link>{" "}
          re-verifies), and any new code (same-day list update). Cosmetic
          patches and server-side fixes get a log line only. The bar for
          "meaningful" is simple: does this change something a player would
          act on?
        </p>

        <h2>How Fast Does This Page Update?</h2>
        <p>
          Within a day of any tracked change — the same commitment as the
          codes page. The practical shortcut for players: this log doubles
          as a codes-watch page, because update days are the highest-probability
          code windows in Roblox games generally, and this game's first code
          already followed that pattern (dropped during the chart-topping
          milestone week). If you check one page after each game update,
          make it this one or the{" "}
          <Link href="/codes" className="text-brand-700 font-bold hover:underline">
            codes list
          </Link>
          .
        </p>
      </section>

      <FaqSection faqs={faqs} title="Update Log FAQ" />
    </div>
  );
}
