// Находим все элементы с классом 'gift'
const gifts = document.querySelectorAll('.gift');

// Находим контейнер для изображения и кнопку закрытия
const centerImage = document.getElementById('center-image');
const closeBtn = document.getElementById('close-image-btn');

// Для каждого подарка добавляем обработчик события клика
gifts.forEach(gift => {
    gift.addEventListener('click', function() {
        console.log('Подарок был кликнут');
        // Добавляем класс для анимации исчезновения
        this.classList.add('fade-out');

        // Ожидаем окончания анимации и затем скрываем элемент
        setTimeout(() => {
            this.style.visibility = 'hidden';  // Скрываем элемент, но оставляем его в потоке
            // Или, если хотите полностью удалить из DOM, используйте:
            // this.remove();

            // Показать изображение в центре экрана
            centerImage.style.display = 'block';
            document.body.classList.add('modal-open'); // Блокируем взаимодействие с другими элементами
        }, 300); // Задержка, чтобы дать время анимации (например, 300 мс)
    });
});

// Обработчик для клика по всей странице (кроме самого изображения)
document.addEventListener('click', function(event) {
    // Проверяем, что клик не был внутри контейнера изображения
    if (!centerImage.contains(event.target) && event.target !== closeBtn) {
        // Скрываем изображение
        centerImage.style.display = 'none';
        document.body.classList.remove('modal-open'); // Восстанавливаем взаимодействие с остальными элементами
    }
});
