import Cooldown from './Cooldown'

export default class VFX {
	command: string
	
	fxLength: number
	cooldownLength: number

	fxCooldown: Cooldown
	commandCooldown: Cooldown

	onStart: Function
	onComplete: Function
	onBusy: Function

	constructor({
		command,

		fxLength,
		cooldownLength,

		onStart,
		onComplete,
		onBusy
	}) {
		this.fxCooldown = new Cooldown({ length: fxLength })
		this.commandCooldown = new Cooldown({ length: cooldownLength })
	}

	fire(user) {
		const {
			onBusy,
			onStart,
			onComplete,
			
			fxCooldown,
			commandCooldown
		} = this;

		if (fxCooldown.active) {
			onBusy(user)
		} else {
			onStart(user)

			// pass completion function to fx cooldown to fire when time is done
			fxCooldown.start(onComplete)

			// we do a command cooldown, which is the effect length + cooldown length
        	// only after the command cooldown is the effect considered "off"
        	this.commandCooldown.start(
        		() => commandCooldown.active = false
        	)
		}
	}
}








