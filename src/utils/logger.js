export const DEBUG = 1;
export const VERBOSE = 2;
export const INFO = 3;
export const WARNING = 4;
export const ERROR = 5;

let logLevel = INFO;

const mapLogLevels = {
    debug: DEBUG,
    verbose: VERBOSE,
    info: INFO,
    warning: WARNING,
    error: ERROR,
    disable: ERROR + 1,
};

export const getLogLevel = () => logLevel;

export const setLogLevel = (level) => (logLevel = mapLogLevels[level]);

export const makeLogger = (logger) => (level, logInfoProducer) => {
    const enabledLogLevel =
        mapLogLevels[level] >= logLevel ? mapLogLevels[level] : 0;

    if (enabledLogLevel) {
        let args = logInfoProducer();
        Array.isArray(args) || (args = [args]);

        logger(enabledLogLevel, args);
    }
};

export const consoleLogger = (level, args) =>
    (level > INFO ? console.error : console.log)(`[${level}]`, ...args);