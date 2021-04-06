import React from 'react';
import { View } from 'react-native';

export default function JVDivider({ meta, value, inline, key, styles }) {
    return (
        <View style={{ paddingTop: 12, paddingBottom: 12 }}>
            <View
                style={{
                    backgroundColor: 'rgba(0,0,0,0.2)',
                    height: 0.5,
                    width: '100%',
                }}
            />
        </View>
    );
}
