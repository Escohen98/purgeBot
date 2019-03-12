exports.run = (client, msg, args) => {
    console.log(args);
    if (args.length < 1) {
        msg.reply("Please specify at least 1 existing role.");
        return;
    }
    const rles = msg.guild.roles;
    console.log(args[0]);
    var mmbrs  = rles.find("name", args[0]).members.values();
    const argv = args.slice(1);
   // console.log(rles);

    for(const role of argv) {
        if(!rles.exists("name", role)) {
            msg.reply(`${role} does not exist on this server.`);
            return;
        }
        console.log(typeof mmbrs);
        for(const c of mmbrs) {
           
            if(!c.roles.has(role.name = role)) {
               // mmbrs.delete(c);

            }
        }
    }

    var message = `List of members in ${args[0]}`;
    for(const a of argv) {
        message += `, ${a}`;
    }
    for (const c of mmbrs) {
        if(c.nickname != null)
            message+=`\n ${c.nickname}`;
        else
            message+=`\n ${c.displayName}`;
    }

    msg.channel.send(message);
}