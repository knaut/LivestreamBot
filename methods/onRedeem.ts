import { runActionBlock } from './runActionBlock'
import { snakeCaseString } from '../utils/snakeCaseString'

export const onRedeem = function(user, reward, cost, message, extra) {
	// console.log("redeem!", user, reward, cost, message, extra, this)

	const { REDEEMS } = this.ACTIONS

	// reward string is the name of the redeem, e.g "My Fancy Viewer Reward"
	const redeemString = snakeCaseString(reward)

	for (let redeemKey in REDEEMS) {
		if (redeemKey === redeemString) {

			const redeemBlock = REDEEMS[redeemString]
			
			for (let redeemBlockKey in redeemBlock) {


				runActionBlock.call(this, redeemBlock, redeemBlockKey)


			}

		}
	}
}

export default onRedeem