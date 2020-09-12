const Discord = require('discord.js');

const client = new Discord.Client();

module.exports = {
    name: 'support', 
    description: "support command", 
    execute(message, args, channel){
        message.delete()
        if (message.member.roles.cache.has('705092415899303977')){
        const support1 = new Discord.MessageEmbed()
            .setColor('#0C3350')
            .setTitle('Server Commands')
            .setAuthor('ALETA Support Command', 'https://media.discordapp.net/attachments/705093565113434212/736015262477844500/6c1e7537f9aa230b0a49494c49779dca.png')
            .setDescription("All ALETA Server commands can be found on the google document linked below.\n\n**Server Commands Doc:** https://docs.google.com/document/d/1ZerUZDMTQ9ZE-ges32D6qphXYREyF5FL--rl1fDvYy0/edit?usp=sharing")
            .setFooter('Aigio Law Enforcement Training Academy', 'https://media.discordapp.net/attachments/705093565113434212/736015262477844500/6c1e7537f9aa230b0a49494c49779dca.png')
        message.author.send(support1);

        message.channel.send(`${message.author}, ALETA server commands sent to your DMs.`);

        const modlogs = new Discord.MessageEmbed()
        .setColor('020f73')
        .setTitle('Support Command')
        .setAuthor('ALETA Moderation Logs', 'https://media.discordapp.net/attachments/705093565113434212/736015262477844500/6c1e7537f9aa230b0a49494c49779dca.png')
        .addFields(
            { name: 'Command Usage', value: `**${message.content}**` },
            { name: 'Command Used', value: '**-support**', inline: true },
            { name: 'Command Author', value: `${message.author}`, inline: true },
            { name: 'Command Channel', value: `${message.channel}`, inline: true },
        )
        .setFooter('Aigio Law Enforcement Training Academy','https://media.discordapp.net/attachments/705093565113434212/736015262477844500/6c1e7537f9aa230b0a49494c49779dca.png')
        .setTimestamp()

        const mst = message.client.channels.cache.get('749011808567951500');
        mst.send(modlogs);

        } else {
            message.channel.send('Insufficient Permissions.');
        }

    }
    }