// Delay content sections' animation to improve UX
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('.content-section');
    const triggerBottom = window.innerHeight / 1.3;

    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop < triggerBottom) {
            section.classList.add('show');
        }
    });
});