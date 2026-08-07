const LANGS = ["ru", "en", "de"];
let currentLang = localStorage.getItem("gz-lang") || "ru";
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const finePointer = window.matchMedia("(pointer: fine)").matches;

function setLang(lang) {
  if (!LANGS.includes(lang)) return;
  currentLang = lang;
  localStorage.setItem("gz-lang", lang);
  document.querySelectorAll("[data-ru]").forEach((el) => {
    el.textContent = el.getAttribute(`data-${lang}`) || el.getAttribute("data-ru");
  });
  LANGS.forEach((item) => {
    document.getElementById(`btn-${item}`)?.classList.toggle("active", item === lang);
  });
  document.documentElement.lang = lang;
}

function setupMenuToggle() {
  const toggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".nav-links");
  if (!toggle || !nav) return;
  toggle.addEventListener("click", () => nav.classList.toggle("open"));
}

function setupReveal() {
  const blocks = document.querySelectorAll(".reveal");
  if (reducedMotion || !("IntersectionObserver" in window)) {
    blocks.forEach((b) => b.classList.add("visible"));
    return;
  }
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.12 });
  blocks.forEach((b) => observer.observe(b));
}

function setupCursorGlow() {
  const glow = document.querySelector(".cursor-glow");
  if (!glow || !finePointer || reducedMotion) return;
  window.addEventListener("pointermove", (e) => {
    glow.style.left = `${e.clientX}px`;
    glow.style.top = `${e.clientY}px`;
  }, { passive: true });
}

function setupSpotlights() {
  if (!finePointer || reducedMotion) return;
  document.querySelectorAll(".spotlight-card").forEach((card) => {
    card.addEventListener("pointermove", (e) => {
      const rect = card.getBoundingClientRect();
      card.style.setProperty("--spotlight-x", `${e.clientX - rect.left}px`);
      card.style.setProperty("--spotlight-y", `${e.clientY - rect.top}px`);
    }, { passive: true });
  });
}

async function loadDiscordWidget(card) {
  const guildId = card.dataset.guildId;
  if (!guildId) return;
  try {
    const res = await fetch(`https://discord.com/api/guilds/${guildId}/widget.json`, { cache: "no-store" });
    if (!res.ok) throw new Error("unavailable");
    const data = await res.json();
    const online = card.querySelector(".server-online");
    const name = card.querySelector(".server-name");
    if (online) online.textContent = data.presence_count ?? "—";
    if (name && data.name) name.textContent = data.name;
  } catch {
    const online = card.querySelector(".server-online");
    if (online) online.textContent = "—";
  }
}

function setupParticles() {
  const canvas = document.getElementById("bgParticles");
  if (!canvas || reducedMotion) return;
  const ctx = canvas.getContext("2d");
  if (!ctx) return;
  let w, h, particles, frame;

  function resize() {
    const ratio = Math.min(window.devicePixelRatio || 1, 2);
    w = window.innerWidth;
    h = window.innerHeight;
    canvas.width = w * ratio;
    canvas.height = h * ratio;
    ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
    particles = Array.from({ length: w < 700 ? 22 : 46 }, () => ({
      x: Math.random() * w, y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.18, vy: (Math.random() - 0.5) * 0.18,
      r: Math.random() * 1.3 + 0.4, a: Math.random() * 0.35 + 0.08,
      gold: Math.random() > 0.5
    }));
  }

  function draw() {
    ctx.clearRect(0, 0, w, h);
    particles.forEach((p) => {
      p.x = (p.x + p.vx + w) % w;
      p.y = (p.y + p.vy + h) % h;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = p.gold ? `rgba(255,207,107,${p.a})` : `rgba(168,107,255,${p.a})`;
      ctx.fill();
    });
    frame = requestAnimationFrame(draw);
  }

  resize();
  draw();
  window.addEventListener("resize", resize, { passive: true });
  document.addEventListener("visibilitychange", () => {
    if (document.hidden) cancelAnimationFrame(frame);
    else draw();
  });
}

document.addEventListener("DOMContentLoaded", () => {
  setLang(currentLang);
  setupMenuToggle();
  setupReveal();
  setupCursorGlow();
  setupSpotlights();
  setupParticles();
  document.querySelectorAll(".discord-server-card[data-guild-id]").forEach(loadDiscordWidget);
});
