const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('pong');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.Mzk5MTYwNjk2MTQwNTk1MjEw.DTOl8A.h3FYQwol6bZiF2Wze4t351n0n_I);

const { stripIndents, oneLine } = require('common-tags');
const Discord = require("discord.js");
const bot = new Discord.Client();

let prefix = "A!";
let owner = "367384964335140864"; // 367384964335140864

bot.on("ready", () => {
    bot.user.setGame(prefix + " Discord.io/PixelAZE |" + bot.guilds.size + "Server") 
    console.log("Qosulduu!")   
});

bot.login("Mzk5MTYwNjk2MTQwNTk1MjEw.DTOl8A.h3FYQwol6bZiF2Wze4t351n0n_I")

bot.on("message", message => {

    if (message.content.toLowerCase() === "sa") {
        message.reply("**Aleykum Salam!**")
    }
    
    if (message.content.toLowerCase() === "necesen ?") {
        message.reply("**Çox Şükür Yaxşıyam. Sən necəsən dostum ?**")
   
    }
         if (message.content.toLowerCase() === "Necəsən") {
             message.reply("**Çox Şükür Yaxşıyam. Sən necəsən dostum ?**")
    }

    if (message.content.toLowerCase() === "Necesen") {
        message.reply("**Aleykum Salam!**")
    }
    
    if (message.content.toLowerCase() === "Necesen?") {
        message.reply("**Çox Şükür Yaxşıyam. Sən necəsən dostum ?**")
   
    }
         if (message.content.toLowerCase() === "Necəsən ?") {
             message.reply("**Çox Şükür Yaxşıyam. Sən necəsən dostum ?**")
    }

    if (message.content.toLowerCase() === "yaxşıyam") {
        message.reply("Təki yaxşı ol !")

    }

    if (message.content.toLowerCase() === "aze") {
        message.reply("http://pixelcanvas.io/@-415,-2073")

    }

    if (message.content.toLowerCase() === "yaxsiyam") {
        message.reply("Təki yaxşı ol !")

    }

    if (message.content === prefix + "servermelumat") {
        const embed = new Discord.RichEmbed()

            .addField("Server Adı", message.guild.name, true)

            .addField("Server ID", message.guild.id, true)

            .addField("Server Sahibi", message.guild.owner, true)

            .addField("Toplam Üzv Sayısı", message.guild.memberCount, true)

            .addField("AFK Süresi", message.guild.afkTimeout, true)

            .setFooter("Yaradılma Tarixi " + message.guild.createdAt)

            .setColor(0xff0000)

        return message.channel.sendEmbed(embed)
    }
    
    if (message.content === prefix + "Qoğal") {
        message.channel.sendMessage(`Canım gəl bura sənə Qoğal Verəcəm! <@${message.author.id}>`)
        message.react("🍪")
    }
    
    if (message.content === prefix + "melumat") {
        const embed = new Discord.RichEmbed()

            .addField("Bot Sahibi", `<@${owner}>`, true)

            .addField("Toplam Server Sayisi", bot.guilds.size, true)

            .addField("Toplam Kullanici Sayisi", bot.users.size, true)
            
            .addField("Toplam Kanal Sayisi", bot.channels.size, true)

            .setColor(0x000001)
        
        return message.channel.sendEmbed(embed)
    }

    if (message.content === prefix + "komek") {
        message.channel.sendMessage(stripIndents`
**Salam, mən ${bot.user.username}! İndi gördüyünüz bölmə mənim bütün Komutlarımı göstərir.**

**Məlumat Komutları**
\`\`\`fix
${prefix}komek - Botun bütün komutlarını sizə göstərir.
${prefix}servermelumat - Server haqqında məlumat verir
${prefix}melumat - Bot haqqında məlumat verir.
\`\`\`

**"Əyləncə" Komutları**
\`\`\`fix
${prefix}Qoğal - Sizə Qoğal verir.
\`\`\` `)
    }

});

bot.on("message", message => {

    const kufur = ["amk", "skm"];
    if (kufur.some(word => message.content.includes(word)) ) {
        message.reply("**Söyüş Olmaz!** :rage:")
        message.delete()
    }
});

// Reshad.
