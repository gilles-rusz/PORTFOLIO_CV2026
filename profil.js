const VERSIONS = {
  hybride: {
    name: 'Hybride',
    crumb: 'Logistique & Développement',
    title: 'Profil Hybride : Team Leader Logistique Lean & Développeur Full-Stack',
    box: ['Profil hybride', 'Logistique <em>×</em> Développement'],
    price: 'Sur devis / Disponible immédiatement',
    cv: 'assets/cv/CV_Gilles_Ruszczycki_Profil_Complet.pdf',
    calc: true,
    features: [
      ['⚙️', 'Optimisation des process', 'Amélioration continue, Lean management, KPI, efficacité opérationnelle.'],
      ['</>', 'Développement web full stack', 'Front et back, React, Next.js, Node.js, SQL, outils sur mesure.'],
      ['📍', 'Réseau : Grand Est / Luxembourg / Remote', 'Disponible sur site, en télétravail ou en mission.']
    ],
    description: [
      "Un profil rare : 22 ans d'industrie chez Stellantis, dont 13 ans de Team Leader Logistique, et un titre de développeur web full stack obtenu en 2025.",
      "Je connais le terrain, ses flux, ses équipes et ses indicateurs, et je sais construire les outils numériques qui le simplifient : tableaux de bord, suivi des actions, automatisations.",
      "Idéal pour un poste de team leader, de coordinateur logistique ou de digitalisation des opérations."
    ]
  },
  logistique: {
    name: 'Logistique',
    crumb: 'Logistique & Lean',
    title: 'Team Leader Logistique : Management d\u2019équipe, Lean & amélioration des process',
    box: ['Team Leader', 'Logistique <em>×</em> Lean'],
    price: 'Sur devis / Disponible immédiatement',
    cv: 'assets/cv/CV_Gilles_Ruszczycki_Responsable_Logistique_ATS.pdf',
    calc: true,
    features: [
      ['👥', 'Management d\u2019équipe', '13 ans de management chez Stellantis, équipes jusqu\u2019à 25 personnes : plannings, absences, polyvalence et habilitations.'],
      ['📈', 'Lean & performance', 'PDCA, 5 pourquoi, 5S, standardisation, suivi des KPI qualité et sécurité.'],
      ['🧩', 'Digitalisation des process', 'Mon application de rituel terrain SQCDP, en ligne et testable, et des outils de suivi que je développe moi-même.']
    ],
    description: [
      "Team Leader Logistique chez Stellantis de 2012 à 2025, sur un site certifié ISO 9001, ISO 14001 et IATF 16949, avec des équipes jusqu\u2019à 25 personnes.",
      "Organisation du travail, approvisionnement des lignes, régulation du stock (correction des écarts, ajout ou retrait de palettes et de pièces), plannings et rotation des postes, habilitations des opérateurs, sécurité, qualité, formation des nouveaux et amélioration continue au quotidien.",
      "Ma touche en plus : je transforme les besoins du terrain en outils numériques simples, pour fiabiliser le suivi et gagner du temps."
    ]
  },
  dev: {
    name: 'Développeur',
    crumb: 'Développement web',
    title: 'Développeur Web Full Stack : React, Next.js, Node.js & SQL',
    box: ['Développeur', 'Full stack <em>×</em> Web RG Est'],
    price: 'Sur devis / Disponible immédiatement',
    cv: 'assets/cv/CV_Gilles_Ruszczycki_Developpeur_Web_Full_Stack_ATS.pdf',
    features: [
      ['</>', 'Stack moderne', 'React, Next.js, TypeScript, Node.js, Express, PostgreSQL, MySQL, Prisma.'],
      ['🚀', 'Projets livrés en production', 'Oli\u2019Wood, Burovia, Web RG Est : en ligne et utilisés.'],
      ['🛠️', 'Outils métier & automatisation', 'Back-offices, tableaux de bord, n8n, Git, Docker, Vercel.']
    ],
    description: [
      "Titre professionnel Développeur Web et Web Mobile (Bac+2, 2025), stage chez CK Charles Kieffer Group au Luxembourg, puis création de Web RG Est.",
      "Je conçois et livre des sites et applications de A à Z : besoin du client, maquette, développement, mise en ligne et maintenance.",
      "Mon atout : 22 ans en entreprise, donc des outils pensés pour les utilisateurs réels, pas seulement pour la démo."
    ]
  }
};

const ALL = ['hybride', 'logistique', 'dev'];
const LOG = ['hybride', 'logistique'];
const WEB = ['hybride', 'dev'];

const PROJECTS = [
  { v: ALL, id: 'lean-app', cat: 'outil', title: 'Web RG Est / Logistique', img: 'assets/img/lean-app-cover.jpg', text: "Mon application de rituel terrain : tableau kanban, rituel SQCDP de 5 minutes, plan d'actions et KPI automatiques. Pensée pour le mobile.", tags: ['Lean', 'SQCDP', 'Next.js'], url: 'https://webrgest-logistique.vercel.app', label: "Tester l'application" },
  { v: LOG, id: 'kanban', cat: 'lean', title: 'Tournée kanban optimisée', img: 'assets/img/lean-kanban.svg', text: "Participation au chantier : fusion de deux chariots kanban en un, tournée maintenue sous une heure, charge de l'opérateur équilibrée au Yamazumi, pièces passées du picking au stock sol, chasse aux muda pour réduire le temps de livraison.", tags: ['Kanban', 'Yamazumi', 'Muda'] },
  { v: LOG, id: 'tri', cat: 'lean', title: 'Zone de tri au retour des kanbans', img: 'assets/img/lean-tri.svg', text: "Réaménagement de la zone : tri des emballages vides (vides spécifiques comme les contenants de soupapes, bacs GEFCO) et des déchets (PP, PF), sens de circulation revus pour que trains kanban et caristes ne se croisent plus.", tags: ['Réaménagement', 'Sécurité', 'Flux'] },
  { v: LOG, id: 'stock-dw', cat: 'lean', title: 'Rapatriement du stock moteur DW', img: 'assets/img/lean-stock.svg', text: "Participation au grand chantier de transfert du stock moteur DW dans notre bâtiment, avec compactage de tout notre stock pour faire la place.", tags: ['Stock', 'Implantation', 'Chantier'] },
  { v: LOG, id: 'polyvalence', cat: 'lean', title: 'Polyvalence, habilitations et plannings', img: 'assets/img/lean-polyvalence.svg', text: "Suivi de qui est formé à quel poste dans un tableau Excel, pour bâtir les plannings et faire tourner les opérateurs afin de limiter les TMS. Gestion des imprévus et des absences. Habilitation au poste validée avec l'opérateur (standard, fiche sécurité, fiche qualité) et signée, revue régulièrement, avec des audits surprises sur le respect des bonnes pratiques.", tags: ['Polyvalence', 'Habilitations', 'Prévention TMS'] },
  { v: LOG, id: 'kaizen', cat: 'lean', title: 'Kaizen, 5S et standards', img: 'assets/img/lean-kaizen.svg', text: "Chantiers Kaizen, analyses 5 pourquoi, standards 5S et standards de poste rédigés, puis appliqués et suivis avec l'équipe, la sécurité en premier.", tags: ['Kaizen', '5S', 'Standards'] },
  { v: WEB, id: 'oliwood', cat: 'client', title: "Oli'Wood", img: 'assets/img/oliwood-accueil.jpg', text: "Site livré pour une entreprise de charpente du Jura : réalisations, devis en ligne, back-office.", tags: ['Next.js', 'Prisma', 'PostgreSQL'], url: 'https://oliwood-jura.fr', label: 'Voir le site' },
  { v: WEB, id: 'oliwood-noel', cat: 'client', title: "Oli'Wood, thème de Noël", img: 'assets/img/oliwood-noel-accueil.jpg', text: "Décorations saisonnières activables en un clic depuis l'administration.", tags: ['Back-office', 'Thèmes'], url: 'https://oliwood-jura.fr', label: 'Voir le site' },
  { v: WEB, id: 'webrgest', cat: 'client', title: 'Web RG Est', img: 'assets/img/webrgest-cover.png', text: "Mon activité de création web et solutions digitales : site vitrine, SEO, blog.", tags: ['Next.js', 'Tailwind', 'SEO'], url: 'https://webrgest.fr', label: 'Voir le site' },
  { v: WEB, id: 'burovia', cat: 'client', title: 'Burovia', img: 'assets/img/burovia-cover.png', text: "E-commerce d'accessoires de télétravail : catalogue, panier, paiement Stripe.", tags: ['React', 'Node.js', 'Stripe'], url: 'https://burovia.eu', label: 'Voir le site' },
  { v: WEB, id: 'auction', cat: 'pro', title: 'Auction Showcase (stage CK)', img: 'assets/img/auction-cover.png', text: "Enchères internes en temps réel avec authentification Azure.", tags: ['Node.js', 'WebSocket', 'MySQL'], url: 'https://www.youtube.com/watch?v=fjJrTaBJ95k', label: 'Démo vidéo' },
  { v: WEB, id: 'greenbin', cat: 'formation', title: 'GreenBin', img: 'assets/img/greenbin-dashboard.png', text: "Dashboard de gestion des déchets avec rôles et utilisateurs.", tags: ['React', 'Express', 'Docker'], url: 'index.html#projets', label: 'Détails' },
  { v: WEB, id: 'artisan', cat: 'formation', title: 'Trouve Ton Artisan', img: 'assets/img/artisan-home-desktop.png', text: "Recherche d'artisans responsive, fiches détaillées et contact.", tags: ['React', 'Sequelize', 'MySQL'], url: 'index.html#projets', label: 'Détails' },
  { v: WEB, id: 'russell', cat: 'formation', title: 'Port de plaisance Russell', img: 'assets/img/russell-cover-v71.jpg', text: "API REST de gestion portuaire avec JWT et CRUD complet.", tags: ['Node.js', 'MongoDB', 'JWT'], url: 'index.html#projets', label: 'Détails' }
];

const FILTERS = [['all', 'Tous'], ['lean', 'Chantiers Lean'], ['outil', 'Outil terrain'], ['client', 'En ligne'], ['pro', 'Stage'], ['formation', 'Formation']];

const projects = () => PROJECTS.filter((p) => p.v.includes(current));
const projLink = (p, cls) => p.url ? `<a class="sh-btn ${cls} sh-btn-inline" href="${p.url}"${external(p.url)}>${esc(p.label)}</a>` : '';

const $ = (id) => document.getElementById(id);
const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const external = (url) => /^https?:/.test(url) ? ' target="_blank" rel="noopener noreferrer"' : '';

let current = 'hybride';
let selection = [];
try { selection = JSON.parse(localStorage.getItem('profilSelection') || '[]'); } catch { selection = []; }

function renderVariants() {
  $('variants').innerHTML = Object.entries(VERSIONS).map(([key, v]) =>
    `<button type="button" role="radio" class="sh-variant" data-v="${key}" aria-checked="${key === current}">
       <strong>${esc(v.name)}</strong><span>CV PDF inclus</span>
     </button>`).join('');
  $('variants').querySelectorAll('.sh-variant').forEach((b) => b.addEventListener('click', () => setVersion(b.dataset.v)));
}

function setVersion(key) {
  if (!VERSIONS[key]) key = 'hybride';
  current = key;
  const v = VERSIONS[key];
  $('pTitle').textContent = v.title;
  $('crumbVersion').textContent = v.crumb;
  $('variantName').textContent = v.name;
  $('boxTitle').textContent = v.box[0];
  $('boxSub').innerHTML = v.box[1];
  $('pPrice').textContent = v.price;
  $('cvBtn').href = v.cv;
  $('cvBtn').textContent = `Télécharger le CV ${v.name.toLowerCase()}`;
  $('pFeatures').innerHTML = v.features.map(([ic, t, d]) =>
    `<li><span class="sh-fic">${esc(ic)}</span><div><strong>${esc(t)}</strong><p>${esc(d)}</p></div></li>`).join('');
  $('pDescription').innerHTML = v.description.map((p) => `<p>${esc(p)}</p>`).join('') +
    `<p><a class="sh-link" href="${v.cv}" target="_blank" rel="noopener noreferrer">Ouvrir le CV ${esc(v.name.toLowerCase())} en PDF</a></p>`;
  renderVariants();
  updateAddBtn();
  renderThumbs();
  showStage('box');
  renderCards();
  $('calcTab').hidden = !v.calc;
  $('calcBtn').hidden = !v.calc;
  if (!v.calc && $('calcTab').getAttribute('aria-selected') === 'true') openTab('description');
  const url = new URL(location.href);
  url.searchParams.set('version', key);
  history.replaceState(null, '', url);
}

function renderThumbs() {
  const list = projects();
  const items = [{ id: 'box', title: 'Profil', img: 'assets/img/portrait.webp' }, ...list.slice(0, 6)];
  $('thumbs').innerHTML = items.map((p, i) =>
    `<li><button type="button" class="sh-thumb" data-id="${p.id}" aria-pressed="${i === 0}" aria-label="${esc(p.title)}">
       <img src="${p.img}" alt="" loading="lazy"></button></li>`).join('') +
    (list.length > 6 ? `<li><a class="sh-thumb sh-thumb-more" href="#onglets" data-tab-link="projets" aria-label="Voir tous les projets">+${list.length - 6}</a></li>` : '');
  bindTabLinks($('thumbs'));
  $('thumbs').querySelectorAll('button.sh-thumb').forEach((b) => {
    b.addEventListener('click', () => showStage(b.dataset.id));
    b.addEventListener('mouseenter', () => { if (matchMedia('(hover: hover)').matches) showStage(b.dataset.id); });
  });
}

function showStage(id) {
  $('thumbs').querySelectorAll('button.sh-thumb').forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.id === id)));
  const p = PROJECTS.find((x) => x.id === id);
  $('boxView').hidden = !!p;
  $('shotView').hidden = !p;
  $('zoomHint').textContent = p ? 'Cliquez sur l\u2019image pour l\u2019agrandir' : 'Cliquez sur une vignette pour voir mes projets';
  if (!p) return;
  $('shotImg').src = p.img;
  $('shotImg').alt = `Capture du projet ${p.title}`;
  $('shotTitle').textContent = p.title;
  $('shotText').textContent = p.text;
  $('shotLinks').innerHTML = `${projLink(p, 'sh-btn-orange')}
    <a class="sh-btn sh-btn-line sh-btn-inline" href="#onglets" data-tab-link="projets">Tous les projets</a>`;
  bindTabLinks($('shotLinks'));
}

function renderCards(filter = 'all', query = '') {
  const q = query.trim().toLowerCase();
  const all = projects();
  const list = all.filter((p) => (filter === 'all' || p.cat === filter) &&
    (!q || [p.title, p.text, ...p.tags].join(' ').toLowerCase().includes(q)));
  $('projCount').textContent = `(${all.length})`;
  $('filters').innerHTML = FILTERS.filter(([k]) => k === 'all' || all.some((p) => p.cat === k)).map(([k, l]) =>
    `<button type="button" class="sh-chip" data-f="${k}" aria-pressed="${k === filter}">${l}</button>`).join('') +
    (q ? `<span class="sh-query">Résultats pour « ${esc(query)} » <button type="button" id="clearQuery">effacer</button></span>` : '');
  $('filters').querySelectorAll('.sh-chip').forEach((b) => b.addEventListener('click', () => renderCards(b.dataset.f, query)));
  const clear = $('clearQuery');
  if (clear) clear.addEventListener('click', () => { $('searchInput').value = ''; renderCards(filter); });
  $('cards').innerHTML = list.length ? list.map((p) =>
    `<article class="sh-card">
       <button type="button" class="sh-card-img" data-zoom="${p.img}" aria-label="Agrandir ${esc(p.title)}"><img src="${p.img}" alt="Capture du projet ${esc(p.title)}" loading="lazy"></button>
       <div class="sh-card-body">
         <h3>${esc(p.title)}</h3>
         <p class="sh-stars-sm" aria-hidden="true">★★★★★</p>
         <p>${esc(p.text)}</p>
         <p class="sh-tags">${p.tags.map((t) => `<span>${esc(t)}</span>`).join('')}</p>
         ${projLink(p, 'sh-btn-yellow')}
       </div>
     </article>`).join('') : '<p class="sh-empty">Aucun projet ne correspond. Essayez « Lean », « Kanban » ou « React ».</p>';
  $('cards').querySelectorAll('[data-zoom]').forEach((b) => b.addEventListener('click', () => openLightbox(b.dataset.zoom)));
}

const nf = (n, d = 0) => n.toLocaleString('fr-FR', { maximumFractionDigits: d });

function initCalc() {
  const ids = ['cOps', 'cMin', 'cDays', 'cRate', 'cPct'];
  const update = () => {
    const [ops, min, days, rate, pct] = ids.map((id) => Math.max(0, parseFloat($(id).value) || 0));
    const lostH = ops * min * days / 60;
    const gainH = lostH * pct / 100;
    $('cPctOut').textContent = `${pct} %`;
    $('rPct').textContent = pct;
    $('rLostH').textContent = `${nf(lostH)} h`;
    $('rLostE').textContent = `${nf(lostH * rate)} €`;
    $('rGainH').textContent = `${nf(gainH)} h`;
    $('rGainE').textContent = `${nf(gainH * rate)} €`;
    $('rFte').textContent = nf(gainH / 1607, 1);
    const body = `Bonjour Gilles,\n\nNos chiffres : ${ops} opérations par jour, ${min} minutes perdues par opération, ${days} jours par an, ${rate} € de l'heure.\nTemps perdu : ${nf(lostH)} h par an (${nf(lostH * rate)} €).\nObjectif de réduction de ${pct} % : ${nf(gainH)} h et ${nf(gainH * rate)} € par an.\n\nParlons-en.`;
    $('calcMail').href = `mailto:gilles.dev57@outlook.fr?subject=${encodeURIComponent('Calcul de gains, profil logistique')}&body=${encodeURIComponent(body)}`;
  };
  ids.forEach((id) => $(id).addEventListener('input', update));
  update();
}

function openTab(name) {
  document.querySelectorAll('[role="tab"]').forEach((t) => t.setAttribute('aria-selected', String(t.dataset.tab === name)));
  document.querySelectorAll('.sh-panel').forEach((p) => { p.hidden = p.dataset.panel !== name; });
}

function bindTabLinks(root = document) {
  root.querySelectorAll('[data-tab-link]').forEach((a) => a.addEventListener('click', () => openTab(a.dataset.tabLink)));
}

function openLightbox(src) {
  $('lightboxImg').src = src;
  $('lightbox').classList.add('open');
  $('lightbox').setAttribute('aria-hidden', 'false');
}

function closeLightbox() {
  $('lightbox').classList.remove('open');
  $('lightbox').setAttribute('aria-hidden', 'true');
}

function saveSelection() {
  localStorage.setItem('profilSelection', JSON.stringify(selection));
  $('cartCount').textContent = selection.length;
  $('drawerEmpty').hidden = selection.length > 0;
  $('drawerList').innerHTML = selection.map((k) => {
    const v = VERSIONS[k];
    return `<li><div><strong>CV ${esc(v.name.toLowerCase())}</strong><span>${esc(v.title)}</span></div>
      <a href="${v.cv}" target="_blank" rel="noopener noreferrer">PDF</a>
      <button type="button" data-remove="${k}" aria-label="Retirer">✕</button></li>`;
  }).join('');
  $('drawerList').querySelectorAll('[data-remove]').forEach((b) => b.addEventListener('click', () => {
    selection = selection.filter((k) => k !== b.dataset.remove);
    saveSelection();
    updateAddBtn();
  }));
  const names = selection.map((k) => VERSIONS[k].name.toLowerCase()).join(', ');
  $('drawerMail').href = `mailto:gilles.dev57@outlook.fr?subject=${encodeURIComponent('Entretien, profil ' + (names || 'hybride'))}`;
}

function updateAddBtn() {
  const inSel = selection.includes(current);
  $('addBtn').textContent = inSel ? '♥ Dans ma sélection' : '♡ Ajouter à ma sélection';
  $('addBtn').classList.toggle('is-on', inSel);
}

function toggleDrawer(open) {
  $('drawer').classList.toggle('open', open);
  $('drawer').setAttribute('aria-hidden', String(!open));
}

document.addEventListener('DOMContentLoaded', () => {
  selection = selection.filter((k) => VERSIONS[k]);
  const params = new URLSearchParams(location.search);
  setVersion(params.get('version') || 'hybride');
  initCalc();
  saveSelection();
  bindTabLinks();

  document.querySelectorAll('[role="tab"]').forEach((t) => t.addEventListener('click', () => openTab(t.dataset.tab)));
  $('shotZoom').addEventListener('click', () => openLightbox($('shotImg').src));
  $('lightbox').addEventListener('click', (e) => { if (e.target !== $('lightboxImg')) closeLightbox(); });
  $('addBtn').addEventListener('click', () => {
    selection = selection.includes(current) ? selection.filter((k) => k !== current) : [...selection, current];
    saveSelection();
    updateAddBtn();
    if (selection.includes(current)) toggleDrawer(true);
  });
  $('cartBtn').addEventListener('click', () => toggleDrawer(true));
  $('drawerClose').addEventListener('click', () => toggleDrawer(false));
  $('drawer').addEventListener('click', (e) => { if (e.target === $('drawer')) toggleDrawer(false); });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') { closeLightbox(); toggleDrawer(false); } });
  $('searchForm').addEventListener('submit', (e) => {
    e.preventDefault();
    openTab('projets');
    renderCards('all', $('searchInput').value);
    $('onglets').scrollIntoView({ behavior: 'smooth' });
  });
  $('backTop').addEventListener('click', (e) => { e.preventDefault(); scrollTo({ top: 0, behavior: 'smooth' }); });
  $('year').textContent = new Date().getFullYear();
});
