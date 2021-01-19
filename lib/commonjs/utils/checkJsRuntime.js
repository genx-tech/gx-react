"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = checkJsRuntime;

function checkJsRuntime() {
  if (typeof document !== 'undefined') {
    return 'web';
  } else if (typeof navigator !== 'undefined' && navigator.product === 'ReactNative') {
    return 'native';
  } else {
    return 'node';
  }
}
//# sourceMappingURL=checkJsRuntime.js.map