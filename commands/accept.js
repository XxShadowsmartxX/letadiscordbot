const Discord = require('discord.js');

const client = new Discord.Client();

module.exports = {
    name: 'accept', 
    description: "this is a youtube command!", 
    execute(message, args){
        message.delete()
        if (message.member.roles.cache.has('705082977209548870')){
            const msg = message.mentions.users.first() || 
            message.guild.members.cache.get(args[0])
            msg.send('accepted')

            const mst = client.channels.cache.get('710960625135779911')
            mst.send('sup')
        } else {
            message.channel.send('Insufficient Permissions.');
        }

    }
    }