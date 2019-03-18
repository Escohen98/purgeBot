//Copyright (c) 2019, Eric Cohen.
//Creates a poll.
exports.run = (client, msg, args) => {
  //Returns an emoji object of the gven emoji name.

    msg.react(client.emoji("uparrow").id);
    msg.react(client.emoji("downarrow").id);
}
