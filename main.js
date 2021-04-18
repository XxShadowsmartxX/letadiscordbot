const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '-';
const fs = require('fs');
const roblox = require('noblox.js');
const chalk = require('chalk');
const figlet = require('figlet');
require("./html.js");
const express = require('express');
const app = express();

roblox.setCookie(process.env.cookie).catch(async err => {
    console.log(chalk.red('Issue with logging in: ' + err));
});

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
  const command = require(`./commands/${file}`);

  client.commands.set(command.name, command);
}

client.on('ready', () => {
  console.log(chalk.yellow(figlet.textSync('CFMP', { horizontalLayout: 'full' })));
  console.log(chalk.red(`CFMP Bot is Online!\n---\nChannels: ${client.channels.cache.size}\nServers: ${client.guilds.cache.size}`));
  client.user.setActivity(`CFMP || -support`, { type: 'WATCHING' });
});

let listener = app.listen(process.env.PORT, () => {
     console.log('Your app is currently listening on port: ' + listener.address().port);
});

client.on('message', message => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;
  const args = message.content.slice(prefix.length).split(/ +/);
  const cmd = args.shift().toLowerCase();

  let command;

  if(cmd.length == 0) return;
  if(client.commands.has(cmd)) command = client.commands.get(cmd);

  if(command) command.execute(message, args, client);
});
client.login(process.env.token);