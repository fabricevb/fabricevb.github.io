import { useOutletContext, Link } from "react-router-dom";
import heroImage from "@/assets/hero-pipeline.jpg";
import { useDocumentMeta } from "@/lib/useDocumentMeta";
import type { Locale } from "@/lib/i18n";
import {
  HERO,
  METRICS,
  PROJECTS,
  PUBLICATIONS,
  SECTION_HEADINGS,
  SERVICES,
} from "@/content/site";

export default function HomePage() {
  const { locale } = useOutletContext<{ locale: Locale }>();
  const h = HERO[locale];
  const metrics = METRICS[locale];
  const services = SERVICES[locale];
  const s = SECTION_HEADINGS[locale];

  const title = `Fabrice Van Boeckel — ${
    locale === "fr"
      ? "Data Scientist · NLP & preuve juridique"
      : locale === "nl"
        ? "Data Scientist · NLP & juridisch bewijs"
        : "Data Scientist · NLP & legal evidence"
  }`;
  useDocumentMeta({ title, description: h.lead });

  return (
    <>
      {/* HERO */}
      <section className="container-editorial pt-16 md:pt-24 lg:pt-32">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <div className="mb-2 flex items-center gap-3">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              <p className="eyebrow">{h.eyebrow}</p>
            </div>
            <h1 className="font-display text-4xl font-light leading-[1.05] tracking-tight text-balance md:text-6xl lg:text-7xl">
              {h.title}{" "}
              <span className="italic text-accent">{h.titleAccent}</span>
            </h1>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-ink-muted text-pretty">
              {h.lead}
            </p>

            <div className="mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
              <Link
                to={`/${locale}/work`}
                className="group inline-flex items-center gap-3 rounded-full bg-ink px-6 py-3 text-sm font-medium text-paper transition hover:bg-accent"
              >
                {h.primary}
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </Link>
              <Link
                to={`/${locale}/about`}
                className="inline-flex items-center gap-2 text-sm font-medium text-ink underline-offset-4 hover:underline"
              >
                {h.secondary}
              </Link>
            </div>
          </div>

          <div className="relative lg:col-span-5">
            <div className="overflow-hidden rounded-md border border-rule bg-card shadow-sm">
              <img
                src={heroImage}
                alt="Pipeline overview from documents to audit-ready report"
                width={1536}
                height={1024}
                className="h-auto w-full"
              />
            </div>
            <div className="mt-3 font-mono text-xs uppercase tracking-wider text-ink-soft">
              Fig. 01 — Intake → NLP → Model → Audit-ready report
            </div>
          </div>
        </div>
      </section>

      {/* METRICS */}
      <section className="container-editorial mt-32">
        <div className="rule-top rule-bottom grid grid-cols-2 divide-x divide-rule md:grid-cols-4">
          {metrics.map((m) => (
            <div key={m.label} className="px-2 py-8 first:pl-0 md:px-6 md:py-10">
              <div className="font-display text-4xl font-light text-ink md:text-5xl">
                {m.value}
              </div>
              <div className="mt-2 text-sm font-medium text-ink">{m.label}</div>
              <div className="mt-1 text-xs text-ink-muted">{m.note}</div>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section className="container-editorial mt-32">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-4">
            <p className="eyebrow">§ 02</p>
            <h2 className="mt-4 font-display text-3xl font-light leading-tight md:text-4xl">
              {s.services}
            </h2>
            <p className="mt-4 max-w-sm text-sm text-ink-muted">{s.servicesLead}</p>
          </div>
          <div className="grid gap-px bg-rule md:col-span-8 md:grid-cols-2">
            {services.map((svc) => (
              <div
                key={svc.title}
                className="bg-background p-6 transition hover:bg-card"
              >
                <h3 className="font-display text-lg font-medium">{svc.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                  {svc.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WORK */}
      <section id="work" className="container-editorial mt-32">
        <div className="mb-12 flex items-end justify-between gap-6">
          <div>
            <p className="eyebrow">§ 03</p>
            <h2 className="mt-4 font-display text-3xl font-light leading-tight md:text-4xl">
              {s.work}
            </h2>
            <p className="mt-4 max-w-md text-sm text-ink-muted">{s.workLead}</p>
          </div>
        </div>

        <div className="space-y-px bg-rule">
          {PROJECTS.map((p, idx) => (
            <article
              key={p.slug}
              className="group grid gap-6 bg-background p-6 transition hover:bg-card md:grid-cols-12 md:gap-10 md:p-8"
            >
              <div className="md:col-span-2">
                <div className="font-mono text-xs text-ink-soft">
                  {String(idx + 1).padStart(2, "0")} / {p.year}
                </div>
                <div className="mt-2 flex flex-wrap gap-1">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="font-mono text-[10px] uppercase tracking-wider text-ink-muted"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <div className="md:col-span-6">
                <h3 className="font-display text-xl font-medium leading-tight md:text-2xl">
                  {p.title[locale]}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                  {p.summary[locale]}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.stack.slice(0, 4).map((t) => (
                    <span
                      key={t}
                      className="rounded-sm border border-rule bg-card px-2 py-0.5 font-mono text-[10px] text-ink-muted"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <div className="md:col-span-4">
                <div className="overflow-hidden rounded-sm border border-rule bg-card">
                  <img
                    src={p.image}
                    alt={p.title[locale]}
                    width={1024}
                    height={768}
                    loading="lazy"
                    className="h-40 w-full object-cover transition-transform duration-700 group-hover:scale-[1.03] md:h-32"
                  />
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8 text-right">
          <Link
            to={`/${locale}/work`}
            className="link-underline font-mono text-xs uppercase tracking-wider text-ink"
          >
            {s.viewAll}
          </Link>
        </div>
      </section>

      {/* WRITING */}
      <section className="container-editorial mt-32">
        <div className="mb-12">
          <p className="eyebrow">§ 04</p>
          <h2 className="mt-4 font-display text-3xl font-light leading-tight md:text-4xl">
            {s.writing}
          </h2>
          <p className="mt-4 max-w-md text-sm text-ink-muted">{s.writingLead}</p>
        </div>

        <ul className="rule-top divide-y divide-rule">
          {PUBLICATIONS.map((pub, i) => (
            <li
              key={i}
              className="grid gap-2 py-6 md:grid-cols-12 md:items-baseline md:gap-6"
            >
              <div className="md:col-span-2 font-mono text-xs uppercase tracking-wider text-ink-soft">
                {pub.year} · {pub.type[locale]}
              </div>
              <h3 className="md:col-span-7 font-display text-lg font-medium leading-snug">
                {pub.title[locale]}
              </h3>
              <div className="md:col-span-3 text-sm text-ink-muted md:text-right">
                {pub.venue}
              </div>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
