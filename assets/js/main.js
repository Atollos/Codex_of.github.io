// Ждём загрузки страницы
document.addEventListener('DOMContentLoaded', function() {
    // Находим кнопку
    const themeToggle = document.querySelector('.theme-toggle');
    
    // Функция для установки темы
    function setTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
        themeToggle.textContent = theme === 'dark' ? '🌙' : '☀️';
    }
    
    // Клик по кнопке
    themeToggle.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        setTheme(newTheme);
    });
    
    // Проверяем сохранённую тему
    const savedTheme = localStorage.getItem('theme') || 'dark';
    setTheme(savedTheme);
});