//Copyright (c) 2019, Eric Cohen.
exports.run = async (client, msg, args) => {
var chnl = msg.channel;
	if(client.purge.has(chnl)) {
		client.purge.delete(chnl);
		msg.reply(`All messages in ${chnl} will no longer be deleted.`);
	} else {
		client.purge.add(chnl);
	    msg.reply(`All messages in ${chnl} will now be deleted.`);
		msg.delete(1000);
	}
}
