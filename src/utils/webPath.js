import { dropIfEndsWith } from './string';

export default function (pathname, query, hash, options) {
    let loc = window.location;
    let webPath;

    //pathname
    if (pathname == null) {
        webPath = loc.pathname;
    } else {
        if (pathname === '') {
            webPath = '/';
        } else if (pathname[0] === '/') {
            webPath = pathname;
        } else {
            webPath = '/' + pathname;
        }

        if (options && options.appendPath) {
            webPath = dropIfEndsWith(loc.pathname, '/') + webPath;
        }
    }

    //query
    if (query == null) {
        if (options && options.mergeQuery) {
            webPath += loc.search;
        }
    } else {
        let urlParams;

        if (options && options.mergeQuery) {
            urlParams = new URLSearchParams(loc.search.substr(1));
        } else {
            urlParams = new URLSearchParams();
        }

        for (let key in query) {
            let val = query[key];
            if (Array.isArray(val)) {
                urlParams.delete(key);
                val.forEach((v) => urlParams.append(key, v));
            } else {
                urlParams.set(key, val);
            }
        }

        let qs = urlParams.toString();
        if (qs.length > 0) {
            webPath += '?' + qs;
        }
    }

    //hash
    if (hash != null) {
        webPath += '#' + hash;
    }

    return webPath;
}
