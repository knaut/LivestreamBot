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
	osc?: {
		server: {
			host: string,
			port: number
		},
		clients: Array<OSCClient>
	}
}

class Bot {
	// name: string = "my name is";
	config: object

	constructor(config: Config) {
		this.config = config;
	}

	showConfig() {
		return this.config
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

console.log(bot.config)













