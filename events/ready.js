module.exports = (client) => {
  const logger = client.logger;
  client.help.set('help', 'view all commands');
 // client.help.set('cmd', `\`${client.config.command_prefix}cmd [character]\` to change the command_prefix for this bot. Current prefix: \`${command_prefix}\`.`);
 // client.help.set('list', `\`${client.config.command_prefix}list\` prints out the channel ids of all channels in the purge list.`);
  client.help.set('purge', `\`${client.config.command_prefix}purge [count]\` clears a defined number non-pinned messages in given channel.`);
  client.help.set('purgeChannel', `\`${client.config.command_prefix}purgeChannel\` enables/disables purging for all future messages in given channel.`);
  client.help.set('eval', `\`${client.config.command_prefix}eval [code]\` evaluates given d.js code. Bot Owner Only.`);
  client.help.set(`exit`, `\`${
  client.config.command_prefix}exit\` shuts bot down. Passcode required. Bot Owner Only`);
  
    const rl = client.config.server_id1; //WGARL server id
	const rcrl = client.config.channel_id1; //WGARL role-commands channel id
	const wga = client.config.server_id2; //WGA server id
	const rcwga = client.config.channel_id2; //WGA role-commands channel id
	const ownerID = client.config.owner_id; //My discord id
  
    client.purge.add(client.getChannel(rl, rcrl));
    client.purge.add(client.getChannel(wga,rcwga));

	logger(`Logged in as ${client.user.tag}!`, client.day);
	//Returns channel object of given channel on the given server. 
	
}

