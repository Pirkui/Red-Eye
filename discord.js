const Discord = require('discord.js');
require('dotenv').config();

const client = new Discord.Client();

client.login(process.env.BOT_TOKEN);

client.on('ready', () => console.log('The Bot is ready!'));


const cp = [
  'No cp for u',
  'You r ugly',
  'You will get a cp in 3 weeks',
  'You get a cp in a year',
  'You r mysterious?',
  'You prevert',
  'Wanna BL/GL',
  'Big Gay Dance',
  'Getting a cp in a month or so',
  'Just give up',
  'You getting a cp in 10-20 years',
  'You getting a cp in 20-80 years.',
  'Marriage',
];

client.on('message', (msg) => {
  if (msg.content === '?cp') {
    msg.channel.send(cp[Math.floor(Math.random() * cp.length)]);
  }
});
const tmd = [
    'F ur mom too',
    'I am ur father',
    'Too Late to run, here i come!',
  ];
  
  client.on('message', (msg) => {
    if (msg.content === '?tmd') {
      msg.channel.send(tmd[Math.floor(Math.random() * tmd.length)]);
    }
  });

  const guess = [
    'Sure',
    'Nope',
  ];

  client.on('message', (msg) => {
    if (msg.content === '?guess') {
      msg.channel.send(guess[Math.floor(Math.random() * guess.length)]);
    }
  });




    
