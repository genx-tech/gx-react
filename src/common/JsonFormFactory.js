import React from 'react';
import ViewFactory from './JsonViewFactory';

class FormFactory extends ViewFactory {
    build(meta, store, inline, key) {
        const Component = this.getComponent(meta.type);

        return (
            Component && (
                <Component
                    {...{
                        meta,
                        store,
                        value: store.values,
                        inline,
                        key,
                        styles: this.styles,
                    }}
                />
            )
        );
    }
}

export default FormFactory;
