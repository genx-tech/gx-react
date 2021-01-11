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
        routes.map(({ path, icon, showInMenu, subRoutes, menuProps }) => {
            if (!showInMenu) {
                return false;
            }

            if (subRoutes) {
                return (
                    <SubMenu
                        key={path}
                        icon={renderIt(icon)}
                        title={<span>{formatPathText(path)}</span>}
                        {...menuProps}
                    >
                        {makeMenuItems(subRoutes)}
                    </SubMenu>
                );
            }

            return menuItem(path, icon, menuProps);
        });

    const menuItem = (path, icon, menuProps) => {
        const text = formatPathText(path);

        const inner = (
            <>
                <span>{text}</span>
            </>
        );

        return (
            <Menu.Item
                key={path}
                icon={renderIt(icon)}
                title={text}
                {...menuProps}
            >
                <NavLink to={path}>{inner}</NavLink>
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
