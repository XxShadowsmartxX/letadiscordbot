const Discord = require('discord.js');

module.exports = {
    name: 'phaseq', 
    description: "this is a youtube command!", 
    execute(message, args){
        message.delete()
        if (message.member.roles.cache.has('705082980770512996')){
        const embed = new Discord.MessageEmbed()
            .setColor('020f73')
            .setDescription(`testing ${args[0]}`)
        message.channel.send(embed);
        message.react('\:white_check_mark:')
        message.react('\:white_check_mark:')

        } else {
            message.channel.send('Insufficient Permissions.');
        }

    }
    }