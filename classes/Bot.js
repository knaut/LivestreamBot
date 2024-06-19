"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var child_process_1 = require("child_process");
var comfy_js_1 = __importDefault(require("comfy.js"));
var node_osc_1 = require("node-osc");
var onRedeem_1 = require("../methods/onRedeem");
var onCommand_1 = require("../methods/onCommand");
var onOSC_1 = require("../methods/onOSC");
function speak(voice, str) {
    (0, child_process_1.exec)("say -v ".concat(voice, " \"").concat(str, "\""));
}
function setupTwitch(debug, botName, oauthKey, channelName) {
    if (debug === true) {
        console.log('DEBUG mode is ON');
    }
    else {
        // TODO: branch for case when bot is third party
        // and not channel user's OAuth
        // see: https://github.com/instafluff/ComfyJS?tab=readme-ov-file#channel-point-reward-redemptions
        // this is channel user ONLY
        comfy_js_1.default.Init(botName, oauthKey, channelName);
    }
}
function setupOSCClients(clients) {
    var newClients = {};
    if (Array.isArray(clients)) {
        for (var i = 0; clients.length > i; i++) {
            var _a = clients[i], NAME = _a.NAME, IP = _a.IP, PORT = _a.PORT;
            newClients[NAME] = new node_osc_1.Client(IP, PORT);
        }
    }
    else {
        var NAME = clients.NAME, IP = clients.IP, PORT = clients.PORT;
        var client = new node_osc_1.Client(IP, PORT);
        newClients[NAME] = client;
    }
    return newClients;
}
function setupOSCServer(host, port, callback) {
    var botServer = new node_osc_1.Server(port, host, function () {
        if (callback)
            callback();
    });
    botServer.on('message', function (msg) {
        // if (debug) {
        // 	console.log(msg)
        // }
    });
}
var Bot = /** @class */ (function () {
    function Bot(config) {
        var _a = config.twitch, botName = _a.botName, oauth = _a.oauth, channel = _a.channel;
        var debug = config.debug, ACTIONS = config.ACTIONS;
        setupTwitch(debug, botName, oauth, channel);
        var _b = config.OSC_PREFS, SERVER = _b.SERVER, CLIENTS = _b.CLIENTS;
        setupOSCServer(SERVER.IP, SERVER.PORT);
        var clients = setupOSCClients(CLIENTS);
        this.osc = __assign({}, clients);
        this.ACTIONS = ACTIONS;
        this.channel = config.twitch.channel;
        // TODO:
        // this.onChat = ComfyJS.onChat
        // this.onCheer = ComfyJS.onCheer
        // this.onCommand = ComfyJS.onCommand
        // this.onRaid = ComfyJS.onRaid
        // this.onSub = ComfyJS.onSub
        comfy_js_1.default.onReward = onRedeem_1.onRedeem.bind(this);
        comfy_js_1.default.onCommand = onCommand_1.onCommand.bind(this);
        this.speak = speak;
        this.onOSC = onOSC_1.onOSC.bind(this);
    }
    return Bot;
}());
exports.default = Bot;
//# sourceMappingURL=Bot.js.map