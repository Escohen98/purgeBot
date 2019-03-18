//Copyright (c) 2019, Eric Cohen.
const Discord = require("discord.js");
exports.run = (client, msg, args, reaction = false) => {
    console.log(args);
    //Makes sure user specifies a role
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
    client.members = mmbrs;
    client.Embed = client.fillEmbed(args[0], argv, mmbrs);
    console.log(client.Embed);
    //msg.channel.send(message, {code:'md'});
    msg.channel.send(client.Embed)
    .then(embedMessage => (
      embedMessage.react('⬅')
      .then(embedMessage.react('➡'))
      .catch(() => console.error('One of the emojis failed to react.'))
    ))
    .catch(console.error);
}
