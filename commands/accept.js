const Discord = require('discord.js');

module.exports = {
    name: 'accept', 
    description: "this is a youtube command!", 
    execute(message, args){
        message.delete()
        if (message.member.roles.cache.has('705082977209548870')){
            const user = client.users.cache.get();
            user.send('testing');

        } else {
            message.channel.send('Insufficient Permissions.');
        }

    }
    }