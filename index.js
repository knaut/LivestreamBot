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
/*
bot.comfy.onReward = function(user, reward, cost, message, extra) {
    console.log( user + " redeemed " + reward + " for " + cost )

    const rewardString = reward;
    const redeemBlocks = testconfig.REDEEMS


    for (let redeemBlocksKey in redeemBlocks) {

        const redeemBlock = redeemBlocks[redeemBlocksKey]


        for (let messageKindKey in redeemBlock) {

            if (messageKindKey === "comfy") {
                const messageText = redeemBlock[ messageKindKey ]
                bot.comfy.Say( messageText )
            }

            if (messageKindKey === "speech") {
                const voiceMessagesBlock = redeemBlock[messageKindKey]
                const voices = Object.keys(voiceMessagesBlock)
                for (let i = 0; voices.length > i; i++) {
                    const voice = voices[i];
                    const message = voiceMessagesBlock[voice]
                    botSays(voice, message)
                }
            }



        }

    }


}
*/
/*
bot.osc.server.on('message', function(msg) {
    console.log('OSC message', msg);

    const [ addressOSC, value ] = msg
    const vdmxVal = 200

    if (value > 0) {
        ///////

        console.log("OSC message not zero", "addressOSC:", addressOSC)

        // "apiBlock" refers to a grouping of messages
        // for a specific API/platform/application

        for (let apiBlockKey in testconfig) {
            const apiBlock = testconfig[ apiBlockKey ]

            if (apiBlockKey === "OSC") {
                // all ur OSC stuff goes here
                // ...

                for (let apiMessageKey in apiBlock) {
                    const apiMessage = apiBlock[ apiMessageKey ]

                    if (`/${apiMessageKey}` === addressOSC) {

                        console.log(apiMessageKey, apiMessage)

                        for (let messageKindKey in apiMessage) {
                            console.log('messageKindKey', messageKindKey)


                            if (messageKindKey === "comfy") {
                                
                                const messageText = apiMessage[messageKindKey]
                                // const messageText = messageKind[messageKindKey]
                                bot.comfy.Say( messageText )

                            }

                            if (messageKindKey === "speech") {

                                const voiceMessagesBlock = apiMessage[messageKindKey]
                                const voices = Object.keys(voiceMessagesBlock)

                                for (let i = 0; voices.length > i; i++) {
                                    const voice = voices[i];
                                    const message = voiceMessagesBlock[voice]

                                    botSays(voice, message)

                                }

                            }

                        }


                    }

                    

                }

            }

            


        }

        
        

        // if (address === RAID_1) {

        // 	bot.comfy.Say( OSC.RAID_1.comfy.Say )

        // }

        


        ///////
    }

})

*/
//# sourceMappingURL=index.js.map