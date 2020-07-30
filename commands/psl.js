const Discord = require('discord.js');

module.exports = {
    name: 'psl', 
    description: "this is a youtube command!", 
    execute(message, args){
        if (message.member.roles.cache.has('716371210023338027')){
            message.channel.send('<@&716371210023338027>')
        const embed = new Discord.MessageEmbed()
            .setColor('020f73')
            .setTitle('Phase Slock Notification')
            .setAuthor('ALETA Phase System', 'https://media.discordapp.net/attachments/705093565113434212/736015262477844500/6c1e7537f9aa230b0a49494c49779dca.png')
            .setDescription(`**This phase has been slocked**\n\nMore phases will be hosted by the LETA Instructor Team.`)
            message.channel.send('<@&716370077611720746>');
        message.channel.send(embed);
            message.delete()

        } else {
            message.channel.send('Insufficient Permissions.');
            message.delete()
        }

    }
    }