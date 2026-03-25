document.getElementById("year").textContent = new Date().getFullYear();

const burger = document.getElementById("burger");
const nav = document.querySelector(".nav");
if (burger && nav) {
  burger.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");
    burger.setAttribute("aria-expanded", String(isOpen));
  });
}

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
    i++;
    if (i <= text.length) setTimeout(tick, 22);
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

const gallery = (items, kind = "screen") => items.map((item) => `
  <figure class="shot ${kind === "code" ? "code" : ""}">
    <img src="${item.src}" alt="${item.alt}">
    <figcaption>${item.caption}</figcaption>
  </figure>
`).join("");

const projects = {
  greenbin: {
    kicker: "Projet principal • Full-stack",
    title: "GreenBin",
    body: `
      <div class="modal-grid">
        <div class="modal-gallery">
          ${gallery([
      { src: "assets/img/greenbin-dashboard.png", alt: "Dashboard GreenBin", caption: "Dashboard administrateur" },
      { src: "assets/img/greenbin-dechets.png", alt: "Liste des déchets GreenBin", caption: "Liste des déchets" },
      { src: "assets/img/greenbin-edit.png", alt: "Modification d'un déchet GreenBin", caption: "Modification d'un déchet" },
      { src: "assets/img/greenbin-users.png", alt: "Gestion des utilisateurs GreenBin", caption: "Gestion des utilisateurs" },
      { src: "assets/img/greenbin-add-user.png", alt: "Ajout d'un utilisateur GreenBin", caption: "Ajout d'un utilisateur" }
    ])}
        </div>
        <div class="modal-meta">
          <div class="meta-card">
            <h4>Présentation</h4>
            <p>Application web full-stack de gestion des déchets, avec tableau de bord administrateur, gestion des utilisateurs, formulaires métiers et conteneurisation de l’application avec Docker.</p>
          </div>
          <div class="meta-card">
            <h4>Ce que ce projet montre</h4>
            <ul class="meta-list">
              <li>Dashboard administrateur et navigation métier</li>
              <li>CRUD complet sur les déchets</li>
              <li>Gestion des utilisateurs et des rôles</li>
              <li>Formulaires de création / modification</li>
              <li>Déploiement et exécution via Docker</li>
            </ul>
          </div>
          <div class="meta-card">
            <h4>Stack</h4>
            <div class="tags">
              <span class="tag">React</span>
              <span class="tag">Node.js</span>
              <span class="tag">Express</span>
              <span class="tag">MySQL</span>
              <span class="tag">Sequelize</span>
              <span class="tag">Docker</span>
            </div>
          </div>
        </div>
      </div>
    `
  },
  artisan: {
    kicker: "Projet de fin d'études • Application responsive",
    title: "Trouve Ton Artisan",
    body: `
      <div class="modal-grid">
        <div class="modal-gallery">
          ${gallery([
      { src: "assets/img/artisan-home-desktop.png", alt: "Accueil desktop Trouve Ton Artisan", caption: "Accueil desktop" },
      { src: "assets/img/artisan-detail-desktop.png", alt: "Fiche artisan desktop", caption: "Fiche artisan desktop" },
      { src: "assets/img/artisan-home-mobile.png", alt: "Accueil mobile Trouve Ton Artisan", caption: "Accueil mobile" },
      { src: "assets/img/artisan-detail-mobile.png", alt: "Fiche artisan mobile", caption: "Fiche artisan mobile" }
    ])}
        </div>
        <div class="modal-meta">
          <div class="meta-card">
            <h4>Présentation</h4>
            <p>Projet de fin d'études réalisé dans le cadre de ma formation Développeur Web et Web Mobile. Cette plateforme permet de rechercher un artisan, consulter sa fiche détaillée et le contacter sur desktop comme sur mobile.</p>
          </div>
          <div class="meta-card">
            <h4>Ce que ce projet montre</h4>
            <ul class="meta-list">
              <li>Navigation React Router</li>
              <li>Fiches détails dynamiques</li>
              <li>Contact via email</li>
              <li>Interface adaptée desktop / mobile</li>
            </ul>
          </div>
          <div class="meta-card">
            <h4>Stack</h4>
            <div class="tags">
              <span class="tag">React</span>
              <span class="tag">Bootstrap</span>
              <span class="tag">Express</span>
              <span class="tag">MySQL</span>
              <span class="tag">Sequelize</span>
            </div>
          </div>
        </div>
      </div>
    `
  },
    auction: {
    kicker: "Application web • Temps réel",
    title: "Auction Showcase",
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
            <h4>Présentation</h4>
            <p>Application d'enchères en temps réel développée initialement durant mon stage, puis retravaillée en version démonstration pour valoriser l'interface utilisateur, la navigation, l'espace d'administration et les interactions en temps réel.</p>
          </div>
          <div class="meta-card">
            <h4>Ce que ce projet montre</h4>
            <ul class="meta-list">
              <li>Interface administrateur claire et orientée gestion</li>
              <li>Navigation front-end en EJS / Express</li>
              <li>Mise à jour temps réel des enchères via WebSocket</li>
              <li>Structuration full-stack avec Node.js, PHP et MySQL</li>
            </ul>
          </div>
          <div class="meta-card">
            <h4>Stack</h4>
            <div class="tags">
              <span class="tag">Node.js</span>
              <span class="tag">Express</span>
              <span class="tag">EJS</span>
              <span class="tag">WebSocket</span>
              <span class="tag">PHP</span>
              <span class="tag">MySQL</span>
            </div>
          </div>
          <div class="meta-card">
            <h4>Liens</h4>
            <div class="tags">
              <a class="tag" href="https://www.youtube.com/embed/fjJrTaBJ95k" target="_blank" rel="noopener noreferrer">Voir la démo</a>
            </div>
          </div>
        </div>
      </div>
    `
  }
};
function openModal(key) {
    const p = projects[key];
if (!p) return;
modalKicker.textContent = p.kicker;
modalTitle.textContent = p.title;
modalBody.innerHTML = p.body;
modalActions.innerHTML = `
    <a class="btn" href="#contact">Me contacter</a>
    <a class="btn btn-ghost" href="https://github.com/gilles-rusz" target="_blank" rel="noreferrer">Mon GitHub</a>
  `;
modal.classList.add("show");
modal.setAttribute("aria-hidden", "false");
}

function closeModal() {
  modal.classList.remove("show");
  modal.setAttribute("aria-hidden", "true");
}

document.querySelectorAll(".project").forEach((btn) => {
  btn.addEventListener("click", () => openModal(btn.dataset.project));
});
if (modalClose) modalClose.addEventListener("click", closeModal);
if (modal) {
  modal.addEventListener("click", (e) => {
    if (e.target === modal) closeModal();
  });
}
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    if (lightbox && lightbox.classList.contains("show")) {
      closeLightbox();
    } else {
      closeModal();
    }
  }
});


const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightboxImg");
const lightboxClose = document.getElementById("lightboxClose");

function openLightbox(src, alt = "Capture agrandie") {
  if (!lightbox || !lightboxImg) return;
  lightboxImg.src = src;
  lightboxImg.alt = alt;
  lightbox.classList.add("show");
  lightbox.setAttribute("aria-hidden", "false");
  document.body.classList.add("no-scroll");
}

function closeLightbox() {
  if (!lightbox || !lightboxImg) return;
  lightbox.classList.remove("show");
  lightbox.setAttribute("aria-hidden", "true");
  lightboxImg.src = "";
  document.body.classList.remove("no-scroll");
}

document.addEventListener("click", (e) => {
  const img = e.target.closest(".shot img");
  if (img) {
    e.stopPropagation();
    openLightbox(img.src, img.alt || "Capture agrandie");
    return;
  }

  if (e.target === lightbox || e.target === lightboxClose) {
    closeLightbox();
  }
});

const contactForm = document.getElementById("contactForm");
const formHint = document.getElementById("formHint");
if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    if (formHint) formHint.textContent = "Le message va s'ouvrir dans votre client mail (pré-rempli).";
    const data = new FormData(contactForm);
    const subject = encodeURIComponent("Contact via portfolio");
    const body = encodeURIComponent(`Nom: ${data.get("name")}\nEmail: ${data.get("email")}\n\nMessage:\n${data.get("message")}`);
    window.location.href = `mailto:gilles.dev57@outlook.fr?subject=${subject}&body=${body}`;
  });
}

const cvLink = document.getElementById("cvLink");
if (cvLink) {
  cvLink.addEventListener("click", (e) => {
    e.preventDefault();
    alert("Ajoute ton CV PDF.");
  });
}
