function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import { useLocation, NavLink } from 'react-router-dom';
import { Menu } from 'antd';
import renderIt from '../hoc/renderIt';
import locationPathToNodes from '../utils/locationPathToNodes';
const {
  SubMenu
} = Menu;

const SideMenu = ({
  sitemap,
  formatPathText,
  ...props
}) => {
  const location = useLocation();
  const nodes = locationPathToNodes(location.pathname);

  const makeMenuItems = routes => routes.map(({
    path,
    icon,
    showInMenu,
    subRoutes,
    menuProps
  }) => {
    if (!showInMenu) {
      return false;
    }

    if (subRoutes) {
      return /*#__PURE__*/React.createElement(SubMenu, _extends({
        key: path,
        icon: renderIt(icon),
        title: /*#__PURE__*/React.createElement("span", null, formatPathText(path))
      }, menuProps), makeMenuItems(subRoutes));
    }

    return menuItem(path, icon, menuProps);
  });

  const menuItem = (path, icon, menuProps) => {
    const text = formatPathText(path);
    const inner = /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", null, text));
    return /*#__PURE__*/React.createElement(Menu.Item, _extends({
      key: path,
      icon: renderIt(icon),
      title: text
    }, menuProps), /*#__PURE__*/React.createElement(NavLink, {
      to: path
    }, inner));
  };

  return /*#__PURE__*/React.createElement(Menu, _extends({
    defaultSelectedKeys: nodes,
    defaultOpenKeys: nodes.slice(1)
  }, props), makeMenuItems(sitemap));
};

export default SideMenu;
//# sourceMappingURL=SideMenu.js.map