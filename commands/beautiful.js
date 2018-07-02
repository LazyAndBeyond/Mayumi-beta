module.exports = {
    "name": "beautiful",
    "dm": false,
    "args": true,
    "usage": "<mention>",
    "aliases": ["bt"],
    "permLevel": "User",
    "nsfw": false,
    "enabled": true,
    "cooldown": 3,
    "category": "Costum-Commands",
    "description": "Try it and you will understand why its called like that.",
  execute(message, args, level) {
  const { Canvas } = require('canvas-constructor')
  const snek = require('snekfetch')
  const fsn = require('fs-nextra')

  const getBeautiful = async (person) => {
    const plate = await fsn.readFile('https://cdn.glitch.com/d167e4ae-bb34-48ab-8a48-e516d768c693%2Fbt.png?1530548926685')
    const png = person.replace(/\.gif.+/g, '.png')
    const { body } = await snek.get(png)
    return new Canvas(634, 675)
        .setColor('RANDOM')
        .addRect(0, 0, 634, 675)
        .addImage(body, 423, 45, 168, 168)
        .addImage(body, 426, 382, 168, 168)
        .addImage(plate, 0, 0, 634, 675)
        .toBuffer()
  }

  try {
    const beautiful = message.mentions.users.first()
    const msg = message.channel.send('Admiring the painting...')
    const result = getBeautiful(beautiful.displayAvatarURL)
    message.channel.send({ files: [{ attachment: result, name: 'beautiful.jpg' }] }).then(file => console.log(file))
    msg.delete
  } catch (error) {
    console.log(error)
  }
  }
}