import { Outlet } from "react-router-dom";
import { useEffect } from "react";
import { SiteHeader } from "./SiteHeader";
import { SiteFooter } from "./SiteFooter";
import { LOCALE_NAMES, type Locale } from "@/lib/i18n";

type Props = { locale: Locale };

export function LocaleLayout({ locale }: Props) {
  useEffect(() => {
    document.documentElement.lang = locale;
    document.documentElement.setAttribute("data-locale", LOCALE_NAMES[locale]);
  }, [locale]);

  return (
    <div className="relative flex min-h-screen flex-col">
      <SiteHeader locale={locale} />
      <main className="relative z-[1] flex-1">
        <Outlet context={{ locale }} />
      </main>
      <SiteFooter locale={locale} />
    </div>
  );
}
