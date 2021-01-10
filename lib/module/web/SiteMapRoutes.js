import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import renderLazy from '../hoc/renderLazy';
import withOnLocationChange from '../hoc/withOnLocationChange';

function propsProcessor(props) {
  if (typeof props === 'function') {
    return props();
  }

  return props;
}

export const SiteMapRoutes = ({
  sitemap,
  path
}) => {
  if (path == null || path === '/') {
    path = '';
  }

  return /*#__PURE__*/React.createElement(Switch, null, sitemap.map((node, i) => {
    let routePath = node.path ? path + node.path : null;

    if (node.redirect) {
      return /*#__PURE__*/React.createElement(Redirect, {
        key: i,
        to: path + node.redirect,
        from: routePath,
        exact: node.exact
      });
    }

    let jsxComponent;

    if (node.subRoutes) {
      jsxComponent = /*#__PURE__*/React.createElement(SiteMapRoutes, {
        sitemap: node.subRoutes,
        path: routePath
      });
    } else {
      jsxComponent = renderLazy(node.component, propsProcessor(node.props));
    }

    if (node.layout) {
      const props = { ...propsProcessor(node.layoutProps),
        children: jsxComponent
      };
      jsxComponent = renderLazy(node.layout, props);
    }

    return /*#__PURE__*/React.createElement(Route, {
      key: i,
      path: routePath,
      exact: node.exact
    }, jsxComponent);
  }));
};
export default withOnLocationChange(SiteMapRoutes);
//# sourceMappingURL=SiteMapRoutes.js.map