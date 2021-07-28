const welcomeSchema = require('../models/welcome-schema')

const cache = new Map()

const loadData = async () => {
  const results = await welcomeSchema.find()

  for (const result of results) {
    cache.set(result.guildId, result.channelId)
  }
}
loadData()

module.exports = {
	name: 'setwelcome',
  aliases: ['setwelc'],
  category: 'Moderation',
  description: 'Sets the Goodbye Message channel in your server. Can customize the background image and color!',
  cooldown: '3s',
  hidden: false,
  ownerOnly: false,
  guildOnly: true,
  testOnly: false,
  //slash: true,
  //globalCooldown: '5m',
  //minArgs: 1,
  //maxArgs: 1,
  expectedArgs: '<background-url(help: https://www.lifewire.com/copy-image-web-address-url-1174175 )> <color(has to be in hex ~ #FF0000, help: https://htmlcolorcodes.com )>',
  permissions: ['ADMINISTRATOR'],
  callback: async ({ message, args }) => {
 		const { guild, channel } = message;

    await welcomeSchema.findOneAndUpdate(
      {
        guildId: guild.id,
      },
      {
        guildId: guild.id,
        channelId: channel.id,
				backgroundImage: args[0],
				color: args[1],
      },
      {
        upsert: true,
      }
    )

    cache.set(guild.id, channel.id);

    message.reply('Welcome channel set!');
  },
}

module.exports.getChannelId = (guildId) => {
  return cache.get(guildId)
}