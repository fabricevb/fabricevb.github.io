import { Link } from "react-router-dom";
import { type Locale } from "@/lib/i18n";
import { FOOTER, NAV, LINKEDIN_URL } from "@/content/site";

export function SiteFooter({ locale }: { locale: Locale }) {
  const t = FOOTER[locale];
  const nav = NAV[locale];
  return (
    <footer className="rule-top mt-32 bg-background">
      <div className="container-editorial grid gap-8 py-12 md:grid-cols-3">
        <div>
          <div className="font-display text-base">Fabrice Van Boeckel</div>
          <p className="mt-2 max-w-xs text-sm text-ink-muted">{t.tagline}</p>
        </div>
        <div className="flex flex-col gap-2 text-sm">
          <Link
            to={`/${locale}/work`}
            className="link-underline w-fit text-ink-muted hover:text-ink"
          >
            {nav.work}
          </Link>
          <Link
            to={`/${locale}/about`}
            className="link-underline w-fit text-ink-muted hover:text-ink"
          >
            {nav.about}
          </Link>
          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noreferrer noopener"
            className="link-underline w-fit text-ink-muted hover:text-ink"
          >
            LinkedIn ↗
          </a>
        </div>
        <div className="text-sm text-ink-muted">
          <div>Brussels · Luxembourg</div>
          <div className="mt-6 font-mono text-xs text-ink-soft">
            © {new Date().getFullYear()} — {t.rights}
          </div>
        </div>
      </div>
    </footer>
  );
}
