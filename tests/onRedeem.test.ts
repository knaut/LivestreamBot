import { snakeCaseString } from '../utils/snakeCaseString'

describe('snakeCaseString', () => {
	test('should turn "some text!" into "SOME_TEXT"', () => {
		expect(
			snakeCaseString('some text!')
		).toBe("SOME_TEXT")
	})
})
