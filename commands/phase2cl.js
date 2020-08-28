const Discord = require('discord.js');

const client = new Discord.Client();

module.exports = {
    name: 'phase2cl', 
    description: "this is a youtube command!", 
    execute(message, args){
        message.delete()
        if (message.member.roles.cache.has('705082980770512996')){
            message.channel.send('<@&705083000118837268>')
        const embed = new Discord.MessageEmbed()
            .setColor('020f73')
            .setTitle('Phase 2 Conclusion Notification')
            .setAuthor('ALETA Phase System', 'https://media.discordapp.net/attachments/705093565113434212/736015262477844500/6c1e7537f9aa230b0a49494c49779dca.png')
            .setDescription(`**This phase 2** has **concluded!**\n\n**Phase Host:** ${message.author}\n\nMake sure to take the phase examination and complete it fully. Take your time.\n\n**Evidence of Phase:** ${args[0]}\n\n> **Examination Link:** https://docs.google.com/forms/d/1y997jxRHIVipY7dlXpi5vz9uQdrFP_yqQKQAnl9vKR8/edit`)
        message.channel.send(embed);

        const mst = message.client.channels.cache.get('710960625135779911')
        mst.send(`**Phase2cl** command used by **${message.author.username}** in ${message.channel}.\nCommand usage: **${message.content}**`)

        } else {
            message.channel.send('Insufficient Permissions.');
        }
    }
    }