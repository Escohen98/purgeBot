//Copyright (c) 2019, Eric Cohen.
exports.run =async (client, msg, args) => {
 var display = '\n__List of all commands__';
            for (var[key, value] of client.help.entries()) {
                display += ('\n**'+key + '**		' + value);
			}
 msg.reply(display);
}
