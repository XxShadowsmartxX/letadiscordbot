const Discord = require('discord.js');

const client = new Discord.Client();

module.exports = {
    name: 'botping', 
    description: "this is a youtube command!",
    execute(message, args) {
        
        if (message.member.roles.cache.some(role =>['Verified'].includes(role.name))) {

            message.channel.send(`Message Latency: \`${Date.now() - message.createdTimestamp}ms\`.`);

message.delete()

            const modlogs = new Discord.MessageEmbed()
            .setColor('BLURPLE')
            .setTitle('Ping Command')
            .setAuthor('CFMP Moderation Logs', 'https://cdn.discordapp.com/emojis/799646515496747069.png?v=1')
            .addFields(
                { name: 'Command Usage', value: `**${message.content}**` },
                { name: 'Command Used', value: '**-botping**', inline: true },
                { name: 'Command Author', value: `${message.author}`, inline: true },
            { name: 'Command Channel', value: `${message.channel}`, inline: true },
            { name: 'Command Guild/Server', value: `**${message.guild.name}**`, inline: true },
        )
            .setFooter('Canadian Forces Military Police','https://cdn.discordapp.com/emojis/799646515496747069.png?v=1')
            .setTimestamp()
    
    if(process.env.modchannel === 'false') return;
    let modchannel1 = message.client.channels.cache.get(process.env.modchannel);
        modchannel1.send(modlogs);
    
        } else {
            message.channel.send(`${message.author}, Insufficient Permissions for **-botping** command.\n\nRoles required: **Verified**`);
        }

    }
    }