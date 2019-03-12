exports.run = (client, msg, args) => {
    console.log(args);
    if (args.length < 1) {
        msg.reply("Please specify at least 1 existing role.");
        return;
    }
    const rles = msg.guild.roles;
    console.log(args[0]);
    let mmbrs  = rles.find("name", args[0])
      if(mmbrs) mmbrs = mmbrs.members.values(); //Members in first listed role
    const argv = args.slice(1);
    console.log(argv);

   //Checks if role exists on server. If returns a does not exist message,
   //otherwise prints out roles.
    for(const role of argv) {
        if(!rles.exists("name", role)) {
            msg.reply(`${role} does not exist on this server.`);
            return;
        }
        console.log(typeof mmbrs);
        //Removes members who have previous role but not current role.
        for(const c of mmbrs) {

            if(!c.roles.has(role.name = role)) {
               // mmbrs.delete(c);

            }
        }
    }

    var message = `#List of members in ${args[0]}`;
    for(const a of argv) {
        message += `, ${a}`;
    }
    //Prints members in given role(s).
    //Will print nickname if exists otherwise displayname.
    for (const c of mmbrs) {
        if(c.nickname != null)
            message+=`\n * ${c.nickname}`;
        else
            message+=`\n * ${c.displayName}`;
    }

    msg.channel.send(message, {code:'md'});
}
