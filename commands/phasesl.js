const Discord = require('discord.js');

module.exports = {
    name: 'phasesl', 
    description: "this is a youtube command!", 
    execute(message, args){
        if (message.member.roles.cache.has('705082980770512996')){
        const embed = new Discord.MessageEmbed()
            .setColor('020f73')
            .setTitle('Phase Slock Notification')
            .setAuthor('ALETA Phase System', 'https://media.discordapp.net/attachments/705093565113434212/736015262477844500/6c1e7537f9aa230b0a49494c49779dca.png')
            .setDescription(`**This phase has been slocked!**\n\nMore phases will be hosted in the future by the LETA Instructor Team.`)
        message.channel.send(embed);
            message.delete()

        } else {
            message.channel.send('Insufficient Permissions.');
            message.delete()
        }

    }
    }