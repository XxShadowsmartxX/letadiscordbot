const Discord = require('discord.js');

const client = new Discord.Client();

module.exports = {
    name: 'say', 
    description: "this is a youtube command!", 
    execute(message, args){
        message.delete()
        if (message.member.roles.cache.has('713428869842993233')){

            message.channel.send(`${args.slice(0).join(' ')}`);

            const modlogs = new Discord.MessageEmbed()
            .setColor('BLURPLE')
            .setTitle('Say Command')
            .setAuthor('ALETA Moderation Logs', 'https://media.discordapp.net/attachments/705093565113434212/736015262477844500/6c1e7537f9aa230b0a49494c49779dca.png')
            .addFields(
                { name: 'Command Usage', value: `**${message.content}**` },
                { name: 'Command Used', value: '**-say**', inline: true },
                { name: 'Command Author', value: `${message.author}`, inline: true },
                { name: 'Command Channel', value: `${message.channel}`, inline: true },
            )
            .setFooter('Aigio Law Enforcement Training Academy','https://media.discordapp.net/attachments/705093565113434212/736015262477844500/6c1e7537f9aa230b0a49494c49779dca.png')
            .setTimestamp()
    
            const mst = message.client.channels.cache.get('749011808567951500');
            mst.send(modlogs);
    

        } else {
            message.channel.send(`${message.author}, Insufficient Permissions for **-say** command.\n\nRoles required: **Bot Developer**`);
        }

    }
    }