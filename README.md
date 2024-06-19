# LivestreamBot

An interactive chatbot for livestream platform(s) that integrates APIs and hardware protocols. OSC (Open Sound Control) integration. Can be used to trigger lights, sound, visual effects, text-to-speech, and viewer rewards (depending on platform) based on chat interactions.

Built in Typescript/NodeJS

🚧 UNDER CONSTRUCTION 🚧

Supports:
	- Twitch API
		- chat messages
		- commands
		- viewer rewards/redeems

Features:
	- Open Sound Control (OSC)
		- send OSC signals to client applications (OBS, Ableton, VDMX, etc)
		- receive OSC signals from hardware/software on local network
	- Text-To-Speech (TTS)
	- Configurable via JSON
		- write a JSON file to automatically configure viewer rewards, chat messages, TTS responses, etc. without touching source code.

Roadmap:
	- further livestream API integration: paid subscriptions, cheers, etc
	- web UI to manage the bot's configuration and actions
	- web-based HTML/CSS animated "puppet" of the chatbot, to be used as an HTML-based video overlay
		- animated reactions based on chat interactions. Someone chats "hello" and the bot waves, etc.


