const Discord = require('discord.js');

module.exports = {
    name: 'accept', 
    description: "this is a youtube command!", 
    execute(message, args){
        message.delete()
        if (message.member.roles.cache.has('705082977209548870')){
            const msg = message.mentions.users.first();
            msg.send('sup fob, i got the command to work! i will now begin making the messages - S_hadowGay')
            

        } else {
            message.channel.send('Insufficient Permissions.');
        }

    }
    }