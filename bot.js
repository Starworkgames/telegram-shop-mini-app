const TelegramBot = require('node-telegram-bot-api');

// Ваш токен, который вы получили от BotFather
const token = 'YOUR_BOT_TOKEN';  // Замените на свой токен

// Создаем нового бота
const bot = new TelegramBot(token, { polling: true });

// Когда пользователь отправляет команду /start
bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;
  const username = msg.chat.username;

  // URL для иконки мини-приложения
  const iconUrl = 'https://example.com/your-icon.png';  // Замените на реальный путь к вашей иконке

  // Создаем инлайн-кнопку с иконкой для открытия мини-приложения
  const options = {
    reply_markup: {
      inline_keyboard: [
        [
          {
            text: 'Открыть магазин',
            web_app: { 
              url: 'https://YOUR_USERNAME.github.io/your-repository-name/'  // Замените на ссылку на ваш магазин
            },
            photo_url: iconUrl  // Иконка для кнопки
          }
        ]
      ]
    }
  };

  // Отправляем сообщение с кнопкой для открытия мини-приложения
  bot.sendMessage(chatId, `Привет, ${username}! Нажмите кнопку ниже, чтобы открыть магазин.`, options);
});
