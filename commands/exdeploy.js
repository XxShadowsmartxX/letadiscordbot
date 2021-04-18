const Discord = require('discord.js');

const client = new Discord.Client();

module.exports = {
    name: 'exdeploy', 
    description: "support command", 
    execute(message, args, channel){
        
        if (message.member.roles.cache.some(role =>['Regiment Command'].includes(role.name))) {
          
             if(process.env.deploychannel === 'false') return;
    let deploychannel1 = message.guild.channels.cache.get(process.env.deploychannel);

                    const reason41 = args[0];
if(!reason41) return message.channel.send(`${message.author}, Please specify a server number. If CFMP is deployed in all servers, use "All"`);

                const reason40 = args.slice(1).join(' ');
if(!reason40) return message.channel.send(`${message.author}, Please specify a time for the extended deployment.`);

        deploychannel1.send(`CFMP has been given an extended deployment in \`Server: ${args[0]}\`. CFMP has been given an extended deployment for \`${args.slice(1).join(' ')}\`. Regular jursidiction policy applies after the deployment time runs out.\n\n**Issued by:** ${message.author}\n<@&785058508370346022>`)

message.delete()


        const modlogs = new Discord.MessageEmbed()
        .setColor('020f73')
        .setTitle('Extend Deploy Command')
        .setAuthor('CFMP Moderation Logs', 'https://cdn.discordapp.com/emojis/799646515496747069.png?v=1')
        .addFields(
            { name: 'Command Usage', value: `**${message.content}**` },
            { name: 'Command Used', value: '**-exdeploy**', inline: true },
            { name: 'Command Author', value: `${message.author}`, inline: true },
            { name: 'Command Channel', value: `${message.channel}`, inline: true },
            { name: 'Command Guild/Server', value: `**${message.guild.name}**`, inline: true },
        )
        .setFooter('Canadian Forces Military Police','https://cdn.discordapp.com/emojis/799646515496747069.png?v=1')
        .setTimestamp()

    if(process.env.modchannel === 'false') return;
    let modchannel1 = message.client.channels.cache.get(process.env.modchannel);
        modchannel1.send(modlogs);

        } else {
            message.channel.send(`${message.author}, Insufficient Permissions for **-exdeploy** command.\n\nRoles required: **Regiment Command**`).then(m => m.delete({ timeout: 6500}));
        }

    }
    }