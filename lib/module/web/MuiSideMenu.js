import React, { useEffect } from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom'; // material

import { alpha, styled } from '@mui/material/styles';
import { Box, Link, Stack, Button, Drawer, Tooltip, Typography, CardActionArea } from '@mui/material'; // hooks

import useAuth from '../../hooks/useAuth';
import useCollapseDrawer from '../../hooks/useCollapseDrawer'; // routes

import { PATH_DASHBOARD, PATH_DOCS } from '../../routes/paths'; // components

import Logo from '../../components/Logo';
import MyAvatar from '../../components/MyAvatar';
import Scrollbar from '../../components/Scrollbar';
import NavSection from '../../components/NavSection';
import { MHidden } from '../../components/@material-extend'; //

import sidebarConfig from './SidebarConfig';
import { DocIllustration } from '../../assets'; // ----------------------------------------------------------------------

const DRAWER_WIDTH = 280;
const COLLAPSE_WIDTH = 102;
const RootStyle = styled('div')(({
  theme
}) => ({
  [theme.breakpoints.up('lg')]: {
    flexShrink: 0,
    transition: theme.transitions.create('width', {
      duration: theme.transitions.duration.complex
    })
  }
}));
const AccountStyle = styled('div')(({
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
  return /*#__PURE__*/React.createElement(Tooltip, {
    title: "Mini Menu"
  }, /*#__PURE__*/React.createElement(CardActionArea, {
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
  }, /*#__PURE__*/React.createElement(Box, {
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
export default function DashboardSidebar({
  isOpenSidebar,
  onCloseSidebar
}) {
  const {
    pathname
  } = useLocation();
  const {
    user
  } = useAuth();
  const {
    isCollapse,
    collapseClick,
    collapseHover,
    onToggleCollapse,
    onHoverEnter,
    onHoverLeave
  } = useCollapseDrawer();
  useEffect(() => {
    if (isOpenSidebar) {
      onCloseSidebar();
    } // eslint-disable-next-line react-hooks/exhaustive-deps

  }, [pathname]);
  const renderContent = /*#__PURE__*/React.createElement(Scrollbar, {
    sx: {
      'height': 1,
      '& .simplebar-content': {
        height: 1,
        display: 'flex',
        flexDirection: 'column'
      }
    }
  }, /*#__PURE__*/React.createElement(Stack, {
    spacing: 3,
    sx: {
      px: 2.5,
      pt: 3,
      pb: 2,
      ...(isCollapse && {
        alignItems: 'center'
      })
    }
  }, /*#__PURE__*/React.createElement(Stack, {
    direction: "row",
    alignItems: "center",
    justifyContent: "space-between"
  }, /*#__PURE__*/React.createElement(Box, {
    component: RouterLink,
    to: "/",
    sx: {
      display: 'inline-flex'
    }
  }, /*#__PURE__*/React.createElement(Logo, null)), /*#__PURE__*/React.createElement(MHidden, {
    width: "lgDown"
  }, !isCollapse && /*#__PURE__*/React.createElement(IconCollapse, {
    onToggleCollapse: onToggleCollapse,
    collapseClick: collapseClick
  }))), isCollapse ? /*#__PURE__*/React.createElement(MyAvatar, {
    sx: {
      mx: 'auto',
      mb: 2
    }
  }) : /*#__PURE__*/React.createElement(Link, {
    underline: "none",
    component: RouterLink,
    to: PATH_DASHBOARD.user.account
  }, /*#__PURE__*/React.createElement(AccountStyle, null, /*#__PURE__*/React.createElement(MyAvatar, null), /*#__PURE__*/React.createElement(Box, {
    sx: {
      ml: 2
    }
  }, /*#__PURE__*/React.createElement(Typography, {
    variant: "subtitle2",
    sx: {
      color: 'text.primary'
    }
  }, user === null || user === void 0 ? void 0 : user.displayName), /*#__PURE__*/React.createElement(Typography, {
    variant: "body2",
    sx: {
      color: 'text.secondary'
    }
  }, user === null || user === void 0 ? void 0 : user.role))))), /*#__PURE__*/React.createElement(NavSection, {
    navConfig: sidebarConfig,
    isShow: !isCollapse
  }), /*#__PURE__*/React.createElement(Box, {
    sx: {
      flexGrow: 1
    }
  }), !isCollapse && /*#__PURE__*/React.createElement(Stack, {
    spacing: 3,
    alignItems: "center",
    sx: {
      px: 5,
      pb: 5,
      mt: 10,
      width: 1,
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement(DocIllustration, {
    sx: {
      width: 1
    }
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Typography, {
    gutterBottom: true,
    variant: "subtitle1"
  }, "Hi, ", user === null || user === void 0 ? void 0 : user.displayName), /*#__PURE__*/React.createElement(Typography, {
    variant: "body2",
    sx: {
      color: 'text.secondary'
    }
  }, "Need help?", /*#__PURE__*/React.createElement("br", null), " Please check our docs")), /*#__PURE__*/React.createElement(Button, {
    href: PATH_DOCS,
    target: "_blank",
    variant: "contained"
  }, "Documentation")));
  return /*#__PURE__*/React.createElement(RootStyle, {
    sx: {
      width: {
        lg: isCollapse ? COLLAPSE_WIDTH : DRAWER_WIDTH
      },
      ...(collapseClick && {
        position: 'absolute'
      })
    }
  }, /*#__PURE__*/React.createElement(MHidden, {
    width: "lgUp"
  }, /*#__PURE__*/React.createElement(Drawer, {
    open: isOpenSidebar,
    onClose: onCloseSidebar,
    PaperProps: {
      sx: {
        width: DRAWER_WIDTH
      }
    }
  }, renderContent)), /*#__PURE__*/React.createElement(MHidden, {
    width: "lgDown"
  }, /*#__PURE__*/React.createElement(Drawer, {
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
          bgcolor: theme => alpha(theme.palette.background.default, 0.88)
        })
      }
    }
  }, renderContent)));
}
//# sourceMappingURL=MuiSideMenu.js.map