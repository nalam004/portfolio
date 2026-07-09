// Navbar scroll animation
const navbar = document.querySelector('header nav');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// Navbar mobile toggle
const menuIcon = document.querySelector('.menu-icon');
const navLinks = document.querySelector('#nav-links');

function toggleMenu() {
  const isOpen = navLinks.classList.toggle('active');
  menuIcon.setAttribute('aria-expanded', isOpen);
  menuIcon.innerHTML = isOpen ? '&#10005;' : '&#9776;';
}

function closeMenu() {
  navLinks.classList.remove('active');
  menuIcon.setAttribute('aria-expanded', false);
  menuIcon.innerHTML = '&#9776;';
}

menuIcon.addEventListener('click', toggleMenu);

// Close menu when a link is clicked
document.querySelectorAll('#nav-links a').forEach(link => {
  link.addEventListener('click', closeMenu);
});

// Close menu when clicking outside of it
document.addEventListener('click', (e) => {
  const isClickInsideNav = e.target.closest('nav');
  if (!isClickInsideNav && navLinks.classList.contains('active')) {
    closeMenu();
  }
});

// Appends skills data to skills section
const skillList = document.getElementsByClassName("skills-list")[0];

skills.forEach(skill => {
  const item = document.createElement("li");
  const icon = document.createElement("img");
  icon.src = skill.icon;
  icon.alt = skill.name;
  item.innerHTML = skill.name;
  item.prepend(icon);
  skillList.append(item);
});