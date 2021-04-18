const Discord = require('discord.js');

module.exports = {
    name: 'say', 
    description: "this is a youtube command!", 
    execute(message, args){
        
        if (message.member.roles.cache.some(role =>['Server Moderator', 'Regiment Command'].includes(role.name))) {

            message.channel.send(`${args.slice(0).join(' ')}`);

const reason40 = args.slice(0).join(' ');
if(!reason40) return message.channel.send(`${message.author}, Please specify a message to send.`);

message.delete()

            const modlogs = new Discord.MessageEmbed()
            .setColor('BLURPLE')
            .setTitle('Say Command')
            .setAuthor('CFMP Moderation Logs', 'https://cdn.discordapp.com/emojis/799646515496747069.png?v=1')
            .addFields(
                { name: 'Command Usage', value: `**${message.content}**` },
                { name: 'Command Used', value: '**-say**', inline: true },
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
            message.channel.send(`${message.author}, Insufficient Permissions for **-say** command.\n\nRoles required: **Server Moderator** or **Regiment Command`);
        }
    }
}