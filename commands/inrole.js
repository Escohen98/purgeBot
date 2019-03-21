//Copyright (c) 2019, Eric Cohen.
const Discord = require("discord.js");
const Embed = require("../modules/embed.js")(client);
exports.run = (client, msg, args) => {
    client.args = args;
    if(!reaction) { //Only reinitializes if new inrole command is invoked
                    //and not a reaction.
      client.members = Embed.getMembers(msg, args);
    }
    client.Embed = Embed.getEmbed(args, false);
    console.log(client.Embed);
    //msg.channel.send(message, {code:'md'});
    Embed.sendEmbed; //Sends embed in channel.
}
