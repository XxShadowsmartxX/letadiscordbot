const Discord = require('discord.js');

module.exports = {
    name: 'accept', 
    description: "this is a youtube command!", 
    execute(message, args){
        message.delete()
        if (message.member.roles.cache.has('705082977209548870')){
            message.mentions.users.first()
            message.user.send('sup')

        } else {
            message.channel.send('Insufficient Permissions.');
        }

    }
    }