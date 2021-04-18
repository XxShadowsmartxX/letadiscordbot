const Discord = require('discord.js');

const client = new Discord.Client();

module.exports = {
    name: 'offadleave', 
    description: "this is a youtube command!", 
    execute(message, args){

        if (message.member.roles.cache.some(role =>['NIS', 'Company Command', 'Regiment Command', 'NIS Command'].includes(role.name))) {

    if(process.env.logschannel === 'false') return;
    let logchannel1 = message.guild.channels.cache.get(process.env.logschannel);

                const reason40 = args[0];
if(!reason40) return message.channel.send(`${message.author}, Please specify a user by mentioning them.`);

        logchannel1.send(`${args[0]} has been taken off **Administrative Leave**. They are now free to resume normal duties.\n\n**Issued by:** ${message.author}`)

const role = message.guild.roles.cache.find(role => role.name === 'Administrative Leave');
const member = message.mentions.members.first();
member.roles.remove(role);

message.delete()
            
        const modlogs = new Discord.MessageEmbed()
        .setColor('GREEN')
        .setTitle('Off Admin. Leave Command')
        .setAuthor('CFMP Moderation Logs', 'https://cdn.discordapp.com/emojis/799646515496747069.png?v=1')
        .addFields(
            { name: 'Command Usage', value: `**${message.content}**` },
            { name: 'Command Used', value: '**-offadleave**', inline: true },
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
            message.channel.send(`${message.author}, Insufficient Permissions for **-offadleave** command.\n\nRoles required: **NIS**, **NIS Command**, **Company Command**, or **Regiment Command**`).then(m => m.delete({ timeout: 6500}));
        }

    }
    }