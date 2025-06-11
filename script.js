console.log("J.P CleanAuto - Site prêt.");
document.querySelectorAll('.btn').forEach(btn => {
  btn.addEventListener('mousedown', function() {
    btn.classList.add('pressed');
  });
  btn.addEventListener('mouseup', function() {
    btn.classList.remove('pressed');
  });
  btn.addEventListener('mouseleave', function() {
    btn.classList.remove('pressed');
  });
});
window.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.btn').forEach((btn, i) => {
    setTimeout(() => btn.classList.add('animated'), 180 + i*80);
  });
});
// Effet ripple sur tous les boutons
document.querySelectorAll('.btn').forEach(btn => {
  btn.style.position = 'relative';
  btn.style.overflow = 'hidden';
  btn.addEventListener('click', function(e) {
    let ripple = document.createElement('span');
    ripple.className = 'ripple-effect';
    let rect = btn.getBoundingClientRect();
    ripple.style.left = (e.clientX - rect.left) + 'px';
    ripple.style.top = (e.clientY - rect.top) + 'px';
    btn.appendChild(ripple);
    setTimeout(() => ripple.remove(), 600);
  });
});
window.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.btn').forEach((btn, i) => {
    setTimeout(() => btn.classList.add('visible'), 220 + i*90);
  });
});
window.addEventListener('DOMContentLoaded', () => {
  // apparition animée des boutons (optionnel)
  document.querySelectorAll('.btn').forEach((btn, i) => {
    setTimeout(() => btn.classList.add('visible'), 220 + i*90);
  });

  // Popup promo automatique si jamais vue
  if (!localStorage.getItem('promo_seen')) {
    setTimeout(() => {
      let promoModal = new bootstrap.Modal(document.getElementById('promoModal'));
      promoModal.show();
      localStorage.setItem('promo_seen', '1'); // la popup s'affichera qu'une fois par navigateur
    }, 2000); // délai d'apparition en ms (ici 2s)
  }
});
