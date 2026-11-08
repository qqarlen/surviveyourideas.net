import Link from "next/link";

export function Breadcrumb({ items }: { items: { href?: string; label: string }[] }) {
  return (
    <nav aria-label="Breadcrumb" className="text-xs font-semibold text-white/80 mb-3">
      {items.map((it, i) => (
        <span key={i}>
          {it.href ? (
            <Link href={it.href} className="hover:text-white underline-offset-2 hover:underline">
              {it.label}
            </Link>
          ) : (
            <span className="text-white">{it.label}</span>
          )}
          {i < items.length - 1 && <span className="mx-1.5 opacity-60">/</span>}
        </span>
      ))}
    </nav>
  );
}

export default function PageHero({
  title,
  subtitle,
  image = "/images/official/shot-106796956241875.png",
  breadcrumb,
}: {
  title: string;
  subtitle?: string;
  image?: string;
  breadcrumb?: { href?: string; label: string }[];
}) {
  return (
    <div className="relative overflow-hidden rounded-2xl hero-glow border border-blue-200 shadow-sm">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={image} alt="" className="absolute inset-0 w-full h-full object-cover opacity-35" />
      <div className="absolute inset-0 bg-gradient-to-r from-sky-50/90 via-sky-50/70 to-brand-100/60" />
      <div className="relative px-6 py-10 md:px-10 md:py-12">
        {breadcrumb && <Breadcrumb items={breadcrumb} />}
        <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 drop-shadow-sm max-w-3xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-3 text-slate-700 font-semibold max-w-2xl">{subtitle}</p>
        )}
      </div>
    </div>
  );
}
