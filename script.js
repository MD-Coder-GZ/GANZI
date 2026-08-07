(() => {
  "use strict";

  const menuButton = document.querySelector(".menu");
  const navigation = document.querySelector(".nav-links");
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function closeMenu() {
    if (!menuButton || !navigation) return;
    navigation.classList.remove("open");
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.textContent = "☰";
  }

  function toggleMenu() {
    if (!menuButton || !navigation) return;
    const isOpen = navigation.classList.toggle("open");
    menuButton.setAttribute("aria-expanded", String(isOpen));
    menuButton.textContent = isOpen ? "×" : "☰";
  }

  if (menuButton && navigation) {
    menuButton.addEventListener("click", toggleMenu);

    navigation.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", closeMenu);
    });

    document.addEventListener("click", (event) => {
      if (!navigation.classList.contains("open")) return;
      if (!navigation.contains(event.target) && !menuButton.contains(event.target)) closeMenu();
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") closeMenu();
    });
  }

  const revealItems = document.querySelectorAll(".card, .community-text, .delta-card, .support");

  if (reducedMotion) {
    revealItems.forEach((element) => element.classList.add("is-visible"));
  } else if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.12 }
    );

    revealItems.forEach((element) => {
      element.classList.add("reveal");
      observer.observe(element);
    });
  }

  const sections = [...document.querySelectorAll("main section[id]")];
  const navLinks = [...document.querySelectorAll('.nav-links a[href^="#"]')];

  if (sections.length && navLinks.length && "IntersectionObserver" in window) {
    const sectionObserver = new IntersectionObserver(
      (entries) => {
        const current = entries.find((entry) => entry.isIntersecting);
        if (!current) return;

        navLinks.forEach((link) => {
          const isCurrent = link.getAttribute("href") === `#${current.target.id}`;
          link.classList.toggle("is-current", isCurrent);
          if (isCurrent) link.setAttribute("aria-current", "page");
          else link.removeAttribute("aria-current");
        });
      },
      { rootMargin: "-35% 0px -55% 0px", threshold: 0 }
    );

    sections.forEach((section) => sectionObserver.observe(section));
  }
})();
