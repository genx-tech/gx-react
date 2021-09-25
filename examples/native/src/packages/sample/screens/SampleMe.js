import React from 'react';
import { View, StyleSheet, SafeAreaView, Text } from 'react-native';
import { Icon } from '@genx/react';

const Sample = () => {
    return (
        <SafeAreaView style={styles.root}>
            <View center>
                <Text>Me</Text>
                <View style={styles.content}>
                    <Icon type="icomoon" name="user" />
                </View>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    root: {
        backgroundColor: 'grey',
    },
    content: {
        marginTop: 50,
    },
});

export default Sample;
