"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.onRedeem = exports.snakeCaseString = void 0;
var runActionBlock_1 = require("./runActionBlock");
var snakeCaseString = function (str) {
    return str && str.match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
        .map(function (s) { return s.toUpperCase(); })
        .join('_');
};
exports.snakeCaseString = snakeCaseString;
var onRedeem = function (user, reward, cost, message, extra) {
    // console.log("redeem!", user, reward, cost, message, extra, this)
    var REDEEMS = this.ACTIONS.REDEEMS;
    // reward string is the name of the redeem, e.g "My Fancy Viewer Reward"
    var redeemString = (0, exports.snakeCaseString)(reward);
    // console.log(redeemString)
    for (var redeemKey in REDEEMS) {
        if (redeemKey === redeemString) {
            var redeemBlock = REDEEMS[redeemString];
            for (var redeemBlockKey in redeemBlock) {
                runActionBlock_1.runActionBlock.call(this, redeemBlock, redeemBlockKey);
            }
        }
    }
};
exports.onRedeem = onRedeem;
exports.default = exports.onRedeem;
//# sourceMappingURL=onRedeem.js.map