import { Link, useLocation } from "react-router-dom";
import { LOCALES, LOCALE_LABELS, type Locale } from "@/lib/i18n";
import { NAV, LINKEDIN_URL } from "@/content/site";

export function SiteHeader({ locale }: { locale: Locale }) {
  const nav = NAV[locale];
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
      <div className="container-editorial flex h-16 items-center justify-between gap-6">
        <Link
          to={`/${locale}`}
          className="font-display text-lg font-medium tracking-tight"
        >
          Fabrice<span className="text-accent">.</span>Van Boeckel
        </Link>

        <nav className="hidden items-center gap-8 text-sm md:flex">
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
      </div>
    </header>
  );
}
