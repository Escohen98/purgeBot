//Copyright (c) 2019, Eric Cohen.
const Discord = require("discord.js");
const Enmap = require("enmap");
const fs = require("fs");
const client = new Discord.Client();
const config = require("./config.json");
// We also need to make sure we're attaching the config to the CLIENT so it's accessible everywhere!
client.config = config; //COnfig file for bot.
client.help = new Map(); //Map containing help descriptions.
client.purge = new Set(); //Puege command
client.day = " "; //String for logging
client.flag = false; //I wish I commented this sooner..
client.memebrs = new Array(); //Member array for inrole command.
client.page = 0; //# of pages for inrole command
client.logger = require("./logger.js"); //Enables logging.
client.USER_PAGE_COUNT = 2; //Number of users to appear on each page.
require("./modules/functions.js")(client);
// This loop reads the /events/ folder and attaches each event file to the appropriate event.
fs.readdir("./events/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    // If the file is not a JS file, ignore it (thanks, Apple)
    if (!file.endsWith(".js")) return;
    // Load the event file itself
    const event = require(`./events/${file}`);
    // Get just the event name from the file name
    let eventName = file.split(".")[0];
    // super-secret recipe to call events with all their proper arguments *after* the `client` var.
    // without going into too many details, this means each event will be called with the client argument,
    // followed by its "normal" arguments, like message, member, etc etc.
    // This line is awesome by the way. Just sayin'.
    client.on(eventName, event.bind(null, client));
    delete require.cache[require.resolve(`./events/${file}`)];
  });
});
client.commands = new Enmap();
fs.readdir("./commands/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    if (!file.endsWith(".js")) return;
    // Load the command file itself
    let props = require(`./commands/${file}`);
    // Get just the command name from the file name
    let commandName = file.split(".")[0];
    console.log(`Attempting to load command ${commandName}`);
    // Here we simply store the whole thing in the command Enmap. We're not running it right now.
    client.commands.set(commandName, props);
  });
});

client.login(client.config.token);
