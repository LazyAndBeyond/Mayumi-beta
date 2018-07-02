module.exports = {
    "name": "restart",
    "dm": false,
    "args": false,
    "usage": "",
    "aliases": ["r"],
    "permLevel": "Bot Owner",
    "nsfw": false,
    "enabled": true,
    "cooldown": 2,
    "category": "Owner / Admins",
    "description": "Restarts the bot.",
  execute(message, args, level) {
    const Bot = message.client
        message.channel.send('Restart has been initiated.\n**Restarting...**')
        setTimeout(function() {
          Bot.destroy()
        }, 1000)
        setTimeout(function() {
          process.exit()
        }, 2000)
        setTimeout(function() {
          Bot.login(message.client.config.token)
  var presence = { //Setting the presence
    game: {
      name: `${Bot.config.prefix}help | ${Bot.guilds.size} servers`,
      type: 3
    }
  }

  Bot.user.setPresence(presence)
  }, 3000)
  }
}