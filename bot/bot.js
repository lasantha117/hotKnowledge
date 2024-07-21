const { Telegraf } = require('telegraf');

// Replace 'TOKEN' with your actual bot token
const TOKEN = 'token';

const bot = new Telegraf(TOKEN);
const web_link = 'https://669cc3de94137730a9f1e0db--loquacious-eclair-330114.netlify.app/bottom/Home'


bot.launch().then(() => {
  ctx.reply("Hey.!!!!!!!!!!",{
    reply_markup :{
      keyboard :[[{text:"web app" , web_app : {url :web_link}}]],
    }
}).catch((err) => {
  console.error('Failed to start bot:', err);
});
});
