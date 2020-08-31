const Discord = require('discord.js');

const client = new Discord.Client();
const token = 'NzM4MDU2OTk4Nzg0MDczNzI4.XyGXJA.NhTc_XdX2rI1d-NuoTFR3Pwc2Ls';
client.login(token);

client.on('message', message => {
  if (message.channel.type != 'text' || message.author.bot)
    return;

  let command = message.content.split(' ')[0].slice(1);
  let args = message.content.replace('.' + command, '').trim();
  let isBotOwner = message.author.id == '250814412905119744';

  switch (command) {
    case 'reload': {
      if (!isBotOwner)
        return;

      message.channel.send('Restarting...').then(m => {
        client.destroy().then(() => {
          client.login('token');
        });
      });
      break;
    }


    case 'shutdown': {
      if (!isBotOwner)
        return;

      message.channel.send('Shutting down...').then(m => {
        client.destroy();
      });
      break;
    }
  }
});