const Discord = require('discord.js');

module.exports = {
    name: 'phase1', 
    description: "this is a youtube command!", 
    execute(message, args){

        if (message.member.roles.cache.has('716371210023338027')){
        const embed = new Discord.MessageEmbed()
            message.channel.send('hi')
            .setColor('020f73')
            .setTitle('Phase 1 Announcement')
            .setAuthor('Aigio Law Enforcement Training Academy', 'https://media.discordapp.net/attachments/705093565113434212/736015262477844500/6c1e7537f9aa230b0a49494c49779dca.png')
            .setDescription(`PHASE # BEGINNING SHORTLY!\n\nA **Phase 1** is being hosted by, ${message.author}. Come on down!\n\nPhase Slock At: **${args[0]} ${args[1]} ${args[2]}**\n\nFollow all directions posted at the campus and be prepared!\n\n**Campus Link**: https://www.roblox.com/games/5046852624/ALETA-Campus?refPageId=703da718-c993-4ed5-b154-4b2f3017c2ba#`);
        message.channel.send(embed);
            message.delete()

        } else {
            message.channel.send('Insufficient Permissions.');
            message.delete()
        }

    }
    }