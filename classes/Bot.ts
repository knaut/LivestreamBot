import ComfyJS from 'comfy.js';
import { Client, Server } from 'node-osc';

import Config from '../interfaces/Config';

const DEBUG: boolean = false; // make this global/env




export default class Bot {
	comfy: any
	/*osc: {
		server: object,
		clients: object
	}*/
	osc: any

	constructor(config: Config) {
		// this.config = config; // consider not doing this

		this.comfy = ComfyJS;
		this.osc = config.osc

		// comfyjs setup
		const { bot, oauth, channel } = config.comfy
		this.setupTwitch({ bot, oauth, channel });

		// osc setup
		const { clients, server } = config.osc
		const { host, port } = server

		const botServer = new Server(port, host, () => {
			console.log('OSC Server is listening')
		})
		
		const oscClients = this.setupOSCClient(clients);

		// this.osc.clients = newClients
		this.osc = {
			server: botServer,
			clients: oscClients
		}
		
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

	setupOSCClient(clients) {
		const newClients: object = {}

		for (let i = 0; clients.length > i; i++) {
			const { name, host, port } = clients[i]

			const client = new Client(host, port)

			newClients[name] = client
		}

		return newClients
	}

}