import Runtime from '../runtimeConfig';
export default (pathBuilder => async (locale, moduleName) => {
  var _Runtime$reportLoadin;

  const path = pathBuilder(locale, moduleName);
  (_Runtime$reportLoadin = Runtime.reportLoadingLocale) === null || _Runtime$reportLoadin === void 0 ? void 0 : _Runtime$reportLoadin.call(Runtime, 'importLoader', path);
  const localeModule = await import(path);
  const {
    default: localeConfig
  } = localeModule;
  return localeConfig;
});
//# sourceMappingURL=importLoader.js.map