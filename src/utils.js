"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generate = void 0;
var MAX_LEN = 5;
function generate() {
    var subset = "123456789qwertyuiopasdfghjklzxcvbnm";
    var id = "";
    for (var i = 0; i < MAX_LEN; i++) {
        id += subset[Math.floor(Math.random() * subset.length)];
    }
    return id;
}
exports.generate = generate;
console.log(generate());
