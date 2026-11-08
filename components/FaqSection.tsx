import { SITE } from "@/lib/site";

type QA = { q: string; a: string };

export default function FaqSection({ faqs, title = "FAQ" }: { faqs: QA[]; title?: string }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
  return (
    <section className="mt-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <h2 className="text-2xl font-extrabold border-b-2 border-blue-200 pb-2 mb-4">{title}</h2>
      <div className="space-y-3">
        {faqs.map((f, i) => (
          <details
            key={i}
            className="group rounded-xl border border-blue-200 bg-white open:shadow-sm"
            open={i === 0}
          >
            <summary className="cursor-pointer list-none px-4 py-3 font-bold text-slate-800 group-open:text-brand-700">
              {f.q}
            </summary>
            <div className="px-4 pb-4 text-slate-600 leading-relaxed">{f.a}</div>
          </details>
        ))}
      </div>
      <p className="mt-3 text-xs text-slate-400">
        Data checked {SITE.lastDataCheck}. Survive Your Ideas updates often — we re-verify codes and numbers after each update.
      </p>
    </section>
  );
}
