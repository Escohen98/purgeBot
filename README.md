# purgeBot
A Discord bot to delete messages.
Copyright (c) 2019, Eric Cohen.
## List of all commands
**help**                         `~help` view all commands <br />
**inrole**                      `~inrole role1, role2,..., roleN` Checks which users are in given role(s). <br />
**purge**                      `~purge [count]` clears a defined number non-pinned messages in given channel. <br />
**purgeChannel**        `~purgeChannel` enables/disables purging for all future messages in given channel. <br />
**eval**                         `~eval [code]` evaluates given d.js code. _Bot Owner Only_. <br />
**exit**                          `~exit` shuts bot down. _Bot Owner Only_ <br />
**reload**                      `~reload [command]` reloads the given command. _Bot Owner Only_.

## Config.JSON
```json
{
    "token": "",
    "command_prefix": "~",
    "owner_id": "",
    "permission_level": "",
    "servers": {
        "RL": {
            "serverID": "",
            "channelID": ""
        },
        "WGA": {
            "serverID": "",
            "channelID": ""
        }
    },
    "public_cmds":
      [
        ""
      ]
}
```

##Other Notes
  * The contents of the help command are set in ready.js. You will need to change the end of the descriptions based on what permissions (permissions_level, public_cmds) you set in the config
  * The eval command seems to be broken. Try at your own risk.
