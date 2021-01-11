import React from 'react';
import { useLocation, NavLink } from 'react-router-dom';
import { Menu } from 'antd';

import renderIt from '../hoc/renderIt';
import locationPathToNodes from '../utils/locationPathToNodes';

const { SubMenu } = Menu;

const SideMenu = ({ sitemap, formatPathText, ...props }) => {
    const location = useLocation();
    const nodes = locationPathToNodes(location.pathname);

    const makeMenuItems = (routes) =>
        routes.map(({ path, icon, showInMenu, subRoutes, disabled }) => {
            if (!showInMenu) {
                return false;
            }

            if (subRoutes) {
                return (
                    <SubMenu
                        key={path}
                        title={
                            <span>
                                {renderIt(icon)}
                                <span>{formatPathText(path)}</span>
                            </span>
                        }
                    >
                        {makeMenuItems(subRoutes)}
                    </SubMenu>
                );
            }

            return menuItem(path, icon, disabled);
        });

    const menuItem = (path, icon, disabled) => {
        const inner = (
            <>
                {renderIt(icon)}
                <span>{formatPathText(path)}</span>
            </>
        );

        return (
            <Menu.Item key={path}>
                {disabled ? inner : <NavLink to={path}>{inner}</NavLink>}
            </Menu.Item>
        );
    };

    return (
        <Menu
            defaultSelectedKeys={nodes}
            defaultOpenKeys={nodes.slice(1)}
            {...props}
        >
            {makeMenuItems(sitemap)}
        </Menu>
    );
};

export default SideMenu;
