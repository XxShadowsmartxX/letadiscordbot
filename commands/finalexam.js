const Discord = require('discord.js');

module.exports = {
    name: 'finalexam', 
    description: "this is a youtube command!", 
    execute(message, args){
        message.delete()
        if (message.member.roles.cache.has('705082980770512996')){
            message.channel.send('<@&705088849692590260> <@&705082979784851596>')
        const embed = new Discord.MessageEmbed()
            .setColor('020f73')
            .setTitle('Final Exam Notification')
            .setAuthor('ALETA Examination System', 'https://media.discordapp.net/attachments/705093565113434212/736015262477844500/6c1e7537f9aa230b0a49494c49779dca.png')
            .setDescription(`Final examinations have now begun! If you have not completed your phase 4 yet, you will be kicked. If your quiz is pending, it will be read soon.\n\nThe final examination is a final test that determines your full competency and knowledge. This exam will see if you are worthy of being an LEO and have learned the basics. Keep in mind, this examination is NOT easy. Low effort responses will be automatically declined and you will be kicked out. When taking this examination, DETAIL, EFFORT, QUALITY and CORRECT responses are to be on this exam. You ONLY have ONE try at this examination. It is VITAL to take your time on this and suggested you read each question carefully. Regardless if easy, you can fail for one small mistake. CHEATING AND ASKING FOR NOTES WILL RESULT IN AN AUTOMATIC DECLINE AND BLACKLIST.\n\n**Examination Rubic:**\n> Total points: 200\n> Passing rate: 170/200\n> Total questions: 40\n> Sections: 6\n\n> Link: https://docs.google.com/forms/d/1NAVJCUVhRhV-SFkKo_cOGRWMI3VZ2v8XWGtpGERmHCY/edit?usp=drive_open\n\n**Good luck, ALETA Administration.**`)
        message.channel.send(embed);

        } else {
            message.channel.send('Insufficient Permissions.');
        }

    }
    }