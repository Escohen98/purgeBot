//Copyright (c) 2019, Eric Cohen.
const Discord = require("discord.js");
exports.run = (client, msg, args) => {
    const Embed = require("../modules/embed.js").data;
    client.args = args;
    client.members = Embed.getMembers(msg);
    client.Embed = Embed.getEmbed(client, false);
    console.log(client.Embed);
    //msg.channel.send(message, {code:'md'});
    Embed.sendEmbed(msg); //Sends embed in channel.
}
