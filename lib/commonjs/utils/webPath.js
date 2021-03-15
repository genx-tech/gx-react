"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

var _string = require("./string");

function _default(pathname, query, hash, options) {
  var _window;

  let loc = ((_window = window) === null || _window === void 0 ? void 0 : _window.location) || {
    pathname: '/',
    search: ''
  }; // SSR fallback value

  let webPath; //pathname

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
      webPath = (0, _string.dropIfEndsWith)(loc.pathname, '/') + webPath;
    }
  } //query


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
        val.forEach(v => urlParams.append(key, v));
      } else {
        urlParams.set(key, val);
      }
    }

    let qs = urlParams.toString();

    if (qs.length > 0) {
      webPath += '?' + qs;
    }
  } //hash


  if (hash != null) {
    webPath += '#' + hash;
  }

  return webPath;
}
//# sourceMappingURL=webPath.js.map