// Navbar scroll animation
const navbar = document.querySelector('header nav');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

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

const skillList = document.getElementsByClassName("skills-list")[0];

// Appends skills data to skills section
skills.forEach(skill => {
  const item = document.createElement("li");
  const icon = document.createElement("img");
  icon.src = skill.icon;
  icon.alt = skill.name;
  item.innerHTML = skill.name;
  item.prepend(icon);
  skillList.append(item);
});