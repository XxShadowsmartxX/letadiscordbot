const Discord = require('discord.js');

const client = new Discord.Client();

module.exports = {
    name: 'recruitopen', 
    description: "this is a youtube command!", 
    execute(message, args){
        
        if (message.member.roles.cache.some(role =>['Admissions Command', 'Regiment Command'].includes(role.name))) {

        const embed = new Discord.MessageEmbed()
            .setColor('#40cc6f')
            .setTitle('Recruitment is Open!')
            .setAuthor('CFMP Recruitment Details', 'https://cdn.discordapp.com/emojis/799646515496747069.png?v=1')
            .setDescription(`The Canadian Forces Military Police recruitment applications are **open**. They will close on the date listed on the footer. Here are some requirements to keep in mind when applying.\n\n> Maximum 2 felonies\n> Maximum 4 misdemeanors\n> Good standing within Vancouver\n> Ability to be active\n> Good personality traits\n\nIf you believe you meet these requirements, please consider applying during this recruitment period.\nAll questions should be directed towards Chief Admissions Officer: **WiggleWiggle209**\n\n**Recruitment Closing Date:** \`${args.slice(1).join(" ")}\`\n\nRegards,\nCFMP Admissions`)
            .setFooter(`Canadian Forces Military Police`, 'https://cdn.discordapp.com/emojis/799646515496747069.png?v=1')
            .addField('Application Link', '[Google Form](https://docs.google.com/forms/d/e/1FAIpQLSdo_sgK2O71BvPAE8DDdZCqZUygfBMjixa1lpJqZeQYoh56QA/viewform)', true)
            .addField('Application Tracker', '[Google Sheets](https://docs.google.com/spreadsheets/d/1VRdX-3QQZ00Pv4lANLZ-xfB1SXa8DFUP2ZSIZAX6HeY/edit?usp=sharing)')
            .setFooter('Canadian Forces Military Police', 'https://cdn.discordapp.com/emojis/799646515496747069.png?v=1')

const reason23 = args.slice(1).join(" ");
if(!reason23) return message.channel.send(`${message.author}, Please specify a closing date.`);

        message.channel.send(embed);

message.delete()

        const modlogs = new Discord.MessageEmbed()
        .setColor('PURPLE')
        .setTitle('Recruitment Open Command')
        .setAuthor('CFMP Moderation Logs', 'https://cdn.discordapp.com/emojis/799646515496747069.png?v=1')
        .addFields(
            { name: 'Command Usage', value: `**${message.content}**` },
            { name: 'Command Used', value: '**-recruitopen**', inline: true },
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
            message.channel.send(`${message.author}, Insufficient Permissions for **-recruitopen** command.\n\nRoles required: **Admissions Command** or **Regiment Command**`);
        }

    }
    }