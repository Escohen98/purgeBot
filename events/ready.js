//Copyright (c) 2019, Eric Cohen.
module.exports = (client) => {
  const logger = client.logger;
  client.help.set('help', `\`${client.config.command_prefix}help\` view all commands`);
 // client.help.set('cmd', `\`${client.config.command_prefix}cmd [character]\` to change the command_prefix for this bot. Current prefix: \`${command_prefix}\`.`);
 // client.help.set('list', `\`${client.config.command_prefix}list\` prints out the channel ids of all channels in the purge list.`);
  client.help.set('inrole', `\`${client.config.command_prefix}inrole role1, role2,..., roleN\` checks which users are in given role(s).`);
  client.help.set('purge', `\`${client.config.command_prefix}purge [count]\` clears a defined number of non-pinned messages in given channel. __${client.config.permission_level}__ Only. (buggy)`);
  client.help.set('purgeChannel', `\`${client.config.command_prefix}purgeChannel\` enables/disables purging for all future messages in given channel. __${client.config.permission_level}__ Only.`);
  client.help.set('eval', `\`${client.config.command_prefix}eval [code]\` evaluates given d.js code. __Bot Owner Only__. (broken)`);
  client.help.set(`exit`, `\`${
  client.config.command_prefix}exit\` shuts bot down. __Bot Owner Only__`);
  client.help.set('reload', `\`${client.config.command_prefix}reload [command]\` reloads the given command. __Bot Owner Only.__`);

  const servers = client.config.servers;
  const rl = servers.RL.serverID; //WGARL server id
	const rcrl = servers.RL.channelID; //WGARL role-commands channel ID
	const wga = servers.WGA.serverID; //WGA server ID
	const rcwga = servers.WGA.channelID; //WGA role-commands channel ID
	const ownerID = client.config.owner_id; //Bot Owner Discord ID

    client.purge.add(client.getChannel(rl, rcrl));
    client.purge.add(client.getChannel(wga,rcwga));

	logger(`Logged in as ${client.user.tag}!`, client.day);
	//Returns channel object of given channel on the given server.

}
