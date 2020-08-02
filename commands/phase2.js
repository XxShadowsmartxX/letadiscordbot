const Discord = require('discord.js');

module.exports = {
    name: 'phase2', 
    description: "this is a youtube command!", 
    execute(message, args){

        const channel = client.channels.cache.get('710960625135779911');

        channel.send(`${message.content}`);
        
        message.delete()
        if (message.member.roles.cache.has('705082980770512996')){
            message.channel.send('<@&705083000118837268> <@&705082979784851596>')
        const embed = new Discord.MessageEmbed()
            .setColor('020f73')
            .setTitle('Phase 2 Notification')
            .setAuthor('ALETA Phase System', 'https://media.discordapp.net/attachments/705093565113434212/736015262477844500/6c1e7537f9aa230b0a49494c49779dca.png')
            .setDescription(`A **Phase 2** is being hosted at the campus!\n\nDivisional at the yellow road lines. Grab a uniform if needed. PTS is in effect.\n\n**Phase 2 Host:** ${message.author}\n\n**Starting Time:** ${args[0]} ${args[1]} ${args[2]}\n\n> **Campus Link:** https://www.roblox.com/games/5046852624/ALETA-Campus?refPageId=703da718-c993-4ed5-b154-4b2f3017c2ba#`)
        message.channel.send(embed);

        } else {
            message.channel.send('Insufficient Permissions.');
        }

    }
    }