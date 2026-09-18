import { Link, useLocation } from "react-router-dom";
import { LOCALES, LOCALE_LABELS, type Locale } from "@/lib/i18n";
import {
  CONTACT_LABELS,
  CV_URL,
  EMAIL_ADDRESS,
  NAV,
  LINKEDIN_URL,
} from "@/content/site";

export function SiteHeader({ locale }: { locale: Locale }) {
  const nav = NAV[locale];
  const contact = CONTACT_LABELS[locale];
  const location = useLocation();

  // Compute equivalent path in other locales by swapping the leading /xx segment
  const switchTo = (target: Locale) => {
    const parts = location.pathname.split("/").filter(Boolean);
    if (parts.length === 0) return `/${target}`;
    parts[0] = target;
    return "/" + parts.join("/");
  };

  return (
    <header className="rule-bottom relative z-10 bg-background/80 backdrop-blur-sm">
      <div className="container-editorial flex min-h-16 flex-wrap items-center justify-between gap-x-6 gap-y-3 py-3">
        <Link
          to={`/${locale}`}
          className="font-display text-lg font-medium tracking-tight"
        >
          Fabrice<span className="text-accent">.</span>Van Boeckel
        </Link>

        <nav className="hidden items-center gap-6 text-sm lg:flex">
          <Link
            to={`/${locale}/work`}
            className="link-underline text-ink-muted hover:text-ink"
          >
            {nav.work}
          </Link>
          <Link
            to={`/${locale}/about`}
            className="link-underline text-ink-muted hover:text-ink"
          >
            {nav.about}
          </Link>
          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noreferrer noopener"
            className="link-underline text-ink-muted hover:text-ink"
          >
            LinkedIn ↗
          </a>
        </nav>

        <div className="flex items-center gap-1 font-mono text-xs">
          {LOCALES.map((l, i) => (
            <span key={l} className="flex items-center">
              {i > 0 && <span className="px-1 text-ink-soft">/</span>}
              <Link
                to={switchTo(l)}
                className={
                  l === locale
                    ? "text-ink"
                    : "text-ink-soft transition-colors hover:text-ink"
                }
              >
                {LOCALE_LABELS[l]}
              </Link>
            </span>
          ))}
        </div>

        <div className="order-last flex w-full flex-wrap items-center gap-x-4 gap-y-2 border-t border-rule pt-3 font-mono text-[11px] uppercase lg:order-none lg:w-auto lg:border-0 lg:pt-0">
          <a
            href={`mailto:${EMAIL_ADDRESS}`}
            className="link-underline text-ink-muted hover:text-ink"
          >
            {contact.email}
          </a>
          <a
            href={CV_URL}
            download
            className="link-underline text-ink-muted hover:text-ink"
          >
            {contact.cv} ↓
          </a>
          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noreferrer noopener"
            className="link-underline text-accent"
          >
            {contact.linkedin} ↗
          </a>
        </div>
      </div>
    </header>
  );
}
