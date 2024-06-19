import ComfyJS from 'comfy.js';

export const runActionBlock = function(actionBlock: object, key: string) {
	switch(key) {
		case "chat": 
			const chatString = actionBlock[ key ]					
			ComfyJS.Say( chatString, this.channel )
		break;

		case "speech":
			const voiceMessagesBlock = actionBlock[key]
			const voices = Object.keys(voiceMessagesBlock)

			for (let i = 0; voices.length > i; i++) {				
				const voice = voices[i];
				const message = voiceMessagesBlock[voice]				
				
				this.speak(voice, message)
			}
		break;
	}
}
