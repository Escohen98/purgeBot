exports.run =async (client, message, args) => {
  //if(!args || args.size < 1) return message.reply("Must provide a command name to reload.");
  const commandName = args[0];
  // Check if the command exists and is valid
  if(!commandName) {
    return message.reply("Must provide a command name to reload.");
  } else if(!client.commands.has(commandName)) {
    return message.reply(`The command \`${commandName}\` does not exist.`);
  } else if(commandName.trim() == "reload") {
    return message.reply("The reload command cannot be reloaded.");
  }
  // the path is relative to the *current folder*, so just ./filename.js
  delete require.cache[require.resolve(`./${commandName}.js`)];
  // We also need to delete and reload the command from the client.commands Enmap
  client.commands.delete(commandName);
  const props = require(`./${commandName}.js`);
  client.commands.set(commandName, props);
  message.reply(`The command ${commandName} has been reloaded`);
};
