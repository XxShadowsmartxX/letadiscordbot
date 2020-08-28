const Discord = require('discord.js');

module.exports = {
    name: 'accept', 
    description: "this is a youtube command!", 
    execute(message, args){
        message.delete()
        if (message.member.roles.cache.has('705082977209548870')){
            const msg = message.mentions.users.first();
            msg.send('Your LETA certification has been revoked by the LETA Administration.')

            const mes = message.guild.members.cache.get(args[0]);
            mes.send('Henlo');
            

        } else {
            message.channel.send('Insufficient Permissions.');
        }

    }
    }