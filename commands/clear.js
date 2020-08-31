const Discord = require('discord.js');

const client = new Discord.Client();

module.exports = {
    name: 'clear', 
    description: "this is a youtube command!", 
    execute(message, args){
        message.delete()
        if (message.member.roles.cache.has('705082980770512996')){

            message.delete(500)

            const modlogs = new Discord.MessageEmbed()
            .setColor('020f73')
            .setTitle('Clear Command')
            .setAuthor('ALETA Moderation Logs', 'https://media.discordapp.net/attachments/705093565113434212/736015262477844500/6c1e7537f9aa230b0a49494c49779dca.png')
            .addFields(
                { name: 'Command Usage', value: `**${message.content}**` },
                { name: 'Command Used', value: '**-clear**', inline: true },
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