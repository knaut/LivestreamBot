import OSCClient from './OSCClient'

export default interface Config {
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

		// server: any,
		clients: Array<OSCClient>
	}
}