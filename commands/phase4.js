const Discord = require('discord.js');

const client = new Discord.Client();

module.exports = {
    name: 'phase4', 
    description: "this is a youtube command!", 
    execute(message, args){
        message.delete()
        if (message.member.roles.cache.has('705082980770512996')){
            message.channel.send('<@&705938947305504824> <@&705082979784851596>')
        const embed = new Discord.MessageEmbed()
            .setColor('020f73')
            .setTitle('Phase 4 Notification')
            .setAuthor('ALETA Phase System', 'https://media.discordapp.net/attachments/705093565113434212/736015262477844500/6c1e7537f9aa230b0a49494c49779dca.png')
            .setDescription(`A **Phase 4** is being hosted at the campus!\n\nDivisional at the yellow road lines. Grab a uniform if needed. PTS is in effect.\n\n**Phase 4 Host:** ${message.author}\n\n**Starting Time:** ${args[0]} ${args[1]} ${args[2]}\n\n> **Campus Link:** https://www.roblox.com/games/5046852624/ALETA-Campus?refPageId=703da718-c993-4ed5-b154-4b2f3017c2ba#`)
        message.channel.send(embed);

        const modlogs = new Discord.MessageEmbed()
        .setColor('ORANGE')
        .setTitle('Phase 4 Command')
        .setAuthor('ALETA Moderation Logs', 'https://media.discordapp.net/attachments/705093565113434212/736015262477844500/6c1e7537f9aa230b0a49494c49779dca.png')
        .addFields(
            { name: 'Command Usage', value: `**${message.content}**` },
            { name: 'Command Used', value: '**-phase4**', inline: true },
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