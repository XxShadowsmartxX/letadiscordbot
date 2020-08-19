const Discord = require('discord.js');

const client = new Discord.Client();

module.exports = {
    name: 'suspend', 
    description: "support command", 
    execute(message, args, channel){
        message.delete()
        if (message.member.roles.cache.has('705092415899303977')){
            message.channel.send('hi');


        } else {
            message.channel.send('Insufficient Permissions.');
        }

    }
    }