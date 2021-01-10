import React from 'react';

export const updateRuntime = (addon) => Object.assign(config, addon);
export const shouldLog = (level) =>
    mapLogLevels[level] >= config.logLevel ? mapLogLevels[level] : 0;

const INFO = 3;

const mapLogLevels = {
    debug: 1,
    verbose: 2,
    info: INFO,
    warning: 4,
    error: 5,
    disable: 10,
};

const config = {
    defaultStyleMode: 'mui',
    onError: (error) => console.error(error),
    suspenseFallbabck: () => <div>Loading...</div>,
    import_: () => {
        throw new Error('"import_" method should be set by App firstly.');
    },

    logLevel: INFO,
    log: (level, logInfoProducer) => {
        const enabledLogLevel = shouldLog(level);

        if (enabledLogLevel) {
            let args = logInfoProducer();
            Array.isArray(args) || (args = [args]);

            (enabledLogLevel > INFO ? console.error : console.log)(
                `[${level}]`,
                ...args
            );
        }
    },

    shouldLog,
    setLogLevel: (level) => (config.logLevel = mapLogLevels[level]),
    update: updateRuntime,
};

export default config;
