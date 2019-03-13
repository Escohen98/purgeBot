module.exports = (client, msg) => {

	//Use if printing or logging outside of if statements or commands
	//if(msg.author.bot) return;

    //Deletes a flagged message.
    if (client.flag) {
        msg.delete(1000);
        client.flag = false;
        return;
    }

	const logger = client.logger;
   //Deletes all non-pinned messages in any channel that is added to purge.
   if(client.purge.has(msg.channel) && !(msg.pinned)) {
      msg.delete(1000);
	  var d = new Date();
	 // d.get
	  logger(`${msg.author.username}: ${msg.content}`, client.day);
   }

	//Ignore message without prefix
	if (msg.content.indexOf(client.config.command_prefix) !== 0) return;
	else {
	//Logs anyone trying to use the bot.
	   var d = new Date();
	   logger(`[USAGE ATTEMPT]\n ${msg.author.username}: ${msg.content}`, client.day);
    }
	//console.log("1");
	//Ignore all bots
	if(msg.author.bot) return;

	//Ignore if user is below set permission level or not bot owner.
	if (!(msg.member.hasPermission(client.config.permission_level) || msg.author.id === client.config.owner_id)) return;

	console.log(client.commands);
	//Standard for splitting a command string.
	const args = msg.content.slice(client.config.command_prefix.length).trim().split(/ +/g);
	var command = args.shift().toLowerCase();
	console.log("command: ", command);
	console.log("args: ", args);

	//Get command data from client.commands enmap
	const cmd = client.commands.get(command);

	//Exit if the command doesn't exist
	if(!cmd) return;

	const util = require("util");
	console.log(cmd);
	cmd.run(client, msg, args);
};
