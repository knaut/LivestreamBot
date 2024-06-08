"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Cooldown_1 = __importDefault(require("./Cooldown"));
var Command = /** @class */ (function () {
    function Command(_a) {
        var cooldownLength = _a.cooldownLength;
        this.cooldown = new Cooldown_1.default({ length: cooldownLength });
    }
    Command.prototype.fire = function (user) {
        var _a = this, onStart = _a.onStart, onComplete = _a.onComplete;
        if (!this.cooldown.active) {
            onStart(user);
            this.cooldown.start(onComplete);
        }
    };
    return Command;
}());
exports.default = Command;
//# sourceMappingURL=Command.js.map