const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");
const fs = require("fs")

client.on("ready", () => {
  console.log("I am ready!");
});

client.on("message", (message) => {
  if (!message.content.startsWith(config.prefix) || message.author.bot) return;
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

 if(command === 'ping') {
  message.channel.send('Pong!');
} else
if (command === 'blah') {
  message.channel.send('Meh.');
} else
  if (command === "asl") {
  let age = args[0]; // Remember arrays are 0-based!.
  let sex = args[1];
  let location = args[2];
  message.reply(`Hello ${message.author.username}, I see you're a ${age} year old ${sex} from ${location}. Wanna date?`);
} else
  if(command === "say"){
  let text = args.slice(1).join(" ");
  message.delete();
  message.channel.send(text);
} else
  if(command === "quote") {
  const [channelid, messageid, quotename, ...note] = args.splice(1);
  
  const channel = channelid == "here" ? message.channel : client.channels.get(channelid);

  const message = messageid === "last" ? msg.channel.messages.last(2)[0] : await channel.messages.get(messageid);
 
  insertInDB(quotename, channel.id, message.id, note.join(" "));
}
  
  if(message.author.id !== config.ownerID) return;
  if(command === 'prefix') {
   message.channel.send('Prefix has been changed.')
  let newPrefix = message.content.split(" ").slice(1, 2)[0];
  
  config.prefix = newPrefix;
  fs.writeFile("./config.json", JSON.stringify(config), (err) => console.error);
}
  if(command === "kick") {
  let member = message.mentions.members.first();
  let reason = args.slice(1).join(" ");
  member.kick(reason);
}
});

client.login(config.token);
