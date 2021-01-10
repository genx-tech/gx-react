"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactRouterDom = require("react-router-dom");

var _antd = require("antd");

var _buildQuery = _interopRequireDefault(require("../utils/buildQuery"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const BreadcrumbBar = ({
  formatPathText,
  customLinks,
  ...props
}) => {
  const location = (0, _reactRouterDom.useLocation)();
  const pathSnippets = location.pathname.split('/').filter(i => i);
  let linkPath = '';
  const maxNodeIndex = pathSnippets.length - 1;
  const breadcrumbItems = [/*#__PURE__*/_react.default.createElement(_antd.Breadcrumb.Item, {
    key: '/'
  }, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
    to: "/"
  }, formatPathText('/')))].concat(pathSnippets.map((node, i) => {
    linkPath += '/' + node;
    let label = formatPathText(linkPath);
    let linkUrl = linkPath;

    if (i < maxNodeIndex && customLinks) {
      const customLink = customLinks[linkPath];

      if (customLink) {
        if (customLink.link) {
          linkUrl = customLink.link;
        }

        if (customLink.params) {
          linkUrl += '?' + (0, _buildQuery.default)(customLink.params);
        }
      }
    }

    return /*#__PURE__*/_react.default.createElement(_antd.Breadcrumb.Item, {
      key: linkPath
    }, i === pathSnippets.length - 1 ? label : /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
      to: linkUrl
    }, label));
  }));
  return /*#__PURE__*/_react.default.createElement(_antd.Breadcrumb, props, breadcrumbItems);
};

var _default = BreadcrumbBar;
exports.default = _default;
//# sourceMappingURL=Breadcrumb.js.map