const Discord = require('discord.js');

module.exports = {
    name: 'accept', 
    description: "this is a youtube command!", 
    execute(message, args){
        message.delete()
        if (message.member.roles.cache.has('705082977209548870')){
            const msg = message.mentions.users.first();
            const msgg = message.guild.members.cache.get("id")
            msg.send('Your LETA certification has been revoked by the LETA Administration.')
            msgg.send('testing')
            

        } else {
            message.channel.send('Insufficient Permissions.');
        }

    }
    }