document.addEventListener('DOMContentLoaded', function() {
    console.log('Документ загружен!');
    
    const demoButton = document.getElementById('demoButton');
    const demoText = document.getElementById('demoText');
    
    demoButton.addEventListener('click', function() {
        demoText.textContent = 'Отлично! Кнопка работает! 🎉';
        demoText.style.color = '#27ae60';
        demoText.style.fontWeight = 'bold';
        
        // Анимация
        demoButton.style.transform = 'scale(0.95)';
        setTimeout(() => {
            demoButton.style.transform = 'scale(1)';
        }, 150);
    });
    
    // Дополнительные функции для демонстрации
    console.log('Примеры JavaScript:');
    
    // Пример массива
    const technologies = ['HTML', 'CSS', 'JavaScript', 'Git'];
    console.log('Технологии:', technologies);
    
    // Пример функции
    function greet(name) {
        return `Привет, ${name}!`;
    }
    console.log(greet('разработчик'));
});