function toggleMenu() {
  const navLinks = document.getElementById('nav-links');
  const hamburger = document.querySelector('.hamburger');
  navLinks.classList.toggle('show');
  hamburger.classList.toggle('open');
}
