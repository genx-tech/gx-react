"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.unquote = exports.dropIfEndsWith = exports.ensureStartsWith = exports.ensureEndsWith = void 0;

const ensureEndsWith = (str, ending) => str.endsWith(ending) ? str : str + ending;

exports.ensureEndsWith = ensureEndsWith;

const ensureStartsWith = (str, starting) => str.startsWith(starting) ? str : starting + str;

exports.ensureStartsWith = ensureStartsWith;

const dropIfEndsWith = (str, ending) => str.endsWith(ending) ? str.slice(-1) : str;

exports.dropIfEndsWith = dropIfEndsWith;

const unquote = str => {
  if (typeof str !== 'string') {
    return str;
  }

  if (str.length < 2) {
    return str;
  }

  let start = str[0];

  if (start !== str[str.length - 1]) {
    return str;
  }

  str = str.slice(1, -1);
  return str;
};

exports.unquote = unquote;
//# sourceMappingURL=string.js.map