'use strict';

let currentLang = 'fr';

function toggleDark() {
  document.body.classList.toggle('dark');
}

function toggleLang() {
  currentLang = currentLang === 'fr' ? 'en' : 'fr';
  document.documentElement.lang = currentLang;
  const button = document.getElementById('langBtn');
  if (button) button.textContent = currentLang === 'fr' ? 'EN' : 'FR';

  document.querySelectorAll('[data-fr][data-en]').forEach((element) => {
    element.textContent = element.getAttribute(`data-${currentLang}`);
  });
}

function toggleExtra(id) {
  const element = document.getElementById(id);
  if (!element) return;
  element.style.display = getComputedStyle(element).display === 'none' ? 'block' : 'none';
}
