const Discord = require('discord.js');

const client = new Discord.Client();

module.exports = {
    name: 'notice', 
    description: "this is a youtube command!", 
    execute(message, args){
        
        if (message.member.roles.cache.some(role =>['Server Moderator'].includes(role.name))) {

        const embed = new Discord.MessageEmbed()
            .setColor('#cc4040')
            .setAuthor('CFMP Administrative Message')
            .setDescription(`${args.slice(0).join(' ')}`)
            .setFooter('Canadian Forces Military Police', 'https://cdn.discordapp.com/emojis/799646515496747069.png?v=1')

const reason10 = args.slice(0).join(' ');
if(!reason10) return message.channel.send(`${message.author}, Please specify a message to send.`);

        message.channel.send(embed);

message.delete()

        const modlogs = new Discord.MessageEmbed()
        .setColor('BLURPLE') 
        .setTitle('Notice Command')
        .setAuthor('CFMP Moderation Logs', 'https://cdn.discordapp.com/emojis/799646515496747069.png?v=1')
        .addFields(
            { name: 'Command Usage', value: `**${message.content}**` },
            { name: 'Command Used', value: '**-notice**', inline: true },
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
            message.channel.send(`${message.author}, Insufficient Permissions for **-notice** command.\n\nRoles required: **Server Moderator**`).then(m => m.delete({ timeout: 6500}));
        }

    }
    }