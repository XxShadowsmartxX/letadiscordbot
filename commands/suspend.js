const Discord = require('discord.js');

const client = new Discord.Client();

module.exports = {
    name: 'suspend', 
    description: "this is a youtube command!", 
    execute(message, args){
        message.delete()
        if (message.member.roles.cache.has('705101158766870528')){
        const embed = new Discord.MessageEmbed()
            .setColor('#0C3350')
            .setTitle('Certification Suspension Notice')
            .setAuthor('ALETA Administrative Message', 'https://media.discordapp.net/attachments/705093565113434212/736015262477844500/6c1e7537f9aa230b0a49494c49779dca.png')
            .setDescription(`To ${args[0]},\n\nYour certification has been **suspended** by the ALETA Administration. The duration of this suspension is: **${args[1]} days**.\nInformation regarding your suspension can be found on the **'SUSPENSIONS'** sheet on the ALETA Database.\nIf your suspension is **longer than 2 weeks**, you are allowed to **appeal** it using the administrative hub form which can be found in the <#705431479433297971> channel. You may also appeal if you feel this suspension is false.\nYour investigation can be tracked on **'ADMIN HUB'** sheet on the ALETA Database.\n\n**Regards,**\nAigio Law Enforcement Training Academy Administration`)
            .setFooter('Aigio Law Enforcement Traning Academy','https://media.discordapp.net/attachments/705093565113434212/736015262477844500/6c1e7537f9aa230b0a49494c49779dca.png')
            .addField('Notice Sent By', `${message.author.username}#${message.author.discriminator}`, true)
            .setTimestamp()
            const msg = message.mentions.users.first() || 
            message.guild.members.cache.get(args[0])
            msg.send(embed)

        const modlogs = new Discord.MessageEmbed()
        .setColor('RED')
        .setTitle('Suspend Command')
        .setAuthor('ALETA Moderation Logs', 'https://media.discordapp.net/attachments/705093565113434212/736015262477844500/6c1e7537f9aa230b0a49494c49779dca.png')
        .addFields(
            { name: 'Command Usage', value: `**${message.content}**` },
            { name: 'Command Used', value: '**-suspend**', inline: true },
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