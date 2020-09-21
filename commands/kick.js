const Discord = require('discord.js');

const client = new Discord.Client();

const kicks = require('../database/models/kicks.js');

module.exports = {
    name: 'kick', 
    description: "this is a youtube command!", 
    execute(message, args){
        message.delete()
        let user = message.mentions.users.first();
        
        if (message.member.roles.cache.has('492311659558469633') || ('707336925836607498')){

            let msg = message.mentions.users.first();
            if(!msg) return message.channel.send(`${message.author}, Please specify a user by mentioning them.`);

            let reason = args.slice(1).join(" ");
            if(!reason) return message.channel.send(`${message.author}, Please specify a reason for the kick.`);

            kicks.findOne(
                { Guild: message.guild.id, User: user.id },
                async (err, data) => {
                  if (err) console.log(err);
                  if (!data) {
                    let newKicks = new kicks({
                      User: user.id,
                      Guild: message.guild.id,
                      Kicks: [
                        {
                          Moderator: message.author.id,
                          Reason: args.slice(1).join(" "),
                        },
                      ],
                    });
                    const modlogs = new Discord.MessageEmbed()
            .setColor('BLURPLE')
            .setTitle('Warn Command')
            .setAuthor('ALETA Moderation Logs', 'https://media.discordapp.net/attachments/705093565113434212/736015262477844500/6c1e7537f9aa230b0a49494c49779dca.png')
            .addFields(
                { name: 'Command Usage', value: `**${message.content}**` },
                { name: 'Command Used', value: '**-say**', inline: true },
                { name: 'Command Author', value: `${message.author}`, inline: true },
                { name: 'Command Channel', value: `${message.channel}`, inline: true },
            )
            .setFooter('Aigio Law Enforcement Training Academy','https://media.discordapp.net/attachments/705093565113434212/736015262477844500/6c1e7537f9aa230b0a49494c49779dca.png')
            .setTimestamp()
            const mst = message.client.channels.cache.get('749011808567951500');
            mst.send(modlogs);
            
                    newKicks.save();
                    message.channel.send(
                      `${user.tag} has been kicked with the reason of ${args
                        .slice(1)
                        .join(" ")}. They now have 1 kick.`
                    );
                  } else {
                    data.Kicks.unshift({
                      Moderator: message.author.id,
                      Reason: args.slice(1).join(" "),
                    });
                    data.save();
                  
                    message.channel.send(
                      `${user.tag} has been kicked with the reason of ${args
                        .slice(1)
                        .join(" ")}. They know have ${data.Kicks.length} kicks.`)
                        
                        user.kick(reason)
                        .catch(err => {
                        if(err) return message.reply('Something went wrong, unable to kick this ');
                        })
                    
                        }
                    })
                     
                      
                

        } else {
            message.channel.send('Insufficient Permissions.');
        }

    }
    }