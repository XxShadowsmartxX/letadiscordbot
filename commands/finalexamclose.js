const Discord = require('discord.js');

const client = new Discord.Client();

module.exports = {
    name: 'finalexamclose', 
    description: "this is a youtube command!", 
    execute(message, args){
        message.delete()
        if (message.member.roles.cache.has('705082980770512996')){
            message.channel.send('<@&705088849692590260> <@&705082979784851596>')
        const embed = new Discord.MessageEmbed()
            .setColor('020f73')
            .setTitle('Final Exam Notification')
            .setAuthor('ALETA Examination System', 'https://media.discordapp.net/attachments/705093565113434212/736015262477844500/6c1e7537f9aa230b0a49494c49779dca.png')
            .setDescription('**Final examinations have now closed!**\n\nAnyone who has not finished their final exam will now be purged and may apply next class if they wish.\nAnyone that failed all attempts will also be purged and may apply next class.\n\n> Thank you for understanding!')
        message.channel.send(embed);

        const modlogs = new Discord.MessageEmbed()
        .setColor('YELLOW')
        .setTitle('Final Exam Command')
        .setAuthor('ALETA Moderation Logs', 'https://media.discordapp.net/attachments/705093565113434212/736015262477844500/6c1e7537f9aa230b0a49494c49779dca.png')
        .addFields(
            { name: 'Command Usage', value: `**${message.content}**` },
            { name: 'Command Used', value: '**-finalexamclose**', inline: true },
            { name: 'Command Author', value: `${message.author.username}#${message.author.discriminator}`, inline: true },
            { name: 'Command Channel', value: `${message.channel}`, inline: true },
        )
        .setFooter('Aigio Law Enforcement Training Academy','https://media.discordapp.net/attachments/705093565113434212/736015262477844500/6c1e7537f9aa230b0a49494c49779dca.png')
        .setTimestamp()

        const mst = message.client.channels.cache.get('749011808567951500');
        mst.send(modlogs);

        } else {
            message.channel.send('Insufficient Permissions.');
        }

    }
    }