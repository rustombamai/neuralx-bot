require('dotenv').config();
const TelegramBot = require('node-telegram-bot-api');

const bot = new TelegramBot(process.env.TELEGRAM_BOT_TOKEN, { polling: true });

bot.on('message', (msg) => {
    const chatId = msg.chat.id;
    const text = msg.text.toLowerCase();

    if (text === '/start') {
        bot.sendMessage(chatId, "🚀 Welcome to NeuralX AI Bot! Type anything to chat.");
    } else {
        bot.sendMessage(chatId, `🤖 AI Response: ${text}`);
    }
});

console.log("NeuralX AI Bot is running...");
