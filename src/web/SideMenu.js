import React from 'react';
import { useLocation, NavLink } from 'react-router-dom';
import { Menu } from 'antd';

import locationPathToNodes from '../utils/locationPathToNodes';

const { SubMenu } = Menu;

const SideMenu = ({ sitemap, formatPathText, ...props }) => {
    const location = useLocation();
    const nodes = locationPathToNodes(location.pathname);

    const makeMenuItems = (routes) =>
        routes.map(({ path, icon: Icon, showInMenu, subRoutes, disabled }) => {
            if (!showInMenu) {
                return false;
            }

            if (subRoutes) {
                return (
                    <SubMenu
                        key={path}
                        title={
                            <span>
                                {Icon && <Icon />}
                                <span>{formatPathText(path)}</span>
                            </span>
                        }
                    >
                        {makeMenuItems(subRoutes)}
                    </SubMenu>
                );
            }

            return menuItem(path, Icon, disabled);
        });

    const menuItem = (path, Icon, disabled) => {
        const inner = (
            <>
                {Icon && <Icon />}
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
