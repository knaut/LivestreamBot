"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.runActionBlock = void 0;
var comfy_js_1 = __importDefault(require("comfy.js"));
var runActionBlock = function (actionBlock, key) {
    switch (key) {
        case "chat":
            var chatString = actionBlock[key];
            comfy_js_1.default.Say(chatString, this.channel);
            break;
        case "speech":
            var voiceMessagesBlock = actionBlock[key];
            var voices = Object.keys(voiceMessagesBlock);
            for (var i = 0; voices.length > i; i++) {
                var voice = voices[i];
                var message = voiceMessagesBlock[voice];
                this.speak(voice, message);
            }
            break;
    }
};
exports.runActionBlock = runActionBlock;
//# sourceMappingURL=runActionBlock.js.map