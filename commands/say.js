module.exports = {
    "name": "say",
    "dm": false,
    "args": true,
    "usage": "<args>",
    "aliases": [],
    "permLevel": "User",
    "nsfw": false,
    "enabled": true,
    "cooldown": 3,
    "category": "Fun-Commands",
    "description": "Who said bots cant talk??",
  execute(message, args, level) {
    var say = message.content.split(' ').splice(1).join(' ')
    if (message.guild.me.hasPermission('MANAGE_MESSAGES')) return message.delete()
    message.channel.send(say)
  }
}