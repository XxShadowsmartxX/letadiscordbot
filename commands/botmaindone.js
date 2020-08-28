const Discord = require('discord.js');

const client = new Discord.Client();

module.exports = {
    name: 'botmaindone', 
    description: "this is a youtube command!", 
    execute(message, args){
        message.delete()
        if (message.member.roles.cache.has('705082977209548870')){
            message.channel.send('<@&705082980770512996>')
        const embed = new Discord.MessageEmbed()
            .setColor('020f73')
            .setTitle('Bot Maintenance Notification')
            .setAuthor('ALETA Bot System', 'https://media.discordapp.net/attachments/705093565113434212/736015262477844500/6c1e7537f9aa230b0a49494c49779dca.png')
            .setDescription(`**The ALETA Bot has been brought back online after maintenance.**\n\n__Maintenance Performed By:__ ${message.author}\n\n> All commands of the bot are now functional and ready to use. Thank you for your patience.`)
        message.channel.send(embed);

        const mst = message.client.channels.cache.get('710960625135779911')
        mst.send(`**Botmaindone** command used by **${message.author.username}** in ${message.channel}.\nCommand usage: **${message.content}**`)

        } else {
            message.channel.send('Insufficient Permissions.');
        }

    }
    }