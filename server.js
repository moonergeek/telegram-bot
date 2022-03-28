const TelegramBot = require("node-telegram-bot-api");
const token = "5121310619:AAFCiyrJAfi1D80lACobQ4giFeW-IMV2B2Y";

const bot = new TelegramBot(token, { polling: true });

bot.onText(/\/start/, async (message) => {
  

  bot.sendMessage(
    message.chat.id,
    `سلام ${message.from.first_name} به ربات من خوش اومدی اینجا میتونی لینک ناشناس خودتو داشته باشی ;)`,
    {
      reply_markup: {
        keyboard: [["معرفی به بقیه", "لینک ناشناس من"], ["درباره من"]],
      },
    }
  );
});

bot.on("message", (message) => {
  switch (message.text) {
    case "لینک ناشناس من":
      bot.sendMessage(
        message.chat.id,
        `https://telegram.me/mahawn_bot?start=${message.chat.id}`
      );
      break;
    case "معرفی به بقیه":
      bot.sendMessage(
        message.chat.id,
        "اینم ادرس بات من t.me/mahawn_bot تا بتونی منو به بقیه معرفی کنی"
      );
      break;
    case "درباره من":
      bot.sendMessage(message.chat.id, "سلام من ماهانم سازنده این بات");
      break;
  }
});

console.log("server is started");
