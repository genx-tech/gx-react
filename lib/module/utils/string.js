export const ensureEndsWith = (str, ending) => str.endsWith(ending) ? str : str + ending;
export const ensureStartsWith = (str, starting) => str.startsWith(starting) ? str : starting + str;
export const dropIfEndsWith = (str, ending) => str.endsWith(ending) ? str.slice(-1) : str;
export const unquote = str => {
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
//# sourceMappingURL=string.js.map