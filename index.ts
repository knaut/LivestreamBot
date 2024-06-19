import dotenv from 'dotenv';
dotenv.config();

import fs from 'fs'

import Config from './interfaces/Config'
import Bot from './classes/Bot'

// ingest config file
const botConfig = JSON.parse( fs.readFileSync('./config.json', 'utf8') );

const config: Config = {
	debug: process.env.DEBUG === "TRUE" ? true : false,

	twitch: {
		botName: process.env.BOT_NAME,
		oauth: process.env.BOT_OAUTH_TOKEN,
		channel: process.env.CHANNEL
	},

	...botConfig
}

const bot = new Bot(config);
