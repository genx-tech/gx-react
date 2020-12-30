"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.insertBetween = void 0;

const insertBetween = (arr, separator) => arr.map((e, i) => i < arr.length - 1 ? [e, separator] : [e]).reduce((a, b) => a.concat(b));

exports.insertBetween = insertBetween;
//# sourceMappingURL=array.js.map