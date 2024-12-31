// Находим все элементы с классом 'gift'
const gifts = document.querySelectorAll('.gift');

// Находим слой для затемнения
const overlay = document.getElementById('overlay');

// Находим элемент audio для воспроизведения звука
const giftSound = document.getElementById('gift-sound');

// Находим контейнер для изображения и кнопку закрытия
const centerImage = document.getElementById('center-image');
const closeBtn = document.getElementById('close-image-btn');

// Массив с путями к изображениям для каждого подарка
const images = [
    "collage1.jpg",  // для gift1
    "collage2.jpg",  // для gift2
    "collage3.jpg"   // для gift3
];

// Устанавливаем громкость звука на 30% (0.3)
giftSound.volume = 0.3;

// Для каждого подарка добавляем обработчик события клика
gifts.forEach((gift, index) => {
    gift.addEventListener('click', function() {
        console.log('Подарок был кликнут');

        // Воспроизводим звук
        giftSound.play();

        // Добавляем класс для анимации исчезновения
        this.classList.add('fade-out');

        // Ожидаем окончания анимации и затем скрываем элемент
        setTimeout(() => {
            this.style.visibility = 'hidden';  // Скрываем элемент, но оставляем его в потоке

            // Показать изображение в центре экрана в зависимости от индекса
            const imgSrc = images[index];
            centerImage.querySelector('img').src = imgSrc;  // Обновляем изображение
            centerImage.style.display = 'block';
            overlay.style.display = 'block'; // Показываем затемняющий слой
            document.body.classList.add('modal-open'); // Блокируем взаимодействие с другими элементами
        }, 300); // Задержка, чтобы дать время анимации (например, 300 мс)
    });
});

giftSound.addEventListener('ended', function() {
    giftSound.currentTime = 0; // Сбрасываем воспроизведение после окончания
});

// Обработчик для клика по всей странице (кроме самого изображения или затемняющего слоя)
document.addEventListener('click', function(event) {
    // Проверяем, что клик не был внутри контейнера изображения или слоя затемнения
    if (!centerImage.contains(event.target) && !overlay.contains(event.target) && event.target !== closeBtn) {
        // Скрываем изображение и затемняющий слой
        centerImage.style.display = 'none';
        overlay.style.display = 'none';
        document.body.classList.remove('modal-open'); // Восстанавливаем взаимодействие с остальными элементами
    }
});

