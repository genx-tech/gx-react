import React, { useMemo } from 'react';
import { View } from 'react-native';

function buildItem(meta, value, inline, key, factory) {
    let content = [];

    function mergeItem(itemResult) {
        if (Array.isArray(itemResult)) {
            content = content.concat(itemResult);
        } else {
            content.push(itemResult);
        }
    }

    if (meta.items) {
        if (meta.header) {
            mergeItem(factory.build(meta.header, value, false, 'header'));
        }

        meta.items.forEach((innerItem, i) =>
            mergeItem(buildItem(innerItem, value, meta.inline, i, factory))
        );

        if (meta.footer) {
            mergeItem(factory.build(meta.footer, value, false, 'footer'));
        }
    } else {
        mergeItem(factory.build(meta, value, inline));
    }

    if (content.length === 1) {
        content = content[0];
    }

    if (meta.inline) {
        return factory.wrap('$inline', content, key);
    }

    return factory.wrap('$row', content, key);
}

const JsonView = ({ view, value, factory }) => {
    const jsxView = useMemo(
        () => buildItem({ items: view }, value, false, undefined, factory),
        [view, value, factory]
    );

    return <View>{jsxView}</View>;
};

export default JsonView;
