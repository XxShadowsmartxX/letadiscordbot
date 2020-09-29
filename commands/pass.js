const Discord = require('discord.js');

const client = new Discord.Client();

module.exports = {
    name: 'pass', 
    description: "this is a youtube command!", 
    execute(message, args){
        message.delete()
        
        if(message.member.roles.cache.has('705082977209548870') || message.member.roles.cache.has('705082980770512996')){

        const embed = new Discord.MessageEmbed()
            .setColor('#0C3350')
            .setTitle('Final Exam Notice')
            .setAuthor('ALETA Administrative Message', 'https://media.discordapp.net/attachments/705093565113434212/736015262477844500/6c1e7537f9aa230b0a49494c49779dca.png')
            .setDescription(`To ${args[0]},\n\nYou have successfully passed your final exam. Congratulations! More information will be posted in Cadet Announcements.\n\nRegards,\n**ALETA Administration**`)
            .setFooter('Aigio Law Enforcement Training Academy','https://media.discordapp.net/attachments/705093565113434212/736015262477844500/6c1e7537f9aa230b0a49494c49779dca.png')
            .addField('Notice Sent By', `${message.author}`, true)
            .setTimestamp()

            const msg = message.mentions.users.first() || message.guild.members.cache.get(args[0])
            if(!msg) return message.channel.send(`${message.author}, Please specify a user by mentioning them.`);
            msg.send(embed)




            message.channel.send(`${message.author}, **Pass** notice successfully sent to ${args[0]}.`);


        const modlogs = new Discord.MessageEmbed()
        .setColor('YELLOW')
        .setTitle('Pass Command')
        .setAuthor('ALETA Moderation Logs', 'https://media.discordapp.net/attachments/705093565113434212/736015262477844500/6c1e7537f9aa230b0a49494c49779dca.png')
        .addFields(
            { name: 'Command Usage', value: `**${message.content}**` },
            { name: 'Command Used', value: '**-pass**', inline: true },
            { name: 'Command Author', value: `${message.author}`, inline: true },
            { name: 'Command Channel', value: `${message.channel}`, inline: true },
        )
        .setFooter('Aigio Law Enforcement Training Academy','https://media.discordapp.net/attachments/705093565113434212/736015262477844500/6c1e7537f9aa230b0a49494c49779dca.png')
        .setTimestamp()

        const mst = message.client.channels.cache.get('749011808567951500');
        mst.send(modlogs);

        } else {
            message.channel.send(`${message.author}, Insufficient Permissions for **-pass** command.\n\nRoles required: **LETA Employee** or **Administration**`);
        }

    }
    }