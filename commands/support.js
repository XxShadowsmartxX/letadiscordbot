const Discord = require('discord.js');

const client = new Discord.Client();

module.exports = {
    name: 'support', 
    description: "support command", 
    execute(message, args, channel){
        
        if (message.member.roles.cache.some(role =>['Verified'].includes(role.name))) {
          
const support3 = new Discord.MessageEmbed()
            .setColor('#cc4040')
            .setTitle('Server Commands')
            .setAuthor('CFMP Support Command', 'https://cdn.discordapp.com/emojis/799646515496747069.png?v=1')
            .setDescription("```Role Permissions Guide```\nRC = Regiment Command\n\nCC = Company Command\n\nSL = Second Lieutenant\n\nPC = Platoon Command\n\nSM = Server Moderator\n\nTE = Training & Education\n\nADC = Admissions Command\n\nNS = NIS\n\nRP = Ranking Permissions")
            message.author.send(support3)

        const support1 = new Discord.MessageEmbed()
            .setColor('#cc4040')
            .setDescription("```Phase Commands (Hosts Only)```\n(TE) **-phase1** TIME OF SLOCK AM/PM TIMEZONE\n**Ex.** -phase1 11:45 PM PST\n\n(TE) **-phase2** TIME OF SLOCK AM/PM TIMEZONE\n**Ex.** -phase2 11:45 PM PST\n▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬\n`Conlusion/Slock Commands`\n\n(TE) **-phase1cl** PHASE PICTURE LINK\n**Ex.** -phase1cl https://gyazo.com/da603ed0de884b2dd3c2eabc73c6a6a5\n\n(TE) **-phase2cl** PHASE PICTURE LINK\n**Ex.** -phase2cl https://gyazo.com/da603ed0de884b2dd3c2eabc73c6a6a5\n\n(TE) **-phasesl**\n**Ex.** -phasesl\n▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬\n```Recruitment Commands (Admissions/Administration)```\n(AD) **-recruitopen** MONTH DAY TIME AM/PM TIMEZONE OF RECRUITMENT CLOSING\n**Ex.** -recruitopen October 1st, 11:45 PM PST\n\n(AD) **-recruitclose** MONTH DAY TIME AM/PM TIMEZONE OF RECRUITMENT OPENING\n**Ex.** -recruitclose October 1st, 11:45 PM PST\n\n(AD) **-accept** MENTION DISCORD (User has to be in the CFMP Server)\n**Ex.** -accept @S_hadowRBLX#8495\n▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬\n```Department Logs Commands```\n(NIS, SL, CC, RC) **-wwarning** MENTION REASON\n**Ex.** -wwarning @S_hadowRBLX Testing\n\n(NIS, SL, CC, RC) **-strike** MENTION REASON\n**Ex.** -strike @S_hadowRBLX Testing\n\n(NIS, CC, RC) **-suspend** MENTION DURATION REASON\n**Ex.** -suspend @S_hadowRBLX 2 days Testing\n\n(NIS, PC, CC, RC) **-dlog MESSAGE**\n**Ex.** -dlog @S_hadowRBLX has been transferred.\n\n(NIS, CC, RC) **-adleave** MENTION\n**Ex. **-adleave @S_hadowRBLX\n\n(NIS, CC, RC) **-offadleave** MENTION\n**Ex. **-offadleave @S_hadowRBLX")
        message.author.send(support1);

        const support2 = new Discord.MessageEmbed()
            .setColor('#cc4040')
            .setDescription("```Discharge Commands```\n(RC) **-hdischarge** USER\n**Ex.** -hdischarge @S_hadowRBLX\n\n(PC, CC, RC) **-gdischarge** USER\n**Ex.** -gdischarge @S_hadowRBLX\n\n(CC, RC) **-ddischarge** USER\n**Ex.** -ddischarge @S_hadowRBLX\n▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬\n```Ranking/Group Commands```\n(RP, CC, RC) **-setrank** USERNAME RANK\n**Ex.** -setrank S_hadowRBLX Sergeant\n(Sets rank in CFMP group)\n\n(ADC)**-acceptj** USERNAME\n**Ex.** -acceptj S_hadowRBLX\n(Accepts CFMP group join request)\n\n(ADC) **-denyj** USERNAME\n**Ex.** -denyj S_hadowRBLX\n(Declines CFMP group join request)\n\n(CC, RC) **-exile** USERNAME\n**Ex.** -exile S_hadowRBLX\n(Exiles user from CFMP group)\n▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬\n```Deployment Commands```\n(RC) **-deploy** SERVERNUMBER DEPLOYMENTTIME\n**Ex.** -deploy 1 1h30m\n\n(RC) **-exdeploy** SERVERNUMBER DEPLOYMENTTIME\n**Ex.** -exdeploy 2 30m\n\n(RC) **-enddeploy**\n**Ex.** -enddeploy")
            .setFooter('Canadian Forces Military Police', 'https://cdn.discordapp.com/emojis/799646515496747069.png?v=1')
        message.author.send(support2);

message.delete()

        message.channel.send(`${message.author}, CFMP server commands sent to your DMs.`);

        const modlogs = new Discord.MessageEmbed()
        .setColor('020f73')
        .setTitle('Support Command')
        .setAuthor('CFMP Moderation Logs', 'https://cdn.discordapp.com/emojis/799646515496747069.png?v=1')
        .addFields(
            { name: 'Command Usage', value: `**${message.content}**` },
            { name: 'Command Used', value: '**-support**', inline: true },
            { name: 'Command Author', value: `${message.author}`, inline: true },
            { name: 'Command Channel', value: `${message.channel}`, inline: true },
            { name: 'Command Guild/Server', value: `**${message.guild.name}**`, inline: true },
        )
        .setFooter('Canadian Forces Military Police','https://cdn.discordapp.com/emojis/799646515496747069.png?v=1')
        .setTimestamp()

    if(process.env.modchannel === 'false') return;
    let modchannel1 = message.client.channels.cache.get(process.env.modchannel);
        modchannel1.send(modlogs);

        } else {
            message.channel.send('Insufficient Permissions.');
        }

    }
    }