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
  const descriptions: Record<Locale, string> = {
    en: "About Fabrice Van Boeckel — data scientist working on NLP, AI governance, and econometrics for legal and regulatory evidence at the Court of Justice of the EU.",
    fr: "À propos de Fabrice Van Boeckel — data scientist spécialisé en NLP, gouvernance de l'IA et économétrie pour la preuve juridique et réglementaire à la Cour de justice de l'Union européenne.",
    nl: "Over Fabrice Van Boeckel — data scientist gespecialiseerd in NLP, AI-governance en econometrie voor juridisch en regelgevend bewijs bij het Hof van Justitie van de EU.",
  };
  useDocumentMeta({
    title: titles[locale],
    description: descriptions[locale],
    route: `/#/${locale}/about`,
    image: "https://fabricevanboeckel.com/og-share.jpg",
  });

  const testimonialLabels: Record<
    Locale,
    { heading: string; quote: string; name: string; role: string }
  > = {
    en: {
      heading: "Testimonials",
      quote: "[Testimonial pending — ask Fabrice]",
      name: "[Name pending]",
      role: "[Role pending]",
    },
    fr: {
      heading: "Témoignages",
      quote: "[Témoignage en attente — demander à Fabrice]",
      name: "[Nom en attente]",
      role: "[Fonction en attente]",
    },
    nl: {
      heading: "Getuigenissen",
      quote: "[Getuigenis in afwachting — vraag Fabrice]",
      name: "[Naam in afwachting]",
      role: "[Functie in afwachting]",
    },
  };
  const testimonial = testimonialLabels[locale];

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

          <div className="mt-16">
            <p className="eyebrow">§ {testimonial.heading}</p>
            <blockquote className="mt-6 border-y border-rule py-6">
              <p className="font-display text-xl font-light italic text-ink-muted">
                “{testimonial.quote}”
              </p>
              <footer className="mt-5 font-mono text-xs uppercase text-ink-soft">
                <span className="text-ink">{testimonial.name}</span>
                <span className="mx-2">·</span>
                {testimonial.role}
              </footer>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}
