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

export const SiteMapRoutes = ({ sitemap, path }) => {
    if (path == null || path === '/') {
        path = '';
    }

    return (
        <Switch>
            {sitemap.map((node, i) => {
                let routePath = node.path ? path + node.path : null;

                if (node.redirect) {
                    return (
                        <Redirect
                            key={i}
                            to={path + node.redirect}
                            from={routePath}
                            exact={node.exact}
                        />
                    );
                }

                let jsxComponent;

                if (node.subRoutes) {
                    jsxComponent = (
                        <SiteMapRoutes
                            sitemap={node.subRoutes}
                            path={routePath}
                        />
                    );
                } else {
                    jsxComponent = renderLazy(
                        node.component,
                        propsProcessor(node.props)
                    );
                }

                if (node.layout) {
                    const props = {
                        ...propsProcessor(node.layoutProps),
                        children: jsxComponent,
                    };
                    jsxComponent = renderLazy(node.layout, props);
                }

                return (
                    <Route key={i} path={routePath} exact={node.exact}>
                        {jsxComponent}
                    </Route>
                );
            })}
        </Switch>
    );
};

export default withOnLocationChange(SiteMapRoutes);
