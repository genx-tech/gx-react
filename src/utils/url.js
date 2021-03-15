import { dropIfEndsWith, ensureStartsWith } from './string';

export function join(base, extraPath) {
    return base
        ? extraPath
            ? dropIfEndsWith(base, '/') + ensureStartsWith(extraPath, '/')
            : base
        : extraPath;
}

export function queryStringToObject(qs) {
    if (!qs) {
        return {};
    }
    const query = qs[0] === '?' ? qs.substr(1) : qs;
    const parts = query.split('&');

    return parts.reduce((r, pair) => {
        const [k, v] = pair.split('=');
        r[decodeURIComponent(k)] = v ?? decodeURIComponent(v);
        return r;
    }, {});
}

export default {
    join,
    queryStringToObject
};
