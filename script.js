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
});
