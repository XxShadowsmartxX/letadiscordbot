const Discord = require('discord.js');

const client = new Discord.Client();

module.exports = {
    name: 'accept', 
    description: "this is a youtube command!", 
    execute(message, args){
        message.delete()
        if (message.member.roles.cache.has('705101158766870528')){
        const embed = new Discord.MessageEmbed()
            .setColor('#0C3350')
            .setTitle('Academy Acceptance Notice')
            .setAuthor('ALETA Administrative Message', 'https://media.discordapp.net/attachments/705093565113434212/736015262477844500/6c1e7537f9aa230b0a49494c49779dca.png')
            .setDescription(`To ${args[0]},\n\nYou have been successfully accepted and enrolled within the Aigio Law Enforcement Training Academy. We congratulate you on this achievement. You will need to complete 4 phases and a final exam at the end of your journey. After that, you will become a certified peace officer. Once again, congratulations.\n\n> Please rejoin the ALETA discord to get your updated roles automatically.\n> Be sure to join the ALETA Roblox Group if you haven't already.\n\n**Regards,**\nAigio Law Enforcement Training Academy;Admissions Team`)
            .setFooter('Aigio Law Enforcement Traning Academy','https://media.discordapp.net/attachments/705093565113434212/736015262477844500/6c1e7537f9aa230b0a49494c49779dca.png')
            .addField('Notice Sent By', `${message.author}`, true)
            .setTimestamp()
            const msg = message.mentions.users.first() || 
            message.guild.members.cache.get(args[0])
            msg.send(embed)

        const modlogs = new Discord.MessageEmbed()
        .setColor('GREEN')
        .setTitle('Accept Command')
        .setAuthor('ALETA Moderation Logs', 'https://media.discordapp.net/attachments/705093565113434212/736015262477844500/6c1e7537f9aa230b0a49494c49779dca.png')
        .addFields(
            { name: 'Command Usage', value: `**${message.content}**` },
            { name: 'Command Used', value: '**-accept**', inline: true },
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