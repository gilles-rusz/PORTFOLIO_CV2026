/* Le CV qui postule à votre place, logique de génération du dossier.
   Tout est calculé côté navigateur, aucune donnée n'est envoyée. */

const NEEDS = [
  {
    id: 'front',
    family: 'tech',
    label: 'Un développeur front-end',
    hint: 'React, Next.js, interfaces responsives',
    answer: "Je développe des interfaces en React et Next.js, avec TypeScript et Tailwind : découpage en composants, états, appels d'API, responsive et accessibilité de base. Je travaille à partir d'une maquette Figma et je livre des écrans qui tiennent sur mobile comme sur grand écran.",
    deliverable: "Un premier écran livré, intégré à vos composants et branché sur vos données",
    projects: ['webrgest', 'oliwood', 'greenbin'],
    plan: ['Reprendre un écran existant de bout en bout pour comprendre vos conventions front, puis livrer le suivant seul']
  },
  {
    id: 'back',
    family: 'tech',
    label: 'Un développeur back-end',
    hint: 'Node.js, Express, PHP MVC, bases de données',
    answer: "Côté serveur je travaille en Node.js avec Express et en PHP en architecture MVC : routes, services, modèles, modélisation de la base, authentification JWT et gestion des rôles. J'ai livré en production sur MySQL, PostgreSQL et MongoDB.",
    deliverable: 'Une première fonctionnalité serveur livrée, du modèle de données à la route testée',
    projects: ['auction', 'burovia', 'greenbin'],
    plan: ['Reprendre le modèle de données et les routes existantes, puis livrer une première fonctionnalité serveur complète']
  },
  {
    id: 'fullstack',
    family: 'tech',
    label: 'Un profil full stack',
    hint: 'du besoin à la mise en production',
    answer: "C'est mon terrain habituel : je prends un besoin, je modélise, je développe le back et le front, je déploie et j'assure la suite. Chez Web RG Est je le fais seul de bout en bout, en stage je l'ai fait dans une équipe, avec revue de code.",
    deliverable: "Une fonctionnalité complète en ligne, base de données et interface incluses",
    projects: ['burovia', 'auction', 'webrgest'],
    plan: ["Livrer une fonctionnalité complète de bout en bout, base et interface, pour valider que j'ai compris votre chaîne"]
  },
  {
    id: 'backoffice',
    family: 'tech',
    label: 'Une application métier ou un back-office',
    hint: 'CRUD, rôles, tableaux de bord, outil interne',
    answer: "Je construis des interfaces d'administration lisibles : CRUD complet, formulaires métier, gestion des rôles et des accès, tableaux de bord. J'y ajoute ce que les utilisateurs demandent toujours : recherche, filtres et export.",
    deliverable: 'Un premier écran d\'administration fonctionnel branché sur vos données',
    projects: ['greenbin', 'auction', 'oliwood'],
    plan: ['Modéliser les données et livrer un premier écran d\'administration branché sur la base réelle']
  },
  {
    id: 'api',
    family: 'tech',
    label: 'Une API et des intégrations entre systèmes',
    hint: 'REST, authentification, services tiers',
    answer: 'Je structure des API REST Node.js / Express : routes, services, modèles, authentification JWT et séparation claire des responsabilités. Je documente les endpoints pour que le front et les partenaires ne devinent rien.',
    deliverable: 'Des endpoints documentés et testables sous Postman',
    projects: ['russell', 'artisan', 'burovia'],
    plan: ['Documenter les endpoints existants puis livrer une première route de bout en bout, tests Postman inclus']
  },
  {
    id: 'realtime',
    family: 'tech',
    label: 'Du temps réel (live, notifications)',
    hint: 'WebSocket, mises à jour instantanées',
    answer: "Pendant mon stage au Luxembourg, j'ai développé une application d'enchères internes en temps réel : WebSocket, mises à jour instantanées pour tous les participants et interface d'administration.",
    deliverable: 'Un prototype temps réel démontrable en réunion',
    projects: ['auction'],
    plan: ['Isoler le flux temps réel et démontrer une mise à jour instantanée sur un cas métier réel']
  },
  {
    id: 'automation',
    family: 'tech',
    label: 'Automatiser des tâches répétitives',
    hint: 'n8n, scripts, workflows',
    answer: "Je monte des workflows n8n et des scripts pour supprimer la saisie manuelle : formulaires vers CRM, relances, génération de documents, synchronisations. Mes 22 ans en industrie me font chercher le gaspillage avant d'écrire du code.",
    deliverable: 'Un workflow en production qui supprime une tâche manuelle identifiée',
    projects: ['webrgest', 'greenbin'],
    plan: ['Chronométrer une tâche manuelle de l\'équipe et automatiser la plus coûteuse']
  },
  {
    id: 'refonte',
    family: 'tech',
    label: 'Reprendre un existant : refonte, performance, dette technique',
    hint: 'mesure, correctifs priorisés, refonte progressive',
    answer: "Je reprends des bases existantes sans tout casser : mesure d'abord (performances, SEO, accessibilité), corrections priorisées ensuite, refonte progressive écran par écran.",
    deliverable: 'Un rapport de mesures et les premiers gains visibles',
    projects: ['webrgest', 'artisan'],
    plan: ['Mesurer avant de toucher : performances, SEO, accessibilité, puis corriger par ordre de gain']
  },
  {
    id: 'renfort',
    family: 'tech',
    label: "Renforcer l'équipe au quotidien",
    hint: 'features, correctifs, revue de code',
    answer: "Je travaille par branches et pull requests, je commente mes choix et je demande une revue. J'ai été formé et j'ai travaillé exactement comme ça en stage : petites features, correctifs, intégration progressive.",
    deliverable: 'Mes premières pull requests mergées dans la semaine',
    projects: ['auction', 'greenbin'],
    plan: ['Prendre les tickets que personne n\'a le temps de traiter et livrer mes premières pull requests']
  },
  {
    id: 'site',
    family: 'tech',
    label: 'Un site ou une boutique en ligne de bout en bout',
    hint: 'vitrine, e-commerce, paiement, SEO',
    answer: "J'ai livré et mis en production des sites vitrines et une boutique complète : catalogue, panier, paiement Stripe, commandes et livraison multi-pays, plus le référencement et les performances. Je connais les pièges habituels, TVA, webhooks de paiement et états de commande.",
    deliverable: 'Une première version en ligne, visitable, ou un tunnel de commande testable en recette',
    projects: ['burovia', 'webrgest', 'oliwood'],
    plan: ["Auditer l'existant, pages, SEO, performances et parcours d'achat, puis livrer les correctifs par ordre de gain"]
  },
  {
    id: 'besoin',
    family: 'analyse',
    label: 'Recueillir et cadrer un besoin métier',
    hint: 'ateliers, irritants, arbitrages',
    answer: "C'est l'exercice que je fais depuis vingt ans, d'abord comme team leader face à des équipes et à leurs irritants, aujourd'hui comme développeur face à des clients. Je fais parler l'utilisateur de son travail réel, pas de la solution qu'il imagine, puis je reformule le besoin en objectifs vérifiables et j'assume les arbitrages.",
    deliverable: 'Le besoin reformulé et validé par le métier, avec ce qui est hors périmètre écrit noir sur blanc',
    projects: ['ck', 'stellantis'],
    plan: ["Aller écouter les utilisateurs sur leur poste et restituer les irritants classés par coût réel"]
  },
  {
    id: 'specs',
    family: 'analyse',
    label: 'Rédiger des spécifications et des user stories',
    hint: 'critères d\'acceptation, recette',
    answer: "J'écris des spécifications que les développeurs peuvent implémenter sans revenir poser trois questions, parce que je suis moi-même celui qui développe ensuite : règles de gestion, cas limites, critères d'acceptation, et une recette écrite avant le développement.",
    deliverable: 'Un lot de user stories prêtes à développer, avec critères d\'acceptation et cas de recette',
    projects: ['ck', 'greenbin'],
    plan: ["Reprendre une demande floue du backlog et la transformer en spécification testable, validée par le métier"]
  },
  {
    id: 'process',
    family: 'analyse',
    label: 'Cartographier et optimiser un processus métier',
    hint: 'existant, points de blocage, cible',
    answer: "J'ai passé 22 ans à observer des processus réels et à les corriger, avec mesure avant et après. Je cartographie l'existant tel qu'il est vécu, pas tel qu'il est censé fonctionner, je chiffre les points de blocage, puis je propose une cible atteignable par étapes.",
    deliverable: "La cartographie de l'existant et du processus cible, avec les gains attendus chiffrés",
    projects: ['lean', 'stellantis'],
    plan: ['Cartographier le processus existant avec ceux qui le vivent, puis chiffrer les deux corrections les plus rentables']
  },
  {
    id: 'interface',
    family: 'analyse',
    label: 'Faire le lien entre le métier et l\'IT',
    hint: 'traduction, recette, support, formation',
    answer: "C'est ma valeur principale : je parle les deux langues. Je traduis une demande métier en contrainte technique et une contrainte technique en conséquence métier, je pilote la recette avec les utilisateurs, je forme et je traite les incidents sans jargon parce que j'ai été utilisateur pendant 22 ans.",
    deliverable: 'Une recette menée avec les utilisateurs et les incidents récurrents documentés',
    projects: ['ck', 'stellantis'],
    plan: ["Suivre les demandes et les incidents pendant une semaine, puis rendre un point clair côté métier et côté IT"]
  },
  {
    id: 'donnees',
    family: 'analyse',
    label: 'Analyser des données et des échanges de flux',
    hint: 'SQL, modèle de données, XML et JSON',
    answer: "Je modélise des bases et j'écris mes requêtes SQL au quotidien sur mes projets, et je manipule les formats d'échange XML et JSON entre applications. Je sais aller chercher la donnée pour vérifier une hypothèse plutôt que d'attendre un rapport.",
    deliverable: 'Le modèle de données documenté et les requêtes qui répondent à vos questions récurrentes',
    projects: ['greenbin', 'auction'],
    plan: ['Reconstituer le modèle de données réel et fournir les requêtes de contrôle qui manquent']
  },
  {
    id: 'maquette',
    family: 'analyse',
    label: 'Maquetter avant de faire développer',
    hint: 'Figma, parcours utilisateur, validation',
    answer: "Je maquette sous Figma avant d'écrire une ligne de code : parcours écran par écran, validation par le métier, puis développement. C'est le moyen le moins cher de découvrir qu'on s'est trompé, et ça évite les développements jetés.",
    deliverable: 'Une maquette cliquable validée par les utilisateurs avant le premier développement',
    projects: ['oliwood', 'greenbin'],
    plan: ['Maquetter le prochain écran demandé et le faire valider par les utilisateurs avant de le développer']
  },
  {
    id: 'management',
    family: 'terrain',
    label: 'Encadrer une équipe au quotidien',
    hint: 'animation terrain, montée en compétences',
    answer: "J'ai encadré jusqu'à 25 personnes chez Stellantis pendant 22 ans : animation quotidienne, répartition de la charge, gestion des tensions et montée en compétences des équipiers. Je sais tenir une équipe sans la casser, et rendre compte à la hiérarchie avec des faits.",
    deliverable: "Un point d'équipe cadré et des objectifs individuels lisibles dès la première semaine",
    projects: ['stellantis', 'recrutement'],
    plan: ["Rencontrer chaque membre de l'équipe en individuel et remonter les irritants avec un plan d'action"]
  },
  {
    id: 'flux',
    family: 'terrain',
    label: 'Organiser des flux logistiques ou de production',
    hint: 'approvisionnement, cadence, délais',
    answer: "22 ans en logistique automobile sur des flux tendus : approvisionnement des lignes, respect de la cadence, gestion des aléas et des priorités. J'ai piloté des projets d'optimisation de flux avec mesure avant et après.",
    deliverable: "Une cartographie du flux réel, avec les points de blocage chiffrés",
    projects: ['stellantis', 'lean'],
    plan: ['Observer le flux sur le terrain, chronométrer, puis proposer les deux corrections au meilleur rapport gain sur effort']
  },
  {
    id: 'procedures',
    family: 'terrain',
    label: 'Écrire et faire appliquer des procédures',
    hint: 'qualité, sécurité, conformité',
    answer: "J'ai rédigé et fait appliquer des procédures en environnement exigeant : qualité ISO 9001, sécurité, conformité SSI. J'ai commencé ma carrière au contrôle qualité et sûreté de la centrale nucléaire de Cattenom, donc je sais ce qu'une procédure non respectée peut coûter.",
    deliverable: 'Une procédure écrite, testée sur le terrain et comprise par les opérateurs',
    projects: ['cattenom', 'stellantis'],
    plan: ["Reprendre une procédure existante avec ceux qui l'appliquent, la simplifier et la faire valider"]
  },
  {
    id: 'lean',
    family: 'terrain',
    label: "Déployer une démarche Lean et d'amélioration continue",
    hint: 'Kaizen, Gemba, Muda, 5S, KPI',
    answer: "J'ai été formé au Lean management chez Stellantis et je l'ai pratiqué sur le terrain pendant des années : chantiers Kaizen avec les opérateurs, Gemba walk pour voir le travail réel, chasse aux Muda, 5S et suivi d'indicateurs. Je mesure avant, je change une chose à la fois, et je garde ce qui tient dans le temps.",
    deliverable: 'Un premier chantier cadré : mesure initiale, gaspillages identifiés et gains visés',
    projects: ['lean', 'stellantis'],
    plan: ["Aller voir le travail réel sur le terrain, mesurer, puis lancer un premier chantier Kaizen avec ceux qui font le travail"]
  },
  {
    id: 'recrutement',
    family: 'terrain',
    label: 'Recruter, intégrer et faire monter en compétences',
    hint: 'sélection, tutorat, KPI d\'équipe',
    answer: "J'ai participé au recrutement opérationnel chez Stellantis : sourcing interne, entretiens de sélection, puis accompagnement des nouveaux jusqu'à l'autonomie, indicateurs d'équipe à l'appui. Je sais écrire un parcours d'intégration qui ne laisse pas le nouveau seul avec un badge.",
    deliverable: "Un parcours d'intégration écrit pour le prochain arrivant",
    projects: ['recrutement', 'lean'],
    plan: ["Formaliser le parcours d'intégration du poste et le tester sur le prochain arrivant"]
  }
];

const STACK = [
  { id: 'react', label: 'React', level: 'ok' },
  { id: 'next', label: 'Next.js', level: 'ok' },
  { id: 'js', label: 'JavaScript ES6+', level: 'ok' },
  { id: 'ts', label: 'TypeScript', level: 'ok' },
  { id: 'node', label: 'Node.js', level: 'ok' },
  { id: 'express', label: 'Express', level: 'ok' },
  { id: 'rest', label: 'API REST', level: 'ok' },
  { id: 'ws', label: 'WebSocket', level: 'ok' },
  { id: 'tailwind', label: 'Tailwind CSS', level: 'ok' },
  { id: 'mysql', label: 'MySQL', level: 'ok' },
  { id: 'postgres', label: 'PostgreSQL', level: 'ok' },
  { id: 'mongo', label: 'MongoDB', level: 'ok' },
  { id: 'docker', label: 'Docker', level: 'ok' },
  { id: 'git', label: 'Git / GitHub', level: 'ok' },
  { id: 'php', label: 'PHP', level: 'ok' },
  { id: 'stripe', label: 'Stripe', level: 'ok' },
  { id: 'n8n', label: 'n8n', level: 'ok' },
  { id: 'ci', label: 'CI/CD GitHub Actions', level: 'partial' },
  { id: 'tests', label: 'Tests automatisés (Jest)', level: 'partial' },
  { id: 'linux', label: 'Linux / VPS', level: 'partial' },
  { id: 'wordpress', label: 'WordPress', level: 'partial' },
  { id: 'python', label: 'Python', level: 'partial' },
  { id: 'vue', label: 'Vue.js', level: 'no' },
  { id: 'angular', label: 'Angular', level: 'no' },
  { id: 'symfony', label: 'Symfony / Laravel', level: 'no' },
  { id: 'java', label: 'Java / Spring', level: 'no' },
  { id: 'dotnet', label: '.NET / C#', level: 'no' },
  { id: 'graphql', label: 'GraphQL', level: 'no' },
  { id: 'aws', label: 'AWS / Azure', level: 'no' },
  { id: 'k8s', label: 'Kubernetes', level: 'no' },
  { id: 'mobile', label: 'React Native / Flutter', level: 'no' }
];

/* Compétences d'analyse fonctionnelle : le pont entre le métier et la technique. */
const ANALYST_SKILLS = [
  { id: 'recueil', label: 'Recueil du besoin métier', level: 'ok' },
  { id: 'specrec', label: 'Rédaction de spécifications', level: 'ok' },
  { id: 'userstory', label: 'User stories et critères d\'acceptation', level: 'ok' },
  { id: 'recette', label: 'Recette fonctionnelle', level: 'ok' },
  { id: 'sql', label: 'Requêtes SQL', level: 'ok' },
  { id: 'modele', label: 'Modélisation de données', level: 'ok' },
  { id: 'figma', label: 'Figma (maquettage)', level: 'ok' },
  { id: 'xml', label: 'XML', level: 'ok' },
  { id: 'json', label: 'JSON', level: 'ok' },
  { id: 'jira', label: 'Jira', level: 'partial' },
  { id: 'scrum', label: 'Scrum', level: 'partial' },
  { id: 'kanban', label: 'Kanban', level: 'partial' },
  { id: 'sqlserver', label: 'SQL Server', level: 'partial' },
  { id: 'oracle', label: 'Oracle', level: 'partial' },
  { id: 'o365', label: 'Office 365', level: 'partial' },
  { id: 'balsamiq', label: 'Balsamiq', level: 'partial' },
  { id: 'visio', label: 'Microsoft Visio', level: 'partial' },
  { id: 'drawio', label: 'draw.io', level: 'partial' },
  { id: 'bpmn', label: 'BPMN', level: 'partial' },
  { id: 'uml', label: 'UML', level: 'partial' },
  { id: 'xsd', label: 'XSD', level: 'partial' },
  { id: 'xslt', label: 'XSLT', level: 'partial' }
];

/* Compétences terrain, encadrement et organisation, issues des 22 ans en industrie. */
const FIELD_SKILLS = [
  { id: 'manag', label: "Management d'équipe", level: 'ok' },
  { id: 'anim', label: 'Animation terrain au quotidien', level: 'ok' },
  { id: 'recrut', label: 'Recrutement et intégration', level: 'ok' },
  { id: 'logistique', label: 'Logistique et gestion des flux', level: 'ok' },
  { id: 'leanm', label: 'Lean management', level: 'ok' },
  { id: 'iso', label: 'Qualité ISO 9001', level: 'ok' },
  { id: 'kpi', label: 'Pilotage de KPI', level: 'ok' },
  { id: 'procedure', label: 'Rédaction de procédures', level: 'ok' },
  { id: 'securite', label: 'Sécurité et sûreté en site sensible', level: 'ok' },
  { id: 'projet', label: 'Gestion de projet et coordination', level: 'ok' },
  { id: 'supportapp', label: 'Support applicatif et incidents', level: 'ok' },
  { id: 'formation', label: 'Formation des utilisateurs', level: 'ok' },
  { id: 'parc', label: 'Gestion de parc informatique', level: 'partial' },
  { id: 'rgpd', label: 'Conformité RGPD et SSI', level: 'partial' },
  { id: 'anglais', label: 'Anglais professionnel', level: 'partial' },
  { id: 'erp', label: 'ERP ou WMS logistique', level: 'partial' },
  { id: 'compta', label: 'Comptabilité et paie', level: 'no' }
];

const ALL_SKILLS = STACK.concat(ANALYST_SKILLS, FIELD_SKILLS);
const findSkill = (id) => ALL_SKILLS.find((s) => s.id === id);

const STACK_GAP_PLAN = {
  vue: 'Vue.js reste du JavaScript composant : avec React et Next.js derrière moi, je suis opérationnel sur une base existante en une à deux semaines.',
  angular: "Angular est le plus éloigné de mon socle React. Comptez trois semaines avant que je sois vraiment autonome, mais TypeScript et l'architecture par services me sont familiers.",
  symfony: "Je connais PHP et le modèle MVC : un framework comme Symfony ou Laravel se rattrape vite, en commençant par les tickets simples.",
  java: "Je n'ai jamais écrit de Java en production. Si c'est votre cœur de métier, je vous le dis franchement : ce serait un vrai apprentissage, pas une formalité.",
  dotnet: "Pas de .NET à mon actif. Je serais utile côté front et API dès le premier jour, et je monterais en compétence back en parallèle.",
  graphql: "GraphQL après plusieurs API REST, c'est surtout un changement de contrat : quelques jours pour être productif.",
  aws: "J'ai déployé sur Vercel et sur VPS, pas encore sur AWS ou Azure. Les concepts (build, variables d'environnement, logs, domaines) sont acquis, la console reste à apprendre.",
  k8s: "Je pratique Docker mais pas Kubernetes en production. Je sais lire un manifest, je ne prétends pas savoir opérer un cluster.",
  mobile: "Pas encore de mobile livré. React Native s'appuie sur React, ce serait ma première marche logique.",
  ci: "J'utilise GitHub au quotidien et des pipelines simples ; sur une chaîne CI/CD complexe, je débute.",
  tests: "J'écris des tests, sans avoir encore tenu une vraie stratégie de couverture sur un gros projet. C'est le point que je veux travailler en équipe.",
  linux: "J'administre un VPS pour mes propres déploiements, sans être sysadmin.",
  wordpress: "Je sais intervenir sur WordPress, mais je développe en JavaScript par choix.",
  python: 'Python : niveau scripts et automatisation, pas encore de back-end livré.',
  parc: "J'ai géré du matériel et dépanné des utilisateurs, sans avoir tenu un parc informatique complet avec inventaire et cycle de vie.",
  rgpd: 'Je suis sensibilisé au RGPD et à la SSI et je les applique dans mes développements, sans être référent conformité.',
  anglais: 'Anglais technique et conversationnel : je lis la documentation et je tiens une réunion, pas encore une négociation.',
  erp: "J'ai utilisé des outils métier de suivi de flux en industrie, sans être administrateur d'un ERP ou d'un WMS.",
  compta: "La comptabilité et la paie ne sont pas mon domaine, en dehors de la gestion de ma propre micro-entreprise.",
  jira: "J'ai travaillé sur Jira pendant mon stage chez CK Charles Kieffer : je sais suivre un ticket et alimenter un board, pas encore administrer un projet complet.",
  scrum: "J'ai travaillé en itérations avec des points quotidiens, sans avoir tenu formellement un rôle Scrum. Le cadre m'est familier, la certification non.",
  kanban: "Je connais le principe et j'ai piloté des flux tirés en industrie, mais je n'ai pas encore pratiqué le Kanban agile en équipe produit.",
  sqlserver: "J'écris du SQL au quotidien sur MySQL et PostgreSQL : SQL Server, c'est le même langage et une console à prendre en main.",
  oracle: "Même réponse pour Oracle : les requêtes et la modélisation ne changent pas, l'outil et le PL/SQL spécifique sont à apprendre.",
  o365: 'Office 365 au niveau usage courant, Excel et collaboratif inclus, sans expertise Power Platform.',
  balsamiq: 'Je maquette sous Figma. Balsamiq, je sais le lire et le prendre en main rapidement.',
  visio: "Je n'ai jamais utilisé Visio en production : je fais mes schémas autrement, et l'outil s'apprend en quelques heures.",
  drawio: "draw.io est à prendre en main. Ce qui compte est déjà acquis : savoir ce qu'un schéma doit montrer.",
  bpmn: "BPMN, je connais le principe sans l'avoir pratiqué. J'ai en revanche cartographié des processus réels pendant 22 ans, la notation est la partie la plus rapide à apprendre.",
  uml: "J'ai utilisé UML en formation, diagrammes de cas d'utilisation et de classes, sans le pratiquer au quotidien.",
  xsd: "XML et JSON sont acquis. XSD, je l'ai croisé sans l'écrire moi-même : c'est une question de jours, pas de semaines.",
  xslt: "XSLT est le point où je suis le plus juste sur les formats d'échange. Je vous le dis franchement plutôt que de le découvrir en mission."
};

const PROJECTS = {
  burovia: {
    name: 'Burovia',
    context: 'Web RG Est · en production',
    text: "Boutique en ligne d'accessoires de télétravail : catalogue, panier, paiement Stripe, livraison France / Belgique / Luxembourg.",
    tags: ['React', 'Node.js', 'Express', 'PostgreSQL', 'Stripe'],
    link: 'https://burovia.eu',
    linkLabel: 'burovia.eu'
  },
  webrgest: {
    name: 'Web RG Est',
    context: 'Mon entreprise · en production',
    text: 'Site vitrine de mon activité : SEO travaillé, blog intégré, déploiement continu sur Vercel.',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'SEO', 'Vercel'],
    link: 'https://webrgest.fr',
    linkLabel: 'webrgest.fr'
  },
  oliwood: {
    name: "Oli'Wood",
    context: 'Client menuiserie · en cours de production',
    text: "Site vitrine avec back-office : gestion des réalisations, demandes de devis, et thèmes saisonniers (mode Noël) activables en un clic sans toucher au code.",
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Back-office'],
    link: 'index.html#a-venir',
    linkLabel: 'captures dans le portfolio'
  },
  auction: {
    name: 'Auction Showcase',
    context: 'Stage · CK Charles Kieffer, Luxembourg',
    text: "Application d'enchères internes en temps réel : WebSocket, authentification Azure, interface d'administration.",
    tags: ['Node.js', 'Express', 'WebSocket', 'MySQL', 'EJS'],
    link: 'https://www.youtube.com/watch?v=fjJrTaBJ95k',
    linkLabel: 'démonstration vidéo'
  },
  greenbin: {
    name: 'GreenBin',
    context: 'Titre professionnel DWWM',
    text: 'Dashboard de gestion des déchets : utilisateurs, rôles, formulaires métier, environnement dockerisé.',
    tags: ['React', 'Node.js', 'Express', 'MySQL', 'Docker'],
    link: 'index.html#projets',
    linkLabel: 'détails dans le portfolio'
  },
  artisan: {
    name: 'Trouve Ton Artisan',
    context: 'Projet de synthèse',
    text: "Plateforme de recherche d'artisans : fiches détaillées, formulaire de contact, expérience responsive desktop et mobile.",
    tags: ['React', 'Express', 'MySQL', 'Sequelize'],
    link: 'index.html#projets',
    linkLabel: 'détails dans le portfolio'
  },
  stellantis: {
    name: 'Team Leader Logistique',
    context: 'Stellantis Trémery · 2002 à 2024',
    text: "22 ans en logistique automobile : encadrement d'équipes jusqu'à 25 personnes, animation terrain, gestion des aléas en flux tendu et support des équipes sur les outils métier.",
    tags: ["Management d'équipe", 'Logistique', 'Flux tendu', 'Reporting'],
    link: '',
    linkLabel: ''
  },
  recrutement: {
    name: 'Recrutement et intégration',
    context: 'Stellantis · mission transverse',
    text: "Participation au recrutement opérationnel : sourcing interne, entretiens de sélection, puis accompagnement des nouveaux embauchés jusqu'à l'autonomie sur le poste.",
    tags: ['Entretiens', 'Tutorat', 'Montée en compétences'],
    link: '',
    linkLabel: ''
  },
  lean: {
    name: 'Amélioration continue',
    context: 'Stellantis · Lean et ISO 9001',
    text: "Chantiers d'optimisation des flux : analyse de causes, standardisation des postes, pilotage de KPI et mesure des gains obtenus.",
    tags: ['Lean', 'ISO 9001', 'KPI', 'Standardisation'],
    link: '',
    linkLabel: ''
  },
  cattenom: {
    name: 'Agent Qualité Sûreté',
    context: 'Centrale nucléaire de Cattenom · 2001',
    text: 'Contrôle qualité et respect strict des procédures de sûreté dans un environnement critique, où aucun écart n\'est toléré.',
    tags: ['Contrôle qualité', 'Procédures', 'Sûreté'],
    link: '',
    linkLabel: ''
  },
  ck: {
    name: 'Analyse et suivi projet',
    context: 'Stage · CK Charles Kieffer, Luxembourg',
    text: "Recueil du besoin avec les équipes internes, spécifications de l'application d'enchères, suivi des tâches sous Jira et recette avec les utilisateurs avant mise à disposition.",
    tags: ['Recueil du besoin', 'Spécifications', 'Jira', 'Recette'],
    link: 'https://www.youtube.com/watch?v=fjJrTaBJ95k',
    linkLabel: 'démonstration vidéo'
  },
  russell: {
    name: 'Port de plaisance Russell',
    context: 'Projet de formation · architecture back-end',
    text: 'Gestion portuaire : API REST, authentification JWT, CRUD complet, séparation routes / services / modèles.',
    tags: ['Node.js', 'Express', 'MongoDB', 'JWT'],
    link: 'index.html#projets',
    linkLabel: 'détails dans le portfolio'
  }
};

const CONTRACTS = [
  { id: 'cdi', label: 'CDI', line: "Un CDI, c'est ce que je cherche en priorité : je veux m'installer dans une équipe et dans la durée." },
  { id: 'cdd', label: 'CDD', line: 'Un CDD me va très bien : je considère chaque mission comme une démonstration, pas comme un intérim.' },
  { id: 'alternance', label: 'Alternance / contrat pro', line: "Je suis déjà diplômé, mais si le cadre de l'alternance vous aide à sécuriser le recrutement, je suis ouvert à en parler." },
  { id: 'freelance', label: 'Mission freelance', line: 'Je facture déjà en tant que Web RG Est : je peux démarrer une mission freelance sans aucune formalité de votre côté.' },
  { id: 'stage', label: 'Test / période probatoire', line: "Vous hésitez ? Proposez-moi un test technique payé ou une courte période probatoire : je préfère être jugé sur du livré." }
];

const TIMINGS = {
  now: { label: 'le plus vite possible', line: 'Je suis disponible immédiatement, sans préavis à respecter.' },
  month: { label: 'dans le mois', line: 'Disponible immédiatement, donc largement dans vos délais.' },
  quarter: { label: 'dans le trimestre', line: "Disponible immédiatement : d'ici là je peux même prendre une première mission courte pour vous montrer ce que je vaux." },
  unknown: { label: 'selon le profil', line: 'Disponible immédiatement, aucun préavis, aucune contrainte de date de mon côté.' }
};

const state = { company: '', sector: '', needs: [], stack: [], contract: 'cdi', timing: 'now', step: 1 };

const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => Array.from(document.querySelectorAll(sel));

/* ---------- Construction des choix ---------- */

function buildChoices(container, items, { multi = true, max = null, groupSelector = null } = {}) {
  const groupActive = () => Array.from(document.querySelectorAll(groupSelector || '.__none__'));
  container.innerHTML = '';
  items.forEach((item) => {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'hm-choice';
    btn.dataset.id = item.id;
    if (item.level) btn.dataset.level = item.level;
    btn.innerHTML = `<span class="hm-choice-label">${item.label}</span>${item.hint ? `<span class="hm-choice-hint">${item.hint}</span>` : ''}<span class="hm-choice-tick" aria-hidden="true"></span>`;
    btn.setAttribute('aria-pressed', 'false');
    btn.addEventListener('click', () => {
      if (!multi) {
        Array.from(container.children).forEach((c) => {
          c.classList.remove('is-active');
          c.setAttribute('aria-pressed', 'false');
        });
        btn.classList.add('is-active');
        btn.setAttribute('aria-pressed', 'true');
        return;
      }
      const active = groupSelector ? groupActive() : Array.from(container.querySelectorAll('.is-active'));
      if (!btn.classList.contains('is-active') && max && active.length >= max) {
        active[0].classList.remove('is-active');
        active[0].setAttribute('aria-pressed', 'false');
      }
      btn.classList.toggle('is-active');
      btn.setAttribute('aria-pressed', btn.classList.contains('is-active') ? 'true' : 'false');
    });
    container.appendChild(btn);
  });
}

function selectedIds(container) {
  return Array.from(container.querySelectorAll('.is-active')).map((el) => el.dataset.id);
}

/* ---------- Navigation ---------- */

const STEP_NAMES = { 1: 'Votre entreprise', 2: 'Votre besoin', 3: 'Vos attentes', 4: 'Le cadre du poste' };

function goToStep(step) {
  state.step = step;
  $$('.hm-step').forEach((el) => {
    el.hidden = Number(el.dataset.step) !== step;
  });
  $('#stepNow').textContent = String(step);
  $('#stepName').textContent = STEP_NAMES[step];
  $('#progressFill').style.width = `${(step / 4) * 100}%`;
  $('#wizard').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

/* ---------- Score ---------- */

function computeScore(skillIds) {
  if (!skillIds.length) return null;
  const weights = { ok: 1, partial: 0.55, no: 0 };
  const total = skillIds.reduce((sum, id) => {
    const item = findSkill(id);
    return sum + (item ? weights[item.level] : 0);
  }, 0);
  return Math.round((total / skillIds.length) * 100);
}

/* ---------- Rendu du dossier ---------- */

function renderReport() {
  const company = state.company.trim();
  const companyLabel = company || 'votre entreprise';
  const needs = state.needs.length ? state.needs : ['renfort'];
  const needObjects = needs.map((id) => NEEDS.find((n) => n.id === id)).filter(Boolean);
  const score = computeScore(state.stack);

  $('#reportDate').textContent = new Date().toLocaleDateString('fr-FR', { day: '2-digit', month: 'long', year: 'numeric' });
  $('#reportTitle').textContent = company ? `Ce que je peux apporter à ${company}` : 'Ce que je peux vous apporter';
  $('#planCompany').textContent = company || 'vous';

  const families = needObjects.map((n) => n.family);
  const hasTerrain = families.includes('terrain');
  const hasTech = families.includes('tech');
  const hasAnalyse = families.includes('analyse');
  const identity = hasAnalyse
    ? 'Gilles Ruszczycki, analyste fonctionnel, 22 ans de métier et un profil de développeur'
    : hasTerrain && hasTech
      ? 'Gilles Ruszczycki, team leader et développeur web full stack'
      : hasTerrain
        ? 'Gilles Ruszczycki, team leader, 22 ans de terrain et d\'encadrement'
        : 'Gilles Ruszczycki, développeur web full stack';

  const sector = state.sector.trim();
  $('#reportSub').textContent = [
    identity,
    sector ? `dossier orienté ${sector}` : null,
    `disponibilité : ${TIMINGS[state.timing].label}`
  ].filter(Boolean).join(' · ');

  // Score
  const scoreValue = $('#scoreValue');
  const arc = $('#scoreArc');
  const circumference = 2 * Math.PI * 52;
  arc.style.strokeDasharray = String(circumference);
  if (score === null) {
    scoreValue.textContent = '0%';
    arc.style.strokeDashoffset = String(circumference);
  } else {
    scoreValue.textContent = `${score}%`;
    arc.style.strokeDashoffset = String(circumference * (1 - score / 100));
  }

  // Besoin / réponse
  $('#answerGrid').innerHTML = needObjects.map((need) => `
    <article class="hm-answer">
      <p class="hm-answer-need">${need.label}</p>
      <p class="hm-answer-text">${need.answer}</p>
      <p class="hm-answer-deliverable"><span>Premier livrable</span>${need.deliverable}</p>
    </article>
  `).join('');

  // Preuves
  const proofIds = [];
  needObjects.forEach((need) => need.projects.forEach((id) => {
    if (!proofIds.includes(id)) proofIds.push(id);
  }));
  $('#proofGrid').innerHTML = proofIds.slice(0, 6).map((id) => {
    const p = PROJECTS[id];
    const external = p.link.startsWith('http');
    const link = p.link
      ? `<a class="hm-proof-link" href="${p.link}"${external ? ' target="_blank" rel="noopener noreferrer"' : ''}>${p.linkLabel}</a>`
      : '';
    return `
      <article class="hm-proof">
        <div class="hm-proof-head">
          <h4>${p.name}</h4>
          <span class="hm-proof-context">${p.context}</span>
        </div>
        <p>${p.text}</p>
        <ul class="hm-tags">${p.tags.map((t) => `<li>${t}</li>`).join('')}</ul>
        ${link}
      </article>
    `;
  }).join('');

  // Plan 30 jours
  const planFirst = needObjects.slice(0, 3);
  const planLater = needObjects.slice(3);
  const planSteps = [
    'Semaine 1 : comprendre votre métier avant de proposer quoi que ce soit. Je vais sur le terrain, je pose des questions, je documente ce que je découvre.',
    ...planFirst.map((need, i) => `Semaine ${i + 2} : ${need.plan[0]}`),
    ...planLater.map((need, i) => (i === 0 ? `Ensuite, dans l'ordre que vous fixez : ${need.plan[0]}` : need.plan[0])),
    hasTech
      ? 'Puis chaque semaine : livrer quelque chose de visible, en pull request relue, et signaler tôt ce qui coince.'
      : hasAnalyse
        ? 'Puis chaque semaine : un livrable écrit et validé par le métier, et les difficultés annoncées tôt plutôt que découvertes en recette.'
        : 'Puis chaque semaine : un point court, un résultat mesuré et les difficultés annoncées tôt plutôt que découvertes tard.'
  ];
  $('#planList').innerHTML = planSteps.map((s) => `<li>${s}</li>`).join('');

  // Match / écarts
  const chosen = state.stack.map((id) => findSkill(id)).filter(Boolean);
  const okList = chosen.filter((s) => s.level === 'ok');
  const gapList = chosen.filter((s) => s.level !== 'ok');

  $('#matchList').innerHTML = okList.length
    ? okList.map((s) => `<li>${s.label}</li>`).join('')
    : "<li>Vous n'avez rien coché : mon socle technique est React, Next.js, Node.js, Express, SQL et Docker, et mon socle terrain est l'encadrement d'équipe et l'organisation des flux.</li>";

  $('#gapList').innerHTML = gapList.length
    ? gapList.map((s) => `<li><strong>${s.label}</strong>${s.level === 'partial' ? ' <em>(notions)</em>' : ''}</li>`).join('')
    : "<li>Rien à signaler sur ce que vous avez coché.</li>";

  $('#gapNote').textContent = gapList.length
    ? gapList.map((s) => STACK_GAP_PLAN[s.id]).filter(Boolean).join(' ')
    : "Je préfère annoncer mes limites que les découvrir en réunion. Sur ce que vous avez coché, je n'ai rien à cacher.";

  // Conclusion
  const contract = CONTRACTS.find((c) => c.id === state.contract) || CONTRACTS[0];
  $('#footTitle').textContent = company ? `${company} et moi, la suite` : 'La suite';
  $('#footText').textContent = `${contract.line} ${TIMINGS[state.timing].line} Un échange de trente minutes suffit pour voir si ça colle, et je peux venir avec un cas concret préparé sur votre contexte.`;

  syncUrl();
}

/* ---------- URL partageable ---------- */

function syncUrl() {
  const params = new URLSearchParams();
  if (state.company) params.set('c', state.company);
  if (state.sector) params.set('s', state.sector);
  if (state.needs.length) params.set('n', state.needs.join(','));
  if (state.stack.length) params.set('t', state.stack.join(','));
  params.set('k', state.contract);
  params.set('d', state.timing);
  const url = `${location.pathname}?${params.toString()}`;
  history.replaceState(null, '', url);
}

function readUrl() {
  const params = new URLSearchParams(location.search);
  if (![...params.keys()].length) return false;
  state.company = params.get('c') || '';
  state.sector = params.get('s') || '';
  state.needs = (params.get('n') || '').split(',').filter((id) => NEEDS.some((n) => n.id === id));
  state.stack = (params.get('t') || '').split(',').filter((id) => Boolean(findSkill(id)));
  const k = params.get('k');
  if (CONTRACTS.some((c) => c.id === k)) state.contract = k;
  const d = params.get('d');
  if (TIMINGS[d]) state.timing = d;
  return true;
}

/* ---------- Compilation animée ---------- */

function runCompile(done) {
  const company = state.company.trim() || 'votre entreprise';
  const lines = [
    '$ hireme build --target="' + company + '"',
    '→ lecture du besoin exprimé…',
    '→ recherche des projets comparables dans le portfolio…',
    '→ calcul de la correspondance (sans arrondi flatteur)…',
    '→ rédaction du plan des 30 premiers jours…',
    '→ vérification honnêteté : écarts de compétences inclus ✔',
    'dossier prêt. bonne lecture.'
  ];
  const body = $('#terminalBody');
  body.textContent = '';
  $('#compile').hidden = false;
  $('#compile').scrollIntoView({ behavior: 'smooth', block: 'center' });

  let i = 0;
  const tick = () => {
    if (i >= lines.length) {
      window.setTimeout(done, 420);
      return;
    }
    body.textContent += (i ? '\n' : '') + lines[i];
    i += 1;
    window.setTimeout(tick, 320);
  };
  window.setTimeout(tick, 200);
}

/* ---------- Actions du dossier ---------- */

function buildMailto() {
  const company = state.company.trim() || 'notre entreprise';
  const needObjects = (state.needs.length ? state.needs : ['renfort'])
    .map((id) => NEEDS.find((n) => n.id === id))
    .filter(Boolean);
  const needLabels = needObjects.map((n) => n.label.toLowerCase());
  const familyOf = (f) => needObjects.length > 0 && needObjects.every((n) => n.family === f);
  const role = familyOf('analyse')
    ? 'analyste fonctionnel'
    : familyOf('terrain')
      ? 'profil terrain et organisation'
      : 'développeur full stack';
  const subject = `Entretien, ${role}, pour ${company}`;
  const body = [
    'Bonjour Gilles,',
    '',
    `J'ai généré votre dossier de candidature pour ${company}.`,
    `Notre besoin : ${needLabels.join(' et ')}.`,
    '',
    'Je vous propose un échange :',
    '- date souhaitée : ',
    '- format (visio / sur site) : ',
    '',
    `Lien du dossier généré : ${location.href}`,
    '',
    'Cordialement,'
  ].join('\n');
  return `mailto:gilles.dev57@outlook.fr?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

function showReport() {
  $('#report').hidden = false;
  $('#report').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

/* ---------- Initialisation ---------- */

document.addEventListener('DOMContentLoaded', () => {
  $('#year').textContent = String(new Date().getFullYear());

  const needChoices = $('#needChoices');
  const needAnalystChoices = $('#needAnalystChoices');
  const needFieldChoices = $('#needFieldChoices');
  const stackChoices = $('#stackChoices');
  const analystChoices = $('#analystChoices');
  const fieldChoices = $('#fieldChoices');
  const contractChoices = $('#contractChoices');
  const needGroups = [needChoices, needAnalystChoices, needFieldChoices];
  const skillGroups = [stackChoices, analystChoices, fieldChoices];
  const findIn = (groups, id) => groups.reduce((found, g) => found || g.querySelector(`[data-id="${id}"]`), null);

  buildChoices(needChoices, NEEDS.filter((n) => n.family === 'tech'), { multi: true });
  buildChoices(needAnalystChoices, NEEDS.filter((n) => n.family === 'analyse'), { multi: true });
  buildChoices(needFieldChoices, NEEDS.filter((n) => n.family === 'terrain'), { multi: true });
  buildChoices(stackChoices, STACK, { multi: true });
  buildChoices(analystChoices, ANALYST_SKILLS, { multi: true });
  buildChoices(fieldChoices, FIELD_SKILLS, { multi: true });
  buildChoices(contractChoices, CONTRACTS, { multi: false });
  contractChoices.firstElementChild.classList.add('is-active');
  contractChoices.firstElementChild.setAttribute('aria-pressed', 'true');

  $('#startBtn').addEventListener('click', () => {
    $('#wizard').hidden = false;
    goToStep(1);
    $('#companyInput').focus();
  });

  $$('[data-next]').forEach((btn) => btn.addEventListener('click', () => {
    const next = Number(btn.dataset.next);
    if (next === 2) {
      state.company = $('#companyInput').value;
      state.sector = $('#sectorInput').value;
    }
    if (next === 3) state.needs = needGroups.flatMap((g) => selectedIds(g));
    if (next === 4) state.stack = skillGroups.flatMap((g) => selectedIds(g));
    goToStep(next);
  }));

  $$('[data-prev]').forEach((btn) => btn.addEventListener('click', () => goToStep(Number(btn.dataset.prev))));

  $('#companyInput').addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      $('#sectorInput').focus();
    }
  });

  $('#generateBtn').addEventListener('click', () => {
    state.contract = selectedIds(contractChoices)[0] || 'cdi';
    state.timing = $('#timingSelect').value;
    $('#wizard').hidden = true;
    renderReport();
    runCompile(showReport);
  });

  $('#mailBtn').addEventListener('click', () => {
    window.location.href = buildMailto();
  });

  $('#printBtn').addEventListener('click', () => window.print());

  $('#copyBtn').addEventListener('click', async (e) => {
    const btn = e.currentTarget;
    const label = btn.textContent;
    try {
      await navigator.clipboard.writeText(location.href);
      btn.textContent = 'Lien copié';
    } catch {
      btn.textContent = location.href;
    }
    window.setTimeout(() => {
      btn.textContent = label;
    }, 2200);
  });

  $('#restartBtn').addEventListener('click', () => {
    $('#report').hidden = true;
    $('#compile').hidden = true;
    $('#wizard').hidden = false;
    goToStep(1);
  });

  // Dossier partagé par URL : on l'affiche directement.
  if (readUrl()) {
    $('#companyInput').value = state.company;
    $('#sectorInput').value = state.sector;
    state.needs.forEach((id) => {
      const el = findIn(needGroups, id);
      if (el) {
        el.classList.add('is-active');
        el.setAttribute('aria-pressed', 'true');
      }
    });
    state.stack.forEach((id) => {
      const el = findIn(skillGroups, id);
      if (el) {
        el.classList.add('is-active');
        el.setAttribute('aria-pressed', 'true');
      }
    });
    $$('#contractChoices .hm-choice').forEach((el) => {
      const active = el.dataset.id === state.contract;
      el.classList.toggle('is-active', active);
      el.setAttribute('aria-pressed', active ? 'true' : 'false');
    });
    $('#timingSelect').value = state.timing;
    renderReport();
    $('#intro').hidden = true;
    $('#report').hidden = false;
  }
});
