module.exports = {
    "name": "sys",
    "dm": false,
    "args": false,
    "usage": "",
    "aliases": [],
    "permLevel": "User",
    "nsfw": false,
    "enabled": true,
    "cooldown": 3,
    "category": "Costum-Commands",
    "description": "The informations about the bot usage and os.",
    execute(message, args, level) {
      const rb = '```'
      const Discord = require('discord.js')
      const os = require('os')
      const bot = message.client
      const embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setThumbnail(bot.user.displayAvatarURL)
        .setAuthor(bot.user.username + ' System Information!')
        .addField('Sytem Info:', `${rb}js\n${process.platform}-${process.arch} with ${process.release.name} version ${process.version.slice(1)}\n${rb}`)
        .addField('Process Info:', `${rb}js\nPID ${process.pid} at ${process.cwd()}\n${rb}`)
        .addField('Process memory usage:', `${rb}js\n${Math.ceil(process.memoryUsage().heapTotal / 1000000)} MB\n${rb}`)
        .addField('System memory usage:', `${rb}js\n${Math.ceil((os.totalmem() - os.freemem()) / 1000000)} of ${Math.ceil(os.totalmem() / 1000000)} MB\n${rb}`)
        .addField('Bot Info:', `${rb}js\nFull Name: ${bot.user.username}\nID: ${bot.user.id}\nCharacterLimit: ${2000}\nServers: ${bot.guilds.size}\nChannels: ${bot.channels.size}\nUsers: ${bot.users.size}${rb}`)
        .addField('Owner/Admins:', `${rb}js\nOwner_ID: ${bot.config.owner_id}\nAdmins_ID: ${bot.config.admins}${rb}`)

      message.channel.send(embed)
    }
}