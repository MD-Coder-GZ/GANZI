// Language switcher
const LANGS = ['en', 'ru', 'de'];
let currentLang = localStorage.getItem('gz-lang') || 'en';

function setLang(lang) {
  currentLang = lang;
  localStorage.setItem('gz-lang', lang);
  applyLang();
}

function applyLang() {
  // Update all data-{lang} elements
  document.querySelectorAll('[data-en]').forEach(el => {
    const val = el.getAttribute('data-' + currentLang) || el.getAttribute('data-en');
    el.textContent = val;
  });
  // Update buttons
  LANGS.forEach(l => {
    const btn = document.getElementById('btn-' + l);
    if (btn) btn.classList.toggle('active', l === currentLang);
  });
}

document.addEventListener('DOMContentLoaded', applyLang);