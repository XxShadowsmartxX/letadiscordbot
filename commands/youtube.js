const Discord = require('discord.js');

module.exports = {
    name: 'youtube', 
    description: "this is a youtube command!", 
    execute(message, args){

        if (message.member.roles.cache.has('716371210023338027')){
        message.channel.send(`:signature: Hi ${message.author}`);
        message.delete()

        } else {
            message.channel.send('Insufficient Permissions.');
            message.delete()
        }

    }
    }