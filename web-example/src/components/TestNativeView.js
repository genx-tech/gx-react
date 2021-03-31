import { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
    box: { padding: 10 },
    text: { fontWeight: 'bold' },
});

export default function ViewComponent({ timeout }) {
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        let timeoutHandle;

        const timeoutFn = () => {
            setCounter((prev) => prev + 1);
            timeoutHandle = setTimeout(timeoutFn, timeout);
        };

        timeoutHandle = setTimeout(timeoutFn, timeout);

        return () => {
            if (timeoutHandle) {
                clearTimeout(timeoutHandle);
            }
        };
    }, [timeout]);

    return (
        <View style={styles.box}>
            <Text style={styles.text}>Render count: {counter} </Text>
            <Text style={styles.text}>Timeout: {timeout} </Text>
        </View>
    );
}
