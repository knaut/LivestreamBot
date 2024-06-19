import { snakeCaseString, onRedeem } from '../methods/onRedeem'
import config from '../config.json'

describe('snakeCaseString', () => {
	test('should turn "some text!" into "SOME_TEXT"', () => {
		expect(
			snakeCaseString('some text!')
		).toBe("SOME_TEXT")
	})
})
