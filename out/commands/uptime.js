"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var discord_js_1 = __importDefault(require("discord.js"));
var Command = {
    aliases: ['upt'],
    category: 'General',
    description: 'Returns bot and api speeds',
    cooldown: '2s',
    hidden: false,
    ownerOnly: false,
    guildOnly: true,
    testOnly: false,
    //slash: true,
    //globalCooldown: '10m', min of 1m!
    //minArgs: 0,
    //maxArgs: 0,
    //expectedArgs: '',
    //permissions: ['SEND_MESSAGES'],
    callback: function (_a) {
        var message = _a.message, client = _a.client, args = _a.args;
        var moment = require("moment");
        require("moment-duration-format");
        var duration = moment.duration(client.uptime).format(" D [days], H [hrs], m [mins], s [secs]");
        var emb = new discord_js_1.default.MessageEmbed()
            .setColor('#FFB6C1')
            .setTitle("Ahega0's Uptime")
            .setDescription(duration)
            .setThumbnail('https://images-ext-1.discordapp.net/external/pnkyYI3Sqp9vmGdhsWP7XmnPwyvmHC65bx1Wdhheh_M/%3Fsize%3D2048/https/cdn.discordapp.com/avatars/841777441117831189/f6378c40a7aac70efe0d2c8ea1a82942.webp')
            .setTimestamp();
        message.channel.send(emb);
    }
};
exports.default = Command;
