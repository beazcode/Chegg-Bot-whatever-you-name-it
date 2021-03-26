const Discord = require('discord.js');
const client = new Discord.Client();


global.discordlogin = 'ODIyNTI1MTc1MTQ4NzA3ODcx.YFTiQw.b5MmmKsfwUBPoF-XvO9IlZ1fnS0';

client.login(discordlogin);
client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});
client.on('message', message => {

    if (message.content.startsWith(`-get`)) {
      message.author.send({
        files: ['./Browser/browser/components/url-bar/answer.html']
      });
     }

});