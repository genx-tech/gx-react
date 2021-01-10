"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.withStyles = exports.withSuspense = exports.withOnLocationChange = exports.withObserver = exports.renderLazy = exports.inject = void 0;

var _inject = _interopRequireWildcard(require("./inject"));

exports.inject = _inject;

var _renderLazy = _interopRequireWildcard(require("./renderLazy"));

exports.renderLazy = _renderLazy;

var _withObserver = _interopRequireWildcard(require("./withObserver"));

exports.withObserver = _withObserver;

var _withOnLocationChange = _interopRequireWildcard(require("./withOnLocationChange"));

exports.withOnLocationChange = _withOnLocationChange;

var _withSuspense = _interopRequireWildcard(require("./withSuspense"));

exports.withSuspense = _withSuspense;

var _withStyles = _interopRequireWildcard(require("./withStyles"));

exports.withStyles = _withStyles;

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
//# sourceMappingURL=index.js.map