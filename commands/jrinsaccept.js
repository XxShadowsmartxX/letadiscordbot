const Discord = require('discord.js');

const client = new Discord.Client();

module.exports = {
    name: 'jrinsaccept', 
    description: "this is a youtube command!", 
    execute(message, args){
        message.delete()
        if (message.member.roles.cache.has('705082977209548870')){
        const embed = new Discord.MessageEmbed()
            .setColor('#0C3350')
            .setTitle('Junior Instructor Acceptance Notice')
            .setAuthor('ALETA Administrative Message', 'https://media.discordapp.net/attachments/705093565113434212/736015262477844500/6c1e7537f9aa230b0a49494c49779dca.png')
            .setDescription(`To ${args[0]},\n\nYou have been accepted into the ALETA staff team as a Junior Instructor.\n\n> Please run !getroles in bot commands to receive your roles.\n> Be sure to read the Junior Instructor Guide and the ALETA Policy Book which is listed below.\n> Please note that you may not host or co-host any trainings until you are properly certified.\n\n**Junior Instructor Guide:** https://docs.google.com/document/d/1P7Te40_QgI9w8uX83rm99ftUCREfLokKfo1u9QaMplY/edit?usp=sharing\n**ALETA Policy Book:** https://docs.google.com/document/d/1KsgBcZCdgL8qIYAKJJGp_vP3eV2QTQYY-JXwCdSmiq0/edit?usp=sharing\n\nAny questions can go to **Chief Instructor MattSnowy**.\n\nRegards,\n**Aigio Law Enforcement Training Academy Administration**`)
            .setFooter('Aigio Law Enforcement Training Academy','https://media.discordapp.net/attachments/705093565113434212/736015262477844500/6c1e7537f9aa230b0a49494c49779dca.png')
            .addField('Notice Sent By', `${message.author}`, true)
            .setTimestamp()
            const msg = message.mentions.users.first() || message.guild.members.cache.get(args[0])
            if(!msg) return message.channel.send(`${message.author}, Please specify a user by mentioning them.`);
            msg.send(embed)


            message.channel.send(`${message.author}, **Acceptance** notice successfully sent to ${args[0]}.`);


        const modlogs = new Discord.MessageEmbed()
        .setColor('GREEN')
        .setTitle('Junior Instructor Accept Command')
        .setAuthor('ALETA Moderation Logs', 'https://media.discordapp.net/attachments/705093565113434212/736015262477844500/6c1e7537f9aa230b0a49494c49779dca.png')
        .addFields(
            { name: 'Command Usage', value: `**${message.content}**` },
            { name: 'Command Used', value: '**-jrinsaccept**', inline: true },
            { name: 'Command Author', value: `${message.author}`, inline: true },
            { name: 'Command Channel', value: `${message.channel}`, inline: true },
        )
        .setFooter('Aigio Law Enforcement Training Academy','https://media.discordapp.net/attachments/705093565113434212/736015262477844500/6c1e7537f9aa230b0a49494c49779dca.png')
        .setTimestamp()

        const mst = message.client.channels.cache.get('749011808567951500');
        mst.send(modlogs);

        } else {
            message.channel.send(`${message.author}, Insufficient Permissions for **-jrinsaccept** command.\n\nRoles required: **Administration**`);
        }

    }
    }