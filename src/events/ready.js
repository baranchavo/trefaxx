const { Discord, EmbedBuilder, ChannelType, ButtonBuilder, ActionRowBuilder, ButtonStyle, ModalBuilder, TextInputStyle, TextInputBuilder, InteractionType, PermissionsBitField, ActivityType } = require ("discord.js")
const { joinVoiceChannel } = require("@discordjs/voice")
const Emojis = require("../trefax/emojis.json")
const Colors = require("../trefax/colors.json")
const Logs = require("../trefax/logs.json")
const db = require("croxydb")
const { autoSaver } = require("../trefax/yedek.js")
require("advanced-logs")
console.setConfig({
  background: false,
  timestamp: false
})

module.exports = {
  name: "ready",
  once: true,
  execute(client) {
      
  const channels = client.channels.cache.get("1166409729568936009")
    
  const VoiceConnection = joinVoiceChannel({
    channelId: channels.id,
    guildId: channels.guild.id,
    adapterCreator: channels.guild.voiceAdapterCreator,
  });
      
      const list = [
     
          "7/24 Aktif | Kesintisiz",
          "👋🏼 Sponsored By Night Host",
          `${client.guilds.cache.size} Sunucu`
      ]
      
      setInterval(() => {
              client.user.setPresence({
              activities: 
              [
           {
            name: list[Math.floor(Math.random() * list.length)], 
            type: ActivityType.Streaming,
            url: "https://www.twitch.tv/undefinedbaran"
          }
        ]
    })
      }, 20000)
    console.success(``, ` Bot aktif.`)
    const başlama = `<t:${Math.floor(client.readyAt / 1000)}:R>`
    const Durum = new EmbedBuilder()
      .setColor(Colors.Green)
      .setDescription(`> Bot aktif oldu.\n> Son başlama zamanım: ${başlama}`) 
      .setFooter({text: client.user.username, iconURL: client.user.avatarURL()}) 
      .setTimestamp()
     client.channels.cache.get(Logs.OtoDurum).send({embeds: [Durum]})
      
    setInterval(() => {autoSaver(client)}, 86400000) 

  }
}