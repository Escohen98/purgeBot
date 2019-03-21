const Discord = require("discord.js");
//Obtains and returns all members in given roles.
exports.run = (client, msg, args, reaction = false) => {
    console.log(args);
    //Makes sure user specifies a role
  function getMembers(msg, args) {
    if (args.length < 1) {
        msg.reply("Please specify at least 1 existing role.");
        return;
    }
    //Combines args that are not separated by a comma.
    for(let i = 0; i<args.length; i++) {
        if(i+1<args.length && !args[i].includes(',')) {
          args[i] += ' ' + args[i+1];
          args.splice(i+1, 1);
        }
        //Removes comma
          args[i] = args[i].replace(',', '').trim();
    }
    const rles = msg.guild.roles;
    //Makes sure role exists on server
    if(!rles.some(element => element.name.toLowerCase() === args[0].toLowerCase())) {
        msg.reply(`\`${args[0]}\` does not exist on this server.`);
        return;
    }

    let mmbrs = rles.find(element => element.name.toLowerCase() === args[0].toLowerCase());
      if(mmbrs) mmbrs = mmbrs.members; //Members in first listed role
    //Because interpreted values
    const iterable = args.length > 1;
    let argv;
    if(iterable) {
      argv = args.slice(1, args.length);
      console.log("argv:", argv);

     //Checks if role exists on server. If returns a does not exist message,
     //otherwise prints out roles.
      for(let role of argv) {
          role = role.trim();
          if(!rles.some(element => element.name.toLowerCase() === role.toLowerCase())) {
              msg.reply(`\`${role}\` does not exist on this server.`);
              return;
          }
          //TODO - Implement Multiple Roles.
          //Removes members who have previous role but not current role.
          if(mmbrs) {
          let temp = [];
          for(const c of mmbrs.values()) {
              //c.roles is a map and must compare the ids, not names.
              if(c.roles.has(rles.find(element => element.name.toLowerCase() ===
                                      role.toLowerCase()).id)) {
                temp.push(c);
              }
          }
          mmbrs = temp;
        }
      }
    } else { //If only 1 role in parameters.
      //Changing mmbrs to an array because not iterable if of size 1.
      if(mmbrs) {
        let temp = [];
        for(const c of mmbrs.values()) {
          temp.push(c)
        }
        mmbrs = temp;
      }
    }
    return mmbrs;
  }

  //Creates a new RichEmbed containing 20 elements for inrole command.
  //@param arg (String) - first role paramater
  //@param argv Array<String>- remaining role parameters. Empty aray by default.
  function getEmbed(args, reaction) {
    let embed = new Discord.RichEmbed()
    .setImage(client.avatarURL)
    .setColor("0xFF0000")
    .setAuthor("purgeBot", client.avatarURL);

    var message = `List of members in ${args[0]}`
    if(iterable) {
      let argv = args.spice(1, args.length);
      for(const a of argv) {
          message += `, ${a}`;
      }
    }

    let mmbrs = Client.members;
    embed.setTitle(message);
    embed.setDescription(`${mmbrs.length} member(s).`);
    console.log(mmbrs[0])
    if(mmbrs && mmbrs.length>1) {
    //Prints members in given role(s).
    //Will print nickname if exists otherwise displayname.
    let pages = (mmbrs.length-1)/20+1;//Each page = 20 users.
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

  func sendEmbed(msg) {
    let pages = (mmbrs.length-1)/20+1;
    if(client.page == 0) {   //If first page, only reacts with forward arrow
      msg.channel.send(client.Embed)
      .then(embedMessage => (embedMessage.react('➡')))
      .catch(console.error);
    } else if(client.page == pages) { //If last page, only reacts with back arrow.
      msg.channel.send(client.Embed)
      .then(embedMessage => (embedMessage.react('⬅')))
      .catch(console.error);
    } else { //Otherwise reacts with both.
      msg.channel.send(client.Embed)
        .then(embedMessage => (
          embedMessage.react('⬅')
          .then(embedMessage.react('➡'))
          .catch(() => console.error('One of the emojis failed to react.'))
        ))
        .catch(console.error)
     }
  }
}
