"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.snakeCaseString = void 0;
var snakeCaseString = function (str) {
    return str && str.match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
        .map(function (s) { return s.toUpperCase(); })
        .join('_');
};
exports.snakeCaseString = snakeCaseString;
//# sourceMappingURL=snakeCaseString.js.map