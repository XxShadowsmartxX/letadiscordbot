const Discord = require('discord.js');

const client = new Discord.Client();

module.exports = {
    name: 'showexams', 
    description: "this is a youtube command!", 
    execute(message, args){
        message.delete()
        if (message.member.roles.cache.has('705082980770512996')){
        const embed = new Discord.MessageEmbed()
            .setColor('#0C3350')
            .setAuthor('ALETA Exams List', 'https://media.discordapp.net/attachments/705093565113434212/736015262477844500/6c1e7537f9aa230b0a49494c49779dca.png')
            .setDescription(`Below you will find all of the exams for the Aigio Law Enforcement Training Academy:\n\n**Phase 1 Exam:**\nhttps://docs.google.com/forms/d/e/1FAIpQLScekH9VwAulI9nXpcp5aVxNAAF0dxUPb18i6ZPNKU0uo4SatQ/viewform\n\n**Phase 2 Exam:**\nN/A\n\n**Phase 3 Exam:**\nN/A\n\n**Phase 4 Exam:**\nN/A\n\n**Final Exam:**\nN/A`)
            .setFooter('Aigio Law Enforcement Training Academy', 'https://media.discordapp.net/attachments/705093565113434212/736015262477844500/6c1e7537f9aa230b0a49494c49779dca.png')
        message.channel.send(embed);

        const modlogs = new Discord.MessageEmbed()
        .setColor('YELLOW') 
        .setTitle('Exams Command')
        .setAuthor('ALETA Moderation Logs', 'https://media.discordapp.net/attachments/705093565113434212/736015262477844500/6c1e7537f9aa230b0a49494c49779dca.png')
        .addFields(
            { name: 'Command Usage', value: `**${message.content}**` },
            { name: 'Command Used', value: '**-showexams**', inline: true },
            { name: 'Command Author', value: `${message.author}`, inline: true },
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