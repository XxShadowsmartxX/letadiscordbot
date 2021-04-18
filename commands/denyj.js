const Discord = require('discord.js');
const roblox = require('noblox.js');
const chalk = require('chalk');
require('dotenv').config();

module.exports = {
    name: 'denyj', 
    description: "this is a youtube command!", 
    async execute(message, args){
        
    if(message.member.roles.cache.some(role =>["Admissions Command", "Regiment Command"].includes(role.name))){

let username = args[0];
  if(!username){
    return message.channel.send(`${message.author}, Please specify a roblox username.`);
  }
  let userid;
  try {
    userid = await roblox.getIdFromUsername(username);
  } catch (err) {
    return message.channel.send(`${message.author}, ${username} is not a valid roblox username.`);
  }
  try {
    username = await roblox.getUsernameFromId(userid);
  } catch (err) {
    console.log(chalk.red('An error occured when running the deny-join command: ' + err));
    return message.channel.send(`${message.author}, Error has occured, please check the console log.`);
  }
  let denyJoinRequestResponse;
  try {
    denyJoinRequestResponse = await roblox.handleJoinRequest(Number(process.env.groupId), userid, false);
  } catch (err) {
    return message.channel.send(`${message.author}, \`${username}\` does not have a pending join request`);
  }
  message.channel.send(`${message.author}, \`${username}\` has been **denied** from the CFMP group.`);

            const modlogs = new Discord.MessageEmbed()
            .setColor('BLURPLE')
            .setTitle('Say Command')
            .setAuthor('CFMP Moderation Logs', 'https://cdn.discordapp.com/emojis/799646515496747069.png?v=1')
            .addFields(
                { name: 'Command Usage', value: `**${message.content}**` },
                { name: 'Command Used', value: '**-denyj**', inline: true },
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
            message.channel.send(`${message.author}, Insufficient Permissions for **-denyj** command.\n\nRoles required: **Admissions Command** or **Regiment Command**`);
        }
    }
}