function showPage(pageId) {
    // Скриване на всички секции
    const sections = document.querySelectorAll('main section');
    sections.forEach(section => section.style.display = 'none');

    // Показване на избраната секция
    document.getElementById(pageId).style.display = 'block';
}

document.addEventListener('DOMContentLoaded', () => {
    showPage('home');
});
