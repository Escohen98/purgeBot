const Discord = require("discord.js");
const Embed = require("../modules/embed.js")(client);
module.exports = (reaction, user) => {
  console.log("Reaction: ", reaction);
  console.log("User: ", user);
  if(user.bot) {
    return;
  } else if (reaction.message == client.RichEmbed /*&& reaction.message.author == this bot*/) {
    let pages = (mmbrs.length-1)/20+1;//Each page = 20 users.
    if(reaction.emoji.name == '⬅' && client.page > 0) { //Since someone can manually add emotes.
      client.page--;
    } else if(reaction.emoji.name == '➡' && client.page < pages) {
      client.page++;
    } else {
      return;
    }
    //TODO - Figure out args, probably have to make global
    reaction.message.edit(Embed.getEmbed(client.args, true));
  }
}
