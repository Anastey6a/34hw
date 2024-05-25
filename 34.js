// Масив з URL-адресами зображень
let images = [
    'images/1.jpg',
    'images/2.jpg',
    'images/3.jpg',
    'images/4.jpg',
    'images/5.jpg',
    'images/6.jpg',
    'images/7.jpg',
    'images/8.jpg',
    'images/9.jpg'
];

// Функція для отримання випадкового елемента з масиву
function getRandomImage() {
    let randomIndex = Math.floor(Math.random() * images.length);
    return images[randomIndex];
}

// Виводимо випадкове зображення
let randomImage = getRandomImage();
console.log(randomImage); // або використовуйте цей URL для вставки зображення на сторінку
