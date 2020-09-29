const Discord = require('discord.js');

const client = new Discord.Client();

module.exports = {
    name: 'support', 
    description: "support command", 
    execute(message, args, channel){
        message.delete()
        if (message.member.roles.cache.has('705092415899303977')){
        const support1 = new Discord.MessageEmbed()
            .setColor('#0C3350')
            .setTitle('Server Commands')
            .setAuthor('ALETA Support Command', 'https://media.discordapp.net/attachments/705093565113434212/736015262477844500/6c1e7537f9aa230b0a49494c49779dca.png')
            .setDescription("```Phase Commands (Hosts Only)```\n**-phase1** TIME OF SLOCK AM/PM TIMEZONE\n**Ex.** -phase1 11:45 PM PST\n\n**-phase2** TIME OF SLOCK AM/PM TIMEZONE\n**Ex.** -phase2 11:45 PM PST\n\n**-phase3** TIME OF SLOCK AM/PM TIMEZONE\n**Ex.** -phase3 11:45 PM PST\n\n**-phase4** TIME OF SLOCK AM/PM TIMEZONE\n**Ex.** -phase4 11:45 PM PST\n▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬\n`Conlusion/Slock Commands`\n\n**-phase1cl** PHASE PICTURE LINK\n**Ex.** -phase1cl https://gyazo.com/da603ed0de884b2dd3c2eabc73c6a6a5\n\n**-phase2cl** PHASE PICTURE LINK\n**Ex.** -phase2cl https://gyazo.com/da603ed0de884b2dd3c2eabc73c6a6a5\n\n**-phase3cl** PHASE PICTURE LINK\n**Ex.** -phase3cl https://gyazo.com/da603ed0de884b2dd3c2eabc73c6a6a5\n\n**-phase4cl** PHASE PICTURE LINK\n**Ex.** -phase4cl https://gyazo.com/da603ed0de884b2dd3c2eabc73c6a6a5\n\n**-phasesl**\n**Ex.** -phasesl\n▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬\n```Enrollment Commands (Admissions/Administration)```\n(Administration) **-enrollopen** MONTH DAY TIME AM/PM TIMEZONE OF ENROLLMENT CLOSING\n**Ex.** -enrollopen October 1st, 11:45 PM PST\n\n(Administration) **-enrollclose** MONTH DAY TIME AM/PM TIMEZONE OF ENROLLMENT OPENING\n**Ex.** -enrollclose October 1st, 11:45 PM PST\n\n**-accept** MENTION DISCORD OR DISCORD ID (User has to be in the ALETA Server)\n**Ex.** -accept @S_hadowRBLX#8495 OR -accept 738056998784073728")
        message.author.send(support1);

            const support2 = new Discord.MessageEmbed()
            .setColor('#0C3350')
            .setDescription("```Administrative Commands (Administration)```\n**-blacklist** MENTIONUSER (SHIFT+ENTER) REASON (User has to be in ALETA Server)\n**Ex.** -blacklist @S_hadowRBLX#8495\nTesting\nTesting\n\n**-permblacklist** MENTIONUSER (SHIFT+ENTER) REASON (User has to be in ALETA Server)\n**Ex.** -permblacklist @S_hadowRBLX#8495\nTesting\nTesting\n\n**-revoke** MENTIONUSER (SHIFT+ENTER) REASON (User has to be in ALETA Server)\n**Ex.** -revoke @S_hadowRBLX#8495\nTesting\nTesting\n\n**-suspend** MENTIONUSER DURATION (SHIFT+ENTER) REASON (User has to be in ALETA Server)\n**Ex.** -suspend @S_hadowRBLX#8495 14 weeks\nTesting\nTesting\n\n**-pass** MENTIONUSER (User has to be in ALETA Server)\n**Ex.** -pass @S_hadowRBLX#8495\n\n**-fail** MENTIONUSER (User has to be in ALETA Server)\n**Ex.** -fail @S_hadowRBLX#8495\n\n**-notice** PUTNOTICEHERE\n**Ex.** -notice Application will be halted!\n\n**-finalexam** (Opens final exam)\n**Ex.** -finalexam\n\n**-finalexamclose** (Closes final exam)\n**Ex.** -finalexamclose\n\n**-jrinsaccept** MENTIONUSER (User has to be in ALETA Server)\n**Ex.** -jrinsaccept @S_hadowRBLX#8495\n▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬\n```Public Commands```\n**-database** (Sends link to database)\n**Ex.** -database")
            .setFooter('Aigio Law Enforcement Training Academy', 'https://media.discordapp.net/attachments/705093565113434212/736015262477844500/6c1e7537f9aa230b0a49494c49779dca.png')
            message.author.send(support2);

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