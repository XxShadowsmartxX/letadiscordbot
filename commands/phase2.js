const Discord = require('discord.js');

const client = new Discord.Client();

module.exports = {
    name: 'phase2', 
    description: "this is a youtube command!", 
    execute(message, args){
        
        if (message.member.roles.cache.some(role =>['Regiment Command', 'T&E', 'T&E Staff', 'T&E Command', 'T&E Command', 'T&E Overseers'].includes(role.name))) {

        const embed = new Discord.MessageEmbed()
            .setColor('#cc4040')
            .setTitle('Phase 2 Notification')
            .setAuthor('CFMP Phase 2', 'https://cdn.discordapp.com/emojis/799646515496747069.png?v=1')
            .setDescription(`A **Phase 2** is being hosted at the training center!\n\nPlease follow all instructions given by the host. PTS is in effect. You can be kicked out at any time by the host for a plausible reason.\n\n**Phase 2 Host:** ${message.author}\n\n**Starting Time:** ${args.slice(0).join(' ')}\n\n> **Game Link:** https://www.roblox.com/games/6408104398/Training-Center-P2`)

if(process.env.phasechannelid === 'false') return;
    let phasechannel = message.guild.channels.cache.get(process.env.phasechannelid);

const reason6 = args.slice(0).join(" ");
if(!reason6) return message.channel.send(`${message.author}, Please specify a slock time.`);

phasechannel.send('<@&823280048994779238>', embed);
            
message.delete()

        const modlogs = new Discord.MessageEmbed()
        .setColor('ORANGE')
        .setTitle('Phase 2 Command')
        .setAuthor('CFMP Moderation Logs', 'https://cdn.discordapp.com/emojis/799646515496747069.png?v=1')
        .addFields(
            { name: 'Command Usage', value: `**${message.content}**` },
            { name: 'Command Used', value: '**-phase2**', inline: true },
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