import request from 'superagent';
import Runtime from '../runtimeConfig';

export default (urlBuilder) => async (locale, moduleName) => {
    const url = urlBuilder(locale, moduleName);
    Runtime.reportLoadingLocale?.('httpLoader', url);

    const res = await request.get(url);
    return res.body;
};
