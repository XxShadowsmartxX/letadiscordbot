const Discord = require('discord.js');

const client = new Discord.Client();

module.exports = {
    name: 'suspend', 
    description: "this is a youtube command!", 
    execute(message, args){

        if (message.member.roles.cache.some(role =>['NIS', 'Company Command', 'Regiment Command', 'NIS Command'].includes(role.name))) {

    if(process.env.logschannel === 'false') return;
    let logchannel1 = message.guild.channels.cache.get(process.env.logschannel);

                const reason43 = args[0];
if(!reason43) return message.channel.send(`${message.author}, Please use the correct format: **-suspend USER DURATION REASON**.\n\nExample: **-suspend @S_hadowRBLX 2 weeks Testing**`);

                const reason44 = args[1];
if(!reason44) return message.channel.send(`${message.author}, Please use the correct format: **-suspend USER DURATION REASON**.\n\nExample: **-suspend @S_hadowRBLX 2 weeks Testing**`);

                const reason41 = args[2];
if(!reason41) return message.channel.send(`${message.author}, Please use the correct format: **-suspend USER DURATION REASON**.\n\nExample: **-suspend @S_hadowRBLX 2 weeks Testing**`);

                const reason42 = args.slice(3).join(' ');
if(!reason42) return message.channel.send(`${message.author}, Please use the correct format: **-suspend USER DURATION REASON**.\n\nExample: **-suspend @S_hadowRBLX 2 weeks Testing**`);

        logchannel1.send(`${args[0]} has been **suspended** from duties for **${args[1]} ${args[2]}**. Suspension reason: **${args.slice(3).join(' ')}**. They will remain on administrative leave for the duration of the suspension.\n\n**Issued by:** ${message.author}\n<@&821910794307502101>`)

message.delete()
            
        const modlogs = new Discord.MessageEmbed()
        .setColor('GREEN')
        .setTitle('Suspension Command')
        .setAuthor('CFMP Moderation Logs', 'https://cdn.discordapp.com/emojis/799646515496747069.png?v=1')
        .addFields(
            { name: 'Command Usage', value: `**${message.content}**` },
            { name: 'Command Used', value: '**-suspend**', inline: true },
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
            message.channel.send(`${message.author}, Insufficient Permissions for **-suspend** command.\n\nRoles required: **NIS**, **Company Command**, or **Regiment Command**`);
        }

    }
    }