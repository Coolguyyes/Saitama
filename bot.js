const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.login(auth.token);

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('pong');
  }
});

client.on('message', msg => {
  if (msg.content === 'I am unstoppable!') {
    msg.channel.send("Okay");
  }
});

client.login(process.env.NTk2Nzg0OTM1NDUzNTg5NTM0.XR-7Gg.WdM4RhUOie3UEWYxoLrH-J20ztY);
