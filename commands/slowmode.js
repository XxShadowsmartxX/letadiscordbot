const Discord = require('discord.js');

const client = new Discord.Client();

const ms = require('ms');

module.exports = {
    name: 'slowmode', 
    description: "this is a youtube command!", 
    execute(message, args){


        if (message.member.roles.cache.some(role =>['Server Moderator', 'Regiment Command'].includes(role.name))) {

                   if (args[0] === 'off') {

          message.channel.setRateLimitPerUser(0);
          message.channel.send(`off`)

         }

            if (!args[0])
            return message.channel.send(
              `Please specify a number in seconds to set the slowmode to.`
            );

          if (!args[0]) return message.channel.send(`Please put a **number in seconds** to turn on the slowmode for.`);
          
          
          message.channel.setRateLimitPerUser(args[0]);
          message.channel.send(
            `Slowmode set to **${args[0]}** seconds.` 
          );

            const modlogs = new Discord.MessageEmbed()
            .setColor('BLURPLE')
            .setTitle('Slowmode Command')
            .setAuthor('CFMP Moderation Logs', 'https://cdn.discordapp.com/emojis/799646515496747069.png?v=1')
            .addFields(
                { name: 'Command Usage', value: `**${message.content}**` },
                { name: 'Command Used', value: '**-slowmode**', inline: true },
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
            message.channel.send(`${message.author}, Insufficient Permissions for **-slowmode** command.\n\nRoles required: **Server Moderator** or **Regiment Command**`);
        }

    }
    }