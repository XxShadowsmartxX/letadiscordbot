const Discord = require('discord.js');

module.exports = {
    name: 'phase1', 
    description: "this is a youtube command!", 
    execute(message, args){
        message.channel.send('<@&716370077611720746>');
        if (message.member.roles.cache.has('716371210023338027')){
        const embed = new Discord.MessageEmbed()
            .setColor('020f73')
            .setTitle('Phase 1 Notification')
            .setAuthor('ALETA Phase System', 'https://media.discordapp.net/attachments/705093565113434212/736015262477844500/6c1e7537f9aa230b0a49494c49779dca.png')
            .setDescription(`A **Phase 1** is being hosted right now.\n\n**Phase Host: ${message.author}\n\nPhase Slock At: **${args[0]} ${args[1]} ${args[2]}**\n\n- Make a divisional outside of the campus on the yellow road lines.\n- PTS is in effect.\n- Follow all directions given by the hosts and co-hosts.\n- Be prepared and pay attention!``\n\n**Campus Link**: https://www.roblox.com/games/5046852624/ALETA-Campus?refPageId=703da718-c993-4ed5-b154-4b2f3017c2ba#`)
            .setFooter('Aigio Law Enforcement Training Academy', 'https://media.discordapp.net/attachments/705093565113434212/736015262477844500/6c1e7537f9aa230b0a49494c49779dca.png')
        message.channel.send(embed);
            message.delete()

        } else {
            message.channel.send('Insufficient Permissions.');
            message.delete()
        }

    }
    }