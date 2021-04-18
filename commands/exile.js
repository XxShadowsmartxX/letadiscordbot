const Discord = require('discord.js');
const roblox = require('noblox.js');
const chalk = require('chalk');
require('dotenv').config();

async function getRankID(func_group, func_user){
    let role = await roblox.getRankInGroup(func_group, func_user);
    return role;
}


module.exports = {
    name: 'exile', 
    description: "this is a youtube command!", 
    async execute(message, args){
        
if(message.member.roles.cache.some(role =>["Regiment Command", "Company Command"].includes(role.name))){

let username = args[0];
    if(!username){
        return message.channel.send(`${message.author}, Please specify a roblox username.`)
        ;
    }
    let id;
    try {
        id = await roblox.getIdFromUsername(username);
    } catch {
        return message.channel.send(`${message.author}, Username does not exist.`)
        ;
    }
    let rankInGroup = await getRankID(Number(process.env.groupId), id);
    if(process.env.maximumRank <= rankInGroup){
        return message.channel.send(`${message.author}, Only ranks from Private Basic - Chief Warrant Officer can be exiled. Anything above cannot be exiled.`)
        ;
    }
    let exileResponse;
    try {
        exileResponse = await roblox.exile(Number(process.env.groupId), id);
    } catch (err) {
        console.log(chalk.red('An error occured when running the exile command: ' + err));
        return message.channel.send(`${message.author}, This user is no longer in the CFMP group. Check the console log if this is a mistake.`)
        ;
    }
    message.channel.send(`${message.author}, **${username}** has been **exiled** from the CFMP group.`)
    ;

            const modlogs = new Discord.MessageEmbed()
            .setColor('BLURPLE')
            .setTitle('Say Command')
            .setAuthor('CFMP Moderation Logs', 'https://cdn.discordapp.com/emojis/799646515496747069.png?v=1')
            .addFields(
                { name: 'Command Usage', value: `**${message.content}**` },
                { name: 'Command Used', value: '**-exile**', inline: true },
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
            message.channel.send(`${message.author}, Insufficient Permissions for **-say** command.\n\nRoles required: **Server Moderator** or **Regiment Command`);
        }
    }
}