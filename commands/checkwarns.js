const Discord = require('discord.js');

const client = new Discord.Client();

const warns = require('../database/models/warns.js');

const { MessageEmbed } = require("discord.js");

module.exports = {
    name: 'checkwarns', 
    description: "this is a youtube command!", 
    execute(message, args){

        let user = message.mentions.users.first();

        if (message.member.roles.cache.has('492311659558469633') || ('707336925836607498')){

            const msg = message.mentions.users.first() || 
            message.guild.members.cache.get(args[0])
            if(!msg) return message.channel.send(`${message.author}, Please specify a user by mentioning them.`);
            
            warns.find(
                { Guild: message.guild.id, User: user.id },
                async (err, data) => {
                  if (err) console.log(err);
                  if (!data.length)
                    return message.channel.send(
                      `${user.tag} has not got any warns in this guild!`
                    );

                  let Embed = new MessageEmbed()
                    .setColor('#0C3350')
                    .setTitle(`${user.tag}'s warns in ${message.guild.name} `)
                    .setDescription(
                      data.map((d) => {
                        return d.Warns.map(
                          (w, i) =>
                            `${i} - Moderator: ${
                              message.guild.members.cache.get(w.Moderator).user.tag
                            } Reason: ${w.Reason}`
                        ).join("\n");
                      })
                    );
                  message.channel.send(Embed);
                }
              );

            const modlogs = new Discord.MessageEmbed()
            .setColor('BLURPLE')
            .setTitle('Checkwarns Command')
            .setAuthor('ALETA Moderation Logs', 'https://media.discordapp.net/attachments/705093565113434212/736015262477844500/6c1e7537f9aa230b0a49494c49779dca.png')
            .addFields(
                { name: 'Command Usage', value: `**${message.content}**` },
                { name: 'Command Used', value: '**-checkwarns**', inline: true },
                { name: 'Command Author', value: `${message.author}`, inline: true },
                { name: 'Command Channel', value: `${message.channel}`, inline: true },
            )
            .setFooter('Aigio Law Enforcement Training Academy','https://media.discordapp.net/attachments/705093565113434212/736015262477844500/6c1e7537f9aa230b0a49494c49779dca.png')
            .setTimestamp()
    
            const mst = message.client.channels.cache.get('749011808567951500');
            mst.send(modlogs);
    

        } else {
            message.channel.send(`${message.author}, Insufficient Permissions for **-blacklist** command.\n\nRoles required: **Moderator**`);
        }

    }
    }