"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var timer;
var Cooldown = /** @class */ (function () {
    function Cooldown(_a) {
        var length = _a.length;
        this.active = false;
        this.length = 4000;
        this.length = length || 4000;
    }
    Cooldown.prototype.start = function (onComplete) {
        var _this = this;
        this.active = true;
        this.timeout = setTimeout(function () {
            _this.active = false;
            if (onComplete) {
                onComplete();
            }
        }, this.length);
    };
    return Cooldown;
}());
exports.default = Cooldown;
//# sourceMappingURL=Cooldown.js.map