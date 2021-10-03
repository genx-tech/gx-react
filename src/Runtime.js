import {
    makeLogger,
    consoleLogger,
    getLogLevel,
    setLogLevel,
} from './utils/logger';
import _defaults from 'lodash/defaults';

export const composeScreen = (hoc) => globalScreenComposers.push(hoc);
export const updateRuntime = (addon) => Object.assign(config, addon);
export const defaultRuntime = (addon) => _defaults(config, addon);
export const setupScreen = (elScreen) =>
    globalScreenComposers.reduce((r, hoc) => (r = hoc(elScreen)), elScreen);

const modulesRegistry = {};
const globalScreenComposers = [];

const config = {
    //configurable runtime settings
    defaultStyleMode: 'galio',

    //i18n
    localePathBuilder: (locale, moduleName) =>
        `assets/locale/${locale}/${moduleName}.json`,

    //dynamic loading
    import_: (url) => modulesRegistry[url],
    register: (url, loadedModule) => {
        modulesRegistry[url] = loadedModule;
    },
    /**
     *
     * @param {*} url - component url
     */
    lazyLoad: (url) => config.import_(url) || config.notFoundFallbabck,
    notFoundFallbabck: () => null,
    suspenseFallbabck: () => null,

    //logger related
    log: makeLogger(consoleLogger),
    makeLogger,
    getLogLevel: getLogLevel,
    setLogLevel: setLogLevel,

    //updater
    update: updateRuntime,
    default: defaultRuntime,
};

export default config;
