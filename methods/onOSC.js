"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.onOSC = void 0;
var runActionBlock_1 = require("./runActionBlock");
var snakeCaseString_1 = require("../utils/snakeCaseString");
var onOSC = function (message) {
    if (this.debug === true) {
        console.log('OSC message', message);
    }
    var OSC = this.ACTIONS.OSC;
    var addressOSC = message[0], value = message[1];
    var addressOSCString = (0, snakeCaseString_1.snakeCaseString)(addressOSC);
    if (value > 0) {
        for (var key in OSC) {
            if (addressOSCString === key) {
                var oscBlock = OSC[key];
                for (var oscBlockkey in oscBlock) {
                    runActionBlock_1.runActionBlock.call(this, oscBlock, oscBlockkey);
                }
            }
        }
    }
};
exports.onOSC = onOSC;
//# sourceMappingURL=onOSC.js.map