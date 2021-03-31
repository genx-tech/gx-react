import Runtime from '../Runtime';

class ViewFactory {
  constructor(builders, styles) {
    this.builders = builders;
    this.styles = styles;
  }

  build(item, value, inline, key) {
    const builder = this.builders[item.type];
    console.log(item, value, inline, key);

    if (!builder) {
      Runtime.log('error', () => `Unknown view item type: ${item.type}`);
      return false;
    }

    return builder(item, value, inline, key, this.styles);
  }

  wrapInlineRow(content, key) {
    const wrapper = this.builders['$inline'];
    return wrapper(content, key);
  }

  wrapRow(content, key) {
    const wrapper = this.builders['$row'];
    return wrapper(content, key);
  }

}

export default ViewFactory;
//# sourceMappingURL=JsonViewFactory.js.map