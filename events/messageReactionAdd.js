const Discord = require("discord.js");
module.exports = (client, reaction, member) => {
  const Embed = require("../modules/embed.js").data;

  //console.log("Reaction: ", reaction);
  //console.log("member: ", member);
  console.log("The Awesome Message:",reaction.message);
  //console.log(reaction.message);
  console.log("member.bot:",  reaction.message.author.id == client.user.id);
  if(member.bot) {
    return;
  } else if (/*reaction.message.embeds[0] == client.RichEmbed &&*/ reaction.message.author.id == client.user.id) {
    let pages = (client.members.length-1)/client.USER_PAGE_COUNT+1;//Each page = 20 users.
    if(reaction.emoji.name == '⬅' && client.page > 0) { //Since someone can manually add emotes.
      client.page--;
      removeReactions(reaction.message);

    } else if(reaction.emoji.name == '➡' && client.page < pages) {
      client.page++;
      removeReactions(reaction.message);
    } else {
      return;
    }
    reaction.message.edit(Embed.getEmbed(client, true))
    .then(newMsg => console.log(`new embed added`))
    .catch(console.err);
  }
}

function removeReactions(msg) {
//  for (const r of msg.reactions) {
    console.log(msg.reactions);
    msg.reaction.remove('⬅');
  }
}
