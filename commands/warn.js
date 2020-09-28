const Discord = require('discord.js');

const client = new Discord.Client();

const warns = require('../database/models/warns.js');

module.exports = {
    name: 'warn', 
    description: "this is a youtube command!", 
    execute(message, args){
        message.delete()
        let user = message.mentions.users.first();
        if (message.member.roles.cache.has('492311659558469633') || ('707336925836607498')){

            const msg = message.mentions.users.first() || 
            message.guild.members.cache.get(args[0])
            if(!msg) return message.channel.send(`${message.author}, Please specify a user by mentioning them.`);

            const reason = args.slice(0).join(" ");
            if(!reason) return message.channel.send(`${message.author}, Please specify a reason for the warn.`);
            
            warns.findOne(
                { Guild: message.guild.id, User: user.id },
                async (err, data) => {
                  if (err) console.log(err);
                  if (!data) {
                    let newWarns = new warns({
                      User: user.id,
                      Guild: message.guild.id,
                      Warns: [
                        {
                          Moderator: message.author.id,
                          Reason: args.slice(1).join(" "),
                        },
                      ],
                    });
                    newWarns.save();
                    message.channel.send(
                      `${user.tag} has been warned with the reason of ${args
                        .slice(1)
                        .join(" ")}. They now have 1 warn.`
                    );
                  } else {
                    data.Warns.unshift({
                      Moderator: message.author.id,
                      Reason: args.slice(1).join(" "),
                    });
                    data.save();
                    message.channel.send(
                      `${user.tag} has been warned with the reason of ${args
                        .slice(1)
                        .join(" ")}. They know have ${data.Warns.length} warns.`
                    );
                  }
                }
              );

            const modlogs = new Discord.MessageEmbed()
            .setColor('BLURPLE')
            .setTitle('Warn Command')
            .setAuthor('ALETA Moderation Logs', 'https://media.discordapp.net/attachments/705093565113434212/736015262477844500/6c1e7537f9aa230b0a49494c49779dca.png')
            .addFields(
                { name: 'Command Usage', value: `**${message.content}**` },
                { name: 'Command Used', value: '**-warn**', inline: true },
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