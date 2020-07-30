const Discord = require('discord.js');

module.exports = {
    name: 'phaseq', 
    description: "this is a youtube command!", 
    execute(message, args){
        message.delete()
        if (message.member.roles.cache.has('705082980770512996')){
        message.channel.send(`ndog do be kinda gay tho. he do be sucking on dem buttplug tho`);
        message.react('✅')
        message.react('✅')

        } else {
            message.channel.send('Insufficient Permissions.');
        }

    }
    }