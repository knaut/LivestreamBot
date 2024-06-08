let timer: ReturnType<typeof setTimeout>;

export default class Cooldown {
	active: boolean = false
	length: number = 4000
	timeout: typeof timer

	constructor({ length }) {
	    this.length = length || 4000
	}

	start(onComplete?) {
		
		this.active = true;

		this.timeout = setTimeout(() => {
			this.active = false

			if (onComplete) {
				onComplete()
			}
		}, this.length)
	}
}







