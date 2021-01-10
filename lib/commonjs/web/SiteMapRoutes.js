"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.SiteMapRoutes = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactRouterDom = require("react-router-dom");

var _renderLazy = _interopRequireDefault(require("../hoc/renderLazy"));

var _withOnLocationChange = _interopRequireDefault(require("../hoc/withOnLocationChange"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function propsProcessor(props) {
  if (typeof props === 'function') {
    return props();
  }

  return props;
}

const SiteMapRoutes = ({
  sitemap,
  path
}) => {
  if (path == null || path === '/') {
    path = '';
  }

  return /*#__PURE__*/_react.default.createElement(_reactRouterDom.Switch, null, sitemap.map((node, i) => {
    let routePath = node.path ? path + node.path : null;

    if (node.redirect) {
      return /*#__PURE__*/_react.default.createElement(_reactRouterDom.Redirect, {
        key: i,
        to: path + node.redirect,
        from: routePath,
        exact: node.exact
      });
    }

    let jsxComponent;

    if (node.subRoutes) {
      jsxComponent = /*#__PURE__*/_react.default.createElement(SiteMapRoutes, {
        sitemap: node.subRoutes,
        path: routePath
      });
    } else {
      jsxComponent = (0, _renderLazy.default)(node.component, propsProcessor(node.props));
    }

    if (node.layout) {
      const props = { ...propsProcessor(node.layoutProps),
        children: jsxComponent
      };
      jsxComponent = (0, _renderLazy.default)(node.layout, props);
    }

    return /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
      key: i,
      path: routePath,
      exact: node.exact
    }, jsxComponent);
  }));
};

exports.SiteMapRoutes = SiteMapRoutes;

var _default = (0, _withOnLocationChange.default)(SiteMapRoutes);

exports.default = _default;
//# sourceMappingURL=SiteMapRoutes.js.map