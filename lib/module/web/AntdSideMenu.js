function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React, { useMemo } from 'react';
import { useLocation, NavLink } from 'react-router-dom';
import { Menu } from 'antd';
import renderIt from '../hoc/renderIt';
import locationPathToNodes from '../utils/locationPathToNodes';
const {
  SubMenu
} = Menu;

const menuItem = (path, icon, menuProps, exact, formatPathText) => {
  const text = formatPathText(path);
  const inner = /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", null, text));
  return /*#__PURE__*/React.createElement(Menu.Item, _extends({
    key: path,
    icon: renderIt(icon),
    title: text
  }, menuProps), /*#__PURE__*/React.createElement(NavLink, {
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
      return /*#__PURE__*/React.createElement(SubMenu, _extends({
        key: path,
        icon: renderIt(icon),
        title: /*#__PURE__*/React.createElement("span", null, formatPathText(path))
      }, menuProps), makeMenuItems(subRoutes, formatPathText));
    }

    return menuItem(path, icon, menuProps, exact, formatPathText);
  }), nodePathes];
};

const SideMenu = ({
  sitemap,
  ...props
}) => {
  const location = useLocation();
  const [menuItems, nodePathes] = useMemo(() => makeMenuItems(sitemap, formatPathText), [sitemap, formatPathText]);
  const allPossibleNodes = locationPathToNodes(location.pathname);
  const nodes = allPossibleNodes.filter((link, i) => {
    if (link in nodePathes) {
      return !nodePathes[link] || i === 0;
    }

    return false;
  });
  return /*#__PURE__*/React.createElement(Menu, _extends({
    defaultSelectedKeys: nodes,
    defaultOpenKeys: nodes.length > 1 ? nodes.slice(1) : nodes
  }, props), menuItems);
};

export default SideMenu;
//# sourceMappingURL=AntdSideMenu.js.map