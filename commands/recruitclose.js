const Discord = require('discord.js');

const client = new Discord.Client();

module.exports = {
    name: 'recruitclose', 
    description: "this is a youtube command!", 
    execute(message, args){

        if (message.member.roles.cache.some(role =>['Admissions Command', 'Regiment Command'].includes(role.name))) {

        const embed = new Discord.MessageEmbed()
            .setColor('#cc4040')
            .setTitle('Recruitment is Closed!')
            .setAuthor('CFMP Recruitment Details', 'https://cdn.discordapp.com/emojis/799646515496747069.png?v=1')
            .setDescription(`The Canadian Forces Military Police recruitment applications are **closed**. They will open on the date listed down below. Here are some requirements to keep in mind when applying.\n\n> Maximum 2 felonies\n> Maximum 4 misdemeanors\n> Good standing within Vancouver\n> Ability to be active\n> Good personality traits\n\nIf you believe you meet these requirements, please apply during the next recruitment period.\nAny and all questions regarding admissions should be directed towards the CFMP Chief Admissions Officer: **WiggleWiggle209**\n\n**Recruitment Opening Date:** \`${args.slice(0).join(" ")}\`\n\nRegards,\nCFMP Admissions`)
            .setFooter('Canadian Forces Military Police', 'https://cdn.discordapp.com/emojis/799646515496747069.png?v=1')

const reason20 = args.slice(0).join(" ");
if(!reason20) return message.channel.send(`${message.author}, Please specify a closing date.`);

        message.channel.send(embed);

message.delete()

        const modlogs = new Discord.MessageEmbed()
        .setColor('PURPLE')
        .setTitle('Recruitment Close Command')
        .setAuthor('CFMP Moderation Logs', 'https://cdn.discordapp.com/emojis/799646515496747069.png?v=1')
        .addFields(
            { name: 'Command Usage', value: `**${message.content}**` },
            { name: 'Command Used', value: '**-recruitclose**', inline: true },
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
            message.channel.send(`${message.author}, Insufficient Permissions for **-recruitclose** command.\n\nRoles required: **Admissions Command** or **Regiment Command**`);
        }
    
    }
}