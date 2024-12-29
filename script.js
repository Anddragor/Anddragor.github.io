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

// Создаем снежинки каждые 20 мс
setInterval(createSnowflake, 20);
