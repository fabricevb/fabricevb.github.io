import { HashRouter, Navigate, Route, Routes, useParams } from "react-router-dom";
import { LocaleLayout } from "@/components/site/LocaleLayout";
import { isLocale, type Locale } from "@/lib/i18n";
import HomePage from "@/pages/Home";
import WorkPage from "@/pages/Work";
import AboutPage from "@/pages/About";
import NotFoundPage from "@/pages/NotFound";

function LocaleGuard() {
  const { locale } = useParams();
  if (!locale || !isLocale(locale)) {
    return <Navigate to="/en" replace />;
  }
  return <LocaleLayout locale={locale as Locale} />;
}

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/en" replace />} />
        <Route path="/:locale" element={<LocaleGuard />}>
          <Route index element={<HomePage />} />
          <Route path="work" element={<WorkPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </HashRouter>
  );
}
