const Discord = require('discord.js');

const client = new Discord.Client();

module.exports = {
    name: 'revoke', 
    description: "this is a youtube command!", 
    execute(message, args){
        message.delete()
        if (message.member.roles.cache.has('705082980770512996')){
        const embed = new Discord.MessageEmbed()
            .setColor('020f73')
            .setTitle('Phase Server Lock Notification')
            .setAuthor('ALETA Phase System', 'https://media.discordapp.net/attachments/705093565113434212/736015262477844500/6c1e7537f9aa230b0a49494c49779dca.png')
            .setDescription(`**This phase has been slocked!**\n\n> More phases will be hosted in the future by the LETA Instructor Team.`)
            .setFooter('Slocked Time')
            .setTimestamp()
        message.channel.send(embed);

        const modlogs = new Discord.MessageEmbed()
        .setColor('020f73')
        .setTitle('Phase Server Lock Notification')
        .setAuthor('ALETA Phase System', 'https://media.discordapp.net/attachments/705093565113434212/736015262477844500/6c1e7537f9aa230b0a49494c49779dca.png')
        .setDescription(`**This phase has been slocked!**\n\n> More phases will be hosted in the future by the LETA Instructor Team.`)
        .setFooter('Slocked Time')
        .setTimestamp()

        const mst = message.client.channels.cache.get('710960625135779911');
        mst.send(modlogs);

        } else {
            message.channel.send('Insufficient Permissions.');
        }

    }
    }