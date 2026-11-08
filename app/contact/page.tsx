import type { Metadata } from "next";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact SurviveYourIdeas.net — data corrections, feedback and inquiries.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <div>
      <PageHero
        title="Contact"
        subtitle="Data corrections get priority — with sources, they get answered same-day"
        breadcrumb={[{ href: "/", label: "Home" }, { label: "Contact" }]}
      />
      <section className="prose-syi mt-8 max-w-none">
        <h2>How To Reach Us</h2>
        <p>
          This site doesn't run comments or accounts, so email is the
          channel:{" "}
          <a href="mailto:contact@surviveyourideas.net" className="text-brand-700 font-bold hover:underline">
            contact@surviveyourideas.net
          </a>
        </p>
        <h2>What We Prioritize</h2>
        <ul>
          <li>
            <strong>Data corrections with sources</strong> — if a number on
            the site conflicts with something you've verified in-game or
            from a trackable source, that's our top priority. Include where
            you saw it.
          </li>
          <li>
            <strong>Code reports</strong> — the moment you see a working
            Survive Your Ideas code in-game, tell us. First confirmations
            get published within hours.
          </li>
          <li>
            <strong>Word discoveries</strong> — catalogued words we haven't
            logged yet, with evidence (in-game screenshot, official channel
            mention, or two independent written sources).
          </li>
          <li>
            <strong>New update tips</strong> — new words, events or systems
            we haven't logged yet.
          </li>
          <li>
            <strong>General feedback</strong> — page requests, clarity
            complaints, anything that makes the wiki more useful.
          </li>
        </ul>
        <h2>What We Don't Do</h2>
        <ul>
          <li>We can't recover Roblox accounts or investigate bans — use Roblox support.</li>
          <li>We don't provide or endorse scripts, exploits or account services.</li>
          <li>We don't accept payment for listings or rankings — the best-words ranking is evidence-driven and stays that way.</li>
          <li>We don't post Discord invite links on request — invites only reach this site via official channels, for everyone's safety.</li>
        </ul>
      </section>
    </div>
  );
}
