let timer: ReturnType<typeof setTimeout>;

export default class Cooldown {
	active: boolean = false
	length: number = 4000
	timeout: typeof timer

	constructor({ active, length, timeout }) {
		this.active = active
	    this.length = length || 4000
	    // this.timeout = timeout || null //might be problem?
	    this.timeout = timeout
	}

	start(onStart, onComplete) {
		
		this.active = true;

		if (onStart) {
			onStart()
		}

		this.timeout = setTimeout(() => {
			this.active = false

			if (onComplete) {
				onComplete()
			}
		}, this.length)
	}
}







