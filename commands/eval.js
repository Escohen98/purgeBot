//Taken from internet. Tests nodeJS code. 
exports.run = async (client, msg, args) => {
	if(msg.author.id !== client.config.owner_id) {
				msg.reply("Sorry, you must be the bot owner in-order to use this command.");
				return;
			}
			const argv = cmd.split(" ").slice(1);
			try {
				const code = argv.join(" ");
				let evaled = eval(code);

				if (typeof evaled !== "string")
					evaled = require("util").inspect(evaled);

				msg.channel.send(client.clean(evaled), {code:"xl"});
			} catch (err) {
				msg.channel.send(`\`ERROR\` \`\`\`xl\n${client.clean(err)}\n\`\`\``);
			}
}
