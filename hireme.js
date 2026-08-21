/* Le CV qui postule à votre place — logique de génération du dossier.
   Tout est calculé côté navigateur, aucune donnée n'est envoyée. */

const NEEDS = [
  {
    id: 'vitrine',
    label: 'Un site vitrine qui inspire confiance',
    hint: 'image de marque, SEO, mobile',
    answer: "Je conçois et je mets en production des sites vitrines complets : structure des pages, rédaction technique du contenu, référencement, performances et responsive. C'est le cœur de mon activité Web RG Est.",
    deliverable: 'Une première version en ligne, visitable, en 2 à 3 semaines',
    projects: ['webrgest', 'oliwood'],
    plan: ["Auditer l'existant (pages, SEO, performances, mobile) et livrer une liste de correctifs priorisés"]
  },
  {
    id: 'ecommerce',
    label: 'Vendre en ligne (catalogue, panier, paiement)',
    hint: 'Stripe, stocks, livraison',
    answer: "J'ai développé et mis en production une boutique complète : catalogue, panier, paiement Stripe, gestion des commandes et livraison multi-pays. Je connais les pièges (TVA, webhooks de paiement, états de commande).",
    deliverable: 'Un tunnel de commande testable en environnement de recette',
    projects: ['burovia'],
    plan: ['Cartographier le tunnel de commande et sécuriser les webhooks de paiement']
  },
  {
    id: 'backoffice',
    label: 'Un back-office ou un dashboard métier',
    hint: 'CRUD, rôles, données',
    answer: "Je construis des interfaces d'administration lisibles : CRUD complet, formulaires métier, gestion des rôles et des accès, tableaux de bord. J'y ajoute ce que les utilisateurs demandent toujours : recherche, filtres et export.",
    deliverable: 'Un premier écran d\'administration fonctionnel branché sur vos données',
    projects: ['greenbin', 'auction', 'oliwood'],
    plan: ['Modéliser les données et livrer un premier écran d\'administration branché sur la base réelle']
  },
  {
    id: 'api',
    label: 'Une API et des intégrations',
    hint: 'REST, authentification, services tiers',
    answer: 'Je structure des API REST Node.js / Express : routes, services, modèles, authentification JWT et séparation claire des responsabilités. Je documente les endpoints pour que le front et les partenaires ne devinent rien.',
    deliverable: 'Des endpoints documentés et testables sous Postman',
    projects: ['russell', 'artisan', 'burovia'],
    plan: ['Documenter les endpoints existants puis livrer une première route de bout en bout, tests Postman inclus']
  },
  {
    id: 'realtime',
    label: 'Du temps réel (live, notifications)',
    hint: 'WebSocket, mises à jour instantanées',
    answer: "Pendant mon stage au Luxembourg, j'ai développé une application d'enchères internes en temps réel : WebSocket, mises à jour instantanées pour tous les participants et interface d'administration.",
    deliverable: 'Un prototype temps réel démontrable en réunion',
    projects: ['auction'],
    plan: ['Isoler le flux temps réel et démontrer une mise à jour instantanée sur un cas métier réel']
  },
  {
    id: 'automation',
    label: 'Automatiser des tâches répétitives',
    hint: 'n8n, scripts, workflows',
    answer: "Je monte des workflows n8n et des scripts pour supprimer la saisie manuelle : formulaires vers CRM, relances, génération de documents, synchronisations. Mes 22 ans en industrie me font chercher le gaspillage avant d'écrire du code.",
    deliverable: 'Un workflow en production qui supprime une tâche manuelle identifiée',
    projects: ['webrgest', 'greenbin'],
    plan: ['Chronométrer une tâche manuelle de l\'équipe et automatiser la plus coûteuse']
  },
  {
    id: 'refonte',
    label: 'Refondre ou accélérer un site existant',
    hint: 'performance, SEO, dette technique',
    answer: "Je reprends des bases existantes sans tout casser : mesure d'abord (performances, SEO, accessibilité), corrections priorisées ensuite, refonte progressive écran par écran.",
    deliverable: 'Un rapport de mesures et les premiers gains visibles',
    projects: ['webrgest', 'artisan'],
    plan: ['Mesurer avant de toucher : performances, SEO, accessibilité, puis corriger par ordre de gain']
  },
  {
    id: 'renfort',
    label: "Renforcer l'équipe au quotidien",
    hint: 'features, correctifs, revue de code',
    answer: "Je travaille par branches et pull requests, je commente mes choix et je demande une revue. J'ai été formé et j'ai travaillé exactement comme ça en stage : petites features, correctifs, intégration progressive.",
    deliverable: 'Mes premières pull requests mergées dans la semaine',
    projects: ['auction', 'greenbin'],
    plan: ['Prendre les tickets que personne n\'a le temps de traiter et livrer mes premières pull requests']
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
  python: 'Python : niveau scripts et automatisation, pas encore de back-end livré.'
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

function buildChoices(container, items, { multi = true, max = null } = {}) {
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
      const active = Array.from(container.querySelectorAll('.is-active'));
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

const STEP_NAMES = { 1: 'Votre entreprise', 2: 'Votre besoin', 3: 'Votre stack', 4: 'Le cadre du poste' };

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

function computeScore(stackIds) {
  if (!stackIds.length) return null;
  const weights = { ok: 1, partial: 0.55, no: 0 };
  const total = stackIds.reduce((sum, id) => {
    const item = STACK.find((s) => s.id === id);
    return sum + (item ? weights[item.level] : 0);
  }, 0);
  return Math.round((total / stackIds.length) * 100);
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

  const sector = state.sector.trim();
  $('#reportSub').textContent = [
    'Gilles Ruszczycki, développeur web full stack',
    sector ? `dossier orienté ${sector}` : null,
    `disponibilité : ${TIMINGS[state.timing].label}`
  ].filter(Boolean).join(' · ');

  // Score
  const scoreValue = $('#scoreValue');
  const arc = $('#scoreArc');
  const circumference = 2 * Math.PI * 52;
  arc.style.strokeDasharray = String(circumference);
  if (score === null) {
    scoreValue.textContent = '—';
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
  $('#proofGrid').innerHTML = proofIds.slice(0, 4).map((id) => {
    const p = PROJECTS[id];
    const external = p.link.startsWith('http');
    return `
      <article class="hm-proof">
        <div class="hm-proof-head">
          <h4>${p.name}</h4>
          <span class="hm-proof-context">${p.context}</span>
        </div>
        <p>${p.text}</p>
        <ul class="hm-tags">${p.tags.map((t) => `<li>${t}</li>`).join('')}</ul>
        <a class="hm-proof-link" href="${p.link}"${external ? ' target="_blank" rel="noopener noreferrer"' : ''}>${p.linkLabel}</a>
      </article>
    `;
  }).join('');

  // Plan 30 jours
  const planSteps = [
    "Semaine 1 : comprendre votre métier avant votre code. Je lis, je pose des questions, je documente ce que je découvre.",
    ...needObjects.map((need, i) => `Semaine ${i + 2} : ${need.plan[0]}`),
    "Puis chaque semaine : livrer quelque chose de visible, en pull request relue, et signaler tôt ce qui coince."
  ];
  $('#planList').innerHTML = planSteps.map((s) => `<li>${s}</li>`).join('');

  // Match / écarts
  const chosen = state.stack.map((id) => STACK.find((s) => s.id === id)).filter(Boolean);
  const okList = chosen.filter((s) => s.level === 'ok');
  const gapList = chosen.filter((s) => s.level !== 'ok');

  $('#matchList').innerHTML = okList.length
    ? okList.map((s) => `<li>${s.label}</li>`).join('')
    : '<li>Vous n\'avez pas précisé de technologie : mon socle est React, Next.js, Node.js, Express, SQL et Docker.</li>';

  $('#gapList').innerHTML = gapList.length
    ? gapList.map((s) => `<li><strong>${s.label}</strong>${s.level === 'partial' ? ' <em>(notions)</em>' : ''}</li>`).join('')
    : '<li>Rien à signaler sur les technologies que vous avez cochées.</li>';

  $('#gapNote').textContent = gapList.length
    ? gapList.map((s) => STACK_GAP_PLAN[s.id]).filter(Boolean).join(' ')
    : "Je préfère annoncer mes limites que les découvrir en réunion. Sur les technologies cochées, je n'ai rien à cacher.";

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
  state.stack = (params.get('t') || '').split(',').filter((id) => STACK.some((s) => s.id === id));
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
    '→ calcul de la correspondance technique (sans arrondi flatteur)…',
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
  const needLabels = (state.needs.length ? state.needs : ['renfort'])
    .map((id) => NEEDS.find((n) => n.id === id))
    .filter(Boolean)
    .map((n) => n.label.toLowerCase());
  const subject = `Entretien - développeur full stack pour ${company}`;
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
  const stackChoices = $('#stackChoices');
  const contractChoices = $('#contractChoices');

  buildChoices(needChoices, NEEDS, { multi: true, max: 2 });
  buildChoices(stackChoices, STACK, { multi: true });
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
    if (next === 3) state.needs = selectedIds(needChoices);
    if (next === 4) state.stack = selectedIds(stackChoices);
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
      const el = needChoices.querySelector(`[data-id="${id}"]`);
      if (el) {
        el.classList.add('is-active');
        el.setAttribute('aria-pressed', 'true');
      }
    });
    state.stack.forEach((id) => {
      const el = stackChoices.querySelector(`[data-id="${id}"]`);
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
