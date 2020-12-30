import request from 'superagent';
import Runtime from '../runtimeConfig';
export default (urlBuilder => async (locale, moduleName) => {
  var _Runtime$reportLoadin;

  const url = urlBuilder(locale, moduleName);
  (_Runtime$reportLoadin = Runtime.reportLoadingLocale) === null || _Runtime$reportLoadin === void 0 ? void 0 : _Runtime$reportLoadin.call(Runtime, 'httpLoader', url);
  const res = await request.get(url);
  return res.body;
});
//# sourceMappingURL=httpLoader.js.map