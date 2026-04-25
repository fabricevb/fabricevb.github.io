import { useOutletContext } from "react-router-dom";
import { useDocumentMeta } from "@/lib/useDocumentMeta";
import type { Locale } from "@/lib/i18n";
import { PROJECTS, SECTION_HEADINGS } from "@/content/site";

export default function WorkPage() {
  const { locale } = useOutletContext<{ locale: Locale }>();
  const s = SECTION_HEADINGS[locale];

  const titles: Record<Locale, string> = {
    en: "Selected work — Fabrice Van Boeckel",
    fr: "Travaux sélectionnés — Fabrice Van Boeckel",
    nl: "Geselecteerd werk — Fabrice Van Boeckel",
  };
  const descs: Record<Locale, string> = {
    en: "Case studies in NLP, econometrics and automation for legal and economic evidence.",
    fr: "Études de cas NLP, économétrie et automatisation pour la preuve juridique et économique.",
    nl: "Casestudies in NLP, econometrie en automatisering voor juridisch en economisch bewijs.",
  };
  useDocumentMeta({ title: titles[locale], description: descs[locale] });

  return (
    <section className="container-editorial pt-16 md:pt-24">
      <div className="mb-16 max-w-2xl">
        <p className="eyebrow">§ Work</p>
        <h1 className="mt-4 font-display text-4xl font-light leading-tight text-balance md:text-6xl">
          {s.work}
        </h1>
        <p className="mt-6 text-lg text-ink-muted">{s.workLead}</p>
      </div>

      <div className="space-y-24">
        {PROJECTS.map((p, idx) => (
          <article key={p.slug} className="grid gap-10 md:grid-cols-12">
            <div className="md:col-span-5">
              <div className="overflow-hidden rounded-sm border border-rule bg-card">
                <img
                  src={p.image}
                  alt={p.title[locale]}
                  width={1024}
                  height={768}
                  loading="lazy"
                  className="h-auto w-full"
                />
              </div>
              <div className="mt-3 font-mono text-xs uppercase tracking-wider text-ink-soft">
                Fig. {String(idx + 2).padStart(2, "0")} — {p.year}
              </div>
            </div>
            <div className="md:col-span-7">
              <div className="flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="font-mono text-[10px] uppercase tracking-wider text-accent"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <h2 className="mt-3 font-display text-2xl font-medium leading-tight md:text-3xl">
                {p.title[locale]}
              </h2>
              <p className="mt-4 text-base text-ink-muted">{p.summary[locale]}</p>

              <dl className="mt-8 space-y-6 border-l border-rule pl-6">
                <div>
                  <dt className="eyebrow">{s.problem}</dt>
                  <dd className="mt-2 text-sm leading-relaxed text-ink">{p.problem[locale]}</dd>
                </div>
                <div>
                  <dt className="eyebrow">{s.approach}</dt>
                  <dd className="mt-2 text-sm leading-relaxed text-ink">{p.approach[locale]}</dd>
                </div>
                <div>
                  <dt className="eyebrow">{s.impact}</dt>
                  <dd className="mt-2 space-y-1 text-sm leading-relaxed text-ink">
                    <ul className="list-disc space-y-1 pl-4">
                      {p.impact[locale].map((line, i) => (
                        <li key={i}>{line}</li>
                      ))}
                    </ul>
                  </dd>
                </div>
                <div>
                  <dt className="eyebrow">{s.stack}</dt>
                  <dd className="mt-2 flex flex-wrap gap-2">
                    {p.stack.map((t) => (
                      <span
                        key={t}
                        className="rounded-sm border border-rule bg-card px-2 py-0.5 font-mono text-[11px] text-ink"
                      >
                        {t}
                      </span>
                    ))}
                  </dd>
                </div>
              </dl>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
