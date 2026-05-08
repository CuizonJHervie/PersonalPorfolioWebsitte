// Simple Navigation Scroll Effect
window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.style.background = '#0f173d';
        nav.style.padding = '10px 0';
    } else {
        nav.style.background = '#1a2a6c';
        nav.style.padding = '20px 0';
    }
});

// Contact Form Alert
const contactForm = document.getElementById('contact-form');
if(contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Thank you, Jhervie! Your message has been sent (simulation).');
        contactForm.reset();
    });
}
