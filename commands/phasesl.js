const Discord = require('discord.js');

const client = new Discord.Client();

module.exports = {
    name: 'phasesl', 
    description: "this is a youtube command!", 
    execute(message, args){
        
        if (message.member.roles.cache.some(role =>['Regiment Command', 'T&E', 'T&E Staff', 'T&E Command', 'T&E Overseers'].includes(role.name))) {

        const embed = new Discord.MessageEmbed()
            .setColor('#cc4040')
            .setTitle('Phase Server Lock Notification')
            .setAuthor('CFMP Phase System', 'https://cdn.discordapp.com/emojis/799646515496747069.png?v=1')
            .setDescription(`**This phase has been slocked!**\n\n> More phases will be hosted in the future by the CFMP Training & Education Unit.\n\n**Host:** ${message.author}`)
            .setFooter(`Slocked Time:`)
            .setTimestamp();

if(process.env.phasechannelid === 'false') return;
    let phasechannel = message.guild.channels.cache.get(process.env.phasechannelid);

phasechannel.send(embed);


message.delete()
        const modlogs = new Discord.MessageEmbed()
        .setColor('ORANGE')
        .setTitle('Phase Slock Command')
        .setAuthor('CFMP Moderation Logs', 'https://cdn.discordapp.com/emojis/799646515496747069.png?v=1')
        .addFields(
            { name: 'Command Usage', value: `**${message.content}**` },
            { name: 'Command Used', value: '**-phasesl**', inline: true },
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
            message.channel.send(`${message.author}, Insufficient Permissions for **-phase2cl** command.\n\nRoles required: **T&E**, **T&E Command, **T&E Staff**, **T&E Overseers**, or **Regiment Command**`);
        }

    }
    }