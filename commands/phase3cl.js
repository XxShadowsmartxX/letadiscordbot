const Discord = require('discord.js');

const client = new Discord.Client();

module.exports = {
    name: 'phase3cl', 
    description: "this is a youtube command!", 
    execute(message, args){
        message.delete()
        if (message.member.roles.cache.has('705082980770512996')){
            message.channel.send('<@&705082999292559430>')
        const embed = new Discord.MessageEmbed()
            .setColor('020f73')
            .setTitle('Phase 3 Conclusion Notification')
            .setAuthor('ALETA Phase System', 'https://media.discordapp.net/attachments/705093565113434212/736015262477844500/6c1e7537f9aa230b0a49494c49779dca.png')
            .setDescription(`**This phase 3** has **concluded!**\n\n**Phase Host:** ${message.author}\n\nMake sure to take the phase examination and complete it fully. Take your time.\n\n**Evidence of Phase:** ${args.slice(0).join(' ')}\n\n> **Examination Link:** https://docs.google.com/forms/d/1y997jxRHIVipY7dlXpi5vz9uQdrFP_yqQKQAnl9vKR8/edit`)
        message.channel.send(embed);

        const modlogs = new Discord.MessageEmbed()
        .setColor('ORANGE')
        .setTitle('Phase 3 Conclusion Command')
        .setAuthor('ALETA Moderation Logs', 'https://media.discordapp.net/attachments/705093565113434212/736015262477844500/6c1e7537f9aa230b0a49494c49779dca.png')
        .addFields(
            { name: 'Command Usage', value: `**${message.content}**` },
            { name: 'Command Used', value: '**-phase3cl**', inline: true },
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