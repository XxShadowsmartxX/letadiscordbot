const Discord = require('discord.js');

module.exports = {
    name: 'support', 
    description: "this is a youtube command!", 
    execute(message, args){
        message.delete()
        if (message.member.roles.cache.has('705092415899303977')){
        const embed = new Discord.MessageEmbed()
            .setColor('020f73')
            .setTitle('All Commands')
            .setAuthor('ALETA Help Command', 'https://media.discordapp.net/attachments/705093565113434212/736015262477844500/6c1e7537f9aa230b0a49494c49779dca.png')
            .setDescription(`**-phase1** TIME OF SLOCK AM/PM TIMEZONE\n**Ex.** -phase1 11:45 PM PST\n\n**-phase2** TIME OF SLOCK AM/PM TIMEZONE\n**Ex.** -phase2 11:45 PM PST\n\n**-phase3** TIME OF SLOCK AM/PM TIMEZONE\n**Ex.** -phase3 11:45 PM PST\n\n**-phase4** TIME OF SLOCK AM/PM TIMEZONE\n**Ex.** -phase4 11:45 PM PST\n\n**-phase1cl** SCREENSHOT OF PHASE\n**Ex.** -phase1cl https://gyazo.com/ce6768d26595c5e7b1ac2aa646d4f8b9\n\n**-phase2cl** SCREENSHOT OF PHASE\n**Ex.** -phase2cl https://gyazo.com/ce6768d26595c5e7b1ac2aa646d4f8b9\n\n**-phase3cl** SCREENSHOT OF PHASE\n**Ex.** -phase3cl https://gyazo.com/ce6768d26595c5e7b1ac2aa646d4f8b9\n\n**-phase4cl** SCREENSHOT OF PHASE\n**Ex.** -phase4cl https://gyazo.com/ce6768d26595c5e7b1ac2aa646d4f8b9\n\n**-phasesl** - Slock command\n**Ex.** -phasesl`)
            .setFooter('Aigio Law Enforcement Training Academy', 'https://media.discordapp.net/attachments/705093565113434212/736015262477844500/6c1e7537f9aa230b0a49494c49779dca.png')
        message.author.send(embed);

        } else {
            message.channel.send('Insufficient Permissions.');
        }

    }
    }