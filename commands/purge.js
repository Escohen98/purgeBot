exports.run = (client, msg, args) => {
    const logger = client.logger;
    console.log(args);
    var temp = parseInt(args[0]) || 0;//parseInt(msg.content.substring(6).trim()) || 0;
    console.log(temp);
    msg.delete();
			if(temp < 1 || temp > 99)
				msg.reply('Please select a number from 1-99');
			else {
			    temp = temp + 1;
			    console.log(temp);
				msg.channel.fetchMessages({limit: (temp)}).then(messages => {
				    const unpinnedMessages = messages.filter(msg => !(msg.pinned)); //A collection of messages that aren't pinned
				    msg.channel.bulkDelete(unpinnedMessages, true);
				    msgsDeleted = unpinnedMessages.array().length; // number of messages deleted
				    client.flag = true;
					msg.channel.send(msgsDeleted + ' message(s) deleted!');
					logger(msgsDeleted + ' message(s) deleted!');
				}).catch(err => {
					logger('Error while doing Bulk Delete', client.day);
					logger(err, client.day);
				});
			}
				
				
				//msg.delete(3000)  
}