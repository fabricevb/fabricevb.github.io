const root = document.documentElement;
const themeToggle = document.querySelector("[data-theme-toggle]");
const langToggle = document.querySelector("[data-lang-toggle]");
const supportedLangs = ["en", "fr", "nl"];
const themeLabels = {
  light: { en: "Light", fr: "Clair", nl: "Licht" },
  dark: { en: "Dark", fr: "Sombre", nl: "Donker" },
};

const getStoredLang = () => {
  const storedLang = localStorage.getItem("lang");
  return supportedLangs.includes(storedLang) ? storedLang : "en";
};

const getLabel = (theme) => {
  const lang = getStoredLang();
  return themeLabels[theme]?.[lang] ?? themeLabels[theme].en;
};

const applyTheme = (theme) => {
  if (theme === "dark") {
    root.setAttribute("data-theme", "dark");
    if (themeToggle) {
      themeToggle.textContent = getLabel("light");
      themeToggle.setAttribute("aria-pressed", "true");
    }
    return;
  }

  root.removeAttribute("data-theme");
  if (themeToggle) {
    themeToggle.textContent = getLabel("dark");
    themeToggle.setAttribute("aria-pressed", "false");
  }
};

const applyLang = (lang) => {
  document.querySelectorAll("[data-lang]").forEach((element) => {
    element.classList.toggle("is-active", element.dataset.lang === lang);
  });
  root.lang = lang;
  if (langToggle) {
    langToggle.textContent = lang.toUpperCase();
  }
  applyTheme(root.getAttribute("data-theme") === "dark" ? "dark" : "light");
};

const initPreferences = () => {
  const storedTheme = localStorage.getItem("theme");
  const preferredDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const startingTheme = storedTheme || (preferredDark ? "dark" : "light");

  applyTheme(startingTheme);
  applyLang(getStoredLang());
};

initPreferences();

themeToggle?.addEventListener("click", () => {
  const nextTheme = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
  localStorage.setItem("theme", nextTheme);
  applyTheme(nextTheme);
});

langToggle?.addEventListener("click", () => {
  const currentLang = getStoredLang();
  const nextLang = currentLang === "en" ? "fr" : currentLang === "fr" ? "nl" : "en";
  localStorage.setItem("lang", nextLang);
  applyLang(nextLang);
});

const filterButtons = Array.from(document.querySelectorAll("[data-filter]"));
const projectCards = Array.from(
  document.querySelectorAll("[data-project-grid] .case-card")
);

if (filterButtons.length && projectCards.length) {
  const setActiveFilter = (filterKey) => {
    filterButtons.forEach((button) => {
      button.classList.toggle("is-active", button.dataset.filter === filterKey);
    });
    projectCards.forEach((card) => {
      const tags = card.dataset.tags.split(" ");
      const matches = filterKey === "all" || tags.includes(filterKey);
      card.style.display = matches ? "grid" : "none";
    });
  };

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      setActiveFilter(button.dataset.filter);
    });
  });

  setActiveFilter("all");
}
