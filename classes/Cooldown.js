"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var timer;
var Cooldown = /** @class */ (function () {
    function Cooldown(_a) {
        var active = _a.active, length = _a.length, timeout = _a.timeout;
        this.active = false;
        this.length = 4000;
        this.active = active;
        this.length = length || 4000;
        // this.timeout = timeout || null //might be problem?
        this.timeout = timeout;
    }
    Cooldown.prototype.start = function (onStart, onComplete) {
        var _this = this;
        this.active = true;
        if (onStart) {
            onStart();
        }
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