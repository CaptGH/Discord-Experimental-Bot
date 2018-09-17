const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");

client.on("ready", () => {
  console.log("I am ready!");
});

const prefix = "!";
client.on("message", (message) => {

   if (!message.content.startsWith(prefix) || message.author.bot) return;
  // Exit and stop if it's not there
  if (!message.content.startsWith(prefix)) return;

  if (message.content.startsWith(prefix + "ping")) {
    message.channel.send("pong!");
  } else
  if (message.content.startsWith(prefix + "foo")) {
    message.channel.send("bar!");
  }
});

client.login("NDg5OTg0NzA5NjY1NzUxMDQw.DoCTlg.PSdtcJ0gNHXU1dhXJo8zjcdGJ7g");
