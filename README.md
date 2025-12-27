# Fabrice Van Boeckel — Personal Hub

A static Astro site for Fabrice Van Boeckel’s portfolio, publications, and CV. Built for GitHub Pages.

## Quick start

```bash
npm install
npm run dev
```

## Build & preview

```bash
npm run build
npm run preview
```

## Add content

All content lives in the root `content/` directory.

### Add a project

1. Open `content/projects.json`.
2. Add a new object with the fields: `id`, `title`, `summary`, `themes`, `tools`, `year`, `impact`, `stack`.
3. The portfolio filter uses `themes`, `tools`, and `year` to filter the list.

### Add a publication

1. Open `content/publications.json`.
2. Add a new object with: `title`, `source`, `date`, `link`, `type`.

### Update CV

1. Host the PDF somewhere public (Google Drive, Dropbox) and update the CV page link.
2. Update experience in `content/experience.json` and education in `content/education.json`.

## Deployment (GitHub Pages)

The repository includes a GitHub Actions workflow that builds the Astro site and deploys it to GitHub Pages.

1. Ensure Pages is set to **GitHub Actions** in repo settings.
2. Push to `main`. The workflow runs `npm install` and `npm run build`.

## Copy deck

### Hero (EN)
Turning complex legal and economic data into clear, reliable decisions.

I build NLP pipelines, econometric models, and automation systems that help legal and policy teams move faster with confidence.

### Hero (FR)
Transformer des données juridiques et économiques en décisions claires et fiables.

Je conçois des pipelines NLP, des modèles économétriques et des automatisations pour aider les équipes juridiques et politiques à avancer avec confiance.

### About (EN)
I sit at the intersection of data science, economics, and legal context. My work focuses on building trustworthy pipelines—NLP models, econometric analysis, and automation—that make complex evidence easier to act on.

### About (FR)
J’opère à l’interface entre data science, économie et contexte juridique. Mon travail porte sur des pipelines fiables — NLP, analyses économétriques et automatisation — pour rendre les preuves complexes plus actionnables.

### Project descriptions
- Document submission automation — Automated multilingual document intake and validation workflows for court-ready data pipelines.
- Damages quantification modelling — Econometric models for defensible cartel damages estimation.
- End-to-end data automation — Automated ingestion, transformation, and reporting across multi-source datasets.
- Interactive dashboards — Shiny and Streamlit dashboards for analytics stakeholders.
