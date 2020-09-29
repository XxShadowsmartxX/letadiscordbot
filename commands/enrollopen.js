const Discord = require('discord.js');

const client = new Discord.Client();

module.exports = {
    name: 'enrollopen', 
    description: "this is a youtube command!", 
    execute(message, args){
        message.delete()
        
        if(message.member.roles.cache.has('705082977209548870') || message.member.roles.cache.has('705101158766870528')){

        const embed = new Discord.MessageEmbed()
            .setColor('#0C3350')
            .setTitle('Enrollment is Open!')
            .setAuthor('ALETA Enrollment Details', 'https://media.discordapp.net/attachments/705093565113434212/736015262477844500/6c1e7537f9aa230b0a49494c49779dca.png')
            .setDescription("The Aigio Law Enforcement Training Academy requires all applicants before entering the academy to fill out an enrollment intake form. Depending on your application graded by the admissions team, you may be accepted or declined. Enrollment for future classes open each start of the month and each class takes about two weeks or more. Before applying, the academy includes specific requirements that may effect your passing rate or chance to apply.\n```Requirements for Enrollment```\n> No Felony Arrests on Record.\n> No more than 2 misdemeanor citations within the last 4 weeks.\n> Citizenship within the Nation of Aigio.\n> Willing to partake in challenging difficult phases.\n> In good standing within the Nation of Aigio community.\n------------------------------------------------------------------------------\n```Tips for Enrollment```\n> Take your time on the application\n> Write at least 3-4 sentences at most\n> Read each question carefully and do not rush\n> Be patient for your results and do not ask admissions about your application\n------------------------------------------------------------------------------\n**Aigio Law Enforcement Training Academy Enrollment Form Link**\n[ALETA Enrollment Form](https://docs.google.com/forms/d/e/1FAIpQLSchM5icwBfYASaNsmGhp-A4igTTWSB58EPJuXts16jwF-KOxw/closedform)\n\n**Aigio Law Enforcement Training Academy Enrollment Tracker**\n[ALETA Admissions Tracker](https://docs.google.com/spreadsheets/d/11yw1ADhuWQ8XEXWhQrArVctraeN7v6tr_-sAlPN4UBM/edit?usp=sharing)\n\n`Enrollment Status`\n:green_circle: | **__OPEN__**")
            .setFooter(`Aigio Law Enforcement Training Academy; Admissions Team`, 'https://media.discordapp.net/attachments/705093565113434212/736015262477844500/6c1e7537f9aa230b0a49494c49779dca.png')
            .addField('Enrollment Closing Date', `${args.slice(0).join(' ')}`, true)
        message.channel.send(embed);

        const modlogs = new Discord.MessageEmbed()
        .setColor('PURPLE')
        .setTitle('Enroll Command')
        .setAuthor('ALETA Moderation Logs', 'https://media.discordapp.net/attachments/705093565113434212/736015262477844500/6c1e7537f9aa230b0a49494c49779dca.png')
        .addFields(
            { name: 'Command Usage', value: `**${message.content}**` },
            { name: 'Command Used', value: '**-enrollopen**', inline: true },
            { name: 'Command Author', value: `${message.author}`, inline: true },
            { name: 'Command Channel', value: `${message.channel}`, inline: true },
        )
        .setFooter('Aigio Law Enforcement Training Academy','https://media.discordapp.net/attachments/705093565113434212/736015262477844500/6c1e7537f9aa230b0a49494c49779dca.png')
        .setTimestamp()

        const mst = message.client.channels.cache.get('749011808567951500');
        mst.send(modlogs);

        } else {
            message.channel.send(`${message.author}, Insufficient Permissions for **-enrollopen** command.\n\nRoles required: **Admissions Team** or **Administration**`);
        }

    }
    }