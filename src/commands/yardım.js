const { Discord, EmbedBuilder, ChannelType, ButtonBuilder, ActionRowBuilder, ButtonStyle, ModalBuilder, TextInputStyle, TextInputBuilder, InteractionType, PermissionsBitField } = require ("discord.js")
const Emojis = require("../trefax/emojis.json")
const Colors = require("../trefax/colors.json")
const db = require("croxydb")

module.exports = {
  slash: true, 
  enable: true, 
  dbl: false, 
  name: ['yardım'],  
  description: 'TreFax Uptime yardım menüsünü gösterir.',
  
async execute(client, interaction) {
  
  await interaction.deferReply()
  
  const Duyurular = db.fetch(`Duyurular`)
  let Duyuru
  if(!Duyurular) {
    Duyuru = `${Emojis.Kırmızı} \`Aktif bir duyuru bulunmuyor.\``
  } else {
    Duyuru = `${db.fetch(`Duyurular`).map(D => `> ${Emojis.Sağ} \`${D}\``).join("\n") || `${Emojis.Kırmızı} \`Aktif bir duyuru bulunmuyor.\``}`
  }
  const Yardım = new EmbedBuilder()
    .setColor(Colors.Yellow)
    .setAuthor({name: interaction.user.username, iconURL: interaction.user.avatarURL()}) 
    .addFields(
      {
        name: `${Emojis.Duyuru} Bot duyuruları`,
        value: `${Duyuru}`
      },
      {
        name: `${Emojis.Bot} Bot komutları`,
        value: `
> </yardım:0> TreFax Uptime yardım menüsünü gösterir.

> </istatistik:0> Botun istatistiklerini gösterir.

> </ping:0> Botun gecikme sürelerini gösterir.

> </davet:0> Botun bağlantılarını gösterir.

> </link ekle:0> Sisteme link eklersiniz.

> </link sil:0> Sistemdeki linkinizi silersiniz.

> </link düzenle:0> Sistemdeki linkinizi değiştirirsiniz.

> </link liste:0> Sisteme eklemiş olduğunuz linkleri gösterir.

> </link say:0> Sistemdeki linklerin sayısını gösterir.

> </premium kontrol:0> Premium üyeliğinizi kontrol edersiniz.

> </promosyon kullan:0> Promosyon kodu kullanırsınız.
`})
    .setFooter({text: client.user.username, iconURL: client.user.avatarURL()}) 
    .setTimestamp()
    .setImage(`https://media.discordapp.net/attachments/1109111845685563453/1181257925109489754/350kb.gif?ex=6580672c&is=656df22c&hm=15b2d214767504d3c805946b58a2c24d8e977089e6b9851764437c4ea249750b&=&width=585&height=75`)
  await interaction.followUp({embeds: [Yardım]})
  
  }
}
  