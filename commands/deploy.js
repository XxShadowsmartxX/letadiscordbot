const Discord = require('discord.js');

const client = new Discord.Client();

module.exports = {
	name: 'deploy',
	description: "support command",
	execute(message, args, channel) {
    if(!message.member.roles.cache.some(role =>['Regiment Command'].includes(role.name))) return message.channel.send(`${message.author}, Insufficient Permissions for **-deploy** command.\n\nRoles required: **Regiment Command**`);
    if(process.env.deploychannel === 'false') return;
    if(!args[0]) return message.channel.send(`${message.author}, Please specify a server to deploy to.`);
    if(!args[1]) return message.channel.send(`${message.author}, Please specify an amount of time to deploy for.`);
    if(!args[2]) return message.channel.send(`${message.author}, Please specify a reason to deploy!`);
		
    let deploychannel = message.guild.channels.cache.get(process.env.deploychannel);
    let deployserver = args[0];
    let deploytime = args[1];
    let deployreason = args.slice(2).join(" ");

    deploychannel.send(`CFMP has been deployed in Server: \`${deployserver}\`. CFMP is deployed for \`${deploytime}\`. Reason: \`${deployreason}\`\n\nRegular jursidiction policy applies after the deployment time runs out.\n\n**Issued by:** ${message.author}\n<@&785058508370346022>`)
  
    message.delete()
			
    const modlogs = new Discord.MessageEmbed()
      .setColor('020f73')
      .setTitle('Deploy Command')
      .setAuthor('CFMP Moderation Logs', 'https://cdn.discordapp.com/emojis/799646515496747069.png?v=1')
      .addFields(
        { name: 'Command Usage', value: `**${message.content}**` },
        { name: 'Command Used', value: '**-deploy**', inline: true },
        { name: 'Command Author', value: `${message.author}`, inline: true },
        { name: 'Command Channel', value: `${message.channel}`, inline: true },
        { name: 'Command Guild/Server', value: `**${message.guild.name}**`, inline: true },
      )
      .setFooter('Canadian Forces Military Police','https://cdn.discordapp.com/emojis/799646515496747069.png?v=1')
      .setTimestamp()
    
    if(process.env.modchannel === 'false') return;
    let modchannel1 = message.client.channels.cache.get(process.env.modchannel);
    modchannel1.send(modlogs);
  }
}