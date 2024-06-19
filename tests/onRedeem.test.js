"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var onRedeem_1 = require("../methods/onRedeem");
describe('snakeCaseString', function () {
    test('should turn "some text!" into "SOME_TEXT"', function () {
        expect((0, onRedeem_1.snakeCaseString)('some text!')).toBe("SOME_TEXT");
    });
});
//# sourceMappingURL=onRedeem.test.js.map