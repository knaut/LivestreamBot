"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Cooldown_1 = __importDefault(require("./Cooldown"));
var VFX = /** @class */ (function () {
    function VFX(_a) {
        var command = _a.command, fxLength = _a.fxLength, cooldownLength = _a.cooldownLength, onStart = _a.onStart, onComplete = _a.onComplete, onBusy = _a.onBusy;
        this.fxCooldown = new Cooldown_1.default({ length: fxLength });
        this.commandCooldown = new Cooldown_1.default({ length: cooldownLength });
    }
    VFX.prototype.fire = function (user) {
        var _a = this, onBusy = _a.onBusy, onStart = _a.onStart, onComplete = _a.onComplete, fxCooldown = _a.fxCooldown, commandCooldown = _a.commandCooldown;
        if (fxCooldown.active) {
            onBusy(user);
        }
        else {
            onStart(user);
            // pass completion function to fx cooldown to fire when time is done
            fxCooldown.start(onComplete);
            // we do a command cooldown, which is the effect length + cooldown length
            // only after the command cooldown is the effect considered "off"
            this.commandCooldown.start(function () { return commandCooldown.active = false; });
        }
    };
    return VFX;
}());
exports.default = VFX;
//# sourceMappingURL=VFX.js.map