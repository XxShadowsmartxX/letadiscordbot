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
            msg.send(`**Dear** ${args[0]},\n\n**Congratulations!** You've been successfully enrolled to the Aigio Law Enforcement Training Academy, you should be proud that you've completed the first step on the road to becoming a Peace Officer within the Nation.\n\nNext, please ensure you've **sent a request** to; https://www.roblox.com/groups/4258457/Aigio-Law-Enforcement-Training-Academy#!/about within **24 hours of this message or your enrolment will be cancelled**.\n\nYou **no longer** need to purchase the Cadet uniform as there is a spawner in the campus but if you wish to, you can find it in the group store.\n\nFinally, once you've been accepted, please **rejoin** the ALETA Discord using this link; https://discord.gg/YjCzFm7 the bot will auto role you.\n\nOnce again, I congratulate you on the first step on your Law Enforcement Journey.\n\n**Aigio Law Enforcement Training Academy Admissions Team**`)

            const mst = message.client.channels.cache.get('710960625135779911')
            mst.send(`**Accept** command used by **${message.author.username}** in ${message.channel}.\nCommand usage: **${message.content}**`)
        } else {
            message.channel.send('Insufficient Permissions.');
        }

    }
    }