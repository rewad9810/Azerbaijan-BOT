const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', => {
    if (message.content === 'ping') {
      message.reply('pong');
    }
});

// THIS MUST BE THIS WAY
client.login(process.env.Mzk5MTYwNjk2MTQwNTk1MjEw.DTK_rA.IkHeEhDwXz-K_AoDQKoEsJ2OIBc);
