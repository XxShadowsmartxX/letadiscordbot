const Discord = require('discord.js');

const client = new Discord.Client();


module.exports = {
    name: 'slowmode', 
    description: "this is a youtube command!", 
    execute(message, args){


        if (message.member.roles.cache.has('492311659558469633') || ('707336925836607498')){

            if (!args[0])
            return message.channel.send(
              `Please specify a number in seconds to set the slowmode to.`
            );

          if (isNaN(args[0])) return message.channel.send(`Please put a **number in seconds** to turn on the slowmode for.`);
          
          
          message.channel.setRateLimitPerUser(args[0]);
          message.channel.send(
            `Slowmode set to **${args[0]}**.` 
          );

            const modlogs = new Discord.MessageEmbed()
            .setColor('BLURPLE')
            .setTitle('Slowmode Command')
            .setAuthor('ALETA Moderation Logs', 'https://media.discordapp.net/attachments/705093565113434212/736015262477844500/6c1e7537f9aa230b0a49494c49779dca.png')
            .addFields(
                { name: 'Command Usage', value: `**${message.content}**` },
                { name: 'Command Used', value: '**-slowmode**', inline: true },
                { name: 'Command Author', value: `${message.author}`, inline: true },
                { name: 'Command Channel', value: `${message.channel}`, inline: true },
            )
            .setFooter('Aigio Law Enforcement Training Academy','https://media.discordapp.net/attachments/705093565113434212/736015262477844500/6c1e7537f9aa230b0a49494c49779dca.png')
            .setTimestamp()
    
            const mst = message.client.channels.cache.get('749011808567951500');
            mst.send(modlogs);
    

        } else {
            message.channel.send('Insufficient Permissions.');
        }

    }
    }