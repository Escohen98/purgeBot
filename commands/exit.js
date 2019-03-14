//Copyright (c) 2019, Eric Cohen.
//Shuts down bot. Probably forces RunTime error to end execution.
exports.run = (client, msg, args) => {
    console.log("test");
    if (msg.author.id === client.config.owner_id) {
        msg.reply("You have initiated the emergency shutdown command.");
        msg.reply("Bot will be shut down entirely.");
        client.commands.forEach( async cmd => {
        client.unloadCommand(cmd);
         });
        setTimeout(() => {
            msg.reply("Good Bye!");
            process.exit(1);
        }, 3000);
    } else {
        msg.reply("Sorry, you must be the bot owner in-order to use this command.");
    }
};
