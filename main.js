const TelegramBot = require('node-telegram-bot-api');
const token = '5174694345:AAH2PO0CLj5Z1ypI7-qV8Yr2A1hwi_wHR0c';
const bot = new TelegramBot(token, {polling: true});

// Matches "/echo [whatever]"
bot.onText(/\/echo (.+)/, (msg, match) => {
  const chatId = msg.chat.id;
  const resp = match[1];
  bot.sendMessage(chatId, resp);
});

bot.on('message', (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, 'Received your message');
});