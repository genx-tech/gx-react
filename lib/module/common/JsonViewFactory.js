import React from 'react';
import Runtime from '../Runtime';

class ViewFactory {
  constructor(components, styles) {
    this.components = components;
    this.styles = styles;
  }

  getComponent(type) {
    const Component = this.components[type];

    if (!Component) {
      Runtime.log('warning', () => `Unsupported component type: ${type}`);
      return false;
    }

    return Component;
  }

  build(meta, value, inline, key) {
    const Component = this.getComponent(meta.type);
    return Component && /*#__PURE__*/React.createElement(Component, {
      meta,
      value,
      inline,
      key,
      styles: this.styles
    });
  }

  wrap(wrapperType, content, key) {
    const Wrapper = this.getComponent(wrapperType);
    return Wrapper && /*#__PURE__*/React.createElement(Wrapper, {
      content,
      key
    });
  }

}

export default ViewFactory;
//# sourceMappingURL=JsonViewFactory.js.map