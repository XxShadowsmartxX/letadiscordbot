const Discord = require('discord.js');
const client = new Discord.Client();
const agent = require("node-fetch")
const roblox = require('noblox.js');
const chalk = require('chalk');
require('dotenv').config();

module.exports = {
	name: 'records',
	description: "yes",
	async execute(message, args) {
    if(!args[0]) return message.channel.send(`${message.author}, Please specify a user's record to check!`);

    let username = args[0];
    if(!username){
        return message.channel.send(`${message.author}, Please specify a roblox username.`)
        ;
    }

    let id;
    try {
        id = await roblox.getIdFromUsername(username);
    } catch {
        return message.channel.send(`${message.author}, \`${username}\` is not a valid roblox username.`)
        ;
    }

    function slice(str, length) {
      const ending = "...";

      if(length == null) {
        length = 100;
      }

      if(ending == null) {
        ending = '...';
      }

      if(str.length > length) {
        return str.substring(0, length - ending.length) + ending;
      } else {
        return str;
      }
    };

    try {
      const a = agent(`https://roblox-vancouver-database-2.herokuapp.com/${args[0]}`).then(res => res.json()).then(b => {
        var arrests = "";
        var citations = "";
        
        if(b.arrests) {
          b.arrests.forEach(entry => {
            arrests += ` - ${entry}\n`
          });
        }

        if(b.citations) {
          b.citations.forEach(entry => {
            citations += ` - ${entry}\n`
          });
        }
        
        const embed = new Discord.MessageEmbed()
          .setTitle(`Records Check for ${b.username}`)
          .setURL(`https://roblox.com/users/${b.userID}/profile`)
          .setDescription("Click here for a more detailed view: https://shouxtech.github.io/roblox-vancouver-database/")
          .setThumbnail(`http://www.roblox.com/Thumbs/Avatar.ashx?x=150&y=150&Format=Png&username=${args[0]}`)
          .setColor("BLURPLE")
          .addField("Warrant", b.warrant || "No")
          .setFooter(`User ID: ${b.userID}`)
        if(b.arrests) embed.addField(`Arrests [${b.arrests.length}]`, slice(arrests, 1024))
        if(b.citations) embed.addField(`Citations [${b.citations.length}]`, slice(citations, 1024))

        message.channel.send(message.author, embed);
      });
    } catch(e) {
      return message.channel.send(`${message.author}, That user does not exist on Roblox!`);
    }
		
		const modlogs = new Discord.MessageEmbed()
			.setColor('BLURPLE')
			.setTitle('Records Command')
			.setAuthor('CFMP Moderation Logs', 'https://cdn.discordapp.com/emojis/799646515496747069.png?v=1')
			.addFields(
				{ name: 'Command Usage', value: `**${message.content}**` },
				{ name: 'Command Used', value: '**-records**', inline: true },
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