const Discord = require('discord.js');

const client = new Discord.Client();

module.exports = {
    name: 'phase1cl', 
    description: "this is a youtube command!", 
    execute(message, args){
        
        if (message.member.roles.cache.some(role =>['Regiment Command', 'T&E', 'T&E Staff', 'T&E Command', 'T&E Command', 'T&E Overseers'].includes(role.name))) {

        const embed = new Discord.MessageEmbed()
            .setColor('#cc4040')
            .setTitle('Phase 1 Conclusion Notification')
            .setAuthor('CFMP Phase System' , 'https://cdn.discordapp.com/emojis/799646515496747069.png?v=1')
            .setDescription(`**This phase 1** has **concluded!**\n\n**Phase Host:** ${message.author}\n\nMake sure you review your notes for the final exam!\n\n**Evidence of Phase:** ${args.slice(0).join(' ')}`)

if(process.env.phasechannelid === 'false') return;
    let phasechannel = message.guild.channels.cache.get(process.env.phasechannelid);

const reason6 = args.slice(0).join(" ");
if(!reason6) return message.channel.send(`${message.author}, Please post a picture link`);

phasechannel.send('<@&823280090640941106>', embed);

message.delete()

        const modlogs = new Discord.MessageEmbed()
        .setColor('ORANGE')
        .setTitle('Phase 1 Conclusion Command')
        .setAuthor('CFMP Moderation Logs', 'https://cdn.discordapp.com/emojis/799646515496747069.png?v=1')
        .addFields(
            { name: 'Command Usage', value: `**${message.content}**` },
            { name: 'Command Used', value: '**-phase1cl**', inline: true },
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
            message.channel.send(`${message.author}, Insufficient Permissions for **-phase2cl** command.\n\nRoles required: **T&E**, **T&E Command, **T&E Staff**, **T&E Overseers**, or **Regiment Command**`).then(m => m.delete({ timeout: 6500}));
        }
    }
    }