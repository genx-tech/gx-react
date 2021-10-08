"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = DashboardSidebar;

var _react = _interopRequireWildcard(require("react"));

var _reactRouterDom = require("react-router-dom");

var _styles = require("@mui/material/styles");

var _material = require("@mui/material");

var _useAuth = _interopRequireDefault(require("../../hooks/useAuth"));

var _useCollapseDrawer = _interopRequireDefault(require("../../hooks/useCollapseDrawer"));

var _paths = require("../../routes/paths");

var _Logo = _interopRequireDefault(require("../../components/Logo"));

var _MyAvatar = _interopRequireDefault(require("../../components/MyAvatar"));

var _Scrollbar = _interopRequireDefault(require("../../components/Scrollbar"));

var _NavSection = _interopRequireDefault(require("../../components/NavSection"));

var _materialExtend = require("../../components/@material-extend");

var _SidebarConfig = _interopRequireDefault(require("./SidebarConfig"));

var _assets = require("../../assets");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

// material
// hooks
// routes
// components
//
// ----------------------------------------------------------------------
const DRAWER_WIDTH = 280;
const COLLAPSE_WIDTH = 102;
const RootStyle = (0, _styles.styled)('div')(({
  theme
}) => ({
  [theme.breakpoints.up('lg')]: {
    flexShrink: 0,
    transition: theme.transitions.create('width', {
      duration: theme.transitions.duration.complex
    })
  }
}));
const AccountStyle = (0, _styles.styled)('div')(({
  theme
}) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(2, 2.5),
  borderRadius: theme.shape.borderRadiusSm,
  backgroundColor: theme.palette.grey[50012]
})); // ----------------------------------------------------------------------

IconCollapse.propTypes = {
  onToggleCollapse: PropTypes.func,
  collapseClick: PropTypes.bool
};

function IconCollapse({
  onToggleCollapse,
  collapseClick
}) {
  return /*#__PURE__*/_react.default.createElement(_material.Tooltip, {
    title: "Mini Menu"
  }, /*#__PURE__*/_react.default.createElement(_material.CardActionArea, {
    onClick: onToggleCollapse,
    sx: {
      width: 18,
      height: 18,
      display: 'flex',
      cursor: 'pointer',
      borderRadius: '50%',
      alignItems: 'center',
      color: 'text.primary',
      justifyContent: 'center',
      border: 'solid 1px currentColor',
      ...(collapseClick && {
        borderWidth: 2
      })
    }
  }, /*#__PURE__*/_react.default.createElement(_material.Box, {
    sx: {
      width: 8,
      height: 8,
      borderRadius: '50%',
      bgcolor: 'currentColor',
      transition: theme => theme.transitions.create('all'),
      ...(collapseClick && {
        width: 0,
        height: 0
      })
    }
  })));
}

DashboardSidebar.propTypes = {
  isOpenSidebar: PropTypes.bool,
  onCloseSidebar: PropTypes.func
};

function DashboardSidebar({
  isOpenSidebar,
  onCloseSidebar
}) {
  const {
    pathname
  } = (0, _reactRouterDom.useLocation)();
  const {
    user
  } = (0, _useAuth.default)();
  const {
    isCollapse,
    collapseClick,
    collapseHover,
    onToggleCollapse,
    onHoverEnter,
    onHoverLeave
  } = (0, _useCollapseDrawer.default)();
  (0, _react.useEffect)(() => {
    if (isOpenSidebar) {
      onCloseSidebar();
    } // eslint-disable-next-line react-hooks/exhaustive-deps

  }, [pathname]);

  const renderContent = /*#__PURE__*/_react.default.createElement(_Scrollbar.default, {
    sx: {
      'height': 1,
      '& .simplebar-content': {
        height: 1,
        display: 'flex',
        flexDirection: 'column'
      }
    }
  }, /*#__PURE__*/_react.default.createElement(_material.Stack, {
    spacing: 3,
    sx: {
      px: 2.5,
      pt: 3,
      pb: 2,
      ...(isCollapse && {
        alignItems: 'center'
      })
    }
  }, /*#__PURE__*/_react.default.createElement(_material.Stack, {
    direction: "row",
    alignItems: "center",
    justifyContent: "space-between"
  }, /*#__PURE__*/_react.default.createElement(_material.Box, {
    component: _reactRouterDom.Link,
    to: "/",
    sx: {
      display: 'inline-flex'
    }
  }, /*#__PURE__*/_react.default.createElement(_Logo.default, null)), /*#__PURE__*/_react.default.createElement(_materialExtend.MHidden, {
    width: "lgDown"
  }, !isCollapse && /*#__PURE__*/_react.default.createElement(IconCollapse, {
    onToggleCollapse: onToggleCollapse,
    collapseClick: collapseClick
  }))), isCollapse ? /*#__PURE__*/_react.default.createElement(_MyAvatar.default, {
    sx: {
      mx: 'auto',
      mb: 2
    }
  }) : /*#__PURE__*/_react.default.createElement(_material.Link, {
    underline: "none",
    component: _reactRouterDom.Link,
    to: _paths.PATH_DASHBOARD.user.account
  }, /*#__PURE__*/_react.default.createElement(AccountStyle, null, /*#__PURE__*/_react.default.createElement(_MyAvatar.default, null), /*#__PURE__*/_react.default.createElement(_material.Box, {
    sx: {
      ml: 2
    }
  }, /*#__PURE__*/_react.default.createElement(_material.Typography, {
    variant: "subtitle2",
    sx: {
      color: 'text.primary'
    }
  }, user === null || user === void 0 ? void 0 : user.displayName), /*#__PURE__*/_react.default.createElement(_material.Typography, {
    variant: "body2",
    sx: {
      color: 'text.secondary'
    }
  }, user === null || user === void 0 ? void 0 : user.role))))), /*#__PURE__*/_react.default.createElement(_NavSection.default, {
    navConfig: _SidebarConfig.default,
    isShow: !isCollapse
  }), /*#__PURE__*/_react.default.createElement(_material.Box, {
    sx: {
      flexGrow: 1
    }
  }), !isCollapse && /*#__PURE__*/_react.default.createElement(_material.Stack, {
    spacing: 3,
    alignItems: "center",
    sx: {
      px: 5,
      pb: 5,
      mt: 10,
      width: 1,
      textAlign: 'center'
    }
  }, /*#__PURE__*/_react.default.createElement(_assets.DocIllustration, {
    sx: {
      width: 1
    }
  }), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_material.Typography, {
    gutterBottom: true,
    variant: "subtitle1"
  }, "Hi, ", user === null || user === void 0 ? void 0 : user.displayName), /*#__PURE__*/_react.default.createElement(_material.Typography, {
    variant: "body2",
    sx: {
      color: 'text.secondary'
    }
  }, "Need help?", /*#__PURE__*/_react.default.createElement("br", null), " Please check our docs")), /*#__PURE__*/_react.default.createElement(_material.Button, {
    href: _paths.PATH_DOCS,
    target: "_blank",
    variant: "contained"
  }, "Documentation")));

  return /*#__PURE__*/_react.default.createElement(RootStyle, {
    sx: {
      width: {
        lg: isCollapse ? COLLAPSE_WIDTH : DRAWER_WIDTH
      },
      ...(collapseClick && {
        position: 'absolute'
      })
    }
  }, /*#__PURE__*/_react.default.createElement(_materialExtend.MHidden, {
    width: "lgUp"
  }, /*#__PURE__*/_react.default.createElement(_material.Drawer, {
    open: isOpenSidebar,
    onClose: onCloseSidebar,
    PaperProps: {
      sx: {
        width: DRAWER_WIDTH
      }
    }
  }, renderContent)), /*#__PURE__*/_react.default.createElement(_materialExtend.MHidden, {
    width: "lgDown"
  }, /*#__PURE__*/_react.default.createElement(_material.Drawer, {
    open: true,
    variant: "persistent",
    onMouseEnter: onHoverEnter,
    onMouseLeave: onHoverLeave,
    PaperProps: {
      sx: {
        width: DRAWER_WIDTH,
        bgcolor: 'background.default',
        ...(isCollapse && {
          width: COLLAPSE_WIDTH
        }),
        ...(collapseHover && {
          borderRight: 0,
          backdropFilter: 'blur(6px)',
          WebkitBackdropFilter: 'blur(6px)',
          // Fix on Mobile
          boxShadow: theme => theme.customShadows.z20,
          bgcolor: theme => (0, _styles.alpha)(theme.palette.background.default, 0.88)
        })
      }
    }
  }, renderContent)));
}
//# sourceMappingURL=MuiSideMenu.js.map