import ComfyJS from 'comfy.js';
import { Client, Server } from 'node-osc';

const DEBUG: boolean = true;

// should be a string literal...?
const HOST_IP: '192.168.0.30' = '192.168.0.30';

interface OSCClient {
	name: string,
	host: string,
	port: number
}

interface Config {
	comfy: {
		bot: string,
		oauth: string,
		channel: string
	},
	osc: {
		server: {
			host: string,
			port: number
		},
		clients: Array<OSCClient>
	}
}

class Bot {
	// name: string = "my name is";
	// config: object
	
	comfy: any
	osc: {
		server: object,
		clients: object
	}

	constructor(config: Config) {
		// this.config = config; // consider not doing this

		this.comfy = ComfyJS;
		this.osc = config.osc

		// comfyjs setup
		const { bot, oauth, channel } = config.comfy
		this.setupTwitch({ bot, oauth, channel });

		// osc setup
		const { clients } = config.osc
		const newClients = this.setupOSC(clients);
		this.osc.clients = newClients
		
		console.log(this.osc)
	}

	setupTwitch({ bot, oauth, channel}) {
		if (!DEBUG) {
			if (!channel) {
				this.comfy.Init(bot, oauth)
			} else {
				this.comfy.Init(bot, oauth, channel)
			}	
		} else {
			console.log('ran setupTwitch() with:', bot);
		}
	}

	setupOSC(clients) {
		const newClients: object = {}

		for (let i = 0; clients.length > i; i++) {
			const { name, host, port } = clients[i]

			const client = new Client(host, port)

			newClients[name] = client
		}

		return newClients
	}

}

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














