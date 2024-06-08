"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
var Bot_1 = __importDefault(require("./classes/Bot"));
// should be a string literal...?
var HOST_IP = '192.168.0.30';
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
var bot = new Bot_1.default(config);
//# sourceMappingURL=index.js.map