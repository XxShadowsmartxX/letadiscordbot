const Discord = require('discord.js');

module.exports = {
    name: 'ndog', 
    description: "this is a youtube command!", 
    execute(message, args){

        if (message.member.roles.cache.has('705082980770512996')){
        message.channel.send(`ndog do be kinda gay tho. he do be sucking on dem buttplug tho`);
        message.delete()

        } else {
            message.channel.send('Insufficient Permissions.');
            message.delete()
        }

    }
    }