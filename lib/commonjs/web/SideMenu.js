"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactRouterDom = require("react-router-dom");

var _antd = require("antd");

var _renderIt = _interopRequireDefault(require("../hoc/renderIt"));

var _locationPathToNodes = _interopRequireDefault(require("../utils/locationPathToNodes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const {
  SubMenu
} = _antd.Menu;

const menuItem = (path, icon, menuProps, exact, formatPathText) => {
  const text = formatPathText(path);

  const inner = /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("span", null, text));

  return /*#__PURE__*/_react.default.createElement(_antd.Menu.Item, _extends({
    key: path,
    icon: (0, _renderIt.default)(icon),
    title: text
  }, menuProps), /*#__PURE__*/_react.default.createElement(_reactRouterDom.NavLink, {
    to: path,
    exact: exact
  }, inner));
};

const makeMenuItems = (routes, formatPathText) => {
  const nodePathes = {};
  return [routes.map(({
    path,
    icon,
    showInMenu,
    subRoutes,
    menuProps,
    exact
  }) => {
    if (!showInMenu) {
      return false;
    }

    nodePathes[path] = exact;

    if (subRoutes) {
      return /*#__PURE__*/_react.default.createElement(SubMenu, _extends({
        key: path,
        icon: (0, _renderIt.default)(icon),
        title: /*#__PURE__*/_react.default.createElement("span", null, formatPathText(path))
      }, menuProps), makeMenuItems(subRoutes, formatPathText));
    }

    return menuItem(path, icon, menuProps, exact, formatPathText);
  }), nodePathes];
};

const SideMenu = ({
  sitemap,
  formatPathText,
  ...props
}) => {
  const location = (0, _reactRouterDom.useLocation)();
  const [menuItems, nodePathes] = (0, _react.useMemo)(() => makeMenuItems(sitemap, formatPathText), [sitemap, formatPathText]);
  const allPossibleNodes = (0, _locationPathToNodes.default)(location.pathname);
  const nodes = allPossibleNodes.filter((link, i) => {
    if (link in nodePathes) {
      return !nodePathes[link] || i === 0;
    }

    return false;
  });
  return /*#__PURE__*/_react.default.createElement(_antd.Menu, _extends({
    defaultSelectedKeys: nodes,
    defaultOpenKeys: nodes.length > 1 ? nodes.slice(1) : nodes
  }, props), menuItems);
};

var _default = SideMenu;
exports.default = _default;
//# sourceMappingURL=SideMenu.js.map