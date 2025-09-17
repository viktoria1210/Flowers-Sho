// Функція для показу повідомлення при кліку на кнопку
function showMessage() {
    alert("Дякуємо за ваше замовлення! Ми зв'яжемося з вами найближчим часом.");
}

// Обробка форми зворотного зв'язку
document.getElementById('messageForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Зупиняємо стандартну відправку форми
    
    // Отримуємо значення з полів форми
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    // Перевіряємо, чи заповнені всі поля
    if (name && email && message) {
        alert("Дякуємо, " + name + "! Ваше повідомлення відправлено.");
        // Очищаємо форму
        document.getElementById('messageForm').reset();
    } else {
        alert("Будь ласка, заповніть всі поля.");
    }
});

// Проста функція для зміни кольору заголовків при кліку
const headings = document.querySelectorAll('h2');
headings.forEach(heading => {
    heading.addEventListener('click', function() {
        this.style.color = this.style.color === 'purple' ? '#ff66a3' : 'purple';
    });
});
