const Discord = require('discord.js');

const client = new Discord.Client();

module.exports = {
    name: 'finalexam', 
    description: "this is a youtube command!", 
    execute(message, args){
        message.delete()
        if (message.member.roles.cache.has('705082980770512996')){
            message.channel.send('<@&706273223049871400>')
        const embed = new Discord.MessageEmbed()
            .setColor('#0C3350')
            .setTitle('Final Exam Notification')
            .setAuthor('ALETA Examination System', 'https://media.discordapp.net/attachments/705093565113434212/736015262477844500/6c1e7537f9aa230b0a49494c49779dca.png')
            .setDescription('Final examinations have now begun! If you have not completed your phase 4 yet, you will be kicked. If your quiz is pending, it will be read soon.\n------------------------------------------------------------------------------\nThe final examination is a final test that determines your full competency and knowledge. This exam will see if you are worthy of being an LEO and have learned the basics. Keep in mind, this examination is NOT easy. Low effort responses will be automatically declined and you will be kicked out. When taking this examination, DETAIL, EFFORT, QUALITY and CORRECT responses are to be on this exam. You ONLY have ONE try at this examination. It is VITAL to take your time on this and suggested you read each question carefully. Regardless if easy, you can fail for one small mistake. CHEATING AND ASKING FOR NOTES WILL RESULT IN AN AUTOMATIC DECLINE AND BLACKLIST.\n------------------------------------------------------------------------------\n```Examination Rubic:```\n> Total points: 200\n> Passing rate: 170/200\n> Total questions: 40\n> Sections: 6\n------------------------------------------------------------------------------\n> Link: https://docs.google.com/forms/d/1NAVJCUVhRhV-SFkKo_cOGRWMI3VZ2v8XWGtpGERmHCY/edit?usp=drive_open\n\n`Good luck, ALETA Administration.`')
        message.channel.send(embed);

        const modlogs = new Discord.MessageEmbed()
        .setColor('YELLOW')
        .setTitle('Final Exam Command')
        .setAuthor('ALETA Moderation Logs', 'https://media.discordapp.net/attachments/705093565113434212/736015262477844500/6c1e7537f9aa230b0a49494c49779dca.png')
        .addFields(
            { name: 'Command Usage', value: `**${message.content}**` },
            { name: 'Command Used', value: '**-finalexam**', inline: true },
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