const LANGS = ["en", "ru", "de"];
let currentLang = localStorage.getItem("gz-lang") || "en";

function setLang(lang) {
  currentLang = lang;
  localStorage.setItem("gz-lang", lang);
  applyLang();
}

function applyLang() {
  document.querySelectorAll("[data-en]").forEach((element) => {
    element.textContent =
      element.getAttribute(`data-${currentLang}`) ||
      element.getAttribute("data-en");
  });

  LANGS.forEach((lang) => {
    document
      .getElementById(`btn-${lang}`)
      ?.classList.toggle("active", lang === currentLang);
  });

  document.documentElement.lang = currentLang;
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
    { threshold: 0.12 }
  );

  blocks.forEach((block) => observer.observe(block));

  const glow = document.querySelector(".cursor-glow");

  window.addEventListener("pointermove", (event) => {
    glow.style.left = `${event.clientX}px`;
    glow.style.top = `${event.clientY}px`;
  });
});
