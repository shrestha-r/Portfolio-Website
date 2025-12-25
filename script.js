// ====== UPDATE THESE LINKS ======
const LINKS = {
  cv: "https://colab.research.google.com/drive/1Ub4eCtg-61_3D9JeaygXwsyL7cJ98DCk?usp=drive_link",
  github: "https://github.com/shrestha-r/",
  linkedin: "https://www.linkedin.com/in/rahulshrestha61/",
  email: "mailto:rahulshrestha8102@gmail.com"
};

// ====== PROJECT DATA (edit titles + links to your real repos) ======
const PROJECTS = [
  {
    title: "Database-Driven Web App",
    description: "Full-stack PHP + MySQL app with relational schema, dynamic pages, validation and authentication patterns.",
    tags: ["PHP", "MySQL", "JavaScript", "Full-Stack"],
    type: ["fullstack", "database"],
    repo: "https://github.com/your-username/project1",
    demo: "#"
  },
  {
    title: "Lost & Found Tracker (Java)",
    description: "Console application with role-based workflow, validation, and structured menu navigation using OOP.",
    tags: ["Java", "OOP", "Console App"],
    type: ["java"],
    repo: "https://github.com/your-username/project2",
    demo: "#"
  },
  {
    title: "Stock Price Prediction (Python)",
    description: "Regression models (Linear Regression vs Random Forest) with evaluation (MAE/RMSE/R²) and critical discussion.",
    tags: ["Python", "ML", "Regression"],
    type: ["ml"],
    repo: "https://github.com/your-username/project3",
    demo: "#"
  },
  {
    title: "DSA Practice (Trees / Hash)",
    description: "Implementations and notes on data structures, edge cases, and time/space complexity reasoning.",
    tags: ["Java", "DSA", "Complexity"],
    type: ["java"],
    repo: "https://github.com/your-username/project4",
    demo: "#"
  },
  {
    title: "SQL Query Pack",
    description: "A collection of join/aggregation queries with explanations, focusing on correctness and readability.",
    tags: ["SQL", "MySQL", "Joins"],
    type: ["database"],
    repo: "https://github.com/your-username/project5",
    demo: "#"
  },
  {
    title: "Portfolio Website",
    description: "This website: responsive layout, filtering, and contact form behavior with clean UI.",
    tags: ["HTML", "CSS", "JavaScript"],
    type: ["fullstack"],
    repo: "https://github.com/your-username/portfolio",
    demo: "#top"
  }
];

// ===== Mobile Drawer Navigation =====
const navToggle = document.getElementById("navToggle");
const drawer = document.getElementById("mobileDrawer");
const drawerClose = document.getElementById("drawerClose");
const overlay = document.getElementById("drawerOverlay");

function openDrawer() {
  drawer.classList.add("open");
  overlay.classList.add("open");
  navToggle.setAttribute("aria-expanded", "true");
  document.body.style.overflow = "hidden";
}

function closeDrawer() {
  drawer.classList.remove("open");
  overlay.classList.remove("open");
  navToggle.setAttribute("aria-expanded", "false");
  document.body.style.overflow = "";
}

navToggle.addEventListener("click", openDrawer);
drawerClose.addEventListener("click", closeDrawer);
overlay.addEventListener("click", closeDrawer);

// Close drawer when clicking a link
drawer.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", closeDrawer);
});

// ====== HERO BUTTONS / CONTACT LINKS ======
document.getElementById("cvBtn").setAttribute("href", LINKS.cv);
document.getElementById("githubBtn").setAttribute("href", LINKS.github);
document.getElementById("linkedinBtn").setAttribute("href", LINKS.linkedin);

document.getElementById("contactGithub").setAttribute("href", LINKS.github);
document.getElementById("contactLinkedin").setAttribute("href", LINKS.linkedin);
document.getElementById("contactEmail").setAttribute("href", LINKS.email);

// ====== PROJECT RENDER ======
const grid = document.getElementById("projectGrid");

function projectCard(p){
  const card = document.createElement("article");
  card.className = "card";
  card.dataset.type = p.type.join(" ");

  const tagsHtml = p.tags.map(t => `<span class="tag">${escapeHtml(t)}</span>`).join("");

  card.innerHTML = `
    <h3>${escapeHtml(p.title)}</h3>
    <p>${escapeHtml(p.description)}</p>
    <div class="tags">${tagsHtml}</div>
    <div class="actions">
      <a class="link primary" href="${p.repo}" target="_blank" rel="noreferrer">Repo</a>
      <a class="link" href="${p.demo}" target="_blank" rel="noreferrer">Demo</a>
    </div>
  `;
  return card;
}

function renderProjects(list){
  grid.innerHTML = "";
  list.forEach(p => grid.appendChild(projectCard(p)));
}

function escapeHtml(str){
  return String(str)
    .replaceAll("&","&amp;")
    .replaceAll("<","&lt;")
    .replaceAll(">","&gt;")
    .replaceAll('"',"&quot;")
    .replaceAll("'","&#039;");
}

// Initial render
renderProjects(PROJECTS);

// ====== FILTERS ======
const filterButtons = document.querySelectorAll(".filter");

filterButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    filterButtons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    const key = btn.dataset.filter;
    if (key === "all") {
      renderProjects(PROJECTS);
      return;
    }
    const filtered = PROJECTS.filter(p => p.type.includes(key));
    renderProjects(filtered);
  });
});

// ====== STATS COUNT-UP ======
function animateCount(el, to, duration = 900){
  const start = 0;
  const t0 = performance.now();

  function tick(now){
    const p = Math.min(1, (now - t0) / duration);
    const value = Math.floor(start + (to - start) * p);
    el.textContent = String(value);
    if (p < 1) requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
}

const statProjects = document.getElementById("statProjects");
const statTech = document.getElementById("statTech");
const statFocus = document.getElementById("statFocus");

animateCount(statProjects, PROJECTS.length);
animateCount(statTech, 8);   // adjust if you want
animateCount(statFocus, 4);  // adjust if you want

// ====== CONTACT FORM (no backend) ======
const form = document.getElementById("contactForm");
const note = document.getElementById("formNote");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const data = new FormData(form);
  const name = (data.get("name") || "").toString().trim();
  const email = (data.get("email") || "").toString().trim();
  const message = (data.get("message") || "").toString().trim();

  // Simple validation
  if (!name || !email || !message) {
    note.textContent = "Please fill in all fields.";
    return;
  }

  // Create a mailto link so it works without a server
  const subject = encodeURIComponent(`Placement / Project Inquiry — ${name}`);
  const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
  const mailto = `mailto:${LINKS.email.replace("mailto:","")}?subject=${subject}&body=${body}`;

  note.textContent = "Opening your email client…";
  window.location.href = mailto;
});

// Footer year
document.getElementById("year").textContent = new Date().getFullYear();


/* ===== Certificate Viewer (PDF + Image) ===== */
const certModal = document.getElementById("certModal");
const certFrame = document.getElementById("certFrame");
const certImage = document.getElementById("certImage");
const certTitle = document.getElementById("certTitle");
const downloadBtn = document.getElementById("downloadCert");
const closeBtn = document.getElementById("closeModal");
const backdrop = document.getElementById("certBackdrop");

document.querySelectorAll(".view-cert").forEach(btn => {
  btn.addEventListener("click", () => {
    const card = btn.closest(".cert-card");
    const file = card.dataset.file;
    const type = card.dataset.type;
    const title = card.dataset.title;

    certTitle.textContent = title;
    downloadBtn.href = file;

    if (type === "pdf") {
      certFrame.src = file;
      certFrame.style.display = "block";
      certImage.style.display = "none";
    } else {
      certImage.src = file;
      certImage.style.display = "block";
      certFrame.style.display = "none";
    }

    certModal.classList.add("open");
    document.body.style.overflow = "hidden";
  });
});

function closeViewer() {
  certModal.classList.remove("open");
  certFrame.src = "";
  certImage.src = "";
  document.body.style.overflow = "";
}

closeBtn.addEventListener("click", closeViewer);
backdrop.addEventListener("click", closeViewer);

document.addEventListener("keydown", e => {
  if (e.key === "Escape") closeViewer();
});


/* ===== CV Viewer (PDF) ===== */
const cvBtn = document.getElementById("cvBtn");
const cvDownload = document.getElementById("cvDownload");

const CV_FILE = "pdf/Rahul_Shrestha_CV.pdf"; // update path

cvBtn.addEventListener("click", e => {
  e.preventDefault();

  certTitle.textContent = "Curriculum Vitae";
  certFrame.src = CV_FILE;
  certFrame.style.display = "block";
  certImage.style.display = "none";
  downloadBtn.href = CV_FILE;

  certModal.classList.add("open");
  document.body.style.overflow = "hidden";
});

cvDownload.href = CV_FILE;
