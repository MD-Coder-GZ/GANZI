const LANGS = ["ru", "en", "de"];
let currentLang = localStorage.getItem("gz-lang") || "ru";
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const finePointer = window.matchMedia("(pointer: fine)").matches;

function setLang(lang) {
  if (!LANGS.includes(lang)) return;
  currentLang = lang;
  localStorage.setItem("gz-lang", lang);

  document.querySelectorAll("[data-ru]").forEach((element) => {
    element.textContent = element.getAttribute(`data-${lang}`) || element.getAttribute("data-ru");
  });

  LANGS.forEach((item) => {
    document.getElementById(`btn-${item}`)?.classList.toggle("active", item === lang);
  });
  document.documentElement.lang = lang;
}

function setupReveal() {
  const blocks = document.querySelectorAll(".reveal");
  if (reducedMotion || !("IntersectionObserver" in window)) {
    blocks.forEach((block) => block.classList.add("visible"));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.12 });

  blocks.forEach((block) => observer.observe(block));
}

function setupCursorGlow() {
  const glow = document.querySelector(".cursor-glow");
  if (!glow || !finePointer || reducedMotion) return;

  window.addEventListener("pointermove", (event) => {
    glow.style.left = `${event.clientX}px`;
    glow.style.top = `${event.clientY}px`;
  }, { passive: true });
}

function setupParticles() {
  const canvas = document.getElementById("heroParticles");
  const hero = document.querySelector(".hero");
  if (!canvas || !hero || reducedMotion) return;

  const context = canvas.getContext("2d");
  if (!context) return;
  let width = 0;
  let height = 0;
  let particles = [];
  let frame;

  function resize() {
    const ratio = Math.min(window.devicePixelRatio || 1, 2);
    width = hero.clientWidth;
    height = hero.clientHeight;
    canvas.width = width * ratio;
    canvas.height = height * ratio;
    context.setTransform(ratio, 0, 0, ratio, 0, 0);
    particles = Array.from({ length: width < 700 ? 16 : 34 }, () => ({
      x: Math.random() * width, y: Math.random() * height,
      vx: (Math.random() - .5) * .22, vy: (Math.random() - .5) * .22,
      r: Math.random() + .35, a: Math.random() * .22 + .06
    }));
  }

  function draw() {
    context.clearRect(0, 0, width, height);
    particles.forEach((p) => {
      p.x = (p.x + p.vx + width) % width;
      p.y = (p.y + p.vy + height) % height;
      context.beginPath();
      context.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      context.fillStyle = `rgba(255,170,50,${p.a})`;
      context.fill();
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
  setupReveal();
  setupCursorGlow();
  setupParticles();
});
