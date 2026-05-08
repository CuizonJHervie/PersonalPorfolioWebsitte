const menuBtn = document.querySelector('.menu-btn');
const navLinks = document.querySelector('nav ul');

menuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});
