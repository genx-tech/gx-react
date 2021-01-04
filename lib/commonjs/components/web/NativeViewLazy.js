"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = NativeView;

var _react = _interopRequireWildcard(require("react"));

var _reactNativeWeb = require("react-native-web");

var _reactErrorBoundary = require("react-error-boundary");

var _ErrorFallback = _interopRequireDefault(require("./ErrorFallback"));

var _runtimeConfig = _interopRequireDefault(require("../../runtimeConfig"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

let idCounter = 0;

function NativeView({
  view,
  ...props
}) {
  const myCounter = (0, _react.useRef)(null);

  if (myCounter.current == null) {
    myCounter.current = "gx_nv".concat(idCounter);
    idCounter++; // myCounter.current used below will appear +1 larger than expected, not sure why
    // even though, log output here is correct, to follow up
  }

  (0, _react.useEffect)(() => {
    const rootTag = document.getElementById(myCounter.current);

    _reactNativeWeb.AppRegistry.registerComponent(myCounter.current, () => view);

    _reactNativeWeb.AppRegistry.runApplication(myCounter.current, { ...props,
      rootTag
    });

    return () => {
      _reactNativeWeb.AppRegistry.unmountApplicationComponentAtRootTag(rootTag);
    };
  },
  /* eslint-disable react-hooks/exhaustive-deps */
  []
  /* eslint-enable react-hooks/exhaustive-deps */
  );
  return /*#__PURE__*/_react.default.createElement(_reactErrorBoundary.ErrorBoundary, {
    FallbackComponent: _ErrorFallback.default,
    onError: _runtimeConfig.default.onError
  }, /*#__PURE__*/_react.default.createElement("div", {
    id: myCounter.current
  }));
}
//# sourceMappingURL=NativeViewLazy.js.map