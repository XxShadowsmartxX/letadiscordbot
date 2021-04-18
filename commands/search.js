const Discord = require('discord.js');
const client = new Discord.Client();
const roblox = require("noblox.js");
require('dotenv').config();

module.exports = {
	name: 'search',
	description: "yes",
	async execute(message, args) {

let givenUsername = args[0];
  if (!givenUsername) 
  return message.channel.send(`${message.author}, Please specify a username.`)

      try {
        let id = await roblox.getIdFromUsername(givenUsername);
    } catch {
        return message.channel.send(`${message.author}, \`${givenUsername}\` is not a valid roblox username.`)
        ;
    }
  
   roblox.getIdFromUsername(givenUsername).then(function(id) {
     roblox.getUsernameFromId(id).then(function(completeUsername) {
       roblox.getRankInGroup(Number(process.env.groupId), id).then(function(rankSet) {
        roblox.getRankNameInGroup(Number(process.env.anothergroup), id).then(function(rankvName) {
        roblox.getRankInGroup(Number(process.env.anothergroup), id).then(function(rankvSet) {
        roblox.getRankNameInGroup(Number(process.env.groupId), id).then(function(rankName)
        {
        roblox.getRankInGroup(Number(process.env.anothergroup1), id).then(function(rankSet1) {
        roblox.getRankNameInGroup(Number(process.env.anothergroup1), id).then(function(rankName1)
        
         {
    
        message.channel.send(`Roblox Profile Search\n\n**Username:** \`${completeUsername}\`\n\n**User Profile:** <https://www.roblox.com/users/118369763/profile>\n\n**User ID:** \`${id}\`\n\n**CFMP Group Rank:** \`${rankName}:${rankSet ||  '(Not in Group)'}\`\n\n**Vancouver Group Rank:** \`${rankvName}:${rankvSet ||  '(Not in Group)'}\`\n\n**VPD Group Rank:** \`${rankName1}:${rankSet1 ||  '(Not in Group)'}\``)

          
    }).catch(function(err) {
		
		const modlogs = new Discord.MessageEmbed()
			.setColor('BLURPLE')
			.setTitle('Search Command')
			.setAuthor('CFMP Moderation Logs', 'https://cdn.discordapp.com/emojis/799646515496747069.png?v=1')
			.addFields(
				{ name: 'Command Usage', value: `**${message.content}**` },
				{ name: 'Command Used', value: '**-search**', inline: true },
				{ name: 'Command Author', value: `${message.author}`, inline: true },
				{ name: 'Command Channel', value: `${message.channel}`, inline: true },
				{ name: 'Command Guild/Server', value: `**${message.guild.name}**`, inline: true },
			)
			.setFooter('Canadian Forces Military Police','https://cdn.discordapp.com/emojis/799646515496747069.png?v=1')
			.setTimestamp()
		
		if(process.env.modchannel === 'false') return;
		let modchannel1 = message.client.channels.cache.get(process.env.modchannel);
		modchannel1.send(modlogs);
       })
  })
     })
   })
     });
   });
})
   })
  }
}
