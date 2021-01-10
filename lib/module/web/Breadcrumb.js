import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Breadcrumb } from 'antd';
import buildQuery from '../utils/buildQuery';

const BreadcrumbBar = ({
  formatPathText,
  customLinks,
  ...props
}) => {
  const location = useLocation();
  const pathSnippets = location.pathname.split('/').filter(i => i);
  let linkPath = '';
  const maxNodeIndex = pathSnippets.length - 1;
  const breadcrumbItems = [/*#__PURE__*/React.createElement(Breadcrumb.Item, {
    key: '/'
  }, /*#__PURE__*/React.createElement(Link, {
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
          linkUrl += '?' + buildQuery(customLink.params);
        }
      }
    }

    return /*#__PURE__*/React.createElement(Breadcrumb.Item, {
      key: linkPath
    }, i === pathSnippets.length - 1 ? label : /*#__PURE__*/React.createElement(Link, {
      to: linkUrl
    }, label));
  }));
  return /*#__PURE__*/React.createElement(Breadcrumb, props, breadcrumbItems);
};

export default BreadcrumbBar;
//# sourceMappingURL=Breadcrumb.js.map