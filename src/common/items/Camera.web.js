import React from 'react';
import { Text, ImageBackground } from 'react-native';
import { Block } from 'galio-framework';

export default function JVCamera({ meta, inline, key, styles, store }) {
    const { name } = meta;
    const uri = store.getValue(name);

    return (
        <Block>
            <Block key={key} style={{ padding: 8 }}>
                {store.readOnly ? (
                    uri ? (
                        <ImageBackground
                            source={{ uri: store.getValue(name) }}
                            style={{ width: '100%' }}
                        ></ImageBackground>
                    ) : (
                        <Text>{'尚未上传照片。'}</Text>
                    )
                ) : (
                    <Text style={styles.errorText}>
                        {'请在手机App上拍照。'}
                    </Text>
                )}
            </Block>
        </Block>
    );
}
