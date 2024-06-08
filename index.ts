import dotenv from 'dotenv';
dotenv.config();

import Config from './interfaces/Config'
import Bot from './classes/Bot'


// should be a string literal...?
const HOST_IP: '192.168.0.30' = '192.168.0.30';

const config: Config = {
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
}

const bot = new Bot(config);














