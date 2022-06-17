// HTML містить розмітку форми.Напиши скрипт, який буде зберігати значення полів у локальне сховище, коли користувач щось друкує.

// Відстежуй на формі подію input, і щоразу записуй у локальне сховище об'єкт з полями email і message, у яких зберігай поточні значення полів форми. Нехай ключем для сховища буде рядок "feedback-form-state".

// Під час завантаження сторінки перевіряй стан сховища, і якщо там є збережені дані, заповнюй ними поля форми. 
// В іншому випадку поля повинні бути порожніми.

// Під час сабміту форми очищуй сховище і поля форми, а також виводь у консоль об'єкт з полями email, message та їхніми поточними значеннями.

// Зроби так, щоб сховище оновлювалось не частіше, ніж раз на 500 мілісекунд.
// Для цього додай до проекту і використовуй бібліотеку lodash.throttle.

import throttle from 'lodash.throttle';

const form = document.querySelector(".feedback-form");
const email = document.querySelector('input');
const message = document.querySelector('textarea');

form.addEventListener("input", throttle(onInputChange, 500));
form.addEventListener("submit", onFormSubmit);

const STORAGE_KEY = "feedback-form-state";
const savedValue = localStorage.getItem(STORAGE_KEY);
const parsedValue = JSON.parse(savedValue);
const formData = { ...parsedValue };

getLocaleStorage();

function onInputChange(evt) {
    formData[evt.target.name] = evt.target.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function onFormSubmit(evt) {
    evt.preventDefault();
    if (!email.value || !message.value) {
        return alert("You can`t submit empty form");
    }
    evt.target.reset();
    localStorage.removeItem(STORAGE_KEY);
    console.log(formData);
    formData.email = '';
    formData.message = '';
}

function getLocaleStorage() {
    if (savedValue) {
        parsedValue.email === undefined ? email.value = "" : email.value = parsedValue.email;
        parsedValue.message === undefined ? message.value = "" : message.value = parsedValue.message;
    }
}