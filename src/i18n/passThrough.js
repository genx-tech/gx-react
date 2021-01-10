import Runtime from '../Runtime';

export default (t) => {
    Runtime.log('warning', () => `i18n pass-through applied for id: ${t}`);
    return t;
};
