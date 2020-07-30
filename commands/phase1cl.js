const Discord = require('discord.js');

module.exports = {
    name: 'phase1cl', 
    description: "this is a youtube command!", 
    execute(message, args){
        message.delete()
        if (message.member.roles.cache.has('705082980770512996')){
            message.channel.send('<@&705088849692590260>')
        const embed = new Discord.MessageEmbed()
            .setColor('020f73')
            .setTitle('Phase 1 Conclusion Notification')
            .setAuthor('ALETA Phase System', 'https://media.discordapp.net/attachments/705093565113434212/736015262477844500/6c1e7537f9aa230b0a49494c49779dca.png')
            .setDescription(`**This phase 1** has **concluded!**\n\n**Phase Host:** ${message.author}\n\nMake sure to take the phase examination and complete it fully. Take your time.\n\n**Evidence of Phase:** ${args[0]}\n\n**Examination Link:** https://docs.google.com/forms/d/1y997jxRHIVipY7dlXpi5vz9uQdrFP_yqQKQAnl9vKR8/edit`)
        message.channel.send(embed);

        } else {
            message.channel.send('Insufficient Permissions.');
        }
    }
    }