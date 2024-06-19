import { exec } from 'child_process'

import ComfyJS from 'comfy.js';
import { Client, Server } from 'node-osc';

import Config from '../interfaces/Config';
import OSCClient from '../interfaces/OSCClient';

import { onRedeem } from '../methods/onRedeem'
import { onCommand } from '../methods/onCommand'

function speak( voice: string, str: string ) {
	exec(`say -v ${voice} "${str}"`)
}

function setupTwitch( debug: boolean, botName: string, oauthKey: string, channelName: string) {
	if (debug === true) {
		console.log('DEBUG mode is ON');
	} else {
		// TODO: branch for case when bot is third party
		// and not channel user's OAuth
		// see: https://github.com/instafluff/ComfyJS?tab=readme-ov-file#channel-point-reward-redemptions
		// this is channel user ONLY
		ComfyJS.Init(botName, oauthKey, channelName);
	}
}

function setupOSCClients( clients: Array<OSCClient> | OSCClient ) {
	const newClients: object = {};

	if (Array.isArray(clients)) {
	
		for (let i = 0; clients.length > i; i++) {
			const { NAME, IP, PORT } = clients[i];
			
			newClients[NAME] = new Client(IP, PORT);
		}

	} else {

		const { NAME, IP, PORT } = clients;
		const client = new Client(IP, PORT);
		
		newClients[NAME] = client;

	}

	return newClients
}

function setupOSCServer( host: string, port: number, callback?: Function ) {
	const botServer = new Server(port, host, function() {
		if (callback) callback();
	})

	botServer.on('message', msg => {
		// if (debug) {
		// 	console.log(msg)
		// }
	})
}


export default class Bot {
	config: Config
	osc: object
	channel: string

	ACTIONS: object	

	// onChat: Function
	// onCheer: Function
	// onCommand: Function
	// onRaid: Function
	// onRedeem: Function
	// onSub: Function

	speak: Function
	runActionBlock: Function

	constructor( config: Config ) {
		const { botName, oauth, channel } = config.twitch
		const { debug, ACTIONS } = config


		setupTwitch( debug, botName, oauth, channel )

		const { SERVER, CLIENTS } = config.OSC_PREFS

		setupOSCServer( SERVER.IP, SERVER.PORT )
		
		const clients = setupOSCClients( CLIENTS )

		this.osc = {
			...clients
		}
		this.ACTIONS = ACTIONS
		this.channel = config.twitch.channel

		// this.onChat = ComfyJS.onChat
		// this.onCheer = ComfyJS.onCheer
		// this.onCommand = ComfyJS.onCommand
		// this.onRaid = ComfyJS.onRaid
		// this.onSub = ComfyJS.onSub


		ComfyJS.onReward = onRedeem.bind(this)
		ComfyJS.onCommand = onCommand.bind(this)



		this.speak = speak
	}

}
