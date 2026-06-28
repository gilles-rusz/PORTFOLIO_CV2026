document.getElementById("year").textContent = new Date().getFullYear();

const burger = document.getElementById("burger");
const nav = document.querySelector(".nav");
const navLinks = document.querySelectorAll(".nav-links a");

function closeNav() {
  if (!nav || !burger) return;
  nav.classList.remove("open");
  burger.setAttribute("aria-expanded", "false");
}

if (burger && nav) {
  burger.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");
    burger.setAttribute("aria-expanded", String(isOpen));
  });
}

navLinks.forEach((link) => {
  link.addEventListener("click", closeNav);
});

const themeBtn = document.getElementById("themeBtn");
const savedTheme = localStorage.getItem("theme");
if (savedTheme === "light") {
  document.body.classList.add("light");
} else {
  document.body.classList.remove("light");
}

function refreshThemeIcon() {
  if (!themeBtn) return;
  themeBtn.textContent = document.body.classList.contains("light") ? "☀️" : "🌙";
}

refreshThemeIcon();

if (themeBtn) {
  themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("light");
    localStorage.setItem("theme", document.body.classList.contains("light") ? "light" : "dark");
    refreshThemeIcon();
  });
}

function runTyping() {
  const el = document.querySelector(".typed");
  if (!el) return;
  const text = el.getAttribute("data-typed") || "";
  let i = 0;
  el.textContent = "";
  const tick = () => {
    el.textContent = text.slice(0, i);
    i += 1;
    if (i <= text.length) setTimeout(tick, 20);
  };
  tick();
}
runTyping();

const revealEls = document.querySelectorAll(".reveal");
const io = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) entry.target.classList.add("visible");
  });
}, { threshold: 0.12 });
revealEls.forEach((el) => io.observe(el));

const modal = document.getElementById("modal");
const modalClose = document.getElementById("modalClose");
const modalKicker = document.getElementById("modalKicker");
const modalTitle = document.getElementById("modalTitle");
const modalBody = document.getElementById("modalBody");
const modalActions = document.getElementById("modalActions");

const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightboxImg");
const lightboxClose = document.getElementById("lightboxClose");

let lastFocusedElement = null;

function syncBodyScroll() {
  const modalOpen = modal && modal.classList.contains("show");
  const lightboxOpen = lightbox && lightbox.classList.contains("show");
  document.body.classList.toggle("no-scroll", Boolean(modalOpen || lightboxOpen));
}

const gallery = (items, kind = "screen") => items.map((item) => `
  <figure class="shot ${kind === "code" ? "code" : ""}">
    <img src="${item.src}" alt="${item.alt}" loading="lazy" decoding="async">
    <figcaption>${item.caption}</figcaption>
  </figure>
`).join("");

const linksHtml = (links = []) => `
  <div class="tags">
    ${links.map((link) => link.href
      ? `<a class="tag" href="${link.href}" target="_blank" rel="noopener noreferrer">${link.label}</a>`
      : `<span class="tag">${link.label}</span>`).join("")}
  </div>
`;

const listHtml = (items = []) => `
  <ul class="meta-list">
    ${items.map((item) => `<li>${item}</li>`).join("")}
  </ul>
`;

const projects = {
  burovia: {
    kicker: "Activité professionnelle • Web RG Est",
    title: "Burovia",
    primaryLabel: "Voir le site",
    primaryHref: "https://burovia.eu",
    body: `
      <div class="modal-grid">
        <div class="modal-gallery">
          ${gallery([
            { src: "assets/img/burovia-cover.png", alt: "Page d'accueil Burovia.eu", caption: "Page d'accueil — hero et navigation" }
          ])}
        </div>
        <div class="modal-meta">
          <div class="meta-card">
            <h4>Contexte</h4>
            <p>Site e-commerce complet développé par Web RG Est pour vendre des accessoires de télétravail (confort, posture, organisation, périphériques) avec livraison en France, Belgique et Luxembourg.</p>
          </div>
          <div class="meta-card">
            <h4>Ce que j'ai réalisé</h4>
            ${listHtml([
              "Catalogue produits avec catégories et filtres",
              "Panier et tunnel d'achat complet",
              "Intégration paiement sécurisé Stripe",
              "Système d'authentification utilisateurs",
              "Newsletter et gestion des commandes",
              "Design responsive et optimisé mobile",
              "Déploiement production sur VPS Hostinger"
            ])}
          </div>
          <div class="meta-card">
            <h4>Ce que ça démontre</h4>
            ${listHtml([
              "Capacité à concevoir et livrer un e-commerce de bout en bout",
              "Intégration de solutions de paiement (Stripe)",
              "Architecture full stack Node.js / React / PostgreSQL",
              "Déploiement et administration serveur en production",
              "Vision produit et positionnement commercial"
            ])}
          </div>
          <div class="meta-card">
            <h4>Stack</h4>
            ${linksHtml([
              { label: "React" },
              { label: "Node.js" },
              { label: "Express" },
              { label: "PostgreSQL" },
              { label: "Stripe" },
              { label: "VPS Hostinger" }
            ])}
          </div>
          <div class="meta-card">
            <h4>Liens</h4>
            ${linksHtml([
              { label: "burovia.eu", href: "https://burovia.eu" }
            ])}
          </div>
        </div>
      </div>
    `
  },
  webrgest: {
    kicker: "Activité professionnelle • Web RG Est",
    title: "Web RG Est",
    primaryLabel: "Voir le site",
    primaryHref: "https://webrgest.fr",
    body: `
      <div class="modal-grid">
        <div class="modal-gallery">
          ${gallery([
            { src: "assets/img/webrgest-cover.png", alt: "Page d'accueil Web RG Est", caption: "Page d'accueil — design premium" }
          ])}
        </div>
        <div class="modal-meta">
          <div class="meta-card">
            <h4>Contexte</h4>
            <p>Site vitrine professionnel créé pour mon activité indépendante de création web et solutions digitales dans l'Est de la France. Conçu pour inspirer confiance, présenter mes services et générer des contacts.</p>
          </div>
          <div class="meta-card">
            <h4>Ce que j'ai réalisé</h4>
            ${listHtml([
              "Design premium et responsive avec Tailwind CSS",
              "SEO avancé : sitemap, robots.txt, metadata, JSON-LD, Open Graph",
              "Blog intégré pour le référencement naturel",
              "Pages services, à propos, refonte de site internet",
              "Déploiement Vercel avec domaine personnalisé webrgest.fr",
              "Vérification Google Search Console"
            ])}
          </div>
          <div class="meta-card">
            <h4>Ce que ça démontre</h4>
            ${listHtml([
              "Capacité à concevoir et livrer un site professionnel de bout en bout",
              "Maîtrise de Next.js, React et Tailwind CSS",
              "Compétences SEO et stratégie de visibilité en ligne",
              "Identité de marque et positionnement commercial"
            ])}
          </div>
          <div class="meta-card">
            <h4>Stack</h4>
            ${linksHtml([
              { label: "Next.js" },
              { label: "React" },
              { label: "TypeScript" },
              { label: "Tailwind CSS" },
              { label: "Vercel" }
            ])}
          </div>
          <div class="meta-card">
            <h4>Liens</h4>
            ${linksHtml([
              { label: "webrgest.fr", href: "https://webrgest.fr" }
            ])}
          </div>
        </div>
      </div>
    `
  },
  greenbin: {
    kicker: "Projet de présentation • Titre professionnel DWWM",
    title: "GreenBin",
    primaryLabel: "Voir plus",
    primaryHref: "",
    body: `
      <div class="modal-grid">
        <div class="modal-gallery">
          ${gallery([
            { src: "assets/img/greenbin-dashboard.png", alt: "Dashboard GreenBin", caption: "Dashboard administrateur" },
            { src: "assets/img/greenbin-dechets.png", alt: "Liste des déchets GreenBin", caption: "Suivi et listing des déchets" },
            { src: "assets/img/greenbin-edit.png", alt: "Modification d'un déchet GreenBin", caption: "Édition des données métier" },
            { src: "assets/img/greenbin-users.png", alt: "Gestion des utilisateurs GreenBin", caption: "Gestion des utilisateurs et rôles" },
            { src: "assets/img/greenbin-add-user.png", alt: "Ajout d'un utilisateur GreenBin", caption: "Formulaire d'ajout utilisateur" }
          ])}
        </div>
        <div class="modal-meta">
          <div class="meta-card">
            <h4>Contexte</h4>
            <p>Projet de présentation réalisé pendant le titre professionnel Développeur Web et Web Mobile Full Stack, pensé comme un aboutissement de mon workflow Git et de ma capacité à structurer un vrai back-office métier.</p>
          </div>
          <div class="meta-card">
            <h4>Ce que j'ai réalisé</h4>
            ${listHtml([
              "Dashboard administrateur et navigation métier",
              "CRUD complet sur les déchets",
              "Gestion des utilisateurs et des rôles",
              "Formulaires de création / modification",
              "Workflow Git par branches de développement et features",
              "Conteneurisation de l'application avec Docker"
            ])}
          </div>
          <div class="meta-card">
            <h4>Ce que ça démontre</h4>
            ${listHtml([
              "Capacité à structurer une application full stack utile",
              "Compréhension des besoins back-office et des workflows de gestion",
              "Rigueur sur le workflow Git et l'intégration progressive des fonctionnalités",
              "Maîtrise d'une stack React + Express + MySQL + Sequelize"
            ])}
          </div>
          <div class="meta-card">
            <h4>Stack</h4>
            ${linksHtml([
              { label: "React" },
              { label: "Node.js" },
              { label: "Express" },
              { label: "MySQL" },
              { label: "Sequelize" },
              { label: "Docker" }
            ])}
          </div>

        </div>
      </div>
    `
  },
  artisan: {
    kicker: "Projet de synthèse • Fin de formation",
    title: "Trouve Ton Artisan",
    primaryLabel: "Voir plus",
    primaryHref: "",
    body: `
      <div class="modal-grid">
        <div class="modal-gallery">
          ${gallery([
            { src: "assets/img/artisan-home-desktop.png", alt: "Accueil desktop Trouve Ton Artisan", caption: "Accueil desktop" },
            { src: "assets/img/artisan-detail-desktop.png", alt: "Fiche artisan desktop", caption: "Fiche détail desktop" },
            { src: "assets/img/artisan-home-mobile.png", alt: "Accueil mobile Trouve Ton Artisan", caption: "Accueil mobile" },
            { src: "assets/img/artisan-detail-mobile.png", alt: "Fiche artisan mobile", caption: "Fiche détail mobile" }
          ])}
        </div>
        <div class="modal-meta">
          <div class="meta-card">
            <h4>Contexte</h4>
            <p>Projet de synthèse de fin de formation, conçu pour répondre à un besoin concret de mise en relation entre particuliers et artisans en valorisant le parcours utilisateur et le responsive.</p>
          </div>
          <div class="meta-card">
            <h4>Ce que j'ai réalisé</h4>
            ${listHtml([
              "Navigation React Router et pages dynamiques",
              "Fiches détails artisan",
              "Formulaire de contact",
              "Expérience responsive desktop / mobile",
              "Connexion front / API REST / base MySQL"
            ])}
          </div>
          <div class="meta-card">
            <h4>Ce que ça démontre</h4>
            ${listHtml([
              "Capacité à construire une expérience utilisateur claire",
              "Gestion du responsive et d'une logique de consultation métier",
              "Travail full stack avec React, Express, Sequelize et MySQL"
            ])}
          </div>
          <div class="meta-card">
            <h4>Stack</h4>
            ${linksHtml([
              { label: "React" },
              { label: "Express" },
              { label: "MySQL" },
              { label: "Sequelize" },
              { label: "Responsive" }
            ])}
          </div>

        </div>
      </div>
    `
  },
  auction: {
    kicker: "Projet réalisé en stage • CK Charles Kieffer",
    title: "Auction Showcase",
    primaryLabel: "Voir la démo",
    primaryHref: "https://www.youtube.com/watch?v=fjJrTaBJ95k",
    body: `
      <div class="modal-grid modal-grid-auction">
        <div class="modal-media-stack">
          <div class="video-card">
            <iframe
              class="project-video"
              src="https://www.youtube.com/embed/fjJrTaBJ95k"
              title="Démo Auction Showcase"
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen>
            </iframe>
          </div>
          <div class="modal-gallery modal-gallery-compact">
            ${gallery([
              { src: "assets/img/dashboard.png", alt: "Interface admin Auction Showcase", caption: "Vue d'ensemble de l'espace administrateur" },
              { src: "assets/img/gestion.png", alt: "Gestion des enchères Auction Showcase", caption: "Navigation et gestion des enchères" }
            ])}
          </div>
        </div>
        <div class="modal-meta">
          <div class="meta-card">
            <h4>Contexte</h4>
            <p>Projet développé dans un contexte de stage chez CK Charles Kieffer, puis adapté en version démonstration pour montrer l'interface d'administration, les interactions temps réel, l'authentification Azure et le rendu global du produit.</p>
          </div>
          <div class="meta-card">
            <h4>Ce que j'ai réalisé</h4>
            ${listHtml([
              "Interface administrateur orientée gestion",
              "Navigation front-end en EJS / Express",
              "Authentification sécurisée via Azure",
              "Mise à jour temps réel des enchères via WebSocket",
              "Travail sur l'expérience de démonstration et la lisibilité produit",
              "Valorisation du projet via une démo vidéo claire"
            ])}
          </div>
          <div class="meta-card">
            <h4>Ce que ça démontre</h4>
            ${listHtml([
              "Capacité à produire une interface métier claire",
              "Compréhension d'une intégration d'authentification en environnement professionnel",
              "Compréhension du temps réel et des usages back-office",
              "Expérience concrète en contexte de stage sur un projet web opérationnel"
            ])}
          </div>
          <div class="meta-card">
            <h4>Stack</h4>
            ${linksHtml([
              { label: "Node.js" },
              { label: "Express" },
              { label: "EJS" },
              { label: "WebSocket" },
              { label: "PHP" },
              { label: "MySQL" }
            ])}
          </div>
          <div class="meta-card">
            <h4>Liens</h4>
            ${linksHtml([
              { label: "Démo vidéo", href: "https://www.youtube.com/watch?v=fjJrTaBJ95k" },
              { label: "Code non public" }
            ])}
          </div>
        </div>
      </div>
    `
  },
  russell: {
    kicker: "Projet de formation • API & architecture backend",
    title: "Port de plaisance Russell",
    primaryLabel: "Voir plus",
    primaryHref: "",
    body: `
      <div class="modal-grid">
        <div class="modal-gallery">
          ${gallery([
            { src: "assets/img/russell-architecture.png", alt: "Architecture du projet Russell", caption: "Vue d'ensemble de l'architecture" },
            { src: "assets/img/russell-route.png", alt: "Exemple de routes du projet Russell", caption: "Organisation des routes" },
            { src: "assets/img/russell-service.png", alt: "Exemple de services du projet Russell", caption: "Séparation de la logique métier" },
            { src: "assets/img/russell-model.png", alt: "Exemple de modèle du projet Russell", caption: "Modélisation des données" }
          ], "code")}
        </div>
        <div class="modal-meta">
          <div class="meta-card">
            <h4>Contexte</h4>
            <p>Projet de formation réalisé pendant mon parcours DWWM, et non dans un contexte entreprise, pour montrer ma capacité à structurer une API, des vues EJS et une architecture backend claire.</p>
          </div>
          <div class="meta-card">
            <h4>Ce que j'ai réalisé</h4>
            ${listHtml([
              "Authentification par JWT",
              "CRUD complet utilisateurs / catways / réservations",
              "Vues EJS et tableau de bord",
              "Organisation backend avec routes, services, modèles et middlewares",
              "API REST documentée"
            ])}
          </div>
          <div class="meta-card">
            <h4>Ce que ça démontre</h4>
            ${listHtml([
              "Capacité à structurer une application plus technique côté backend",
              "Compréhension de l'architecture et de la séparation des responsabilités",
              "Capacité à expliquer clairement routes, services, modèles et middlewares",
              "Aisance sur Node.js, Express, MongoDB, JWT et EJS"
            ])}
          </div>
          <div class="meta-card">
            <h4>Stack</h4>
            ${linksHtml([
              { label: "Node.js" },
              { label: "Express" },
              { label: "MongoDB" },
              { label: "Mongoose" },
              { label: "JWT" },
              { label: "EJS" }
            ])}
          </div>

        </div>
      </div>
    `
  }
};

function getFocusableElements(container) {
  return [...container.querySelectorAll('a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])')]
    .filter((el) => !el.hasAttribute("hidden"));
}

function openModal(key) {
  const project = projects[key];
  if (!project) return;

  lastFocusedElement = document.activeElement;
  modalKicker.textContent = project.kicker;
  modalTitle.textContent = project.title;
  modalBody.innerHTML = project.body;
  modalActions.innerHTML = `
    ${project.primaryHref ? `<a class="btn" href="${project.primaryHref}" target="_blank" rel="noopener noreferrer">${project.primaryLabel}</a>` : ''}
    <a class="btn btn-ghost" href="#contact">Me contacter</a>
  `;

  modal.classList.add("show");
  modal.setAttribute("aria-hidden", "false");
  syncBodyScroll();
  modalClose?.focus();
}

function closeModal() {
  if (!modal) return;
  modal.classList.remove("show");
  modal.setAttribute("aria-hidden", "true");
  syncBodyScroll();
  if (lastFocusedElement && typeof lastFocusedElement.focus === "function") {
    lastFocusedElement.focus();
  }
}

function openLightbox(src, alt = "Capture agrandie") {
  if (!lightbox || !lightboxImg) return;
  lightboxImg.src = src;
  lightboxImg.alt = alt;
  lightbox.classList.add("show");
  lightbox.setAttribute("aria-hidden", "false");
  syncBodyScroll();
  lightboxClose?.focus();
}

function closeLightbox() {
  if (!lightbox || !lightboxImg) return;
  lightbox.classList.remove("show");
  lightbox.setAttribute("aria-hidden", "true");
  lightboxImg.src = "";
  syncBodyScroll();
}

document.querySelectorAll(".project-trigger, .project-cover-trigger").forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.stopPropagation();
    openModal(btn.dataset.project);
  });
});

document.querySelectorAll(".project-card-clickable").forEach((card) => {
  card.addEventListener("click", (e) => {
    if (e.target.closest("a, button")) return;
    openModal(card.dataset.project);
  });

  card.addEventListener("keydown", (e) => {
    if ((e.key === "Enter" || e.key === " ") && !e.target.closest("a, button")) {
      e.preventDefault();
      openModal(card.dataset.project);
    }
  });
});

document.querySelectorAll(".project-action-link").forEach((el) => {
  el.addEventListener("click", (e) => e.stopPropagation());
});

modalClose?.addEventListener("click", closeModal);
lightboxClose?.addEventListener("click", closeLightbox);

modal?.addEventListener("click", (e) => {
  if (e.target === modal) closeModal();
});

lightbox?.addEventListener("click", (e) => {
  if (e.target === lightbox) closeLightbox();
});

document.addEventListener("click", (e) => {
  const img = e.target.closest(".shot img");
  if (img) {
    e.stopPropagation();
    openLightbox(img.src, img.alt || "Capture agrandie");
    return;
  }

  if (!nav || !burger) return;
  const clickInsideNav = e.target.closest(".nav");
  if (!clickInsideNav && nav.classList.contains("open")) {
    closeNav();
  }
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    if (lightbox && lightbox.classList.contains("show")) {
      closeLightbox();
      return;
    }
    if (modal && modal.classList.contains("show")) {
      closeModal();
    }
    return;
  }

  if (e.key === "Tab" && modal && modal.classList.contains("show")) {
    const focusable = getFocusableElements(modal);
    if (!focusable.length) return;
    const first = focusable[0];
    const last = focusable[focusable.length - 1];

    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  }
});

const contactForm = document.getElementById("contactForm");
const formHint = document.getElementById("formHint");
if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    if (formHint) {
      formHint.textContent = "Le message va s'ouvrir dans votre client mail avec les champs déjà pré-remplis.";
    }
    const data = new FormData(contactForm);
    const subject = encodeURIComponent("Contact via portfolio");
    const body = encodeURIComponent(`Nom: ${data.get("name")}
Email: ${data.get("email")}

Message:
${data.get("message")}`);
    window.location.href = `mailto:gilles.dev57@outlook.fr?subject=${subject}&body=${body}`;
  });
}
