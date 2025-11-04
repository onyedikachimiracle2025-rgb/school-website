// ===== HAMBURGER MENU TOGGLE =====
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  hamburger.classList.toggle('open'); // optional: for animation
});

// ===== SMOOTH SCROLLING =====
document.querySelectorAll('nav a').forEach(link => {
  // Only handle internal links
  if (link.getAttribute('href').startsWith('#')) {
    link.addEventListener('click', e => {
      e.preventDefault();
      const targetId = link.getAttribute('href').substring(1);
      const target = document.getElementById(targetId);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }

      // Close mobile menu after clicking a link
      navLinks.classList.remove('active');
      hamburger.classList.remove('open');
    });
  }
});

// ===== OPTIONAL: CLOSE MENU WHEN CLICKING OUTSIDE =====
document.addEventListener('click', e => {
  if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) {
    navLinks.classList.remove('active');
    hamburger.classList.remove('open');
  }
});
