const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'sox') {
    	message.reply('icive');
  	}
    
    client.on('message', message => {
    if (message.content === 'ok') {
    	message.reply('gotuve karalyok');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
