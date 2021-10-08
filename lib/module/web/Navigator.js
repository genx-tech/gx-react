function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React, { useEffect, useRef } from 'react';
import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { RegistryComponent } from '@genx/react';

const Navigator = ({
  _registry,
  name,
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
      return /*#__PURE__*/React.createElement(Navigator, _extends({
        _registry: _registry,
        key: node.path
      }, node));
    }

    return /*#__PURE__*/React.createElement(Route, {
      key: node.path,
      path: node.path,
      element: node.redirectTo ? /*#__PURE__*/React.createElement(Navigate, {
        to: node.redirectTo
      }) : /*#__PURE__*/React.createElement(RegistryComponent, {
        _name: node.name || node.component,
        _registry: _registry
      })
    });
  });
  return layout ? /*#__PURE__*/React.createElement(Route, {
    path: path,
    element: /*#__PURE__*/React.createElement(RegistryComponent, {
      _name: name || layout,
      _registry: _registry
    })
  }, elRoutes, !hasIndex && initialPath && /*#__PURE__*/React.createElement(Route, {
    path: "/",
    element: /*#__PURE__*/React.createElement(Navigate, {
      to: initialPath,
      replace: true
    })
  })) : /*#__PURE__*/React.createElement(React.Fragment, null, elRoutes);
};

export const RootNavigator = ({
  onLocationChange,
  ...props
}) => {
  const isInitial = useRef(true);
  const location = useLocation();
  useEffect(() => {
    onLocationChange && onLocationChange(location, isInitial.current);

    if (isInitial.current) {
      isInitial.current = false;
    }
  }, [location, onLocationChange]);
  return /*#__PURE__*/React.createElement(Routes, null, /*#__PURE__*/React.createElement(Navigator, props));
};
export default Navigator;
//# sourceMappingURL=Navigator.js.map