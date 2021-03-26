
const Discord = require('discord.js');
const fs= require('fs');
const client = new Discord.Client();

global.discordlogin = 'ODIyNTI1MTc1MTQ4NzA3ODcx.YFTiQw.b5MmmKsfwUBPoF-XvO9IlZ1fnS0';

client.login(discordlogin);
client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});
var queue=false;
client.on('message', message => {

    if (message.content.startsWith(`-chegg`)) {

        var s = message.content.replace('-chegg', '')
		
        if (!s.includes('https://www.chegg.com/homework-help')) {
            const errorEmbed = new Discord.MessageEmbed()
                .setColor('#C91019')
                .setTitle('Error')
                .setURL('https://pain.rip')
                .setDescription('No! Chegg links only!')
                .setThumbnail('https://images-ext-1.discordapp.net/external/9yiAQ7ZAI3Rw8ai2p1uGMsaBIQ1roOA4K-ZrGbd0P_8/https/cdn1.iconfinder.com/data/icons/web-essentials-circle-style/48/delete-512.png?width=461&height=461')
                .setTimestamp()
                .setFooter('Powered by Pain Calendar');
            message.channel.send(message.author.toString(), {
                embed: errorEmbed
            });
            return;
        }

        if (queue) {
            const errorEmbed = new Discord.MessageEmbed()
                .setColor('#C91019')
                .setTitle('Error')
                .setURL('https://pain.rip')
                .setDescription('Wait your turn!')
                .setThumbnail('https://images-ext-1.discordapp.net/external/9yiAQ7ZAI3Rw8ai2p1uGMsaBIQ1roOA4K-ZrGbd0P_8/https/cdn1.iconfinder.com/data/icons/web-essentials-circle-style/48/delete-512.png?width=461&height=461')
                .setTimestamp()
                .setFooter('Powered by Pain Calendar');
            message.channel.send(message.author.toString(), {
                embed: errorEmbed
            });
            return;
        }
		
        process_answer(s)
		
        async function process_answer(url) {
            queue = true;
            const processEmbed = new Discord.MessageEmbed()
                .setColor('#F85B00')
                .setTitle('Processing')
                .setURL('https://pain.rip')
                .setDescription('Your request is being processed!')
                .setTimestamp()
                .setFooter('Powered by Pain Calendar');
            var msg = message.channel.send(message.author.toString(), {
                embed: processEmbed
            });
            setTimeout('',10000);
            chrome.runtime.sendMessage({todo:"bodytocontent", msg:url});
            chrome.runtime.sendMessage({todo:"channel", msg:message.channel.name});
            
            queue = false;
        }
    }

});
