const Discord = require('discord.js');

const client = new Discord.Client();

module.exports = {
    name: 'suspend', 
    description: "support command", 
    execute(message, args, channel){
        message.delete()
        if (message.member.roles.cache.has('705092415899303977')){
        const embed = new Discord.MessageEmbed()
            .setColor('020f73')
            .setTitle('All Commands')
            .setAuthor('ALETA Help Command', 'https://media.discordapp.net/attachments/705093565113434212/736015262477844500/6c1e7537f9aa230b0a49494c49779dca.png')
            .setDescription('')
            .setFooter('Aigio Law Enforcement Training Academy', 'https://media.discordapp.net/attachments/705093565113434212/736015262477844500/6c1e7537f9aa230b0a49494c49779dca.png')
        message.mention.send(embed);


        } else {
            message.channel.send('Insufficient Permissions.');
        }

    }
    }