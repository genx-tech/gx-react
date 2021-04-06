import React from 'react';
import { Block } from 'galio-framework';

export default function DefaultRow({ content, ...others }) {
    return (
        <Block
            style={{
                width: '95%',
                paddingLeft: 12,
                paddingBottom: 8,
            }}
            {...others}
        >
            {content}
        </Block>
    );
}
