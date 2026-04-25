import { useOutletContext } from "react-router-dom";
import { useDocumentMeta } from "@/lib/useDocumentMeta";
import type { Locale } from "@/lib/i18n";
import { ABOUT, TOOLBOX } from "@/content/site";

export default function AboutPage() {
  const { locale } = useOutletContext<{ locale: Locale }>();
  const a = ABOUT[locale];

  const titles: Record<Locale, string> = {
    en: "About — Fabrice Van Boeckel",
    fr: "À propos — Fabrice Van Boeckel",
    nl: "Over — Fabrice Van Boeckel",
  };
  useDocumentMeta({ title: titles[locale], description: a.paragraphs[0] });

  return (
    <section className="container-editorial pt-16 md:pt-24">
      <div className="grid gap-16 md:grid-cols-12">
        <div className="md:col-span-4">
          <p className="eyebrow">§ {a.eyebrow}</p>
          <div className="mt-6 aspect-[4/5] overflow-hidden rounded-sm border border-rule bg-gradient-to-br from-card to-secondary">
            <div className="flex h-full items-center justify-center font-display text-6xl font-light italic text-accent">
              FvB
            </div>
          </div>
          <div className="mt-3 font-mono text-xs uppercase tracking-wider text-ink-soft">
            Brussels · Luxembourg
          </div>
        </div>

        <div className="md:col-span-8">
          <h1 className="font-display text-4xl font-light leading-tight text-balance md:text-5xl">
            {a.heading}
          </h1>
          <div className="mt-8 space-y-5 text-lg leading-relaxed text-ink-muted">
            {a.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          <div className="mt-16">
            <p className="eyebrow">{a.principlesHeading}</p>
            <div className="mt-6 grid gap-px bg-rule md:grid-cols-3">
              {a.principles.map((pr) => (
                <div key={pr.title} className="bg-background p-6">
                  <h3 className="font-display text-base font-medium">{pr.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                    {pr.body}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-16">
            <p className="eyebrow">{a.toolboxHeading}</p>
            <dl className="mt-6 space-y-4 rule-top pt-6">
              {TOOLBOX.map((row) => (
                <div
                  key={row.group}
                  className="grid gap-2 md:grid-cols-12 md:gap-6 md:py-2"
                >
                  <dt className="md:col-span-3 font-mono text-xs uppercase tracking-wider text-ink-muted">
                    {row.group}
                  </dt>
                  <dd className="md:col-span-9 flex flex-wrap gap-2">
                    {row.items.map((it) => (
                      <span
                        key={it}
                        className="rounded-sm border border-rule bg-card px-2 py-0.5 font-mono text-[11px] text-ink"
                      >
                        {it}
                      </span>
                    ))}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
