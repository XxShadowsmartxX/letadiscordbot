const Discord = require('discord.js');

const client = new Discord.Client();

module.exports = {
    name: 'phase1cl', 
    description: "this is a youtube command!", 
    execute(message, args){
        message.delete()
        if (message.member.roles.cache.has('705082980770512996')){
            const mst3 = message.client.channels.cache.get('756650206128373871');
            mst3.send('<@&705088849692590260> <@&705082979784851596>');
        const embed = new Discord.MessageEmbed()
            .setColor('#0C3350')
            .setTitle('Phase 1 Conclusion Notification')
            .setAuthor('ALETA Phase System', 'https://media.discordapp.net/attachments/705093565113434212/736015262477844500/6c1e7537f9aa230b0a49494c49779dca.png')
            .setDescription(`**This phase 1** has **concluded!**\n\n**Phase Host:** ${message.author}\n\nMake sure to take the phase examination and complete it fully. Take your time.\n\n**Evidence of Phase:** ${args.slice(0).join(' ')}\n\n> **Examination Link:** https://docs.google.com/forms/d/e/1FAIpQLScekH9VwAulI9nXpcp5aVxNAAF0dxUPb18i6ZPNKU0uo4SatQ/viewform`)
            const mst2 = message.client.channels.cache.get('756650206128373871');
            mst2.send(embed);

        const modlogs = new Discord.MessageEmbed()
        .setColor('ORANGE')
        .setTitle('Phase 1 Conclusion Command')
        .setAuthor('ALETA Moderation Logs', 'https://media.discordapp.net/attachments/705093565113434212/736015262477844500/6c1e7537f9aa230b0a49494c49779dca.png')
        .addFields(
            { name: 'Command Usage', value: `**${message.content}**` },
            { name: 'Command Used', value: '**-phase1cl**', inline: true },
            { name: 'Command Author', value: `${message.author}`, inline: true },
            { name: 'Command Channel', value: `${message.channel}`, inline: true },
        )
        .setFooter('Aigio Law Enforcement Training Academy','https://media.discordapp.net/attachments/705093565113434212/736015262477844500/6c1e7537f9aa230b0a49494c49779dca.png')
        .setTimestamp()

        const mst = message.client.channels.cache.get('749011808567951500');
        mst.send(modlogs);

        } else {
            message.channel.send(`${message.author}, Insufficient Permissions for **-phase1cl** command.\n\nRoles required: **LETA Employee**`);
        }
    }
    }