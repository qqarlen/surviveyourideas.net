import type { Metadata } from "next";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms of service for SurviveYourIdeas.net.",
  alternates: { canonical: "/terms-of-service" },
};

export default function TermsPage() {
  return (
    <div>
      <PageHero
        title="Terms of Service"
        subtitle="Last updated: November 8, 2026"
        breadcrumb={[{ href: "/", label: "Home" }, { label: "Terms" }]}
      />
      <section className="prose-syi mt-8 max-w-none">
        <h2>Use Of This Site</h2>
        <p>
          SurviveYourIdeas.net provides game information free of
          charge for personal, non-commercial use. By using the site you
          agree to these terms. If you disagree with any part, please
          discontinue use.
        </p>
        <h2>Accuracy & No Warranty</h2>
        <p>
          Game data changes frequently as developers update Survive Your Ideas. We verify information against multiple sources and date
          every check, but we provide no warranty that all information is
          current or error-free at any given moment. Data values shown are
          from third-party tracking and community reporting unless
          explicitly sourced to official pages.
        </p>
        <h2>Intellectual Property</h2>
        <p>
          "Survive Your Ideas" and Roblox are property of their
          respective owners. This site is a fan-made reference and is not
          affiliated with, endorsed by, or sponsored by Roblox Corporation
          or the Survive Your Ideas group. Official art is used for identification
          purposes. Site-original text and data compilations are © this
          site.
        </p>
        <h2>Third-Party Links & Ads</h2>
        <p>
          The site links to Roblox and displays third-party advertising.
          We're not responsible for third-party content, policies or
          practices. Never enter account credentials on any site other
          than Roblox's official properties.
        </p>
        <h2>Limitation Of Liability</h2>
        <p>
          To the maximum extent permitted by law, this site is not liable
          for any damages arising from use of the site or reliance on its
          content, including in-game decisions made based on published
          data.
        </p>
        <h2>Changes</h2>
        <p>
          These terms may be updated; material changes will be noted with
          a new date above.
        </p>
      </section>
    </div>
  );
}
