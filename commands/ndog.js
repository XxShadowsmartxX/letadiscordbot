const Discord = require('discord.js');

module.exports = {
    name: 'ndog', 
    description: "this is a youtube command!",
    execute(client, message, args){ 
        const channel = client.channels.cache.get('710960625135779911').send(`User: ${message.author.username} has executed ${message.content} in ${message.channel}`);
        if (message.member.roles.cache.has('705082980770512996')){
        const embed = new Discord.MessageEmbed()
            .setColor('020f73')
            .setDescription(`hi`)
        message.channel.send(embed);

        } else {
            message.channel.send('Insufficient Permissions.');
        }

    }
    }