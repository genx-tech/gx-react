import React, { useEffect, useRef } from 'react';
import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { RegistryComponent } from '@genx/react';

const Navigator = ({
    _registry,
    name,
    layout,
    routes,
    initialPath,
    path = '/',
}) => {
    let hasIndex = false;

    const elRoutes = routes.map((node) => {
        if (node.path === '/') {
            hasIndex = true;
        }

        if (node.routes) {
            return (
                <Navigator _registry={_registry} key={node.path} {...node} />
            );
        }

        return (
            <Route
                key={node.path}
                path={node.path}
                element={
                    node.redirectTo ? (
                        <Navigate to={node.redirectTo} />
                    ) : (
                        <RegistryComponent
                            _name={node.name || node.component}
                            _registry={_registry}
                        />
                    )
                }
            />
        );
    });

    return layout ? (
        <Route
            path={path}
            element={
                <RegistryComponent
                    _name={name || layout}
                    _registry={_registry}
                />
            }
        >
            {elRoutes}
            {!hasIndex && initialPath && (
                <Route
                    path="/"
                    element={<Navigate to={initialPath} replace />}
                />
            )}
        </Route>
    ) : (
        <>{elRoutes}</>
    );
};

export const RootNavigator = ({ onLocationChange, ...props }) => {
    const isInitial = useRef(true);
    const location = useLocation();

    useEffect(() => {
        onLocationChange && onLocationChange(location, isInitial.current);
        if (isInitial.current) {
            isInitial.current = false;
        }
    }, [location, onLocationChange]);

    return (
        <Routes>
            <Navigator {...props} />
        </Routes>
    );
};

export default Navigator;
