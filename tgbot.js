const { Telegraf } = require('telegraf');

// Replace 'YOUR_BOT_TOKEN' with your actual Telegram bot token
const bot = new Telegraf("7200242296:AAFLmD5H_OYqwIx8KyoX61yiPXDXbAadPEw");

bot.start((ctx) => ctx.reply('Hello, World!'));

bot.catch((err) => {
  console.log('Error encountered:', err);
});

bot.launch().then(() => {
  console.log('Bot started successfully');
}).catch((error) => {
  console.error('Error launching the bot:', error);
});

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));