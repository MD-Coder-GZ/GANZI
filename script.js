const LANGS = ["en", "ru", "de"];
let currentLang = localStorage.getItem("gz-lang") || "en";

const prefersReducedMotion = window.matchMedia(
  "(prefers-reduced-motion: reduce)",
).matches;

const hasFinePointer = window.matchMedia("(pointer: fine)").matches;

function setLang(lang) {
  currentLang = lang;
  localStorage.setItem("gz-lang", lang);
  applyLang();
}

function applyLang() {
  document.querySelectorAll("[data-en]").forEach((element) => {
    const translation =
      element.getAttribute(`data-${currentLang}`) ||
      element.getAttribute("data-en");

    element.textContent = translation;
  });

  LANGS.forEach((lang) => {
    document
      .getElementById(`btn-${lang}`)
      ?.classList.toggle("active", lang === currentLang);
  });

  document.documentElement.lang = currentLang;
}

async function loadDiscordWidget(card) {
  const guildId = card.dataset.guildId;
  const url = `https://discord.com/api/guilds/${guildId}/widget.json`;

  try {
    const response = await fetch(url, { cache: "no-store" });

    if (!response.ok) {
      throw new Error("Discord widget unavailable");
    }

    const data = await response.json();

    const onlineElement = card.querySelector(".server-online");
    const nameElement = card.querySelector(".server-name");

    if (onlineElement) {
      onlineElement.textContent = data.presence_count ?? "—";
    }

    if (nameElement && data.name) {
      nameElement.textContent = data.name;
    }
  } catch {
    const onlineElement = card.querySelector(".server-online");

    if (onlineElement) {
      onlineElement.textContent = "—";
    }
  }
}

function setupRevealAnimation() {
  const blocks = document.querySelectorAll(".reveal");

  if (prefersReducedMotion) {
    blocks.forEach((block) => block.classList.add("visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.1 },
  );

  blocks.forEach((block) => observer.observe(block));
}

function setupCursorGlow() {
  const glow = document.querySelector(".cursor-glow");

  if (!glow || !hasFinePointer || prefersReducedMotion) return;

  window.addEventListener(
    "pointermove",
    (event) => {
      glow.style.left = `${event.clientX}px`;
      glow.style.top = `${event.clientY}px`;
    },
    { passive: true },
  );
}

function setupSpotlights() {
  if (!hasFinePointer || prefersReducedMotion) return;

  document.querySelectorAll(".spotlight-card").forEach((card) => {
    card.addEventListener(
      "pointermove",
      (event) => {
        const rect = card.getBoundingClientRect();

        card.style.setProperty(
          "--spotlight-x",
          `${event.clientX - rect.left}px`,
        );

        card.style.setProperty(
          "--spotlight-y",
          `${event.clientY - rect.top}px`,
        );
      },
      { passive: true },
    );
  });
}

function setupTilt() {
  if (!hasFinePointer || prefersReducedMotion) return;

  const cards = document.querySelectorAll(
    ".social-card, .partner-card, .gear-card",
  );

  cards.forEach((card) => {
    card.addEventListener(
      "pointermove",
      (event) => {
        const rect = card.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;

        const rotateX = ((y - rect.height / 2) / rect.height) * -7;
        const rotateY = ((x - rect.width / 2) / rect.width) * 7;

        card.style.transform =
          `perspective(750px) rotateX(${rotateX}deg) ` +
          `rotateY(${rotateY}deg) translateY(-4px)`;
      },
      { passive: true },
    );

    card.addEventListener("pointerleave", () => {
      card.style.transform = "";
    });
  });
}

function setupHeroParticles() {
  const canvas = document.getElementById("heroParticles");
  const hero = document.querySelector(".hero");

  if (!canvas || !hero || prefersReducedMotion) return;

  const context = canvas.getContext("2d");

  if (!context) return;

  let width = 0;
  let height = 0;
  let particles = [];
  let animationFrame = null;
  let isDrawing = false;

  const particleCount = window.innerWidth < 700 ? 16 : 34;

  function resizeCanvas() {
    const pixelRatio = Math.min(window.devicePixelRatio || 1, 2);

    width = hero.clientWidth;
    height = hero.clientHeight;

    canvas.width = width * pixelRatio;
    canvas.height = height * pixelRatio;

    context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
  }

  function createParticles() {
    particles = Array.from({ length: particleCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.22,
      vy: (Math.random() - 0.5) * 0.22,
      radius: Math.random() * 1.1 + 0.35,
      alpha: Math.random() * 0.26 + 0.08,
    }));
  }

  function drawParticles() {
    if (!isDrawing) return;

    context.clearRect(0, 0, width, height);

    particles.forEach((particle) => {
      particle.x += particle.vx;
      particle.y += particle.vy;

      if (particle.x < -5) particle.x = width + 5;
      if (particle.x > width + 5) particle.x = -5;
      if (particle.y < -5) particle.y = height + 5;
      if (particle.y > height + 5) particle.y = -5;

      context.beginPath();
      context.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);

      context.fillStyle = `rgba(255, 170, 50, ${particle.alpha})`;
      context.fill();
    });

    for (let i = 0; i < particles.length; i += 1) {
      for (let j = i + 1; j < particles.length; j += 1) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance >= 92) continue;

        context.beginPath();
        context.moveTo(particles[i].x, particles[i].y);
        context.lineTo(particles[j].x, particles[j].y);
        context.strokeStyle = `rgba(146, 92, 255, ${0.06 * (1 - distance / 92)})`;
        context.lineWidth = 0.45;
        context.stroke();
      }
    }

    animationFrame = requestAnimationFrame(drawParticles);
  }

  function restartParticles() {
    resizeCanvas();
    createParticles();
  }

  function startParticles() {
    if (isDrawing) return;

    isDrawing = true;
    drawParticles();
  }

  function stopParticles() {
    isDrawing = false;

    if (animationFrame) {
      cancelAnimationFrame(animationFrame);
    }
  }

  restartParticles();
  startParticles();

  window.addEventListener("resize", restartParticles, { passive: true });

  document.addEventListener("visibilitychange", () => {
    if (document.hidden) {
      stopParticles();
    } else {
      startParticles();
    }
  });
}

/* ===== NEW: COOKIE BANNER ===== */
function setupCookieBanner() {
  const banner = document.getElementById("cookieBanner");
  if (!banner) return;

  const consent = localStorage.getItem("gz-cookie-consent");
  if (consent) return;

  setTimeout(() => {
    banner.classList.add("show");
  }, 1200);
}

function acceptCookies(all) {
  const banner = document.getElementById("cookieBanner");
  if (banner) banner.classList.remove("show");
  localStorage.setItem("gz-cookie-consent", all ? "all" : "essential");
}

function setupActiveNav() {
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".topbar-nav a");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          navLinks.forEach((link) => {
            link.classList.toggle(
              "active",
              link.getAttribute("href") === `#${entry.target.id}`,
            );
          });
        }
      });
    },
    { rootMargin: "-40% 0px -55% 0px", threshold: 0 },
  );

  sections.forEach((section) => observer.observe(section));
}

/* ===== Scroll to top ===== */
function setupScrollTop() {
  const btn = document.getElementById("scrollTop");
  if (!btn) return;

  const toggle = () => {
    if (window.scrollY > 500) {
      btn.classList.add("visible");
    } else {
      btn.classList.remove("visible");
    }
  };

  window.addEventListener("scroll", toggle, { passive: true });
  toggle();

  btn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: prefersReducedMotion ? "auto" : "smooth",
    });
  });
}

/* ===== MODALS ===== */
function openModal(id) {
  const modal = document.getElementById(id);
  const overlay = document.getElementById("modalOverlay");
  if (!modal) return;
  if (overlay) overlay.classList.add("active");
  modal.classList.add("active");
  if (typeof modal.showModal === "function") modal.showModal();
  document.body.style.overflow = "hidden";
  applyLang();
}

function closeAllModals() {
  document.querySelectorAll(".modal").forEach((m) => {
    m.classList.remove("active");
    if (typeof m.close === "function") m.close();
  });
  const overlay = document.getElementById("modalOverlay");
  if (overlay) overlay.classList.remove("active");
  document.body.style.overflow = "";
}

function showCookieBanner() {
  const banner = document.getElementById("cookieBanner");
  if (banner) {
    banner.classList.add("show");
    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
  }
}

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeAllModals();
});

document.addEventListener("DOMContentLoaded", () => {
  applyLang();
  setupRevealAnimation();

  document
    .querySelectorAll(".discord-server-card[data-guild-id]")
    .forEach(loadDiscordWidget);

  setupCursorGlow();
  setupSpotlights();
  setupTilt();
  setupHeroParticles();
  setupCookieBanner();
  setupActiveNav();
  setupScrollTop();
});
