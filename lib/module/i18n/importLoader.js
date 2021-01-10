import Runtime from '../Runtime';
export default (pathBuilder => async (locale, moduleName) => {
  const path = pathBuilder(locale, moduleName);
  Runtime.log('verbose', () => "\"importLoader\" loader is loading locale data from \"".concat(path, "\""));
  const localeModule = await Runtime.import_(path);
  const {
    default: localeConfig
  } = localeModule;
  return localeConfig;
});
//# sourceMappingURL=importLoader.js.map