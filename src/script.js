const menuToggle = document.getElementById('menu-toggle');
const navMenu = document.getElementById('primary-nav-menu');
const menuIcon = menuToggle.querySelector('i');

document.getElementById('year').textContent = new Date().getFullYear();

function setMenuState(isOpen) {
  navMenu.classList.toggle('active', isOpen);
  menuToggle.setAttribute('aria-expanded', String(isOpen));
  menuIcon.classList.toggle('fa-bars', !isOpen);
  menuIcon.classList.toggle('fa-times', isOpen);
}

menuToggle.addEventListener('click', () => {
  const isOpen = navMenu.classList.contains('active');
  setMenuState(!isOpen);
});

// Close the mobile menu after clicking a nav link
navMenu.querySelectorAll('.nav-link').forEach((link) => {
  link.addEventListener('click', () => setMenuState(false));
});