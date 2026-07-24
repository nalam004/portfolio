// Navbar scroll animation
const navbar = document.querySelector('nav');

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
const skillList = document.querySelector(".skills-list");

skills.forEach(skill => {
  const item = document.createElement("li");
  const icon = document.createElement("img");
  
  icon.src = skill.icon;
  icon.alt = "";
  icon.setAttribute("aria-hidden", "true");

  item.append(icon, document.createTextNode(skill.name));
  skillList.append(item);
});

// Certificate carousel component
const swiper = new Swiper('.swiper', {
  direction: 'vertical',
  loop: true,

  pagination: {
    el: '.swiper-pagination',
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});