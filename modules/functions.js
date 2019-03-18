//Copyright (c) 2019, Eric Cohen.
module.exports = (client) => {

    //For Eval Command
  /*  function clean(text) {
        if (typeof (text) === "string")
            return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
        else
            return text;
    }*/

    //For Eval command
    client.clean = text => {
      if (typeof(text) === "string")
        return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
      else
          return text;
    }

     client.getChannel = (serv, chan) => {
        for(const srvr of client.guilds.values()) {
            if(srvr.id === serv) {
                for(const chnl of srvr.channels.values()) {
                    if(chnl.id === chan) {
                        return chnl;
                    }
                }
            }
        }
        return null;
    }
    client.emoji = (name) => {
      return client.emojis.find(emoji => emoji.name === name)
    }

    client.fillEmbed = (arg, argv, mmbr, reaction = false) => {
      let embed = new Discord.RichEmbed()
      .setImage(client.avatarURL)
      .setColor("0xFF0000")
      .setAuthor("purgeBot", client.avatarURL);

      var message = `List of members in ${args[0]}`
      if(iterable) {
        for(const a of argv) {
            message += `, ${a}`;
        }
      }
      embed.setTitle(message);
      embed.setDescription(`${args.length} member(s).`);
      console.log(mmbrs[0])
      if(mmbrs && mmbrs.length>1) {
      //Prints members in given role(s).
      //Will print nickname if exists otherwise displayname.
      let pages = (mmbrs.length-1)/20+1; //Each page = 20 users.
      if(!reaction) { //If the event call was from a command or reaction.
        client.page = 0;
      } else if(client.page < pages) { 
        client.page++; //Creates a new page if call was from a reaction
      }
      for (var i = client.page*20; i<mmbrs.length; i++) { //Two roles
          if(mmbrs[i].nickname != null)
              //message+=`\n* ${mmbrs[i].nickname}`;
              embed.addField(mmbrs[i].nickname, `${mmbrs[i].user.username}#${mmbrs[i].user.discriminator}`);
          else
            embed.addField(`${mmbrs[i].user.username}#${mmbrs[i].user.discriminator}`, desc);
              //message+=`\n* ${mmbrs[i].displayName}`;
              var desc = "User";
              console.log(client.user.bot);
              if(client.user.bot == true)
                desc = "Bot";
          if(i==19) {
              break;
          }
      }
    } else { //if only one mmbr because mmbrs is not iterable if of size 1.
      let c;
      if(mmbrs)
        c = mmbrs[0];
      if(c && c.nickname != null)
      //message+=`\n* ${c.nickname}`;
        embed.addField(c.nickname, `${c.user.username}#${c.user.discriminator}`);
      else if (c) {
      //message+=`\n* ${c.displayName}`;\
          var desc = "User";
        if(c.user.bot)
          desc = "Bot";
        embed.addField(`${c.user.username}#${c.user.discriminator}`, desc);
      }
    }
      return embed;
    }

}
