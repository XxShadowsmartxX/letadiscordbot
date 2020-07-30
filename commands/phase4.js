const Discord = require('discord.js');

module.exports = {
    name: 'phase4', 
    description: "this is a youtube command!", 
    execute(message, args){
        if (message.member.roles.cache.has('716371210023338027')){
        const embed = new Discord.MessageEmbed()
            .setUnembedded('testing')
            .setColor('020f73')
            .setTitle('Phase 4 Notification')
            .setAuthor('ALETA Phase System', 'https://media.discordapp.net/attachments/705093565113434212/736015262477844500/6c1e7537f9aa230b0a49494c49779dca.png')
            .setDescription(`A **Phase 4** is being hosted at the campus!\n\nDivisional at the yellow road lines. Grab a uniform if needed. PTS is in effect.\n\n**Phase 4 Host:** ${message.author}\n\n**Starting Time:** ${args[0]} ${args[1]} ${args[2]}\n\n**Campus Link:** https://www.roblox.com/games/5046852624/ALETA-Campus?refPageId=703da718-c993-4ed5-b154-4b2f3017c2ba#`)
            message.channel.send('<@&716370077611720746>');
        message.channel.send(embed);
            message.delete()

        } else {
            message.channel.send('Insufficient Permissions.');
            message.delete()
        }

    }
    }