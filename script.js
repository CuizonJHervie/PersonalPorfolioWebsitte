// Function para sa Mobile Menu Toggle
const burger = document.getElementById('burgerMenu');
const nav = document.getElementById('navLinks');

burger.addEventListener('click', () => {
    // Simple alert muna para mapatunayan na gumagana ang JS mo
    alert("Jhervie, gumagana na ang script.js file mo!");
    
    // Pwede mong dagdagan ng code dito para sa mobile menu animation
    nav.classList.toggle('nav-active');
});

// Console log para sa debugging (makikita sa Inspect Element)
console.log("Jhervie Cuizon Portfolio System 2026: Online");
