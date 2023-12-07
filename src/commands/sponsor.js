const { Discord, EmbedBuilder, ChannelType, ButtonBuilder, ActionRowBuilder, ButtonStyle, ModalBuilder, TextInputStyle, TextInputBuilder, InteractionType, PermissionsBitField } = require ("discord.js")
const Emojis = require("../trefax/emojis.json")
const Colors = require("../trefax/colors.json")
const db = require("croxydb")

module.exports = {
  slash: true, 
  enable: true, 
  dbl: false, 
  name: ['sponsor'],  
  description: 'TreFax Uptime Sponsor Tanıtımı.',
  
async execute(client, interaction) {

  const embed = new EmbedBuilder()
.setColor("Green")
.setTitle("TreFax - Sponsor")
.setDescription("Sponsorumuz Olan [Night Host](https://discord.gg/nighthost)Teşşekkürler.")
.setThumbnail(interaction.guild.iconURL())
.setFooter({ text: "Night Host" })
interaction.reply({embeds: [embed]})


}}