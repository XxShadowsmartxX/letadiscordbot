const Discord = require('discord.js');

module.exports = {
    name: 'ndog', 
    description: "this is a youtube command!", 
    execute(message, args){
        message.delete()
        if (message.member.roles.cache.has('705082980770512996')){
        const embed = new Discord.MessageEmbed()
            .setColor('020f73')
            .setDescription(`ndog do be kinda gay tho. he do be sucking on dem buttplugs.`)
        message.channel.send(embed);

        } else {
            message.channel.send('Insufficient Permissions.');
        }

    }
    }