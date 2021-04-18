const Discord = require('discord.js');

const client = new Discord.Client();

module.exports = {
    name: 'dlog', 
    description: "this is a youtube command!", 
    execute(message, args){

        if (message.member.roles.cache.some(role =>['NIS', 'NIS Command', 'T&E Command', 'Platoon Command', 'Company Command', 'Regiment Command'].includes(role.name))) {

    if(process.env.logschannel === 'false') return;
    let logchannel1 = message.guild.channels.cache.get(process.env.logschannel);

                const reason42 = args.join(' ');
if(!reason42) return message.channel.send(`${message.author}, Please specify a message for <#785058508805767179>`);

        logchannel1.send(`${args.join(' ')}\n\n<@&821910794307502101>`)

message.delete()
            
        const modlogs = new Discord.MessageEmbed()
        .setColor('GREEN')
        .setTitle('Dept. Logs Command')
        .setAuthor('CFMP Moderation Logs', 'https://cdn.discordapp.com/emojis/799646515496747069.png?v=1')
        .addFields(
            { name: 'Command Usage', value: `**${message.content}**` },
            { name: 'Command Used', value: '**-dlog**', inline: true },
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
            message.channel.send(`${message.author}, Insufficient Permissions for **-dlog** command.\n\nRoles required: **NIS**, **NIS Command**, **T&E Command**, **Platoon Command**, **Company Command**, or **Regiment Command**`).then(m => m.delete({ timeout: 6500}));
        }

    }
    }