function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React, { useState } from 'react';
import { Icon, useI18n } from '@genx/react';
import { NavLink as RouterLink, matchPath, useLocation } from 'react-router-dom'; // material

import { alpha, useTheme, styled } from '@mui/material/styles';
import { List, Collapse, ListItemText, ListItemIcon, ListSubheader, ListItemButton } from '@mui/material'; // ----------------------------------------------------------------------

const ListSubheaderStyle = styled(props => /*#__PURE__*/React.createElement(ListSubheader, _extends({
  disableSticky: true,
  disableGutters: true
}, props)))(({
  theme
}) => ({ ...theme.typography.overline,
  marginTop: theme.spacing(3),
  marginBottom: theme.spacing(2),
  paddingLeft: theme.spacing(5),
  color: theme.palette.text.primary
}));
const ListItemStyle = styled(ListItemButton)(({
  theme
}) => ({ ...theme.typography.body2,
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
    backgroundColor: theme.palette.primary.main
  }
}));
const ListItemIconStyle = styled(ListItemIcon)({
  width: 22,
  height: 22,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
}); // ----------------------------------------------------------------------

const MuiListItem = ({
  schema,
  factory,
  viewState
}) => {
  const theme = useTheme();
  const {
    pathname
  } = useLocation();
  const {
    path,
    icon,
    info,
    items
  } = schema;
  const isActiveRoot = path ? !!matchPath({
    path,
    end: false
  }, pathname) : false;
  const [open, setOpen] = useState(isActiveRoot);

  const handleOpen = () => {
    setOpen(!open);
  };

  const activeRootStyle = {
    'color': 'primary.main',
    'fontWeight': 'fontWeightMedium',
    'bgcolor': alpha(theme.palette.primary.main, theme.palette.action.selectedOpacity),
    '&:before': {
      display: 'block'
    }
  };
  const activeSubStyle = {
    color: 'text.primary',
    fontWeight: 'fontWeightMedium'
  };

  if (items) {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(ListItemStyle, {
      onClick: handleOpen,
      sx: { ...(isActiveRoot && activeRootStyle)
      }
    }, /*#__PURE__*/React.createElement(ListItemIconStyle, null, icon && /*#__PURE__*/React.createElement(Icon, _extends({
      _registry: factory.registry
    }, icon))), /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(ListItemText, {
      disableTypography: true,
      primary: title
    }), info, icon && /*#__PURE__*/React.createElement(Icon, _extends({
      _registry: factory.registry
    }, icon)))), /*#__PURE__*/React.createElement(Collapse, {
      in: open,
      timeout: "auto",
      unmountOnExit: true
    }, /*#__PURE__*/React.createElement(List, {
      component: "div",
      disablePadding: true
    }, items.map(item => {
      const {
        path,
        icon
      } = item;
      const isActiveSub = path ? !!matchPath({
        path,
        end: false
      }, pathname) : false;
      return /*#__PURE__*/React.createElement(ListItemStyle, {
        key: path,
        component: RouterLink,
        to: path,
        sx: { ...(isActiveSub && activeSubStyle)
        }
      }, /*#__PURE__*/React.createElement(ListItemIconStyle, null, icon && /*#__PURE__*/React.createElement(Icon, _extends({
        _registry: factory.registry
      }, icon))), /*#__PURE__*/React.createElement(ListItemText, {
        disableTypography: true,
        primary: __.T(path)
      }));
    }))));
  }

  return /*#__PURE__*/React.createElement(ListItemStyle, {
    component: RouterLink,
    to: path,
    sx: { ...(isActiveRoot && activeRootStyle)
    }
  }, /*#__PURE__*/React.createElement(ListItemIconStyle, null, icon && /*#__PURE__*/React.createElement(Icon, _extends({
    _registry: factory.registry
  }, icon))), /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(ListItemText, {
    disableTypography: true,
    primary: __.T(path)
  }), info));
};

export default function MuiList({
  schema,
  factory,
  viewState
}) {
  const {
    items,
    template,
    selector,
    emptyContent,
    props
  } = schema;

  const __ = useI18n(viewState.i18nModule);

  const renderItem = ({
    item
  }) => template ? factory.renderView({ ...template,
    data: item
  }, viewState) : /*#__PURE__*/React.createElement(MuiListItem, {
    __: __,
    schema: item,
    factory: factory,
    viewState: viewState
  });

  return /*#__PURE__*/React.createElement(React.Fragment, null, items.map(item => {
    if (item.section) {
      return /*#__PURE__*/React.createElement(List, {
        key: item.section,
        disablePadding: true
      }, /*#__PURE__*/React.createElement(ListSubheaderStyle, null, __.T(item.section)), item.items.map(item => renderItem(item)));
    }

    return renderItem(item);
  }));
}
//# sourceMappingURL=MuiList.js.map