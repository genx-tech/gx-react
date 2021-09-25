"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.urlFileName = exports.urlTrimQuery = void 0;

const urlTrimQuery = url => {
  const posQ = url.indexOf('?');

  if (posQ !== -1) {
    url = url.substr(0, posQ);
  }

  return url;
};

exports.urlTrimQuery = urlTrimQuery;

const urlFileName = url => {
  url = urlTrimQuery(url);
  const posS = url.lastIndexOf('/');
  return url.substr(posS + 1);
};

exports.urlFileName = urlFileName;
//# sourceMappingURL=url.js.map