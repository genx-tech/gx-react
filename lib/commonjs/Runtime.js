"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.shouldLog = exports.updateRuntime = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const updateRuntime = addon => Object.assign(config, addon);

exports.updateRuntime = updateRuntime;

const shouldLog = level => mapLogLevels[level] >= config.logLevel ? mapLogLevels[level] : 0;

exports.shouldLog = shouldLog;
const INFO = 3;
const mapLogLevels = {
  debug: 1,
  verbose: 2,
  info: INFO,
  warning: 4,
  error: 5,
  disable: 10
};
const config = {
  defaultStyleMode: 'mui',
  onError: error => console.error(error),
  suspenseFallbabck: () => /*#__PURE__*/_react.default.createElement("div", null, "Loading..."),
  import_: () => {
    throw new Error('"import_" method should be set by App firstly.');
  },
  logLevel: INFO,
  log: (level, logInfoProducer) => {
    const enabledLogLevel = shouldLog(level);

    if (enabledLogLevel) {
      let args = logInfoProducer();
      Array.isArray(args) || (args = [args]);
      (enabledLogLevel > INFO ? console.error : console.log)("[".concat(level, "]"), ...args);
    }
  },
  shouldLog,
  setLogLevel: level => config.logLevel = mapLogLevels[level],
  update: updateRuntime
};
var _default = config;
exports.default = _default;
//# sourceMappingURL=Runtime.js.map