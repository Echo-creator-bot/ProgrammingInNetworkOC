document.getElementById('booking-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const nameInput = document.getElementById('name');
    const name = nameInput.value;
    const dateInput = document.getElementById('date');
    const timeInput = document.getElementById('time');
    const guests = document.getElementById('guests').value;
    const bookingMessageDiv = document.getElementById('booking-message');

    // Сбрасываем предыдущие сообщения об ошибках
    bookingMessageDiv.textContent = '';
    bookingMessageDiv.style.color = 'inherit';

    // Проверка на пустые значения
    if (!name || !dateInput.value || !timeInput.value || !guests) {
        bookingMessageDiv.textContent = "Пожалуйста, заполните все поля формы.";
        bookingMessageDiv.style.color = 'red';
        return;
    }

    // Проверка имени на наличие цифр
    if (/\d/.test(name)) {
        bookingMessageDiv.textContent = "Пожалуйста, введите корректное имя (не должно содержать цифр).";
        bookingMessageDiv.style.color = 'red';
        return;
    }

    const selectedDate = new Date(dateInput.value + 'T' + timeInput.value);
    const now = new Date();

     // Проверка на то, что ресторан закрыт в это время
    const selectedHours = selectedDate.getHours();
    if (selectedHours >= 0 && selectedHours < 11) {
          bookingMessageDiv.textContent = "В это время ресторан закрыт. Пожалуйста, выберите другое время.";
         bookingMessageDiv.style.color = 'red';
         return;
    }

    // Проверка на то, что выбранная дата и время в будущем
    if (selectedDate <= now) {
        bookingMessageDiv.textContent = "Пожалуйста, выберите дату и время в будущем.";
        bookingMessageDiv.style.color = 'red';
        return;
    }

     // Проверка на то, что количество гостей - положительное число
    if (guests < 1) {
        bookingMessageDiv.textContent = "Количество гостей должно быть не менее 1";
        bookingMessageDiv.style.color = 'red';
        return;
    }

    const message = `Спасибо, ${name}! Ваш столик забронирован на ${selectedDate.toLocaleDateString()} в ${selectedDate.toLocaleTimeString()} для ${guests} гостей.`;
    bookingMessageDiv.textContent = message;
    bookingMessageDiv.style.color = 'green';

    // Здесь можно добавить код для отправки данных на сервер
    // Например, через AJAX или Fetch API
});

