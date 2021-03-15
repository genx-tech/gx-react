"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactRouterDom = require("react-router-dom");

var _antd = require("antd");

var _renderIt = _interopRequireDefault(require("../hoc/renderIt"));

var _locationPathToNodes = _interopRequireDefault(require("../utils/locationPathToNodes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const {
  SubMenu
} = _antd.Menu;

const SideMenu = ({
  sitemap,
  formatPathText,
  ...props
}) => {
  const location = (0, _reactRouterDom.useLocation)();
  const nodes = (0, _locationPathToNodes.default)(location.pathname);

  const makeMenuItems = routes => routes.map(({
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

    if (subRoutes) {
      return /*#__PURE__*/_react.default.createElement(SubMenu, _extends({
        key: path,
        icon: (0, _renderIt.default)(icon),
        title: /*#__PURE__*/_react.default.createElement("span", null, formatPathText(path))
      }, menuProps), makeMenuItems(subRoutes));
    }

    return menuItem(path, icon, menuProps, exact);
  });

  const menuItem = (path, icon, menuProps, exact) => {
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

  return /*#__PURE__*/_react.default.createElement(_antd.Menu, _extends({
    defaultSelectedKeys: nodes,
    defaultOpenKeys: nodes.slice(1)
  }, props), makeMenuItems(sitemap));
};

var _default = SideMenu;
exports.default = _default;
//# sourceMappingURL=SideMenu.js.map