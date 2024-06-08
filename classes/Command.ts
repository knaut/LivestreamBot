import Cooldown from './Cooldown'

export default class Command {
	command: string
	cooldown: Cooldown
	cooldownLength: number
	onStart: Function
	onComplete?: Function

	constructor({ cooldownLength }) {
		this.cooldown = new Cooldown({ length: cooldownLength });
	}

	fire(user) {
		const { onStart, onComplete } = this

		if (!this.cooldown.active) {
			onStart(user);

			this.cooldown.start( onComplete )
		}
	}
}