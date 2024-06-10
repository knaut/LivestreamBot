"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
var fs_1 = __importDefault(require("fs"));
var child_process_1 = require("child_process");
// const fredSays = function(string) {
//   exec(`say -v Victoria "${string}"`)
// }
var botSays = function (voice, str) {
    (0, child_process_1.exec)("say -v ".concat(voice, " \"").concat(str, "\""));
};
var Bot_1 = __importDefault(require("./classes/Bot"));
// should be a string literal...?
var HOST_IP = '192.168.0.30';
var config = {
    comfy: {
        bot: process.env.BOT,
        oauth: process.env.GLEUBOT_OAUTH_TOKEN,
        channel: process.env.CHANNEL
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
var testconfig = JSON.parse(fs_1.default.readFileSync('./config.json', 'utf8'));
console.log(bot.osc.server
// testconfig.OSC.RAID_1.comfy.Say
);
bot.osc.server.on('message', function (msg) {
    console.log('OSC message', msg);
    var address = msg[0], value = msg[1];
    var vdmxVal = 200;
    if (value > 0) {
        ///////
        console.log("OSC message not zero", "address:", address);
        var OSC = testconfig.OSC;
        for (var key in OSC) {
            // console.log(key)
            // const actualAddress = `/${address}`
            // console.log(actualAddress, key)
            if (address === "/".concat(key)) {
                // console.log('address matches key')
                // const messageText = OSC[key].comfy.Say
                // console.log('bot.comfy.Say', messageText)
                // bot.comfy.Say( messageText )
                // fredSays( messageText )
                var block = OSC[key];
                for (var blockKey in block) {
                    // this is a given block of commands
                    // in an OSC object
                    switch (blockKey) {
                        case "comfy":
                            {
                                var messageText = block[blockKey].Say;
                                bot.comfy.Say(messageText);
                            }
                            break;
                        case "speech":
                            {
                                var voiceMessagesBlock = block[blockKey];
                                var voices = Object.keys(voiceMessagesBlock);
                                for (var i = 0; voices.length > i; i++) {
                                    var voice = voices[i];
                                    var message = voiceMessagesBlock[voice];
                                    botSays(voice, message);
                                }
                            }
                            break;
                    }
                    // const apiBlock = block[blockKey]
                }
            }
        }
        // if (address === RAID_1) {
        // 	bot.comfy.Say( OSC.RAID_1.comfy.Say )	
        // }
        ///////
    }
});
//# sourceMappingURL=index.js.map