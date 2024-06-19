"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var snakeCaseString_1 = require("../utils/snakeCaseString");
describe('snakeCaseString', function () {
    test('should turn "some text!" into "SOME_TEXT"', function () {
        expect((0, snakeCaseString_1.snakeCaseString)('some text!')).toBe("SOME_TEXT");
    });
});
//# sourceMappingURL=onRedeem.test.js.map