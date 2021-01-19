"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.consoleLogger = exports.makeLogger = exports.setLogLevel = exports.getLogLevel = exports.ERROR = exports.WARNING = exports.INFO = exports.VERBOSE = exports.DEBUG = void 0;
const DEBUG = 1;
exports.DEBUG = DEBUG;
const VERBOSE = 2;
exports.VERBOSE = VERBOSE;
const INFO = 3;
exports.INFO = INFO;
const WARNING = 4;
exports.WARNING = WARNING;
const ERROR = 5;
exports.ERROR = ERROR;
let logLevel = INFO;
const mapLogLevels = {
  debug: DEBUG,
  verbose: VERBOSE,
  info: INFO,
  warning: WARNING,
  error: ERROR,
  disable: ERROR + 1
};

const getLogLevel = () => logLevel;

exports.getLogLevel = getLogLevel;

const setLogLevel = level => logLevel = mapLogLevels[level];

exports.setLogLevel = setLogLevel;

const makeLogger = logger => (level, logInfoProducer) => {
  const enabledLogLevel = mapLogLevels[level] >= logLevel ? mapLogLevels[level] : 0;

  if (enabledLogLevel) {
    let args = logInfoProducer();
    Array.isArray(args) || (args = [args]);
    logger(enabledLogLevel, args);
  }
};

exports.makeLogger = makeLogger;

const consoleLogger = (level, args) => (level > INFO ? console.error : console.log)("[".concat(level, "]"), ...args);

exports.consoleLogger = consoleLogger;
//# sourceMappingURL=logger.js.map