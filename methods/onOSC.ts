import { runActionBlock } from './runActionBlock'
import { snakeCaseString } from '../utils/snakeCaseString'

export const onOSC = function(message) {
	if (this.debug === true) {
		console.log('OSC message', message)
	}

	const { OSC } = this.ACTIONS
	const [ addressOSC, value ] = message
	const addressOSCString = snakeCaseString(addressOSC)

	if (value > 0) {
		for (let key in OSC){

			if (addressOSCString === key) {

				const oscBlock = OSC[key]

				for (let oscBlockkey in oscBlock) {

					
					runActionBlock.call(this, oscBlock, oscBlockkey)


				}

			}

		}
	}
}