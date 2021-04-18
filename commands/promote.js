const Discord = require('discord.js');
const roblox = require('noblox.js');
const chalk = require('chalk');
require('dotenv').config();

async function getRankName(func_group, func_user){
    let rolename = await roblox.getRankNameInGroup(func_group, func_user);
    return rolename;
}

async function getRankID(func_group, func_user){
    let role = await roblox.getRankInGroup(func_group, func_user);
    return role;
}

async function getRankFromName(func_rankname, func_group){
    let roles = await roblox.getRoles(func_group);
    let role = await roles.find(rank => rank.name == func_rankname);
    if(!role){
        return 'NOT_FOUND';
    }
    return role.rank;
}

module.exports = {
    name: 'promote', 
    description: "this is a youtube command!", 
    async execute(message, args){
        
    if(message.member.roles.cache.some(role =>["Ranking Permissions", "T&E Command", "Platoon Command", "Regiment Command", "Company Command"].includes(role.name))){

let username = args[0];
    if(!username){
        return message.channel.send(`${message.author}, Please specify a roblox username.`);
    }
    let id;
    try {
        id = await roblox.getIdFromUsername(username);
    } catch {
        return message.channel.send(`${message.author}, \`${username}\` is not a valid roblox username.`);
    }
    let rankInGroup = await getRankID(Number(process.env.groupId), id);
    let rankNameInGroup = await getRankName(Number(process.env.groupId), id);
    if(Number(process.env.maximumRank) <= rankInGroup || Number(process.env.maximumRank) <= rankInGroup + 1){
        return message.channel.send(`${message.author}, This user cannot be promoted any further due to limitations. A user can only be promoted from Private Basic (Lowest) - Chief Warrant Officer (Highest)`);
    }
    let promoteResponse;
    try {
        promoteResponse = await roblox.promote(Number(process.env.groupId), id);
    } catch (err) {
        console.log(chalk.red('An error occured when running the promote command: ' + err));
        return message.channel.send(`${message.author}, Error has occured, please check the console log.`);
    }
    let newRankName = await getRankName(Number(process.env.groupId), id);
    let newRank = await getRankID(Number(process.env.groupId), id);
    message.channel.send(`${message.author}, \`${username}\` has been **promoted** to \`${promoteResponse.newRole.name}\` (Rank ID: \`${promoteResponse.newRole.rank}\`)`);

            const modlogs = new Discord.MessageEmbed()
            .setColor('BLURPLE')
            .setTitle('Say Command')
            .setAuthor('CFMP Moderation Logs', 'https://cdn.discordapp.com/emojis/799646515496747069.png?v=1')
            .addFields(
                { name: 'Command Usage', value: `**${message.content}**` },
                { name: 'Command Used', value: '**-promote**', inline: true },
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
            message.channel.send(`${message.author}, Insufficient Permissions for **-promote** command.\n\nRoles required: **Ranking Permissions**, **T&E Command**, **Platoon Command**, **Regiment Command**, or **Company Command**`);
        }
    }
}