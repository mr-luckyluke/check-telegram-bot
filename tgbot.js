require('dotenv').config()
const { Telegraf } = require('telegraf');

// const bot = new Telegraf(process.env.API_TELEGRAM_BOT_TOKEN);

// bot.start((ctx) => ctx.reply('Hello, World!'));

// bot.catch((err) => {
//   console.log('Error encountered:', err);
// });

// bot.launch().then(() => {
//   console.log('Bot started successfully');
// }).catch((error) => {
//   console.error('Error launching the bot:', error);
// });

const bot = new Telegraf(TelegramConfig.API_TELEGRAM_BOT_TOKEN)

  bot.start((ctx) => {
    ctx.reply(
      `Welcome to the MegatonProbot!`,
      Markup.inlineKeyboard([Markup.button.webApp("Play", AppConfig.bot_url)])
    )
  })

  bot.launch().catch((error) => {
    console.error("Failed to launch the bot:", error)
  })

  console.log("Bot is set up and running.")

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));