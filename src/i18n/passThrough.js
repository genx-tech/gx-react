import Runtime from '../runtimeConfig';

export default (t) => {
    Runtime.reportMissingTranslation?.(t);
    return t;
};
