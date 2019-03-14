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
          //Because 2 messages get deleted if only 1 is requested.
          //if(temp == 1)
            //temp--;
            //Gets messages to be deleted.
            //To Be Fixed at a Later Date.
				msg.channel.fetchMessages({limit: (temp+1/*Because logic*/)}).then(messages => {
				    const unpinnedMessages = messages.filter(msg => !(msg.pinned)); //A collection of messages that aren't pinned
				    msg.channel.bulkDelete(unpinnedMessages, true);
            let placeholder = 1;
            //For case of 1 message to be deleted.
            //if(temp == 0)
            //  placeholder = 0;
				    msgsDeleted = unpinnedMessages.array().length-placeholder; // number of messages deleted
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
