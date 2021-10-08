"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = MuiList;

var _react = _interopRequireWildcard(require("react"));

var _react2 = require("@genx/react");

var _reactRouterDom = require("react-router-dom");

var _styles = require("@mui/material/styles");

var _material = require("@mui/material");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

// ----------------------------------------------------------------------
const ListSubheaderStyle = (0, _styles.styled)(props => /*#__PURE__*/_react.default.createElement(_material.ListSubheader, _extends({
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
const ListItemStyle = (0, _styles.styled)(_material.ListItemButton)(({
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
const ListItemIconStyle = (0, _styles.styled)(_material.ListItemIcon)({
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
  const theme = (0, _styles.useTheme)();
  const {
    pathname
  } = (0, _reactRouterDom.useLocation)();
  const {
    path,
    icon,
    info,
    items
  } = schema;
  const isActiveRoot = path ? !!(0, _reactRouterDom.matchPath)({
    path,
    end: false
  }, pathname) : false;
  const [open, setOpen] = (0, _react.useState)(isActiveRoot);

  const handleOpen = () => {
    setOpen(!open);
  };

  const activeRootStyle = {
    'color': 'primary.main',
    'fontWeight': 'fontWeightMedium',
    'bgcolor': (0, _styles.alpha)(theme.palette.primary.main, theme.palette.action.selectedOpacity),
    '&:before': {
      display: 'block'
    }
  };
  const activeSubStyle = {
    color: 'text.primary',
    fontWeight: 'fontWeightMedium'
  };

  if (items) {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(ListItemStyle, {
      onClick: handleOpen,
      sx: { ...(isActiveRoot && activeRootStyle)
      }
    }, /*#__PURE__*/_react.default.createElement(ListItemIconStyle, null, icon && /*#__PURE__*/_react.default.createElement(_react2.Icon, _extends({
      _registry: factory.registry
    }, icon))), /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_material.ListItemText, {
      disableTypography: true,
      primary: viewState.__.T(path)
    }), info, icon && /*#__PURE__*/_react.default.createElement(_react2.Icon, _extends({
      _registry: factory.registry
    }, icon)))), /*#__PURE__*/_react.default.createElement(_material.Collapse, {
      in: open,
      timeout: "auto",
      unmountOnExit: true
    }, /*#__PURE__*/_react.default.createElement(_material.List, {
      component: "div",
      disablePadding: true
    }, items.map(item => {
      const {
        path,
        icon
      } = item;
      const isActiveSub = path ? !!(0, _reactRouterDom.matchPath)({
        path,
        end: false
      }, pathname) : false;
      return /*#__PURE__*/_react.default.createElement(ListItemStyle, {
        key: path,
        component: _reactRouterDom.NavLink,
        to: path,
        sx: { ...(isActiveSub && activeSubStyle)
        }
      }, /*#__PURE__*/_react.default.createElement(ListItemIconStyle, null, icon && /*#__PURE__*/_react.default.createElement(_react2.Icon, _extends({
        _registry: factory.registry
      }, icon))), /*#__PURE__*/_react.default.createElement(_material.ListItemText, {
        disableTypography: true,
        primary: viewState.__.T(path)
      }));
    }))));
  }

  return /*#__PURE__*/_react.default.createElement(ListItemStyle, {
    component: _reactRouterDom.NavLink,
    to: path,
    sx: { ...(isActiveRoot && activeRootStyle)
    }
  }, /*#__PURE__*/_react.default.createElement(ListItemIconStyle, null, icon && /*#__PURE__*/_react.default.createElement(_react2.Icon, _extends({
    _registry: factory.registry
  }, icon))), /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_material.ListItemText, {
    disableTypography: true,
    primary: viewState.__.T(path)
  }), info));
};

function MuiList({
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

  const __ = (0, _react2.useI18n)(viewState.i18nModule);

  const renderItem = ({
    item
  }) => template ? factory.renderView({ ...template,
    data: item
  }, viewState) : /*#__PURE__*/_react.default.createElement(MuiListItem, {
    __: __,
    schema: item,
    factory: factory,
    viewState: viewState
  });

  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, items.map(item => {
    if (item.section) {
      return /*#__PURE__*/_react.default.createElement(_material.List, {
        key: item.section,
        disablePadding: true
      }, /*#__PURE__*/_react.default.createElement(ListSubheaderStyle, null, __.T(item.section)), item.items.map(item => renderItem(item)));
    }

    return renderItem(item);
  }));
}
//# sourceMappingURL=MuiList.js.map