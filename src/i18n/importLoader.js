import Runtime from '../runtimeConfig';

export default (pathBuilder) => async (locale, moduleName) => {
    const path = pathBuilder(locale, moduleName);
    Runtime.reportLoadingLocale?.('importLoader', path);

    const localeModule = await import(path);
    const { default: localeConfig } = localeModule;
    return localeConfig;
};
