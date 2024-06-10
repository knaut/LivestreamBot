import dotenv from 'dotenv';
dotenv.config();

import fs from 'fs'
import { exec } from 'child_process'

import Config from './interfaces/Config'
import Bot from './classes/Bot'

// ingest config file
const botConfig = JSON.parse( fs.readFileSync('./config.json', 'utf8') );

// should be a string literal...?
// const HOST_IP: '192.168.0.30' = '192.168.0.30';

const config: Config = {
	twitch: {
		bot: process.env.BOT,
		oauth: process.env.GLEUBOT_OAUTH_TOKEN,
		channel: process.env.CHANNEL
	},
	...botConfig
}

const bot = new Bot(config);




console.log(bot)



const botSays = function(voice: string, str: string) {
	exec(`say -v ${voice} "${str}"`)
}

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











