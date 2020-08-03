const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = '-';

const fs = require('fs');

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}
    client.once('ready', () => {
    console.log('ALETA Bot is Online!');
    client.user.setActivity('-support')
});

client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot)return; 

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

     if (command == 'ndog'){
        client.commands.get('ndog').execute(message, args);
    } else if (command === 'phase1'){
        client.commands.get('phase1').execute(message, args);
    } else if (command === 'phase2'){
    client.commands.get('phase2').execute(message, args);
    } else if (command === 'phase3'){
    client.commands.get('phase3').execute(message, args);
    } else if (command === 'phase4'){
    client.commands.get('phase4').execute(message, args);
    } else if (command === 'phasesl'){
    client.commands.get('phasesl').execute(message, args);
    } else if (command === 'phasecl'){
    client.commands.get('phasecl').execute(message, args);
    } else if (command === 'support'){
    client.commands.get('support').execute(message, args);
    } else if (command === 'phase1cl'){
    client.commands.get('phase1cl').execute(message, args);
    } else if (command === 'phase2cl'){
    client.commands.get('phase2cl').execute(message, args);
    } else if (command === 'phase3cl'){
    client.commands.get('phase3cl').execute(message, args);
    } else if (command === 'phase4cl'){
    client.commands.get('phase4cl').execute(message, args);
    } else if (command === 'enrollopen'){
    client.commands.get('enrollopen').execute(message, args);
    } else if (command === 'enrollclose'){
    client.commands.get('enrollclose').execute(message, args);
    } else if (command === 'finalexam'){
    client.commands.get('finalexam').execute(message, args);
    } else if (command === 'botmain'){
    client.commands.get('botmain').execute(message, args);
    } else if (command === 'botmaindone'){
    client.commands.get('botmaindone').execute(message, args);
    }
 });

client.login('NzM4MDU2OTk4Nzg0MDczNzI4.XyGXJA.NhTc_XdX2rI1d-NuoTFR3Pwc2Ls');
