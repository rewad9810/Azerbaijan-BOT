const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('pong');
  	}
    
    client.on('message', message => {
    if (message.content === 'ok') {
    	message.reply('gotuve karalyok');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.Mzk5MTYwNjk2MTQwNTk1MjEw.DTOl8A.h3FYQwol6bZiF2Wze4t351n0n_I);
