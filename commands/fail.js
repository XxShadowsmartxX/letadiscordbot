const Discord = require('discord.js');

const client = new Discord.Client();

module.exports = {
    name: 'fail', 
    description: "this is a youtube command!", 
    execute(message, args){
        message.delete()
        if (message.member.roles.cache.has('705082980770512996') || ('705082977209548870')){
        const embed = new Discord.MessageEmbed()
            .setColor('#0C3350')
            .setTitle('Final Exam Notice')
            .setAuthor('ALETA Administrative Message', 'https://media.discordapp.net/attachments/705093565113434212/736015262477844500/6c1e7537f9aa230b0a49494c49779dca.png')
            .setDescription(`To ${args[0]},\n\nYou have failed your final exam. You will not be moving forward with the rest oof the class. You are free to apply next class if you wish.\n\nRegards,\n**ALETA Administration**`)
            .setFooter('Aigio Law Enforcement Training Academy','https://media.discordapp.net/attachments/705093565113434212/736015262477844500/6c1e7537f9aa230b0a49494c49779dca.png')
            .addField('Notice Sent By', `${message.author}`, true)
            .setTimestamp()

            const msg = message.mentions.users.first() || message.guild.members.cache.get(args[0])
            if(!msg) return message.channel.send(`${message.author}, Please specify a user by mentioning them.`);
            msg.send(embed)




            message.channel.send(`${message.author}, **Fail** notice successfully sent to ${args[0]}.`);


        const modlogs = new Discord.MessageEmbed()
        .setColor('YELLOW')
        .setTitle('Fail Command')
        .setAuthor('ALETA Moderation Logs', 'https://media.discordapp.net/attachments/705093565113434212/736015262477844500/6c1e7537f9aa230b0a49494c49779dca.png')
        .addFields(
            { name: 'Command Usage', value: `**${message.content}**` },
            { name: 'Command Used', value: '**-fail**', inline: true },
            { name: 'Command Author', value: `${message.author}`, inline: true },
            { name: 'Command Channel', value: `${message.channel}`, inline: true },
        )
        .setFooter('Aigio Law Enforcement Training Academy','https://media.discordapp.net/attachments/705093565113434212/736015262477844500/6c1e7537f9aa230b0a49494c49779dca.png')
        .setTimestamp()

        const mst = message.client.channels.cache.get('749011808567951500');
        mst.send(modlogs);

        } else {
            message.channel.send(`${message.author}, Insufficient Permissions for **-fail** command.\n\nRoles required: **LETA Employee** or **Administration**`);
        }

    }
    }