// Ждём полной загрузки DOM
document.addEventListener('DOMContentLoaded', function() {
    // Элемент переключения темы
    const themeToggle = document.querySelector('.theme-toggle');
    
    // Функция установки темы
    function setTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
        themeToggle.textContent = theme === 'dark' ? '🌙' : '☀️';
    }
    
    // Обработчик клика
    themeToggle.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        setTheme(currentTheme === 'dark' ? 'light' : 'dark');
    });
    
    // Проверка сохранённой темы
    const savedTheme = localStorage.getItem('theme') || 'dark';
    setTheme(savedTheme);
});