// HTML містить <iframe> з відео для Vimeo плеєра.
// Напиши скрипт, який буде зберігати поточний час відтворення відео у локальне сховище і, після перезавантаження сторінки, продовжувати відтворювати відео з цього часу.

// Ознайомся з документацією бібліотеки Vimeo плеєра.

// Додай бібліотеку як залежність проекту через npm.

// Ініціалізуй плеєр у файлі скрипта як це описано в секції pre-existing player, але враховуй, що у тебе плеєр доданий як npm пакет, а не через CDN.

// Вивчи документацію методу on() і почни відстежувати подію timeupdate - оновлення часу відтворення.

// Зберігай час відтворення у локальне сховище.
// Нехай ключем для сховища буде рядок "videoplayer-current-time".

// Під час перезавантаження сторінки скористайся методом setCurrentTime() з метою відновлення відтворення зі збереженої позиції.

// Додай до проекту бібілотеку lodash.throttle і зроби так, щоб час відтворення оновлювався у сховищі не частіше, ніж раз на секунду.

import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const VIDEO_TIME = 'videoplayer-current-time';

player.on('timeupdate', throttle(timePlayed, 1000));

function timePlayed(data) {
    const time = data.seconds;
    localStorage.setItem(VIDEO_TIME, JSON.stringify(time));
}

player
  .setCurrentTime(localStorage.getItem(VIDEO_TIME))
  .then(function (seconds) {
    // seconds = the actual time that the player seeked to
  })
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        // the time was less than 0 or greater than the video’s duration
        break;
      default:
        // some other error occurred
        break;
    }
  });;