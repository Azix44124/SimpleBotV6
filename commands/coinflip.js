const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  message.channel.send(`Result: **${Math.floor(Math.random() * 2) == 0 ? "Heads" : "Tails"}**!`);
}

module.exports.help = {
  name: "coinflip"
}  
