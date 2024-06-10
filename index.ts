import dotenv from 'dotenv';
dotenv.config();

import fs from 'fs'
import { exec } from 'child_process'


// const fredSays = function(string) {
//   exec(`say -v Victoria "${string}"`)
// }

const botSays = function(voice: string, str: string) {
	exec(`say -v ${voice} "${str}"`)
}




import Config from './interfaces/Config'
import Bot from './classes/Bot'


// should be a string literal...?
const HOST_IP: '192.168.0.30' = '192.168.0.30';

const config: Config = {
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
}

const bot = new Bot(config);


const testconfig = JSON.parse( fs.readFileSync('./config.json', 'utf8') );

console.log(
	bot.osc.server
	// testconfig.OSC.RAID_1.comfy.Say
)



bot.osc.server.on('message', function(msg) {
	console.log('OSC message', msg);

	const [ address, value ] = msg
	const vdmxVal = 200

	if (value > 0) {
		///////

		console.log("OSC message not zero", "address:", address)
		const { OSC } = testconfig

		for (let key in OSC) {
			// console.log(key)

			// const actualAddress = `/${address}`
			// console.log(actualAddress, key)

			if (address === `/${key}`) {
				// console.log('address matches key')


				// const messageText = OSC[key].comfy.Say
				// console.log('bot.comfy.Say', messageText)

				// bot.comfy.Say( messageText )
				// fredSays( messageText )

				const block = OSC[key]

				for (let blockKey in block) {
					// this is a given block of commands
					// in an OSC object

					switch(blockKey) {
						case "comfy": {

							const messageText = block[blockKey].Say
							bot.comfy.Say( messageText );

						}
						break;
						case "speech": {

							const voiceMessagesBlock = block[blockKey]

							const voices = Object.keys(voiceMessagesBlock)

							for (let i = 0; voices.length > i; i++) {
								const voice = voices[i];
								const message = voiceMessagesBlock[voice]

								botSays(voice, message)

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

})













