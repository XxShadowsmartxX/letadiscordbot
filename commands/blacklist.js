const Discord = require('discord.js');

const client = new Discord.Client();

module.exports = {
    name: 'blacklist', 
    description: "this is a youtube command!", 
    execute(message, args){
        message.delete()
        if (message.member.roles.cache.has('705082977209548870')){
        const embed = new Discord.MessageEmbed()
            .setColor('#0C3350')
            .setTitle('Academy Blacklist Notice')
            .setAuthor('ALETA Administrative Message', 'https://media.discordapp.net/attachments/705093565113434212/736015262477844500/6c1e7537f9aa230b0a49494c49779dca.png')
            .setDescription(`To ${args[0]},\n\nYou have been **blacklisted** by the ALETA Administration.\n\nYou have been blacklisted for the following reason(s):**${args.slice(1).join(" ")}**\n\nMore information regarding your blacklist can be found on the **'BLACKLISTS'** sheet which sits on the ALETA database.\nThis sort of blacklist is **appealable** after **90 days** of receiving the punishment.\nBlacklist appeals can be tracked on the **'ADMIN HUB'** sheet on the ALETA database.\n\n**Regards,**\nAigio Law Enforcement Training Academy Administration`)
            .setFooter('Aigio Law Enforcement Training Academy','https://media.discordapp.net/attachments/705093565113434212/736015262477844500/6c1e7537f9aa230b0a49494c49779dca.png')
            .addField('Notice Sent By', `${message.author}`, true)
            .setTimestamp()
            const msg = message.mentions.users.first() || 
            message.guild.members.cache.get(args[0])
            if(!msg) return message.channel.send(`${message.author}, Please specify a user by mentioning them.`);

            const reason = args.slice(1).join(" ");
            if(!reason) return message.channel.send(`${message.author}, Please specify a reason for blacklisting the certification.`);
            msg.send(embed)

            message.channel.send(`${message.author}, **Academy Blacklist** notice successfully sent to ${args[0]}.`);

        const modlogs = new Discord.MessageEmbed()
        .setColor('RED')
        .setTitle('Blacklist Command')
        .setAuthor('ALETA Moderation Logs', 'https://media.discordapp.net/attachments/705093565113434212/736015262477844500/6c1e7537f9aa230b0a49494c49779dca.png')
        .addFields(
            { name: 'Command Usage', value: `**${message.content}**` },
            { name: 'Command Used', value: '**-blacklist**', inline: true },
            { name: 'Command Author', value: `${message.author}`, inline: true },
            { name: 'Command Channel', value: `${message.channel}`, inline: true },
        )
        .setFooter('Aigio Law Enforcement Training Academy','https://media.discordapp.net/attachments/705093565113434212/736015262477844500/6c1e7537f9aa230b0a49494c49779dca.png')
        .setTimestamp()

        const mst = message.client.channels.cache.get('749011808567951500');
        mst.send(modlogs);

        } else {
            message.channel.send(`${message.author}, Insufficient Permissions for **-blacklist** command.\n\nRoles required: **Administration**`);
        }

    }
    }