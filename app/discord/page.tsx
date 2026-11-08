import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import FaqSection from "@/components/FaqSection";
import { SITE } from "@/lib/site";
import { AdsterraBannerContent } from "@/components/AdsterraBannerContent";

export const metadata: Metadata = {
  title: "Survive Your Ideas Discord & Official Links — Where News Actually Lands",
  description:
    "Survive Your Ideas official channels: an official Discord exists (per major trackers), plus the Roblox group (162K members) and the developer's X account. Where to find codes and announcements — and which invites to avoid.",
  alternates: { canonical: "/discord" },
};

const faqs = [
  {
    q: "Does Survive Your Ideas have an official Discord?",
    a: "Yes. Multiple trackers (Destructoid, Dexerto, ProGamePilot) document an official Survive Your Ideas Discord server where word suggestions, announcements and code drops happen. The invite link circulates via the official Roblox group — we deliberately do not repost invite URLs on this wiki, because game-themed invites are a common phishing vector and the only safe path is through the official group page.",
  },
  {
    q: "Is there a Trello board for Survive Your Ideas?",
    a: "No. Destructoid's coverage explicitly notes there is no dedicated Trello board yet, as of November 2026. The game's information layer lives in-game (Word Diary, Index) plus community wikis like this one. If the developers ever link a Trello, it would appear on the official game page or group — and this page updates within a day when that happens.",
  },
  {
    q: "Where do official announcements actually get posted?",
    a: "Three official channels: the Survive Your Ideas Roblox group (162,000+ members, run by developer SlayHatt), the official Discord server, and the developer's X account (@SlayHatt per Destructoid's coverage). Codes and milestone events have so far surfaced through this network — THANKYOU dropped during the game's chart-topping week in November.",
  },
  {
    q: "How do I find the official Discord without getting scammed?",
    a: "Go through the official Roblox group page and only follow links posted there. Ignore invite links from comment sections, random videos and 'codes' sites — game-themed Discords are a common vector for fake leaks and phishing. Never download 'script' or 'executor' files from any Discord: they violate Roblox's rules and risk your account.",
  },
  {
    q: "What is the Word Diary community like?",
    a: "Unusually collaborative for a competitive game. The group's own description invites players to discuss 'which words should be added to the game next' — the developer actively solicits word suggestions, which means the community directly shapes the game's catalog. Sharing discovered words and survival clips is the core social loop alongside match competition.",
  },
  {
    q: "Who is SlayHatt?",
    a: "The developer behind Survive Your Ideas, publishing through the Survive Your Ideas Roblox group (verified badge on the group owner profile). The group reached 162,000+ members and Tier 3 community status within the game's first month — one of the fastest-growing new Roblox communities of late 2026.",
  },
];

export default function DiscordPage() {
  return (
    <div>
      <PageHero
        title="Survive Your Ideas Discord & Official Links"
        subtitle="Official group (162K+ members) · Discord confirmed · developer X account · no Trello — all verified"
        breadcrumb={[{ href: "/", label: "Home" }, { label: "Discord & Links" }]}
      />
      <AdsterraBannerContent />

      {/* Official channels */}
      <section className="mt-8 grid md:grid-cols-3 gap-5">
        <a
          href={SITE.game.robloxUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-2xl border-2 border-blue-200 bg-white p-5 shadow-sm hover:shadow-md hover:border-brand-400 transition"
        >
          <div className="text-xs font-extrabold uppercase tracking-wide text-brand-600 mb-2">
            Play
          </div>
          <h2 className="text-lg font-extrabold text-slate-900">Official Game Page</h2>
          <p className="mt-2 text-sm text-slate-600 leading-relaxed">
            The game itself on Roblox. The [⭐UPD] title tag and description
            edits here are the fastest official signal for updates and new
            codes.
          </p>
          <span className="mt-3 inline-block text-sm font-extrabold text-brand-600">
            Open on Roblox →
          </span>
        </a>
        <a
          href={SITE.game.groupUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-2xl border-2 border-blue-200 bg-white p-5 shadow-sm hover:shadow-md hover:border-brand-400 transition"
        >
          <div className="text-xs font-extrabold uppercase tracking-wide text-brand-600 mb-2">
            Community
          </div>
          <h2 className="text-lg font-extrabold text-slate-900">Roblox Group (162K+)</h2>
          <p className="mt-2 text-sm text-slate-600 leading-relaxed">
            The developer-run group — and the safe path to the official
            Discord. Word suggestions happen here: the community literally
            shapes which words get added to the game.
          </p>
          <span className="mt-3 inline-block text-sm font-extrabold text-brand-600">
            Open the group →
          </span>
        </a>
        <div className="rounded-2xl border-2 border-dashed border-blue-300 bg-blue-50 p-5">
          <div className="text-xs font-extrabold uppercase tracking-wide text-brand-600 mb-2">
            Social
          </div>
          <h2 className="text-lg font-extrabold text-slate-900">X & Discord</h2>
          <p className="mt-2 text-sm text-slate-600 leading-relaxed">
            Developer X: @SlayHatt (per Destructoid). Official Discord:
            exists — reach it via the group page links only, never via
            invites from random sites (phishing is rampant around trending
            games).
          </p>
          <span className="mt-3 inline-block text-sm font-extrabold text-slate-500">
            Via official group only
          </span>
        </div>
      </section>

      {/* Why this page is shaped this way */}
      <section className="prose-syi mt-10 max-w-none">
        <h2>Why We Don't Post The Discord Invite Directly</h2>
        <p>
          Trending Roblox games attract fake invite links the way flowers
          attract bees — and "Survive Your Ideas Discord" searches are
          exactly where phishers set up shop. The safe pattern is boring and
          reliable: go to the official Roblox group, and use only the links
          posted there. This wiki applies the same standard to itself: we
          document that the Discord exists (multiple major trackers confirm
          it), we tell you where the official path is, and we refuse to
          repost invite URLs that could go stale or be impersonated. If the
          group ever pins an invite, the two-hop route costs you ten extra
          seconds and eliminates the entire scam surface.
        </p>
        <p>
          The same caution applies to the wider ecosystem: no Trello board
          exists yet (Destructoid verified its absence), so any "Survive
          Your Ideas Trello" you encounter is someone else's board pretending
          at authority. The game's authoritative information layer is
          in-game — the Word Diary and Index are the developer's own
          catalog — and everything community-built (including this wiki)
          is downstream of that.
        </p>

        <h2>What The Official Channels Are Actually For</h2>
        <p>
          Beyond announcements, the group serves a role most game communities
          don't: <strong>catalog co-design</strong>. The group's own
          description invites discussion of "which words should be added to
          the game next" — word suggestions from players feed the game's
          growing list of effects. That makes the community channels the
          de facto roadmap source: when players start suggesting a word
          theme heavily, that theme is a decent bet for the next content
          wave. For players of this wiki, it is also why the{" "}
          <Link href="/words" className="text-brand-700 font-bold hover:underline">
            words list
          </Link>{" "}
          grows over time — and why we re-verify entries on update days
          (tracked on the{" "}
          <Link href="/updates" className="text-brand-700 font-bold hover:underline">
            update log
          </Link>
          ).
        </p>
        <p>
          Codes are the other channel product. THANKYOU — the game's first
          code, granting 5 Lucky Spins — dropped during the chart-topping
          milestone week, and code announcements flow through the same
          group/Discord/X network. The{" "}
          <Link href="/codes" className="text-brand-700 font-bold hover:underline">
            codes page
          </Link>{" "}
          re-verifies daily, so you do not need to camp the Discord for
          drops — but if you want to be first on a big wave, official
          channels plus our daily check is the full coverage stack.
        </p>

        <h2>Scam Patterns To Recognize</h2>
        <p>
          Three patterns circulate around every trending Roblox game, and
          Survive Your Ideas is no exception. <strong>Fake invites</strong>:
          lookalike Discord servers promising "free Lucky Spins" for joining
          or linking your account — the official server never asks for your
          password or off-platform logins. <strong>Script scams</strong>: the
          same sites pushing fake{" "}
          <Link href="/codes" className="text-brand-700 font-bold hover:underline">
            codes
          </Link>{" "}
          also push executors and "auto-survive" scripts; these violate
          Roblox's rules, risk permanent account bans, and the downloaded
          files are frequently malware. <strong>Fake gift sites</strong>:
          enter-your-username pages promising Robux or spins — Roblox's own
          systems never work that way. The rule of thumb: if a channel is
          not reachable from the official group page, it is           not official.
        </p>

        <h2>The Group's Role In The Word Economy</h2>
        <p>
          One more reason the group page deserves a spot in your bookmarks:
          the community's word suggestions feed the catalog that the{" "}
          <Link href="/words" className="text-brand-700 font-bold hover:underline">
            words list
          </Link>{" "}
          documents and the Word Diary tracks. Players who follow the
          suggestion chatter get a soft preview of which word themes are
          likely in the next content wave — which translates directly into
          diary planning (which discoveries to bank first) and typing
          strategy (which families to expect in endgame circles). No other
          trending Roblox game hands its community this much design input,
          and it is worth engaging with that on the official channels rather
          than secondhand summaries.
        </p>
        <p>
          Between announcements, the group is also where the community's
          survival culture lives: clip sharing, badge flexes, and the
          perpetual argument over the funniest word result. It is a genuinely
          active space — 162,000 members joined within the game's first
          month, which is bottom-up evidence of the game's trajectory
          independent of any chart tracker.
        </p>
      </section>

      <FaqSection faqs={faqs} title="Discord & Links FAQ" />
    </div>
  );
}
