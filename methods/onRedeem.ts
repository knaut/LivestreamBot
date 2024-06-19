import { runActionBlock } from './runActionBlock'

export const snakeCaseString = function(str) {
    return str && str.match(
        /[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
        .map(s => s.toUpperCase())
        .join('_');
}

export const onRedeem = function(user, reward, cost, message, extra) {
	// console.log("redeem!", user, reward, cost, message, extra, this)

	const { REDEEMS } = this.ACTIONS

	// reward string is the name of the redeem, e.g "My Fancy Viewer Reward"
	const redeemString = snakeCaseString(reward)
	// console.log(redeemString)

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