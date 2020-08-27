const Discord = require('discord.js');

module.exports = {
    name: 'enrollclose', 
    description: "this is a youtube command!", 
    execute(message, args){
        message.delete()
        if (message.member.roles.cache.has('705082980770512996')){
        const embed = new Discord.MessageEmbed()
            .setColor('020f73')
            .setTitle('Enrollment is Closed!')
            .setAuthor('ALETA Enrollment Information', 'https://media.discordapp.net/attachments/705093565113434212/736015262477844500/6c1e7537f9aa230b0a49494c49779dca.png')
            .setDescription("The Aigio Law Enforcement Training Academy requires all applicants before entering the academy to fill out an enrollment intake form. Depending on your application graded by the admissions team, you may be accepted or declined. Enrollment for future classes open each start of the month and each class takes about two weeks or more. Before applying, the academy includes specific requirements that may effect your passing rate or chance to apply.```Requirements for Enrollment```\n> No Felony Arrests on Record.\n> No more than 2 misdemeanor citations within the last 4 weeks.\n> Citizenship within the Nation of Aigio.\n> Willing to partake in challenging difficult phases.\n> In good standing within the Nation of Aigio community.\n------------------------------------------------------------------------------\n```Tips for Enrollment```\n> Take your time on the application\n> Write at least 3-4 sentences at most\n> Read each question carefully and do not rush\n> Be patient for your results and do not ask admissions about your application\n------------------------------------------------------------------------------\n`Enrollment Status`\n:red_circle: | **__CLOSED__**")
            .setFooter('Aigio Law Enforcement Training Academy', 'https://media.discordapp.net/attachments/705093565113434212/736015262477844500/6c1e7537f9aa230b0a49494c49779dca.png')
            .addField('Enrollment Opening Date', `${args[0]} ${args[1]} ${args[2]} ${args[3]} ${args[4]}`, true)
        message.channel.send(embed);

        } else {
            message.channel.send('Insufficient Permissions.');
        }

    }
    }