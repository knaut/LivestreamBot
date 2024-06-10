"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var comfy_js_1 = __importDefault(require("comfy.js"));
var node_osc_1 = require("node-osc");
var DEBUG = false; // make this global/env
var Bot = /** @class */ (function () {
    function Bot(config) {
    }
    Bot.prototype.setupTwitch = function (botName, oauthKey, channelName) {
        if (DEBUG) {
            console.log('DEBUG mode is ON');
        }
        else {
            // TODO: branch for case when bot is third party
            // and not channel user's OAuth
            // see: https://github.com/instafluff/ComfyJS?tab=readme-ov-file#channel-point-reward-redemptions
            // this is channel user ONLY
            comfy_js_1.default.Init(botName, oauthKey, channelName);
        }
    };
    Bot.prototype.setupOSCClients = function (clients) {
    };
    Bot.prototype.setupOSCServer = function (host, port, callback) {
        var botServer = new node_osc_1.Server(port, host, function () {
            if (callback)
                callback();
        });
        this.osc.listen = botServer.on;
    };
    return Bot;
}());
exports.default = Bot;
//# sourceMappingURL=Bot.js.map