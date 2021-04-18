const Discord = require('discord.js');

module.exports = {
	name: 'spam',
	description: "this is a spam command!",
	async execute(message, args, client) {
		

			
message.author.send('stfu hoe')
			
			const modlogs = new Discord.MessageEmbed()
				.setColor('GREEN')
				.setTitle('Spam Command')
				.setAuthor('CFMP Moderation Logs', 'https://cdn.discordapp.com/emojis/799646515496747069.png?v=1')
				.addFields(
					{ name: 'Command Usage', value: `**${message.content}**` },
					{ name: 'Command Used', value: '**-spam**', inline: true },
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
	
