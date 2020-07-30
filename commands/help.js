const Discord = require('discord.js');

module.exports = {
    name: 'help', 
    description: "this is a youtube command!", 
    execute(message, args){
        message.delete()
        if (message.member.roles.cache.has('705092415899303977')){
            message.channel.send(`${message.author}`)
        const embed = new Discord.MessageEmbed()
            .setColor('020f73')
            .setTitle('All Commands')
            .setAuthor('ALETA Help Command', 'https://media.discordapp.net/attachments/705093565113434212/736015262477844500/6c1e7537f9aa230b0a49494c49779dca.png')
            .setDescription(`**-phase1** TIME OF SLOCK AM/PM TIMEZONE\n**Ex.** -phase1 11:45 PM PST\n\n**-phase2** TIME OF SLOCK AM/PM TIMEZONE\n**Ex.** -phase2 11:45 PM PST\n\n**-phase3** TIME OF SLOCK AM/PM TIMEZONE\n**Ex.** -phase3 11:45 PM PST\n\n**-phase4** TIME OF SLOCK AM/PM TIMEZONE\n**Ex.** -phase4 11:45 PM PST\n\n**-phasesl** - Slock command\n\n**-phasecl** SCREENSHOT LINK\n**Ex.** -phasecl https://gyazo.com/9bf124b58ea8348fd043a795584b9ab4`)
        message.channel.send(embed);

        } else {
            message.channel.send('Insufficient Permissions.');
        }

    }
    }