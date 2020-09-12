const Discord = require('discord.js');

const client = new Discord.Client();

module.exports = {
    name: 'support', 
    description: "support command", 
    execute(message, args, channel){
        message.delete()
        if (message.member.roles.cache.has('705092415899303977')){
        const embed = new Discord.MessageEmbed()
            .setColor('#0C3350')
            .setTitle('Server Commands')
            .setAuthor('ALETA Support Command', 'https://media.discordapp.net/attachments/705093565113434212/736015262477844500/6c1e7537f9aa230b0a49494c49779dca.png')
            .setDescription("```Phase Announcement Commands (HOSTS ONLY)```\n**-phase1** TIME OF SLOCK AM/PM TIMEZONE\n**Ex.** -phase1 11:45 PM PST\n\n**-phase2** TIME OF SLOCK AM/PM TIMEZONE\n**Ex.** -phase2 11:45 PM PST\n\n**-phase3** TIME OF SLOCK AM/PM TIMEZONE\n**Ex.** -phase3 11:45 PM PST\n\n**-phase4** TIME OF SLOCK AM/PM TIMEZONE\n**Ex.** -phase4 11:45 PM PST\n▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬\n```Phase Conclusion Commands/Slock Command (HOSTS ONLY)```\n**-phase1cl** SCREENSHOT LINK OF PHASE\n**Ex.** -phase1cl https://gyazo.com/ce6768d26595c5e7b1ac2aa646d4f8b9\n\n**-phase2cl** SCREENSHOT LINK OF PHASE\n**Ex.** -phase2cl https://gyazo.com/ce6768d26595c5e7b1ac2aa646d4f8b9\n\n**-phase3cl** SCREENSHOT LINK OF PHASE\n**Ex.** -phase3cl https://gyazo.com/ce6768d26595c5e7b1ac2aa646d4f8b9\n\n**-phase4cl** SCREENSHOT LINK OF PHASE\n**Ex.** -phase4cl https://gyazo.com/ce6768d26595c5e7b1ac2aa646d4f8b9\n\n**-phasesl** - Slock command\n**Ex.** -phasesl\n\n**-finalexam** - Sends message for final exam\n\n**-finalexamclose** - Sends message for the closing of final exam\n▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬\n```Enrollment Commands (ADMISSIONS ONLY)```\n**-enrollopen** MONTH DAY TIME AM/PM TIMEZONE (used in <#705552200369176697>\n**Ex.** -enrollopen July 20th, 7:00 PM CDT\n\n**-enrollclose** MONTH DAY, TIME AM/PM TIMEZONE OF REOPENING - Closes enrollment (used in <#705552200369176697>)\n**Ex.** -enrollclose July 20th, 7:00 PM CDT\n\n**-accept** MENTIONUSER - Sends an acceptance letter to mentioned user. Mentioned user must be in ALETA Discord.\n**Ex.** -accept @S_hadowRBLX#8495\n▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬\n```Administrative Commands (ADMINISTRATION ONLY)```\n**-revoke** MENTIONUSER (@Username#Tag) REASON\n**Ex.** -revoke @S_hadowRBLX#8495\nSpeeding\n\n**-suspend** MENTIONUSER DURATIONOFSUSPENSION REASON\n**Ex.** -suspend @S_hadowRBLX#8495 14 days/week(s)/month(s)\nSpeeding\n\n**-blacklist** MENTIONUSER REASON\n**Ex.** -blacklist @S_hadowRBLX#8495\nSpeeding\n\n**-permblacklist** MENTIONUSER REASON\n**Ex.** -permblacklist @S_hadowRBLX#8495\nSpeeding")
            .setFooter('Aigio Law Enforcement Training Academy', 'https://media.discordapp.net/attachments/705093565113434212/736015262477844500/6c1e7537f9aa230b0a49494c49779dca.png')
        message.author.send(embed);

        message.channel.send(`${message.author}, ALETA server commands sent to your DMs.`);

        const modlogs = new Discord.MessageEmbed()
        .setColor('020f73')
        .setTitle('Support Command')
        .setAuthor('ALETA Moderation Logs', 'https://media.discordapp.net/attachments/705093565113434212/736015262477844500/6c1e7537f9aa230b0a49494c49779dca.png')
        .addFields(
            { name: 'Command Usage', value: `**${message.content}**` },
            { name: 'Command Used', value: '**-support**', inline: true },
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