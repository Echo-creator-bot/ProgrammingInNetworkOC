document.getElementById('booking-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const nameInput = document.getElementById('name');
    const name = nameInput.value;
    const dateInput = document.getElementById('date');
    const timeInput = document.getElementById('time');
    const guests = document.getElementById('guests').value;
    const bookingMessageDiv = document.getElementById('booking-message');

    bookingMessageDiv.textContent = '';
    bookingMessageDiv.style.color = 'inherit';

    if (!name || !dateInput.value || !timeInput.value || !guests) {
        bookingMessageDiv.textContent = "Пожалуйста, заполните все поля формы.";
        bookingMessageDiv.style.color = 'red';
        return;
    }

    if (/\d/.test(name)) {
       bookingMessageDiv.textContent = "Пожалуйста, введите корректное имя (не должно содержать цифр).";
       bookingMessageDiv.style.color = 'red';
       return;
   }

    const selectedDate = new Date(dateInput.value + 'T' + timeInput.value);
    const now = new Date();

    if (selectedDate <= now) {
        bookingMessageDiv.textContent = "Пожалуйста, выберите дату и время в будущем.";
        bookingMessageDiv.style.color = 'red';
        return;
    }

    if (guests < 1) {
        bookingMessageDiv.textContent = "Количество гостей должно быть не менее 1";
        bookingMessageDiv.style.color = 'red';
        return;
    }


    const message = `Спасибо, ${name}! Ваш столик забронирован на ${selectedDate.toLocaleDateString()} в ${selectedDate.toLocaleTimeString()} для ${guests} гостей.`;
    bookingMessageDiv.textContent = message;
    bookingMessageDiv.style.color = 'green';

});

