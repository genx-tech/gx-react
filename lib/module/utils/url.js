export const urlTrimQuery = url => {
  const posQ = url.indexOf('?');

  if (posQ !== -1) {
    url = url.substr(0, posQ);
  }

  return url;
};
export const urlFileName = url => {
  url = urlTrimQuery(url);
  const posS = url.lastIndexOf('/');
  return url.substr(posS + 1);
};
//# sourceMappingURL=url.js.map