const VERSIONS = {
  hybride: {
    name: 'Hybride',
    crumb: 'Logistique & Développement',
    title: 'Profil Hybride : Team Leader Logistique Lean & Développeur Full-Stack',
    box: ['Profil hybride', 'Logistique <em>×</em> Développement'],
    price: 'Sur devis / Disponible immédiatement',
    cv: 'assets/cv/CV_Gilles_Ruszczycki_Profil_Complet.pdf',
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
    features: [
      ['👥', 'Management d\u2019équipe', '13 ans de management chez Stellantis, équipes jusqu\u2019à 25 personnes.'],
      ['📈', 'Lean & performance', 'PDCA, 5 pourquoi, 5S, standardisation, suivi des KPI qualité et sécurité.'],
      ['🧩', 'Digitalisation des process', 'Tableaux de bord et outils de suivi que je développe moi-même.']
    ],
    description: [
      "Team Leader Logistique chez Stellantis de 2012 à 2025, sur un site certifié ISO 9001, ISO 14001 et IATF 16949, avec des équipes jusqu\u2019à 25 personnes.",
      "Organisation du travail, approvisionnement des lignes, sécurité, qualité, formation des nouveaux et amélioration continue au quotidien.",
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

const PROJECTS = [
  { id: 'oliwood', cat: 'client', title: "Oli'Wood", img: 'assets/img/oliwood-accueil.jpg', text: "Site livré pour une entreprise de charpente du Jura : réalisations, devis en ligne, back-office.", tags: ['Next.js', 'Prisma', 'PostgreSQL'], url: 'https://oliwood-jura.fr', label: 'Voir le site' },
  { id: 'oliwood-noel', cat: 'client', title: "Oli'Wood, thème de Noël", img: 'assets/img/oliwood-noel-accueil.jpg', text: "Décorations saisonnières activables en un clic depuis l'administration.", tags: ['Back-office', 'Thèmes'], url: 'https://oliwood-jura.fr', label: 'Voir le site' },
  { id: 'webrgest', cat: 'client', title: 'Web RG Est', img: 'assets/img/webrgest-cover.png', text: "Mon activité de création web et solutions digitales : site vitrine, SEO, blog.", tags: ['Next.js', 'Tailwind', 'SEO'], url: 'https://webrgest.fr', label: 'Voir le site' },
  { id: 'burovia', cat: 'client', title: 'Burovia', img: 'assets/img/burovia-cover.png', text: "E-commerce d'accessoires de télétravail : catalogue, panier, paiement Stripe.", tags: ['React', 'Node.js', 'Stripe'], url: 'https://burovia.eu', label: 'Voir le site' },
  { id: 'auction', cat: 'pro', title: 'Auction Showcase (stage CK)', img: 'assets/img/auction-cover.png', text: "Enchères internes en temps réel avec authentification Azure.", tags: ['Node.js', 'WebSocket', 'MySQL'], url: 'https://www.youtube.com/watch?v=fjJrTaBJ95k', label: 'Démo vidéo' },
  { id: 'greenbin', cat: 'formation', title: 'GreenBin', img: 'assets/img/greenbin-dashboard.png', text: "Dashboard de gestion des déchets avec rôles et utilisateurs.", tags: ['React', 'Express', 'Docker'], url: 'index.html#projets', label: 'Détails' },
  { id: 'artisan', cat: 'formation', title: 'Trouve Ton Artisan', img: 'assets/img/artisan-home-desktop.png', text: "Recherche d'artisans responsive, fiches détaillées et contact.", tags: ['React', 'Sequelize', 'MySQL'], url: 'index.html#projets', label: 'Détails' },
  { id: 'russell', cat: 'formation', title: 'Port de plaisance Russell', img: 'assets/img/russell-cover-v71.jpg', text: "API REST de gestion portuaire avec JWT et CRUD complet.", tags: ['Node.js', 'MongoDB', 'JWT'], url: 'index.html#projets', label: 'Détails' }
];

const FILTERS = [['all', 'Tous'], ['client', 'En ligne'], ['pro', 'Stage'], ['formation', 'Formation']];

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
  const url = new URL(location.href);
  url.searchParams.set('version', key);
  history.replaceState(null, '', url);
}

function renderThumbs() {
  const items = [{ id: 'box', title: 'Profil', img: 'assets/img/portrait.webp' }, ...PROJECTS.slice(0, 6)];
  $('thumbs').innerHTML = items.map((p, i) =>
    `<li><button type="button" class="sh-thumb" data-id="${p.id}" aria-pressed="${i === 0}" aria-label="${esc(p.title)}">
       <img src="${p.img}" alt="" loading="lazy"></button></li>`).join('') +
    `<li><a class="sh-thumb sh-thumb-more" href="#onglets" data-tab-link="projets" aria-label="Voir tous les projets">+${PROJECTS.length - 6}</a></li>`;
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
  $('shotLinks').innerHTML = `<a class="sh-btn sh-btn-orange sh-btn-inline" href="${p.url}"${external(p.url)}>${esc(p.label)}</a>
    <a class="sh-btn sh-btn-line sh-btn-inline" href="#onglets" data-tab-link="projets">Tous les projets</a>`;
  bindTabLinks($('shotLinks'));
}

function renderCards(filter = 'all', query = '') {
  const q = query.trim().toLowerCase();
  const list = PROJECTS.filter((p) => (filter === 'all' || p.cat === filter) &&
    (!q || [p.title, p.text, ...p.tags].join(' ').toLowerCase().includes(q)));
  $('projCount').textContent = `(${PROJECTS.length})`;
  $('filters').innerHTML = FILTERS.map(([k, l]) =>
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
         <a class="sh-btn sh-btn-yellow sh-btn-inline" href="${p.url}"${external(p.url)}>${esc(p.label)}</a>
       </div>
     </article>`).join('') : '<p class="sh-empty">Aucun projet ne correspond. Essayez « React », « Next.js » ou « SQL ».</p>';
  $('cards').querySelectorAll('[data-zoom]').forEach((b) => b.addEventListener('click', () => openLightbox(b.dataset.zoom)));
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
  renderThumbs();
  setVersion(params.get('version') || 'hybride');
  renderCards();
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
