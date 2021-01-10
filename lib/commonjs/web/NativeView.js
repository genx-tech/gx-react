"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = NativeView;

var _react = _interopRequireWildcard(require("react"));

var _reactNativeWeb = require("react-native-web");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

let idCounter = 0;

function NativeView({
  component,
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

    _reactNativeWeb.AppRegistry.registerComponent(myCounter.current, () => component);

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
  return /*#__PURE__*/_react.default.createElement("div", {
    id: myCounter.current
  });
}
//# sourceMappingURL=NativeView.js.map