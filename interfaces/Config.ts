import OSCClient from './OSCClient'

export default interface Config {
	twitch: {
		bot: string,
		oauth: string,
		channel: string
	},

	OSC_PREFS: {
		SERVER: {
			IP: string,
			PORT: number
		},
		CLIENTS: Array<OSCClient> | OSCClient,
		ACTIONS: object
	}

	osc: {
		server: {
			host: string,
			port: number
		},

		// server: any,
		clients: Array<OSCClient>
	}
}