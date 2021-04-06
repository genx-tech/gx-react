import React from 'react';
import { ImageBackground, TouchableWithoutFeedback, View } from 'react-native';

export default function JVImage({ meta, key }) {
    const { url } = meta;

    return (
        <View style={{ padding: 16, width: '100%' }} key={key}>
            <ImageBackground
                source={{ uri: url }}
                style={{ width: '100%' }}
            ></ImageBackground>
        </View>
    );
}
