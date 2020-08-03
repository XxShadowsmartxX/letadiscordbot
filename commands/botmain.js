const Discord = require('discord.js');

module.exports = {
    name: 'botmain', 
    description: "this is a youtube command!", 
    execute(message, args){
        message.delete()
        if (message.member.roles.cache.has('705082977209548870')){
            message.channel.send('<@&705082980770512996>')
        const embed = new Discord.MessageEmbed()
            .setColor('020f73')
            .setTitle('Bot Maintenance Notification')
            .setAuthor('ALETA Bot System', 'https://media.discordapp.net/attachments/705093565113434212/736015262477844500/6c1e7537f9aa230b0a49494c49779dca.png')
            .setDescription(`**The ALETA Bot is undergoing some maintenance right now. It will be offline for a period of time.**\n\n__Under Maintenance By:__ ${message.author}\n\n> You will be notified when the bot is back online and ready for use again. `)
        message.channel.send(embed);

        } else {
            message.channel.send('Insufficient Permissions.');
        }

    }
    }