import type { Metadata } from "next";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for SurviveYourIdeas.net — what we collect (very little), analytics, cookies and advertising.",
  alternates: { canonical: "/privacy-policy" },
};

export default function PrivacyPage() {
  return (
    <div>
      <PageHero
        title="Privacy Policy"
        subtitle="Last updated: November 8, 2026"
        breadcrumb={[{ href: "/", label: "Home" }, { label: "Privacy Policy" }]}
      />
      <section className="prose-syi mt-8 max-w-none">
        <h2>Overview</h2>
        <p>
          SurviveYourIdeas.net is a content wiki. We collect as
          little data as possible: we don't require accounts, we don't ask
          for personal information, and we don't sell data. This policy
          explains what does happen when you visit.
        </p>
        <h2>Analytics</h2>
        <p>
          We use Google Analytics to understand aggregate traffic patterns
          (page views, approximate geography, device types). Google
          Analytics collects anonymized usage data via cookies. You can
          opt out with Google's Analytics opt-out browser add-on or by
          blocking cookies in your browser settings.
        </p>
        <h2>Cookies</h2>
        <p>
          Cookies on this site come from analytics and advertising
          partners. No registration or login exists on this site, so no
          account cookies are set. Blocking cookies does not affect site
          functionality.
        </p>
        <h2>Advertising</h2>
        <p>
          We display advertising (which may include Google AdSense and/or
          Adsterra) to keep the site free. Ad partners may use cookies to
          serve ads based on prior visits to this or other websites. You
          can opt out of personalized advertising via{" "}
          <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer">
            Google Ads Settings
          </a>{" "}
          or{" "}
          <a href="https://www.aboutads.info" target="_blank" rel="noopener noreferrer">
            aboutads.info
          </a>
          .
        </p>
        <h2>External Links</h2>
        <p>
          We link to Roblox pages and other third-party sites. Those sites
          have their own privacy policies, which we don't control.
        </p>
        <h2>Children's Privacy</h2>
        <p>
          Our audience includes Roblox players who may be minors. We don't
          knowingly collect personal information from children, and the
          site's design (no accounts, no forms beyond contact) reflects
          that.
        </p>
        <h2>Changes</h2>
        <p>
          If this policy changes materially, the date above updates and
          the change is noted on this page.
        </p>
      </section>
    </div>
  );
}
