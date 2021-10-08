"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.RootNavigator = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactRouterDom = require("react-router-dom");

var _react2 = require("@genx/react");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const Navigator = ({
  _registry,
  layout,
  routes,
  initialPath,
  path = '/'
}) => {
  let hasIndex = false;
  const elRoutes = routes.map(node => {
    if (node.path === '/') {
      hasIndex = true;
    }

    if (node.routes) {
      return /*#__PURE__*/_react.default.createElement(Navigator, _extends({
        _registry: _registry,
        key: node.path
      }, node));
    }

    return /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
      key: node.path,
      path: node.path,
      element: node.redirectTo ? /*#__PURE__*/_react.default.createElement(Navigate, {
        to: node.redirectTo
      }) : /*#__PURE__*/_react.default.createElement(_react2.RegistryComponent, {
        _name: node.name || node.component,
        _registry: _registry
      })
    });
  });
  return layout ? /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
    path: path,
    element: /*#__PURE__*/_react.default.createElement(_react2.RegistryComponent, {
      _name: node.name || layout,
      _registry: _registry
    })
  }, elRoutes, !hasIndex && initialPath && /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
    path: "/",
    element: /*#__PURE__*/_react.default.createElement(Navigate, {
      to: initialPath,
      replace: true
    })
  })) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, elRoutes);
};

const RootNavigator = ({
  onLocationChange,
  ...props
}) => {
  const isInitial = (0, _react.useRef)(true);
  const location = (0, _reactRouterDom.useLocation)();
  (0, _react.useEffect)(() => {
    onLocationChange && onLocationChange(location, isInitial.current);

    if (isInitial.current) {
      isInitial.current = false;
    }
  }, [location, onLocationChange]);
  return /*#__PURE__*/_react.default.createElement(_reactRouterDom.Routes, null, /*#__PURE__*/_react.default.createElement(Navigator, props));
};

exports.RootNavigator = RootNavigator;
var _default = Navigator;
exports.default = _default;
//# sourceMappingURL=Navigator.js.map