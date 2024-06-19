import { snakeCaseString } from '../methods/onRedeem'

describe('snakeCaseString', () => {
	test('should turn "some text!" into "SOME_TEXT"', () => {
		expect(
			snakeCaseString('some text!')
		).toBe("SOME_TEXT")
	})
})