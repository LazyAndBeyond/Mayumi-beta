module.exports = {
  
  isAdmin(member) {
    return member.permissions.has('ADMINISTRATOR')
  },
  
  getRandomInt() {
  return Math.floor(Math.random() * 16777215).toString(10)
  },
  
  permLevel(message) { 
    let permlvl = 0

    const permOrder = message.client.settings.permLevels.slice(0).sort((p, c) => p.level < c.level ? 1 : -1)

    while (permOrder.length) {
      const currentLevel = permOrder.shift()
      if (message.guild && currentLevel.guildOnly) continue
      if (currentLevel.check(message)) {
        permlvl = currentLevel.level
        break
      }
    }
    return permlvl
  },
  
  
}




