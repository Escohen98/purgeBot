module.exports = (client) => {

    //For Eval Command
  /*  function clean(text) {
        if (typeof (text) === "string")
            return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
        else
            return text;
    }*/

    //For Eval command
    client.clean = text => {
      if (typeof(text) === "string")
        return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
      else
          return text;
    }

     client.getChannel = (serv, chan) => {
        for(const srvr of client.guilds.values()) {
            if(srvr.id === serv) {
                for(const chnl of srvr.channels.values()) {
                    if(chnl.id === chan) {
                        return chnl;
                    }
                }
            }
        }
        return null;
    }		

}