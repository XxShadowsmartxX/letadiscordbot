const Discord = require('discord.js');

const client = new Discord.Client();

module.exports = {
    name: 'delete', 
    description: "support command", 
    execute(message, args, channel){
        
        if (message.member.roles.cache.some(role =>['Regiment Command'].includes(role.name))) {
          
          message.channel.bulkDelete(100, true)

          message.channel.send('done!')

message.delete()


        const modlogs = new Discord.MessageEmbed()
        .setColor('020f73')
        .setTitle('Delete Command')
        .setAuthor('CFMP Moderation Logs', 'https://cdn.discordapp.com/emojis/799646515496747069.png?v=1')
        .addFields(
            { name: 'Command Usage', value: `**${message.content}**` },
            { name: 'Command Used', value: '**-delete**', inline: true },
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
            message.channel.send('Insufficient Permissions.').then(m => m.delete({ timeout: 6500}));
        }

    }
    }