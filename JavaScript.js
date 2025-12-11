/* 1. SMOOTH SCROLL */
document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", function (e) {
        e.preventDefault();
        const targetId = this.getAttribute("href");
        const targetSection = document.querySelector(targetId);
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: "smooth" });
        }
    });
});

/* 2. SCROLL REVEAL (The cards sliding up) */
const observerElements = document.querySelectorAll('.section, .project-card, .cert-card, .grid-item');
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
});
observerElements.forEach((el) => {
    el.classList.add('hidden');
    observer.observe(el);
});