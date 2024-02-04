const darkModeToggle = document.getElementById('darkModeToggle');
const savedTheme = localStorage.getItem('theme');
document.body.classList.toggle(savedTheme || 'light-mode');

darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    const currentTheme = document.body.classList.contains('dark-mode') ? 'dark-mode' : 'light-mode';
    localStorage.setItem('theme', currentTheme);
    
    updateTextStyles(currentTheme);
});

function updateTextStyles(theme) {
    const allTextElements = document.querySelectorAll('body *');
    allTextElements.forEach(element => {
        element.classList.toggle('dark-mode-text', theme === 'dark-mode');
    });
}