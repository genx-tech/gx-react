"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  AppContainer: true,
  StaticRoutes: true,
  CheckBox: true
};
Object.defineProperty(exports, "AppContainer", {
  enumerable: true,
  get: function () {
    return _AppContainer.default;
  }
});
Object.defineProperty(exports, "StaticRoutes", {
  enumerable: true,
  get: function () {
    return _StaticRoutes.default;
  }
});
Object.defineProperty(exports, "CheckBox", {
  enumerable: true,
  get: function () {
    return _CheckBox.default;
  }
});

var _AppContainer = _interopRequireDefault(require("./AppContainer"));

var _StaticRoutes = _interopRequireDefault(require("./StaticRoutes"));

var _CheckBox = _interopRequireDefault(require("./CheckBox"));

var _FaceRecognition = require("./FaceRecognition");

Object.keys(_FaceRecognition).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _FaceRecognition[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _FaceRecognition[key];
    }
  });
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
//# sourceMappingURL=index.js.map