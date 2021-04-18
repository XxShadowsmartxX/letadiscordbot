const Discord = require('discord.js');

const client = new Discord.Client();

module.exports = {
    name: 'accept', 
    description: "this is a youtube command!", 
    execute(message, args){

        if (message.member.roles.cache.some(role =>['Admissions', 'Regiment Command'].includes(role.name))) {

const msg = message.mentions.users.first() || 
  message.guild.members.cache.get(args[0])

  if(!msg) return message.channel.send(`${message.author}, Please specify a user by mentioning them.`)

        const embed = new Discord.MessageEmbed()
            .setColor('#cc4040')
            .setTitle('CFMP Acceptance Notice')
            .setAuthor('CFMP Administrative Message', 'https://cdn.discordapp.com/emojis/799646515496747069.png?v=1')
            .setDescription(`To ${args[0]},\n\nYou have been successfully accepted into the Canadian Forces Military Police.\n\nPlease join our Training & Education discord server linked below. Please also make you send a request to the group if you haven't already done so.\n\nDiscord Link: https://discord.gg/wDW5QTEdyX\n\n**Regards,**\nCanadian Forces Military Police Admissions`)
            .setFooter('Canadian Forces Military Police','https://cdn.discordapp.com/emojis/799646515496747069.png?v=1')
            .addField('Notice Sent By', `${message.author}`, true)
            .setTimestamp()

    const reason9 = args[0];
if(!reason9) return message.channel.send(`${message.author}, Please specify a user to accept by mentioning them.`);

            msg.send(embed)

message.delete()

            message.channel.send(`${message.author}, **Acceptance** notice successfully sent to ${args[0]}.`);
            
        const modlogs = new Discord.MessageEmbed()
        .setColor('GREEN')
        .setTitle('Accept Command')
        .setAuthor('CFMP Moderation Logs', 'https://cdn.discordapp.com/emojis/799646515496747069.png?v=1')
        .addFields(
            { name: 'Command Usage', value: `**${message.content}**` },
            { name: 'Command Used', value: '**-accept**', inline: true },
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
            message.channel.send(`${message.author}, Insufficient Permissions for **-accept** command.\n\nRoles required: **Admissions** or **Regiment Command**`).then(m => m.delete({ timeout: 6500}));
            message.delete({ timeout: 6500});
        }

    }
    }