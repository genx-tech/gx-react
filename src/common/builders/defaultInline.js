import React from 'react';
import { Block } from 'galio-framework';

export default function defaultInline(content, key) {
    return (
        <Block
            row
            style={{
                width: '95%',
                flexWrap: 'wrap',
                paddingLeft: 12,
            }}
            {...{ key }}
        >
            {content}
        </Block>
    );
}
