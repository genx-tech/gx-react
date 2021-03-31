import checkJsRuntime from './utils/checkJsRuntime';
import { makeLogger, consoleLogger, getLogLevel, setLogLevel } from './utils/logger';
export const applyScreenComposer = hoc => config.screenComposers.push(hoc);
export const updateRuntime = addon => Object.assign(config, addon);
export const setupScreen = elScreen => config.screenComposers.reduce((r, hoc) => r = hoc(elScreen), elScreen);
const jsRuntime = checkJsRuntime();
const modulesRegistry = {};

const finalizeConfig = () => {
  //...
  Object.freeze(config);
};

const config = {
  //configurable runtime settings
  jsRuntime,
  // web, native, node
  defaultStyleMode: jsRuntime === 'native' ? 'galio' : 'mui',
  useMobxProvider: false,
  screenComposers: [],
  //i18n
  localePathBuilder: (locale, moduleName) => `assets/locale/${locale}/${moduleName}.json`,
  //dynamic loading
  import_: url => modulesRegistry[url],
  register: (url, loadedModule) => {
    modulesRegistry[url] = loadedModule;
  },

  /**
   *
   * @param {*} url - component url
   */
  lazyLoad: url => config.import_(url) || config.notFoundFallbabck,
  notFoundFallbabck: () => null,
  suspenseFallbabck: () => null,
  //logger related
  log: makeLogger(consoleLogger),
  makeLogger,
  getLogLevel: getLogLevel,
  setLogLevel: setLogLevel,
  //updater
  update: updateRuntime,
  finalize: finalizeConfig
};
export default config;
//# sourceMappingURL=Runtime.js.map