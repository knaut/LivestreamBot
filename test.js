"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var comfy_js_1 = __importDefault(require("comfy.js"));
var node_osc_1 = require("node-osc");
var DEBUG = true;
// should be a string literal...?
var HOST_IP = '192.168.0.30';
var Bot = /** @class */ (function () {
    function Bot(config) {
        // this.config = config; // consider not doing this
        this.comfy = comfy_js_1.default;
        this.osc = config.osc;
        // comfyjs setup
        var _a = config.comfy, bot = _a.bot, oauth = _a.oauth, channel = _a.channel;
        this.setupTwitch({ bot: bot, oauth: oauth, channel: channel });
        // osc setup
        var clients = config.osc.clients;
        var newClients = this.setupOSC(clients);
        this.osc.clients = newClients;
        console.log(this.osc);
    }
    Bot.prototype.setupTwitch = function (_a) {
        var bot = _a.bot, oauth = _a.oauth, channel = _a.channel;
        if (!DEBUG) {
            if (!channel) {
                this.comfy.Init(bot, oauth);
            }
            else {
                this.comfy.Init(bot, oauth, channel);
            }
        }
        else {
            console.log('ran setupTwitch() with:', bot);
        }
    };
    Bot.prototype.setupOSC = function (clients) {
        var newClients = {};
        for (var i = 0; clients.length > i; i++) {
            var _a = clients[i], name_1 = _a.name, host = _a.host, port = _a.port;
            var client = new node_osc_1.Client(host, port);
            newClients[name_1] = client;
        }
        return newClients;
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
//# sourceMappingURL=test.js.map