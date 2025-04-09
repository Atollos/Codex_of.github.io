// Анимация появления секций
const scrollSections = document.querySelectorAll('[data-scroll-section]');

// Проверка видимости секции
function checkScroll() {
    scrollSections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop < window.innerHeight * 0.75) {
            section.classList.add('is-visible');
        }
    });
}

// Параллакс-эффект
function updateParallax() {
    const scrollY = window.scrollY;
    document.querySelectorAll('[data-scroll-speed]').forEach(el => {
        const speed = parseFloat(el.getAttribute('data-scroll-speed'));
        el.style.transform = `translateY(${scrollY * speed}px)`;
    });
}

// Инициализация
window.addEventListener('load', function() {
    checkScroll();
    updateParallax();
    
    // Оптимизация производительности
    window.addEventListener('scroll', function() {
        requestAnimationFrame(() => {
            checkScroll();
            updateParallax();
        });
    });
});