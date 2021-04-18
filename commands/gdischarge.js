const Discord = require('discord.js');

const client = new Discord.Client();

module.exports = {
    name: 'gdischarge', 
    description: "this is a youtube command!", 
    execute(message, args){

        if (message.member.roles.cache.some(role =>['Regiment Command', 'Company Command', 'Second Lieutenant'].includes(role.name))) {

    if(process.env.logschannel === 'false') return;
    let logchannel1 = message.guild.channels.cache.get(process.env.logschannel);

                            const reason41 = args[0];
if(!reason41) return message.channel.send(`${message.author}, Please specify a user to general discharge by mentioning them.`);

                const reason40 = args.slice(1).join(' ');
if(!reason40) return message.channel.send(`${message.author}, Please specify a reason for the general discharge.`);

        logchannel1.send(`${args[0]} has been issued a general discharge for **${args.slice(1).join(' ')}**. Thank you for your service!\n\n**Issued by:** ${message.author}\n<@&821910794307502101>`)



message.delete()
            
        const modlogs = new Discord.MessageEmbed()
        .setColor('GREEN')
        .setTitle('Gen. Discharge Command')
        .setAuthor('CFMP Moderation Logs', 'https://cdn.discordapp.com/emojis/799646515496747069.png?v=1')
        .addFields(
            { name: 'Command Usage', value: `**${message.content}**` },
            { name: 'Command Used', value: '**-gdischarge**', inline: true },
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
            message.channel.send(`${message.author}, Insufficient Permissions for **-gdischarge** command.\n\nRoles required: **Second Lieutenant**, **Company Command** or **Regiment Command**`).then(m => m.delete({ timeout: 6500}));
        }

    }
    }