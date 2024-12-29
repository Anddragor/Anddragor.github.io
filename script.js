function createSnowflake() {
    const snowflake = document.createElement('div');
    snowflake.className = 'snowflake';

    const size = Math.random() * 5 + 5; // Размер от 5 до 10px
    snowflake.style.width = size + 'px';
    snowflake.style.height = size + 'px';
    
    // Начальная позиция снежинки
    snowflake.style.left = Math.random() * window.innerWidth + 'px'; 
    snowflake.style.top = '0px'; // Начальная позиция по вертикали

    // Начальная скорость падения
    const fallSpeed = Math.random() * 3 + 2; // Падаем со случайной скоростью (от 2 до 5 сек)
    const driftSpeed = Math.random() * 2 - 1; // Случайная скорость отклонения по горизонтали (-1 до 1)
    
    // Для визуализации снега под наклоном мы будем использовать абсолютное позиционирование
    snowflake.style.position = 'absolute';

    document.body.appendChild(snowflake);

    // Анимация падения снежинки с наклоном
    setTimeout(() => {
        snowflake.style.transition = `top ${fallSpeed}s linear, left ${fallSpeed + driftSpeed}s linear`;
        snowflake.style.top = window.innerHeight + 'px'; // Конечная позиция по вертикали

        // Ограничиваем отклонение по горизонтали, чтобы снежинка не выходила за экран
        let finalLeft = parseFloat(snowflake.style.left) + (driftSpeed * window.innerWidth);
        finalLeft = Math.max(0, Math.min(window.innerWidth, finalLeft)); // Оставляем значение в пределах экрана
        snowflake.style.left = finalLeft + 'px'; // Конечная позиция по горизонтали
    }, 6);

    // Удаляем снежинку после анимации
    setTimeout(() => {
        snowflake.remove();
    }, fallSpeed * 700); // Время удаления после падения
}

// Функция для вычисления интервала генерации снежинок в зависимости от ширины экрана
function getSnowflakeInterval() {
    const screenWidth = window.innerWidth;

    // Если экран меньше 600px, то увеличиваем интервал генерации снежинок
    if (screenWidth < 600) {
        return 100; // Меньший интервал на мобильных устройствах
    } else if (screenWidth < 900) {
        return 50; // Средний интервал для планшетов
    } else {
        return 20; // Стандартный интервал для десктопов
    }
}

// Создаем снежинки с динамическим интервалом
setInterval(createSnowflake, getSnowflakeInterval());
