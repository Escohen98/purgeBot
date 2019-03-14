//Copyright (c) 2019, Eric Cohen.
exports.run = (client, msg, args) => {
    console.log(args);
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
    let mmbrs = rles.find(element => element.name.toLowerCase() === args[0].toLowerCase());
      if(mmbrs) mmbrs = mmbrs.members; //Members in first listed role
    //Because interpreted values
    const iterable = args.length > 0;
    let argv;
    if(iterable) {
      argv = args.slice(1, args.length);
      console.log("argv: ", argv);

     //Checks if role exists on server. If returns a does not exist message,
     //otherwise prints out roles.
      for(let role of argv) {
          role = role.trim();
          if(!rles.some(element => element.name.toLowerCase() === role.toLowerCase())) {
              msg.reply(`${role} does not exist on this server.`);
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
    }
    var message = `#List of members in ${args[0]}`;
    if(iterable) {
      for(const a of argv) {
          message += `, ${a}`;
      }
    }
    if(mmbrs) {
    //Prints members in given role(s).
    //Will print nickname if exists otherwise displayname.
    console.log("mmbrs.values(): ", mmbrs);
    for (const c of mmbrs) {
        if(c.nickname != null)
            message+=`\n* ${c.nickname}`;
        else
            message+=`\n* ${c.displayName}`;
    }
  }
    msg.channel.send(message, {code:'md'});
}
