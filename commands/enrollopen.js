const Discord = require('discord.js');

module.exports = {
    name: 'phase1', 
    description: "this is a youtube command!", 
    execute(message, args){
        message.delete()
        if (message.member.roles.cache.has('705082980770512996')){
        const embed = new Discord.MessageEmbed()
            .setColor('020f73')
            .setTitle('Enrollment is Open!')
            .setAuthor('ALETA Enrollment Information', 'https://media.discordapp.net/attachments/705093565113434212/736015262477844500/6c1e7537f9aa230b0a49494c49779dca.png')
            .setDescription("The Aigio Law Enforcement Training Academy requires all applicants before entering the academy to fill out an enrollment intake form. Depending on your application graded by the admissions team, you may be accepted or declined. Enrollment for future classes open each start of the month and each class takes about two weeks or more. Before applying, the academy includes specific requirements that may effect your passing rate or chance to apply.")
            .setFooter('Aigio Law Enforcement Training Academy', 'https://media.discordapp.net/attachments/705093565113434212/736015262477844500/6c1e7537f9aa230b0a49494c49779dca.png')
        message.channel.send(embed);

        } else {
            message.channel.send('Insufficient Permissions.');
        }

    }
    }