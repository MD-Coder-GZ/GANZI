const LANGS = ["en", "ru", "de"];
let currentLang = localStorage.getItem("gz-lang") || "en";

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
    const response = await fetch(url);

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
  } catch (error) {
    const onlineElement = card.querySelector(".server-online");

    if (onlineElement) {
      onlineElement.textContent = "—";
    }
  }
}

document.addEventListener("DOMContentLoaded", () => {
  applyLang();

  const blocks = document.querySelectorAll(".reveal");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );

  blocks.forEach((block) => observer.observe(block));

  document
    .querySelectorAll(".discord-server-card[data-guild-id]")
    .forEach(loadDiscordWidget);

  const glow = document.querySelector(".cursor-glow");

  if (glow && window.matchMedia("(pointer: fine)").matches) {
    window.addEventListener("pointermove", (event) => {
      glow.style.left = `${event.clientX}px`;
      glow.style.top = `${event.clientY}px`;
    });
  }
}

/* ===== 3D TILT EFFECT ===== */
document.querySelectorAll('.social-card, .partner-card, .gear-card, .discord-server-card, .visual-card').forEach(card => {
  card.addEventListener('mousemove', e => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const cx = rect.width / 2;
    const cy = rect.height / 2;
    const rx = (y - cy) / cy * -7;
    const ry = (x - cx) / cx * 7;
    card.style.transform = `perspective(700px) rotateX(${rx}deg) rotateY(${ry}deg) translateY(-4px) scale(1.01)`;
  });
  card.addEventListener('mouseleave', () => {
    card.style.transform = '';
  });
});

/* ===== SPOTLIGHT EFFECT ===== */
document.querySelectorAll('.spotlight-card').forEach(card => {
  card.addEventListener('mousemove', e => {
    const rect = card.getBoundingClientRect();
    card.style.setProperty('--sx', (e.clientX - rect.left) + 'px');
    card.style.setProperty('--sy', (e.clientY - rect.top) + 'px');
  });
});

/* ===== HERO PARTICLES ===== */
const pCanvas = document.getElementById('heroParticles');
if (pCanvas) {
  const pCtx = pCanvas.getContext('2d');
  let pW, pH;
  const pList = [];

  function resizeP() {
    const hero = pCanvas.parentElement;
    pW = pCanvas.width = hero.offsetWidth;
    pH = pCanvas.height = hero.offsetHeight;
  }
  resizeP();
  window.addEventListener('resize', resizeP);

  for (let i = 0; i < 45; i++) {
    pList.push({
      x: Math.random() * pW,
      y: Math.random() * pH,
      vx: (Math.random() - 0.5) * 0.35,
      vy: (Math.random() - 0.5) * 0.35,
      r: Math.random() * 1.3 + 0.4,
      a: Math.random() * 0.4 + 0.12
    });
  }

  function drawP() {
    pCtx.clearRect(0, 0, pW, pH);
    pList.forEach(p => {
      p.x += p.vx;
      p.y += p.vy;
      if (p.x < 0) p.x = pW;
      if (p.x > pW) p.x = 0;
      if (p.y < 0) p.y = pH;
      if (p.y > pH) p.y = 0;
      pCtx.beginPath();
      pCtx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      pCtx.fillStyle = `rgba(255, 157, 0, ${p.a})`;
      pCtx.fill();
    });

    for (let i = 0; i < pList.length; i++) {
      for (let j = i + 1; j < pList.length; j++) {
        const dx = pList[i].x - pList[j].x;
        const dy = pList[i].y - pList[j].y;
        const d = Math.sqrt(dx * dx + dy * dy);
        if (d < 100) {
          pCtx.beginPath();
          pCtx.moveTo(pList[i].x, pList[i].y);
          pCtx.lineTo(pList[j].x, pList[j].y);
          pCtx.strokeStyle = `rgba(255, 157, 0, ${0.07 * (1 - d / 100)})`;
          pCtx.lineWidth = 0.4;
          pCtx.stroke();
        }
      }
    }
    requestAnimationFrame(drawP);
  }
  drawP();
}
});
