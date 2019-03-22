const Discord = require("discord.js");
module.exports = (client, reaction, member) => {
  const Embed = require("../modules/embed.js").data;

  //console.log("Reaction: ", reaction);
  //console.log("member: ", member);
  //console.log(reaction.message);
  console.log("member.bot:", member.bot);
  if(member.bot) {
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
    reaction.message.edit(Embed.getEmbed(client, true))
    .then(newMsg => console.log(`new embed added`))
    .catch(console.err);
  }
}
