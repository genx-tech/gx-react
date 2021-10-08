import React, { useState } from 'react';
import { Icon, useI18n } from '@genx/react';
import {
    NavLink as RouterLink,
    matchPath,
    useLocation,
} from 'react-router-dom';

// material
import { alpha, useTheme, styled } from '@mui/material/styles';
import {
    List,
    Collapse,
    ListItemText,
    ListItemIcon,
    ListSubheader,
    ListItemButton,
} from '@mui/material';

// ----------------------------------------------------------------------

const ListSubheaderStyle = styled((props) => (
    <ListSubheader disableSticky disableGutters {...props} />
))(({ theme }) => ({
    ...theme.typography.overline,
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(2),
    paddingLeft: theme.spacing(5),
    color: theme.palette.text.primary,
}));

const ListItemStyle = styled(ListItemButton)(({ theme }) => ({
    ...theme.typography.body2,
    'height': 48,
    'position': 'relative',
    'textTransform': 'capitalize',
    'paddingLeft': theme.spacing(5),
    'paddingRight': theme.spacing(2.5),
    'color': theme.palette.text.secondary,
    '&:before': {
        top: 0,
        right: 0,
        width: 3,
        bottom: 0,
        content: "''",
        display: 'none',
        position: 'absolute',
        borderTopLeftRadius: 4,
        borderBottomLeftRadius: 4,
        backgroundColor: theme.palette.primary.main,
    },
}));

const ListItemIconStyle = styled(ListItemIcon)({
    width: 22,
    height: 22,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
});

// ----------------------------------------------------------------------

const MuiListItem = ({ schema, factory, viewState }) => {
    const theme = useTheme();

    const { pathname } = useLocation();
    const { path, icon, info, items } = schema;
    const isActiveRoot = path
        ? !!matchPath({ path, end: false }, pathname)
        : false;

    const [open, setOpen] = useState(isActiveRoot);

    const handleOpen = () => {
        setOpen(!open);
    };

    const activeRootStyle = {
        'color': 'primary.main',
        'fontWeight': 'fontWeightMedium',
        'bgcolor': alpha(
            theme.palette.primary.main,
            theme.palette.action.selectedOpacity
        ),
        '&:before': { display: 'block' },
    };

    const activeSubStyle = {
        color: 'text.primary',
        fontWeight: 'fontWeightMedium',
    };

    if (items) {
        return (
            <>
                <ListItemStyle
                    onClick={handleOpen}
                    sx={{
                        ...(isActiveRoot && activeRootStyle),
                    }}
                >
                    <ListItemIconStyle>
                        {icon && (
                            <Icon _registry={factory.registry} {...icon} />
                        )}
                    </ListItemIconStyle>

                    {
                        <>
                            <ListItemText
                                disableTypography
                                primary={viewState.__.T(path)}
                            />
                            {info}
                            {icon && (
                                <Icon _registry={factory.registry} {...icon} />
                            )}
                        </>
                    }
                </ListItemStyle>

                {
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            {items.map((item) => {
                                const { path, icon } = item;
                                const isActiveSub = path
                                    ? !!matchPath(
                                          { path, end: false },
                                          pathname
                                      )
                                    : false;

                                return (
                                    <ListItemStyle
                                        key={path}
                                        component={RouterLink}
                                        to={path}
                                        sx={{
                                            ...(isActiveSub && activeSubStyle),
                                        }}
                                    >
                                        <ListItemIconStyle>
                                            {icon && (
                                                <Icon
                                                    _registry={factory.registry}
                                                    {...icon}
                                                />
                                            )}
                                        </ListItemIconStyle>
                                        <ListItemText
                                            disableTypography
                                            primary={viewState.__.T(path)}
                                        />
                                    </ListItemStyle>
                                );
                            })}
                        </List>
                    </Collapse>
                }
            </>
        );
    }

    return (
        <ListItemStyle
            component={RouterLink}
            to={path}
            sx={{
                ...(isActiveRoot && activeRootStyle),
            }}
        >
            <ListItemIconStyle>
                {icon && <Icon _registry={factory.registry} {...icon} />}
            </ListItemIconStyle>
            {
                <>
                    <ListItemText
                        disableTypography
                        primary={viewState.__.T(path)}
                    />
                    {info}
                </>
            }
        </ListItemStyle>
    );
};

export default function MuiList({ schema, factory, viewState }) {
    const { items, template, selector, emptyContent, props } = schema;
    const __ = useI18n(viewState.i18nModule);

    const renderItem = ({ item }) =>
        template ? (
            factory.renderView(
                {
                    ...template,
                    data: item,
                },
                viewState
            )
        ) : (
            <MuiListItem
                __={__}
                schema={item}
                factory={factory}
                viewState={viewState}
            />
        );

    return (
        <>
            {items.map((item) => {
                if (item.section) {
                    return (
                        <List key={item.section} disablePadding>
                            {
                                <ListSubheaderStyle>
                                    {__.T(item.section)}
                                </ListSubheaderStyle>
                            }
                            {item.items.map((item) => renderItem(item))}
                        </List>
                    );
                }

                return renderItem(item);
            })}
        </>
    );
}
