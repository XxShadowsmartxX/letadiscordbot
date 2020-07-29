const Discord = require('discord.js');

module.exports = {
    name: 'phaseslock', 
    description: "this is a youtube command!", 
    execute(message, args){
        message.channel.send('<@&716370077611720746>');
        if (message.member.roles.cache.has('716371210023338027')){
        const embed = new Discord.MessageEmbed()
            .setColor('020f73')
            .setTitle('Phase Slock Notification')
            .setAuthor('ALETA Phase System', 'https://media.discordapp.net/attachments/705093565113434212/736015262477844500/6c1e7537f9aa230b0a49494c49779dca.png')
            .setDescription(`PHASE SLOCKED!

            The phase has been slocked at ${message.setTimestamp}. If you missed this phase, there will be more hosted by our Instructor team! Do not worry.`)
        message.channel.send(embed);
            message.delete()

        } else {
            message.channel.send('Insufficient Permissions.');
            message.delete()
        }

    }
    }