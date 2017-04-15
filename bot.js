const config = require('./config')
const fs = require('fs')

const Discord = require('discord.js')
const bot = new Discord.Client()

let rules = fs.readFileSync('./rules.md', 'utf8')

bot.on('message', ({ author, guild, content }) => {
  if (guild || author.id !== config.adminId) return
  fs.writeFile('./rules.md', rules = content, err => author.send(err
    ? `Erreur en changeant les regles: \`${err.message}\``
    : `regles mises a jour !`))
})

bot.on('guildMemberAdd', ({ user, guild }) => {
  guild.defaultChannel.sendMessage(`:sparkles: Bienvenue sur le discord L'Ordre des Schlags <@${user.id}>! Je t'invite à lire les règles ainsi que le mode d'emploi de Discord dans le chan Infos,  à te présenter dans le salon General et faire connaissance avec tout le monde ! :sparkles:`)
  user.send(rules).catch(console.error)
})

bot.login(config.botToken)
