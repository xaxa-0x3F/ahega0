"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Command = {
    aliases: ['urgay'],
    category: 'Fun',
    description: 'Turn another users pfp rainbow',
    cooldown: '2s',
    hidden: false,
    ownerOnly: false,
    guildOnly: true,
    testOnly: false,
    //slash: true,
    //globalCooldown: '10m', min of 1m!
    minArgs: 1,
    maxArgs: 1,
    expectedArgs: '<@user>',
    //permissions: ['SEND_MESSAGES'],
    callback: function (_a) {
        var message = _a.message, client = _a.client, args = _a.args;
        var _b = require('discord.js'), MessageEmbed = _b.MessageEmbed, MessageAttachment = _b.MessageAttachment;
        var user = message.mentions.users.first();
        if (!user.avatarURL())
            return message.reply(":x: " + user.tag + " profile photo not found.").then(function (msg) { msg.delete({ timeout: 3000 }); }).catch(console.error);
        var embed = new MessageEmbed()
            .setColor('#FFB6C1')
            .setTitle(user.tag + " get rainbowified!")
            .setImage("https://some-random-api.ml/canvas/gay/?avatar=" + user.avatarURL({ format: 'png' }));
        message.channel.send(embed);
    }
};
exports.default = Command;
