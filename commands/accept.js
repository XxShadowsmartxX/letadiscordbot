const Discord = require('discord.js');

module.exports = {
    name: 'accept', 
    description: "this is a youtube command!", 
    execute(message, args){
        message.delete()
        if (message.member.roles.cache.has('705082977209548870')){
            const msg = message.mentions.users.first() || 
            message.guild.members.cache.get(args[0])
            msg.send('Your LETA certification has been revoked by the LETA Administration.')

            const channel = channels.cache.get('710960625135779911');
            channel.send('sup g');
        } else {
            message.channel.send('Insufficient Permissions.');
        }

    }
    }