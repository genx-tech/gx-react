"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _material = require("@mui/material");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const createSvgIconSet = urlBuilder => {
  const SvgIcon = ({
    name,
    color = 'inherit',
    size = 24,
    style
  }) => {
    const src = urlBuilder(name);
    return /*#__PURE__*/_react.default.createElement(_material.Box, {
      component: "span",
      sx: {
        width: size,
        height: size,
        mask: `url(${src}) no-repeat center / contain`,
        WebkitMask: `url(${src}) no-repeat center / contain`,
        bgcolor: `${color}`,
        ...(color === 'inherit' && {
          bgcolor: 'currentColor'
        }),
        ...style
      }
    });
  };

  return SvgIcon;
};

var _default = createSvgIconSet;
exports.default = _default;
//# sourceMappingURL=createSvgIconSet.js.map