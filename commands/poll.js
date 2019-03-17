//Copyright (c) 2019, Eric Cohen.
//Creates a poll.
exports.run = (client, msg, args) => {
  //Returns an emoji object of the gven emoji name.
    function emoji(name) {
      return client.emojis.find(emoji => emoji.name === name)
    }
    msg.react(emoji("uparrow").id);
    msg.react(emoji("downarrow").id);
}
