import type { Locale } from "@/lib/i18n";

export type Project = {
  slug: string;
  year: string;
  tags: string[];
  image: string;
  title: Record<Locale, string>;
  summary: Record<Locale, string>;
  problem?: Record<Locale, string>;
  approach?: Record<Locale, string>;
  impact?: Record<Locale, string[]>;
  stack: string[];
};

export type Publication = {
  type: Record<Locale, string>;
  year: string;
  venue: string;
  title: Record<Locale, string>;
  href?: string;
};

export const LINKEDIN_URL = "https://www.linkedin.com/in/fabricevb/";
export const EMAIL_ADDRESS = "fabricevb@hotmail.com";
export const CV_URL = "/assets/cv/Fabrice-Van-Boeckel-CV.pdf";

export const CONTACT_LABELS: Record<
  Locale,
  { email: string; cv: string; linkedin: string }
> = {
  en: { email: "Email", cv: "Download CV", linkedin: "LinkedIn" },
  fr: { email: "E-mail", cv: "Télécharger le CV", linkedin: "LinkedIn" },
  nl: { email: "E-mail", cv: "CV downloaden", linkedin: "LinkedIn" },
};

export const NAV: Record<Locale, { work: string; about: string; writing: string }> = {
  en: { work: "Work", about: "About", writing: "Writing" },
  fr: { work: "Travaux", about: "À propos", writing: "Publications" },
  nl: { work: "Werk", about: "Over", writing: "Publicaties" },
};

export const HERO: Record<
  Locale,
  {
    eyebrow: string;
    title: string;
    titleAccent: string;
    lead: string;
    now: string;
    primary: string;
    secondary: string;
  }
> = {
  en: {
    eyebrow: "Data Scientist · NLP · Legal & Economic Evidence",
    title: "Turning dense legal evidence into",
    titleAccent: "decisions you can defend.",
    lead:
      "I build NLP pipelines, econometric models, and automation systems for legal and economic evidence — with traceability, governance, and human review built in from day one. Recent work spans experiment design, production monitoring, and shipping AI features end-to-end alongside product and engineering teams — not just back-end pipelines.",
    now: "\n",
    primary: "See selected work",
    secondary: "About me",
  },
  fr: {
    eyebrow: "Data Scientist · NLP · Preuve juridique & économique",
    title: "Transformer la preuve juridique en",
    titleAccent: "décisions défendables.",
    lead:
      "Je conçois des pipelines NLP, des modèles économétriques et des systèmes d'automatisation pour la preuve juridique et économique — traçabilité, gouvernance et supervision humaine intégrées dès le départ. Mes travaux récents couvrent la conception d'expérimentations, le suivi en production et la mise en service de fonctionnalités IA de bout en bout aux côtés des équipes produit et ingénierie — pas seulement des pipelines back-end.",
    now: "Actuellement : je termine mon rôle à la CJUE en [CONFIRMER LE MOIS — actuellement septembre 2026], et je regarde vers la suite — des postes seniors en data science / gouvernance de l'IA dans des entreprises de LegalTech.",
    primary: "Voir les travaux",
    secondary: "À propos",
  },
  nl: {
    eyebrow: "Data Scientist · NLP · Juridisch & economisch bewijs",
    title: "Complex juridisch bewijs omzetten in",
    titleAccent: "verdedigbare beslissingen.",
    lead:
      "Ik bouw NLP-pijplijnen, econometrische modellen en automatiseringssystemen voor juridisch en economisch bewijs — met traceerbaarheid, governance en menselijke review vanaf dag één. Recent werk omvat het opzetten van experimenten, monitoring in productie en het end-to-end uitrollen van AI-functionaliteiten samen met product- en engineeringteams — niet alleen back-end pipelines.",
    now: "Nu: ik rond in [BEVESTIG MAAND — momenteel september 2026] mijn rol bij het HvJ-EU af, en kijk uit naar wat volgt — senior functies in data science / AI-governance bij legal-AI-bedrijven.",
    primary: "Bekijk geselecteerd werk",
    secondary: "Over mij",
  },
};

export const METRICS: Record<
  Locale,
  Array<{ value: string; label: string; note: string }>
> = {
  en: [
    { value: "6+", label: "Years applied", note: "Legal & economic data science." },
    { value: "12", label: "Production systems", note: "Shipped, monitored, handed over." },
    { value: "3", label: "Languages", note: "EN · FR · NL — native working." },
    { value: "100%", label: "Audit-ready", note: "Every pipeline, every model." },
  ],
  fr: [
    { value: "6+", label: "Années d'expérience", note: "Data science juridique et économique." },
    { value: "12", label: "Systèmes en production", note: "Livrés, supervisés, transférés." },
    { value: "3", label: "Langues", note: "EN · FR · NL — niveau natif." },
    { value: "100%", label: "Auditables", note: "Chaque pipeline, chaque modèle." },
  ],
  nl: [
    { value: "6+", label: "Jaar ervaring", note: "Juridische en economische data science." },
    { value: "12", label: "Productiesystemen", note: "Geleverd, bewaakt, overgedragen." },
    { value: "3", label: "Talen", note: "EN · FR · NL — werkend niveau." },
    { value: "100%", label: "Audit-ready", note: "Elke pijplijn, elk model." },
  ],
};

export const SERVICES: Record<
  Locale,
  Array<{ title: string; body: string }>
> = {
  en: [
    {
      title: "NLP & document intelligence",
      body: "Multilingual triage, entity extraction, classification, and summarisation tuned to legal and regulatory text.",
    },
    {
      title: "Econometric & damages modelling",
      body: "Defensible models for competition damages, market analysis, and policy evaluation — with full statistical documentation.",
    },
    {
      title: "Automation & data pipelines",
      body: "From intake to dashboard: Airflow, dbt, and SQL pipelines designed for audit, monitoring, and graceful failure.",
    },
    {
      title: "AI governance & assurance",
      body: "Explainability, bias review, model risk frameworks, and human-in-the-loop design for regulated environments.",
    },
  ],
  fr: [
    {
      title: "NLP & intelligence documentaire",
      body: "Triage multilingue, extraction d'entités, classification et résumé adaptés aux textes juridiques et réglementaires.",
    },
    {
      title: "Modélisation économétrique",
      body: "Modèles défendables pour dommages concurrence, analyse de marché et évaluation de politiques — documentation statistique complète.",
    },
    {
      title: "Automatisation & pipelines",
      body: "De l'ingestion au tableau de bord : Airflow, dbt, SQL pensés pour l'audit, la supervision et l'échec contrôlé.",
    },
    {
      title: "Gouvernance & assurance IA",
      body: "Explicabilité, revue de biais, gestion du risque modèle et human-in-the-loop pour environnements régulés.",
    },
  ],
  nl: [
    {
      title: "NLP & documentintelligentie",
      body: "Meertalige triage, entity-extractie, classificatie en samenvatting afgestemd op juridische en regelgevende tekst.",
    },
    {
      title: "Econometrische modellering",
      body: "Verdedigbare modellen voor mededingingsschade, marktanalyse en beleidsevaluatie — met volledige statistische documentatie.",
    },
    {
      title: "Automatisering & datapijplijnen",
      body: "Van inname tot dashboard: Airflow, dbt en SQL ontworpen voor audit, monitoring en gecontroleerde failure.",
    },
    {
      title: "AI-governance & assurance",
      body: "Verklaarbaarheid, bias-review, model risk frameworks en human-in-the-loop voor gereguleerde omgevingen.",
    },
  ],
};

export const PROJECTS: Project[] = [
  {
    slug: "case-law-research-assistant",
    year: "2024–2026",
    tags: ["NLP", "RAG", "LLM", "LegalTech"],
    image: "/project-graph.jpg",
    title: {
      en: "Case-law research assistant (RAG)",
      fr: "Assistant de recherche jurisprudentielle (RAG)",
      nl: "Onderzoeksassistent rechtspraak (RAG)",
    },
    summary: {
      en: "Retrieval-augmented generation system giving an LLM precise, sourced access to the Court's full jurisprudence: document parsing, semantic chunking, and a retrieval pipeline turning decades of case law into a clean, queryable dataset, with NLP features (classification, named entity recognition, summarisation) and a research-assistant chat interface shipped on top.",
      fr: "Système de génération augmentée par récupération (RAG) donnant à un LLM un accès précis et sourcé à l'ensemble de la jurisprudence de la Cour : extraction documentaire, découpage sémantique et pipeline de récupération transformant des décennies de jurisprudence en un jeu de données propre et interrogeable, avec des fonctionnalités NLP (classification, reconnaissance d'entités nommées, synthèse) et une interface de chat assistant de recherche déployées par-dessus.",
      nl: "Retrieval-augmented generation-systeem dat een LLM nauwkeurige, herleidbare toegang geeft tot de volledige rechtspraak van het Hof: documentparsing, semantisch chunking en een retrieval-pipeline die decennia aan rechtspraak omzet in een schone, doorzoekbare dataset, met NLP-functies (classificatie, named entity recognition, samenvatting) en een chatinterface als onderzoeksassistent daarbovenop.",
    },
    stack: ["Python", "LLMs & RAG", "Hugging Face", "FastAPI"],
  },
  {
    slug: "document-submission",
    year: "2024",
    tags: ["NLP", "Automation", "LegalTech"],
    image: "/project-nlp.jpg",
    title: {
      en: "Multilingual document submission automation",
      fr: "Automatisation des dépôts documentaires multilingues",
      nl: "Meertalige automatisering van documentindiening",
    },
    summary: {
      en: "Court-ready intake pipeline processing thousands of EN/FR/NL documents per week, with validation and audit trail.",
      fr: "Pipeline d'ingestion prêt pour les tribunaux traitant des milliers de documents EN/FR/NL par semaine, avec validation et piste d'audit.",
      nl: "Court-ready inname-pijplijn die wekelijks duizenden EN/FR/NL-documenten verwerkt, met validatie en audit trail.",
    },
    problem: {
      en: "Manual intake created a multi-week backlog and inconsistent metadata across cases — blocking timely filings and exposing weak chain-of-custody.",
      fr: "L'ingestion manuelle créait un backlog de plusieurs semaines et des métadonnées incohérentes — bloquant les dépôts dans les délais et fragilisant la traçabilité.",
      nl: "Handmatige inname zorgde voor weken achterstand en inconsistente metadata — wat tijdige indieningen blokkeerde en de chain-of-custody verzwakte.",
    },
    approach: {
      en: "Designed an Airflow + spaCy pipeline with language detection, layout-aware extraction, validation rules, and a reviewer UI for exceptions only.",
      fr: "Pipeline Airflow + spaCy avec détection de langue, extraction sensible au layout, règles de validation et interface de revue limitée aux exceptions.",
      nl: "Airflow + spaCy-pijplijn met taaldetectie, layout-bewuste extractie, validatieregels en een reviewer-UI alleen voor uitzonderingen.",
    },
    impact: {
      en: [
        "Cut intake time from 11 days to under 36 hours",
        "Reduced manual data entry by ~85%",
        "Full audit trail per document accepted by counsel",
      ],
      fr: [
        "Temps d'ingestion réduit de 11 jours à moins de 36 heures",
        "Saisie manuelle réduite d'environ 85 %",
        "Piste d'audit complète par document, acceptée par les conseils",
      ],
      nl: [
        "Inname-tijd van 11 dagen naar minder dan 36 uur",
        "Handmatige invoer met ca. 85% verlaagd",
        "Volledige audit trail per document, geaccepteerd door raadslieden",
      ],
    },
    stack: ["Python", "spaCy", "Airflow", "PostgreSQL", "FastAPI"],
  },
  {
    slug: "case-law-classification",
    year: "2023",
    tags: ["NLP", "ML", "LegalTech"],
    image: "/project-graph.jpg",
    title: {
      en: "Case-law classification & routing",
      fr: "Classification et routage de jurisprudence",
      nl: "Jurisprudentieclassificatie en routering",
    },
    summary: {
      en: "Hybrid TF-IDF + transformer classifier routing case-law to the right specialist with calibrated confidence scores.",
      fr: "Classifieur hybride TF-IDF + transformer routant la jurisprudence vers le bon spécialiste avec scores de confiance calibrés.",
      nl: "Hybride TF-IDF + transformer-classificeerder die jurisprudentie naar de juiste specialist routeert met gekalibreerde confidence scores.",
    },
    problem: {
      en: "Senior partners spent hours triaging incoming case-law; junior reviewers re-routed roughly 30% of assignments.",
      fr: "Les associés passaient des heures à trier la jurisprudence ; les juniors réorientaient environ 30 % des assignations.",
      nl: "Senior partners besteedden uren aan het triageren van jurisprudentie; juniors stuurden circa 30% van de toewijzingen door.",
    },
    approach: {
      en: "Trained a multi-label model on 12 years of internal case data, exposed via FastAPI with MLflow tracking and weekly drift checks.",
      fr: "Modèle multi-label entraîné sur 12 ans de jurisprudence interne, exposé via FastAPI avec suivi MLflow et contrôles de dérive hebdomadaires.",
      nl: "Multi-label-model getraind op 12 jaar interne jurisprudentie, ontsloten via FastAPI met MLflow-tracking en wekelijkse drift-checks.",
    },
    impact: {
      en: [
        "Routing accuracy raised from 71% to 94%",
        "Partner triage time cut by 6 hours/week",
        "Reusable across two adjacent practice areas",
      ],
      fr: [
        "Précision du routage passée de 71 % à 94 %",
        "6 heures par semaine économisées en triage",
        "Réutilisable sur deux domaines de pratique adjacents",
      ],
      nl: [
        "Routerings-accuracy van 71% naar 94%",
        "6 uur per week aan triagewerk uitgespaard",
        "Herbruikbaar in twee aangrenzende praktijkgebieden",
      ],
    },
    stack: ["Python", "scikit-learn", "Hugging Face", "MLflow", "FastAPI"],
  },
  {
    slug: "damages-quantification",
    year: "2022",
    tags: ["Econometrics", "LegalTech"],
    image: "/project-econ.jpg",
    title: {
      en: "Cartel damages quantification",
      fr: "Quantification des dommages cartellaires",
      nl: "Kwantificering van kartelschade",
    },
    summary: {
      en: "Econometric overcharge models for follow-on competition damages — robust to data gaps and reviewed by opposing experts without retraction.",
      fr: "Modèles économétriques de surfacturation pour actions en dommages — robustes aux données manquantes et revus par les experts adverses sans retrait.",
      nl: "Econometrische overcharge-modellen voor follow-on schadeacties — robuust tegen ontbrekende data en zonder intrekking gereviewd door tegenexperts.",
    },
    problem: {
      en: "Counsel needed defensible damage estimates across 7 years of fragmented transaction data, with each assumption traceable to source.",
      fr: "Les conseils avaient besoin d'estimations défendables sur 7 ans de données transactionnelles fragmentées, chaque hypothèse traçable à la source.",
      nl: "Raadslieden hadden verdedigbare schadeschattingen nodig over 7 jaar gefragmenteerde transactiedata, met elke aanname traceerbaar tot de bron.",
    },
    approach: {
      en: "Built panel-data difference-in-differences and synthetic control models in R/Stata with sensitivity analyses and reproducible notebooks.",
      fr: "Modèles de différence-en-différences et contrôle synthétique sur données de panel en R/Stata, analyses de sensibilité et notebooks reproductibles.",
      nl: "Panel-data difference-in-differences en synthetic control-modellen in R/Stata met sensitiviteitsanalyses en reproduceerbare notebooks.",
    },
    impact: {
      en: [
        "Estimates withstood expert cross-examination",
        "Cut model rebuild time from days to hours",
        "Documentation pack accepted unchanged in court filing",
      ],
      fr: [
        "Estimations résistantes au contre-interrogatoire d'expert",
        "Reconstruction du modèle réduite de plusieurs jours à quelques heures",
        "Dossier de documentation accepté tel quel dans le dépôt",
      ],
      nl: [
        "Schattingen hielden stand bij expert-kruisverhoor",
        "Model-rebuild van dagen naar uren teruggebracht",
        "Documentatiepakket ongewijzigd geaccepteerd in de gerechtelijke indiening",
      ],
    },
    stack: ["R", "Stata", "Python", "Quarto"],
  },
  {
    slug: "public-data-pipelines",
    year: "2021",
    tags: ["Automation", "Econometrics"],
    image: "/project-dag.jpg",
    title: {
      en: "Public data pipelines (Eurostat, ECB, IMF)",
      fr: "Pipelines de données publiques (Eurostat, BCE, FMI)",
      nl: "Publieke data-pijplijnen (Eurostat, ECB, IMF)",
    },
    summary: {
      en: "Reusable, versioned ingestion of macro datasets feeding scenario analysis and client briefings.",
      fr: "Ingestion versionnée et réutilisable de jeux macro alimentant analyses de scénarios et briefings clients.",
      nl: "Herbruikbare, geversioneerde inname van macrodatasets voor scenario-analyse en klantbriefings.",
    },
    problem: {
      en: "Each new analysis duplicated download, cleaning, and join logic — slowing turnaround and creating silent inconsistencies.",
      fr: "Chaque nouvelle analyse dupliquait téléchargement, nettoyage et jointures — ralentissant la livraison et créant des incohérences silencieuses.",
      nl: "Elke nieuwe analyse dupliceerde download-, opschoon- en join-logica — wat doorlooptijd vertraagde en stille inconsistenties veroorzaakte.",
    },
    approach: {
      en: "Designed a dbt + Python framework with SDMX connectors, contract tests, and a thin CLI for analysts.",
      fr: "Framework dbt + Python avec connecteurs SDMX, tests de contrat et CLI minimal pour les analystes.",
      nl: "dbt + Python-framework met SDMX-connectors, contract tests en een dunne CLI voor analisten.",
    },
    impact: {
      en: [
        "New scenario analyses prepared in hours, not days",
        "Eliminated 3 recurring reconciliation errors",
        "Adopted across the analytics team",
      ],
      fr: [
        "Nouvelles analyses de scénarios préparées en heures, plus en jours",
        "Trois erreurs de réconciliation récurrentes éliminées",
        "Adopté par l'ensemble de l'équipe analytics",
      ],
      nl: [
        "Nieuwe scenario-analyses in uren in plaats van dagen",
        "Drie terugkerende reconciliatiefouten geëlimineerd",
        "Adoptie door het hele analytics-team",
      ],
    },
    stack: ["Python", "dbt", "SQL", "SDMX", "Git"],
  },
];

export const PUBLICATIONS: Publication[] = [
  {
    type: { en: "Publication", fr: "Publication", nl: "Publicatie" },
    year: "2023",
    venue: "CDC Cartel Damage Claims Consulting",
    title: {
      en: "Decoding transaction data in private competition damage litigations",
      fr: "Décoder les données transactionnelles dans les actions en dommages concurrence",
      nl: "Transactiegegevens ontcijferen in private mededingingsschadezaken",
    },
  },
  {
    type: { en: "Publication", fr: "Publication", nl: "Publicatie" },
    year: "2022",
    venue: "CDC Cartel Damage Claims Consulting",
    title: {
      en: "General Court dismisses Scania's appeal in the Truck Cartel",
      fr: "Le Tribunal rejette l'appel de Scania dans le cartel des camions",
      nl: "Gerecht verwerpt Scania's beroep in het truckkartel",
    },
  },
  {
    type: { en: "Thesis", fr: "Mémoire", nl: "Scriptie" },
    year: "2021",
    venue: "LL.M Dissertation",
    title: {
      en: "The economic approach and legal certainty in competition damage claims",
      fr: "L'approche économique et la sécurité juridique dans les actions en dommages",
      nl: "De economische benadering en rechtszekerheid in mededingingsschadezaken",
    },
  },
  {
    type: { en: "Conference", fr: "Conférence", nl: "Conferentie" },
    year: "2019",
    venue: "Central Bank Business Surveys Conference",
    title: {
      en: "What variability and volatility in business opinions reveal",
      fr: "Ce que révèlent variabilité et volatilité des opinions des entreprises",
      nl: "Wat variabiliteit en volatiliteit in bedrijfsmeningen onthullen",
    },
  },
];

export const ABOUT: Record<
  Locale,
  {
    eyebrow: string;
    heading: string;
    paragraphs: string[];
    principlesHeading: string;
    principles: Array<{ title: string; body: string }>;
    toolboxHeading: string;
  }
> = {
  en: {
    eyebrow: "About",
    heading: "Data science at the intersection of law, economics, and engineering.",
    paragraphs: [
      "I'm Fabrice Van Boeckel — a data scientist working at the intersection of law, economics, and engineering.",
      "Since 2024 I've built and run the AI and data strategy for the Court of Justice of the European Union: NLP and retrieval systems over case law spanning 27 national legal systems and 24 languages, and the risk-assessment and human-in-the-loop frameworks that keep those systems accountable to judges, not just to engineers.",
      "Before that, I spent five years on the data science and econometrics side of competition-law litigation, working with law firms, regulators, and economic consultancies across Belgium, France, and the Netherlands — building the models and dashboards used directly in court.",
      "I work where the stakes demand it: matters where outputs end up in front of a tribunal, a regulator, or a board. That means traceability, governance, and human review are not afterthoughts — they're the design.",
      "Before any of that, I trained in economics and competition law, which is why my models read like arguments: every assumption is named, every step is reproducible, and every decision is something you can defend out loud.",
    ],
    principlesHeading: "How I work",
    principles: [
      {
        title: "Defensible by design",
        body: "Every output you can trace back to its source data, transformation, and model version.",
      },
      {
        title: "Automation with oversight",
        body: "Machines do the volume; humans review the edge cases. Both are logged.",
      },
      {
        title: "Plain documentation",
        body: "If counsel or auditors can't read it, it isn't done. I write for the room, not for the model.",
      },
    ],
    toolboxHeading: "Toolbox",
  },
  fr: {
    eyebrow: "À propos",
    heading: "Data science à l'interface du droit, de l'économie et de l'ingénierie.",
    paragraphs: [
      "Je m'appelle Fabrice Van Boeckel, data scientist au croisement du droit, de l'économie et de l'ingénierie.",
      "Depuis 2024, je conçois et pilote la stratégie IA et données de la Cour de justice de l'Union européenne : systèmes de NLP et de recherche documentaire appliqués à la jurisprudence de 27 systèmes juridiques nationaux et 24 langues, ainsi que les cadres d'évaluation des risques et de supervision humaine qui rendent ces systèmes redevables devant un juge, pas seulement devant un ingénieur.",
      "Auparavant, j'ai passé cinq ans du côté data science et économétrie du contentieux concurrence, en travaillant avec des cabinets d'avocats, des régulateurs et des cabinets de conseil économique en Belgique, en France et aux Pays-Bas — à construire les modèles et tableaux de bord utilisés directement devant les tribunaux.",
      "Je travaille là où l'enjeu l'exige : des dossiers dont les résultats finissent devant un tribunal, un régulateur ou un conseil d'administration. Cela signifie que la traçabilité, la gouvernance et la relecture humaine ne sont pas des réflexions après coup — elles font partie de la conception dès le départ.",
      "Avant tout cela, j'ai été formé en économie et en droit de la concurrence, ce qui explique pourquoi mes modèles se lisent comme des arguments : chaque hypothèse est nommée, chaque étape reproductible, chaque décision défendable à voix haute.",
    ],
    principlesHeading: "Méthode",
    principles: [
      {
        title: "Défendable par conception",
        body: "Chaque résultat traçable jusqu'aux données, transformations et versions de modèle.",
      },
      {
        title: "Automatisation supervisée",
        body: "Les machines traitent le volume, les humains revoient les cas limites. Les deux sont journalisés.",
      },
      {
        title: "Documentation lisible",
        body: "Si les conseils ou les auditeurs ne la comprennent pas, le travail n'est pas terminé.",
      },
    ],
    toolboxHeading: "Boîte à outils",
  },
  nl: {
    eyebrow: "Over",
    heading: "Data science op het kruispunt van recht, economie en engineering.",
    paragraphs: [
      "Ik ben Fabrice Van Boeckel, data scientist op het snijvlak van recht, economie en engineering.",
      "Sinds 2024 bouw en beheer ik de AI- en datastrategie van het Hof van Justitie van de Europese Unie: NLP- en retrieval-systemen voor rechtspraak uit 27 nationale rechtsstelsels en 24 talen, en de risicobeoordelings- en human-in-the-loop-kaders die deze systemen verantwoordbaar houden tegenover rechters, niet alleen tegenover engineers.",
      "Daarvoor werkte ik vijf jaar aan de data science- en econometriekant van mededingingsrechtelijke geschillen, met advocatenkantoren, toezichthouders en economische adviesbureaus in België, Frankrijk en Nederland — waar ik de modellen en dashboards bouwde die rechtstreeks in de rechtszaal werden gebruikt.",
      "Ik werk waar de inzet het vereist: zaken waarvan de uitkomst voor een rechtbank, toezichthouder of raad van bestuur komt. Dat betekent dat traceerbaarheid, governance en menselijke controle geen bijzaak zijn — ze zitten vanaf het ontwerp ingebakken.",
      "Daarvóór volgde ik een opleiding in economie en mededingingsrecht, en daarom lezen mijn modellen als argumenten: elke aanname is benoemd, elke stap reproduceerbaar, elke beslissing hardop te verdedigen.",
    ],
    principlesHeading: "Werkwijze",
    principles: [
      {
        title: "Verdedigbaar by design",
        body: "Elke output is herleidbaar tot brondata, transformatie en modelversie.",
      },
      {
        title: "Automatisering met toezicht",
        body: "Machines doen het volume; mensen beoordelen de edge cases. Beide gelogd.",
      },
      {
        title: "Heldere documentatie",
        body: "Als raadslieden of auditors het niet kunnen lezen, is het niet af.",
      },
    ],
    toolboxHeading: "Toolbox",
  },
};

export const TOOLBOX = [
  { group: "Languages", items: ["Python", "R", "SQL", "Stata", "SAS"] },
  { group: "ML & NLP", items: ["spaCy", "Hugging Face", "scikit-learn", "MLflow", "LLMs"] },
  { group: "Data", items: ["PostgreSQL", "dbt", "Airflow", "Pandas", "Quarto"] },
  { group: "Delivery", items: ["FastAPI", "Docker", "Git", "Streamlit", "Power BI"] },
  { group: "Practice", items: ["AI governance", "Model risk", "Econometrics", "Stakeholder enablement"] },
];

export const SECTION_HEADINGS: Record<
  Locale,
  { proof: string; work: string; workLead: string; services: string; servicesLead: string; writing: string; writingLead: string; about: string; viewAll: string; readMore: string; problem: string; approach: string; impact: string; stack: string }
> = {
  en: {
    proof: "Proof",
    work: "Selected work",
    workLead: "Five representative engagements. Names redacted on request — full references available under NDA.",
    services: "What I do",
    servicesLead: "Four practice areas, often combined within a single engagement.",
    writing: "Writing",
    writingLead: "Selected publications, theses, and conference work.",
    about: "About",
    viewAll: "All publications →",
    readMore: "Read",
    problem: "Problem",
    approach: "Approach",
    impact: "Impact",
    stack: "Stack",
  },
  fr: {
    proof: "Preuves",
    work: "Travaux sélectionnés",
    workLead: "Cinq missions représentatives. Noms anonymisés sur demande — références complètes sous NDA.",
    services: "Ce que je fais",
    servicesLead: "Quatre domaines, souvent combinés dans une même mission.",
    writing: "Écrits",
    writingLead: "Publications, mémoires et travaux de conférence sélectionnés.",
    about: "À propos",
    viewAll: "Toutes les publications →",
    readMore: "Lire",
    problem: "Problème",
    approach: "Approche",
    impact: "Impact",
    stack: "Stack",
  },
  nl: {
    proof: "Bewijs",
    work: "Geselecteerd werk",
    workLead: "Vijf representatieve opdrachten. Namen op verzoek geanonimiseerd — volledige referenties onder NDA.",
    services: "Wat ik doe",
    servicesLead: "Vier praktijkgebieden, vaak gecombineerd binnen één opdracht.",
    writing: "Publicaties",
    writingLead: "Geselecteerde publicaties, scripties en conferentiewerk.",
    about: "Over",
    viewAll: "Alle publicaties →",
    readMore: "Lees",
    problem: "Probleem",
    approach: "Aanpak",
    impact: "Impact",
    stack: "Stack",
  },
};

export const FOOTER: Record<Locale, { tagline: string; rights: string }> = {
  en: { tagline: "Data science for legal and economic evidence.", rights: "All rights reserved." },
  fr: { tagline: "Data science pour la preuve juridique et économique.", rights: "Tous droits réservés." },
  nl: { tagline: "Data science voor juridisch en economisch bewijs.", rights: "Alle rechten voorbehouden." },
};
