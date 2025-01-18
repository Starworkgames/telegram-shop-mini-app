const TelegramBot = require('node-telegram-bot-api');

// Токен, который вы получили от BotFather
const token = '7190268129:AAENp4cRz3G_e9JWXZjvjFm1-36KEkm4Ezs';

// Создаем нового бота
const bot = new TelegramBot(token, { polling: true });

// Когда пользователь отправляет команду /start
bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;
  const username = msg.chat.username;

  // Создаем инлайн-кнопку с ссылкой на ваше приложение
  const options = {
    reply_markup: {
      inline_keyboard: [
        [
          {
            text: 'Перейти в магазин',
            web_app: { url: 'https://YOUR_USERNAME.github.io/your-repository-name/' }  // Замените на свою ссылку
          }
        ]
      ]
    }
  };

  // Отправляем сообщение с кнопкой
  bot.sendMessage(chatId, `Привет, ${username}! Нажмите кнопку ниже, чтобы перейти в магазин.`, options);
});

