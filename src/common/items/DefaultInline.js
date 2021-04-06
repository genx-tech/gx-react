import React from 'react';
import { Block } from 'galio-framework';

export default function DefaultInline({ content, ...others }) {
    return (
        <Block
            row
            style={{
                width: '95%',
                flexWrap: 'wrap',
                paddingLeft: 12,
            }}
            {...others}
        >
            {content}
        </Block>
    );
}
