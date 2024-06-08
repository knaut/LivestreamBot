"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var comfy_js_1 = __importDefault(require("comfy.js"));
// should be a string literal...?
var HOST_IP = '192.168.0.30';
var Bot = /** @class */ (function () {
    function Bot(config) {
        this.config = config;
        this.comfy = comfy_js_1.default;
        var _a = this.comfy, bot = _a.bot, oauth = _a.oauth, channel = _a.channel;
        if (!channel) {
            this.comfy.Init(bot, oauth);
        }
        else {
            this.comfy.Init(bot, oauth, channel);
        }
    }
    Bot.prototype.showConfig = function () {
        return this.config;
    };
    return Bot;
}());
var config = {
    comfy: {
        bot: 'BOT_NAME_HERE',
        oauth: 'OAUTH_HERE',
        channel: 'CHANNEL_NAME_HERE'
    },
    osc: {
        server: {
            host: HOST_IP,
            port: 5000
        },
        clients: [
            {
                name: 'IPAD',
                host: HOST_IP,
                port: 5001
            }
        ]
    }
};
var bot = new Bot(config);
console.log(bot.config);
//# sourceMappingURL=test.js.map