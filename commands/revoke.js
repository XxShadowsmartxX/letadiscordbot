const Discord = require('discord.js');

const client = new Discord.Client();

module.exports = {
    name: 'revoke', 
    description: "this is a youtube command!", 
    execute(message, args){
        message.delete()
        if (message.member.roles.cache.has('705082977209548870')){
        const embed = new Discord.MessageEmbed()
            .setColor('020f73')
            .setTitle('Certification Revoke Notice')
            .setAuthor('ALETA Administrative Message', 'https://media.discordapp.net/attachments/705093565113434212/736015262477844500/6c1e7537f9aa230b0a49494c49779dca.png')
            .setDescription(`To ${args[0]},\n\nYour Aigio Law Enforcement Training Academy Certification has been **revoked** by the LETA Administration. You are allowed to appeal after **## days**. More information regarding this revocation can be found on the ALETA Database; Revokes Sheet.\n\n**Regards,**\nAigio Law Enforcement Training Academy Administration`)
            .setFooter('Aigio Law Enforcement Traning Academy','https://media.discordapp.net/attachments/705093565113434212/736015262477844500/6c1e7537f9aa230b0a49494c49779dca.png')
            .addField('Notice Sent By', `${message.author.username}#${message.author.discriminator}`, true)
            .setTimestamp()
            const msg = message.mentions.users.first() || 
            message.guild.members.cache.get(args[0])
            msg.send(embed)

        const modlogs = new Discord.MessageEmbed()
        .setColor('RED')
        .setTitle('Revoke Command')
        .setAuthor('ALETA Moderation Logs', 'https://media.discordapp.net/attachments/705093565113434212/736015262477844500/6c1e7537f9aa230b0a49494c49779dca.png')
        .addFields(
            { name: 'Command Usage', value: `**${message.content}**` },
            { name: 'Command Used', value: '**-revoke**', inline: true },
            { name: 'Command Author', value: `${message.author.username}#${message.author.discriminator}`, inline: true },
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