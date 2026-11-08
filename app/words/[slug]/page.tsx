import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageHero from "@/components/PageHero";
import FaqSection from "@/components/FaqSection";
import { WORDS, WORD_CATEGORIES } from "@/lib/words";
import { SITE } from "@/lib/site";

export function generateStaticParams() {
  return WORDS.map((w) => ({ slug: w.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const word = WORDS.find((w) => w.slug === slug);
  if (!word) return {};
  return {
    title: `${word.word} in Survive Your Ideas — What It Does & How to Survive It`,
    description: `${word.word} is a confirmed Survive Your Ideas word (${word.category}). What happens when it's typed, how long it lasts, and the counter-play that keeps you alive — sourced from official and multi-outlet coverage.`,
    alternates: { canonical: `/words/${word.slug}` },
  };
}

export default async function WordDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const word = WORDS.find((w) => w.slug === slug);
  if (!word) notFound();

  const related = WORDS.filter((w) => w.slug !== word.slug && w.category === word.category).slice(0, 3);
  const others = WORDS.filter((w) => w.slug !== word.slug && w.category !== word.category).slice(0, 4);

  const faqs = [
    {
      q: `What does ${word.word} do in Survive Your Ideas?`,
      a: `${word.word} is a confirmed word in the ${word.category} family. When typed by the active writer, it spawns its documented effect in the arena${word.persistent ? " — and unlike most words, its effect persists for the entire match, never resolving" : ", where it acts and then resolves"}. Evidence: ${word.evidenceNote}`,
    },
    {
      q: `How do you survive ${word.word}?`,
      a: word.survival,
    },
    {
      q: `Is ${word.word} a good word to type?`,
      a:
        word.offense ??
        `It depends on your goal. ${word.funnyNote ?? "Check the best-words ranking for where it lands by situation — elimination power, sustained pressure, or safe Index progress."}`,
    },
    {
      q: `How long does ${word.word} last?`,
      a: word.persistent
        ? "For the entire match. It is one of the documented persistent words — its effect stays active from spawn until the round ends, which makes it a total-pressure word rather than a moment hazard."
        : "It resolves after acting — a period the game spaces out between typed prompts. Persistent words like ZOMBIES and METEOR are the exception; most catalogued words including this family's others resolve and clear.",
    },
    {
      q: `Where does ${word.word} come from — is it officially confirmed?`,
      a: `Yes, with evidence tier: ${word.evidence}. ${word.evidenceNote}`,
    },
    {
      q: `Does typing ${word.word} unlock it in the Word Diary?`,
      a: `Yes — catalogued words trigger their Index entry when you enter them, which pays a one-time Cash bonus toward your Meta Word fund. ${word.word.charAt(0) + word.word.slice(1).toLowerCase()} is part of the confirmed catalog, so it counts toward the Collector badge's 150-word target.`,
    },
    {
      q: `Can Meta Words like /double or /secret be combined with ${word.word}?`,
      a: word.persistent
        ? `Yes, and the pairing is one of the strongest in the game. /double (250,000 Cash) extends the persistence play even further, while /secret (250,000) hides your input so the lobby loses its reaction window to a hazard that never resolves anyway. The full pricing and purchase-order logic is on the Meta Words page.`
        : `Yes — Meta Words layer on top of any word you type. /double fires your next word twice (doubling ${word.word}'s impact), and /secret hides the input so opponents lose the reaction window this page describes. Both cost 250,000 Cash and are covered on the Meta Words page.`,
    },
    {
      q: `Is ${word.word} affected by game updates?`,
      a: `The catalog grows and rebalances as the game updates — it was patched the same morning this page was last verified (${new Date().toLocaleDateString("en-US", { month: "long" , day: "numeric", year: "numeric" })}). Our update log tracks every verified change, and this page re-verifies whenever word behavior shifts. If you notice a behavior change in-game we haven't logged, the contact page takes corrections with sources.`,
    },
  ];

  return (
    <div>
      <PageHero
        title={`${word.word} — Survive Your Ideas Word Guide`}
        subtitle={`${word.category} family · ${word.persistent ? "persists ALL match ♾️" : "resolves after acting"} · evidence: ${word.evidence}`}
        image="/images/official/shot-107168990409225.png"
        breadcrumb={[
          { href: "/", label: "Home" },
          { href: "/words", label: "Words" },
          { label: word.word },
        ]}
      />

      <section className="prose-syi mt-8 max-w-none">
        <h2>What {word.word} Does</h2>
        <p>
          {word.word} belongs to the{" "}
          <strong>{WORD_CATEGORIES.find((c) => c.id === word.category)?.label}</strong>{" "}
          family of effects. {WORD_CATEGORIES.find((c) => c.id === word.category)?.blurb}{" "}
          {word.persistent
            ? "Its defining trait is persistence: once spawned, the effect stays active for the remainder of the match while other hazards continue stacking on top of it. In a long lobby, a word typed in minute two is still shaping minute twelve."
            : "Like most non-persistent hazards, it acts over a defined window and then clears, letting the arena partially reset before the next typed word lands."}
        </p>
        <p>
          <strong>Evidence tier: {word.evidence}.</strong> {word.evidenceNote} We
          track three evidence levels on this wiki — official (the
          developer's own description or art), media (confirmed across
          multiple independent outlets), and community (single-source,
          labeled as such). {word.evidence === "community"
            ? "This entry is community-tier: the event exists per player tooling and reports, but official channels have not named it, so treat specifics as provisional."
            : "This entry meets the wiki's verification bar for confirmed status."}
        </p>

        <h2>How To Survive {word.word}</h2>
        <p>{word.survival}</p>
        <p>
          The general principle behind that advice: hazard families share
          counter-play shapes, and the five-slot loadout exists to answer
          families rather than individual words. A Grapple Hook covers every
          hazard you need to leave; a Force Field covers the ones you need to
          tank. Loadout composition is covered on the{" "}
          <Link href="/items" className="text-brand-700 font-bold hover:underline">
            items and spins page
          </Link>
          .
        </p>

        <h2>{word.word}: The Deep Mechanics</h2>
        {word.deepDive.map((para, i) => (
          <p key={i}>{para}</p>
        ))}

        <h2>How {word.word} Fits The Wider Systems</h2>
        <p>
          Words never act alone in Survive Your Ideas — they land in an arena
          already shaped by the economy, the loadout and the badges. On the
          economy side, {word.word} feeds the loop like every catalogued
          word: typing it unlocks its Index entry and pays a one-time bonus
          into the fund that buys Meta Words (250K for /double, up to 750K
          for /jackpot — the full ladder is on the{" "}
          <Link href="/meta-words" className="text-brand-700 font-bold hover:underline">
            Meta Words page
          </Link>
          ). On the loadout side, its family determines which of your five
          item slots earns its keep this match — mobility answers it if it
          moves you, defense answers it if it damages you, and the
          community-standard Grapple Hook plus Force Field core exists
          precisely because those two slots cover the most families at once.
          The full item logic is on the{" "}
          <Link href="/items" className="text-brand-700 font-bold hover:underline">
            items page
          </Link>
          .
        </p>
        <p>
          The badge system reads {word.word} two ways. Offensively, it is a
          tool for the skill badges — Deadly Idea rewards words that
          eliminate clustered players, and Champion rewards the endgame
          resource discipline that outlasts exactly this kind of hazard.
          Defensively, it is an obstacle on the way to the stamina badges —
          Survivor's 60-word threshold and Veteran's 100-match count are
          both earned in matches where hazards like this set the pace. The
          full badge map with official requirements is on the{" "}
          <Link href="/badges" className="text-brand-700 font-bold hover:underline">
            badges page
          </Link>
          , and the situation ranking that positions {word.word} against
          every other confirmed word is on{" "}
          <Link href="/best-words" className="text-brand-700 font-bold hover:underline">
            best words
          </Link>
          .
        </p>

        {word.offense && (
          <>
            <h2>When To Type {word.word}</h2>
            <p>{word.offense}</p>
          </>
        )}
        {word.funnyNote && (
          <>
            <h2>The Fun Side Of {word.word}</h2>
            <p>{word.funnyNote}</p>
          </>
        )}

        <h2>{word.word} And The Word Diary</h2>
        <p>
          Typing {word.word} — or being in a match where it gets typed,
          per current community reports about discovery credit — unlocks its
          Index entry in your Word Diary and pays a one-time Cash bonus. The
          diary feeds directly into your economy: those bonuses are the main
          non-survival Cash source, and Cash gates all six Meta Words on the
          shop's Cash side, from /double at 250K up to /jackpot at 750K. If
          you are systematically filling the diary, check the{" "}
          <Link href="/cash-planner" className="text-brand-700 font-bold hover:underline">
            Cash Planner
          </Link>{" "}
          to see when each Meta Word lands at your actual play pace, and the{" "}
          <Link href="/best-words" className="text-brand-700 font-bold hover:underline">
            best words ranking
          </Link>{" "}
          for where {word.word} sits against the rest of the confirmed list.
        </p>

        <h2>Words In The Same Family</h2>
        <p>
          {related.length > 0 ? (
            <>
              {related.map((w, i) => (
                <span key={w.slug}>
                  <Link href={`/words/${w.slug}`} className="text-brand-700 font-bold hover:underline">
                    {w.word}
                  </Link>
                  {i < related.length - 1 ? ", " : ""}
                </span>
              ))}
            </>
          ) : (
            <>No other confirmed words in this family yet.</>
          )}
          {related.length > 0 && ". "}From other families:{" "}
          {others.map((w, i) => (
            <span key={w.slug}>
              <Link href={`/words/${w.slug}`} className="text-brand-700 font-bold hover:underline">
                {w.word}
              </Link>
              {i < others.length - 1 ? ", " : ""}
            </span>
          ))}
          .
        </p>
      </section>

      <FaqSection
        faqs={faqs}
        title={`${word.word} FAQ`}
      />
    </div>
  );
}
