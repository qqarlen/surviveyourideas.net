import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { AdsterraNativeBanner } from "@/components/AdsterraNativeBanner";
import { AdsterraSocialBar } from "@/components/AdsterraSocialBar";
import { AdsterraBannerMobile } from "@/components/AdsterraBannerMobile";
import { ADSTERRA_ENABLED } from "@/lib/adsterra";
import { SITE } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} — ${SITE.tagline}`,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.description,
  alternates: { canonical: "/" },
  openGraph: {
    siteName: SITE.name,
    type: "website",
    locale: SITE.locale,
    images: [{ url: "/images/official/icon-512.png", width: 512, height: 512 }],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          type="image/png"
          href="/images/official/icon-512.png"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        {SITE.gaId && SITE.gaId.startsWith("GTM-") && (
          <>
            <script async src={`https://www.googletagmanager.com/gtm.js?id=${SITE.gaId}`} />
            <script
              dangerouslySetInnerHTML={{
                __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());`,
              }}
            />
          </>
        )}
        {SITE.gaId && !SITE.gaId.startsWith("GTM-") && (
          <>
            <script async src={`https://www.googletagmanager.com/gtag/js?id=${SITE.gaId}`} />
            <script
              dangerouslySetInnerHTML={{
                __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${SITE.gaId}');`,
              }}
            />
          </>
        )}
      </head>
      <body>
        <Header />
        {ADSTERRA_ENABLED && <AdsterraNativeBanner />}
        {ADSTERRA_ENABLED && <AdsterraBannerMobile />}
        <main className="mx-auto max-w-6xl px-4 py-8">{children}</main>
        <Footer />
        {ADSTERRA_ENABLED && <AdsterraSocialBar />}
      </body>
    </html>
  );
}
