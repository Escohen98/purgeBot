//Copyright (c) 2019, Eric Cohen.
exports.run = (client, msg, args) => {
    const logger = client.logger;
    console.log(args);
    //Number of messages to delete
    var temp = parseInt(args[0]) || 0;//parseInt(msg.content.substring(6).trim()) || 0;
    console.log(temp);
    msg.delete();
      //Discord has a limit of 100 messages.
			if(temp < 1 || temp > 99)
				msg.reply('Please select a number from 1-99');
			else {
          //Trying to figure out why not adding 1 deletes temp-1 but
          //adding 1 deletes temp+1
			    console.log(temp);
          //Gets messages to be deleted.
				msg.channel.fetchMessages({limit: (temp+1/*Because logic*/)}).then(messages => {
				    const unpinnedMessages = messages.filter(msg => !(msg.pinned)); //A collection of messages that aren't pinned
				    msg.channel.bulkDelete(unpinnedMessages, true);
				    msgsDeleted = unpinnedMessages.array().length-1; // number of messages deleted
            //Kind of wish I commented this when I originally coded it.
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
