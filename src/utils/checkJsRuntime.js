export default function checkJsRuntime() {
    if (typeof document !== 'undefined') {
        return 'web';
    } else if (
        typeof navigator !== 'undefined' &&
        navigator.product === 'ReactNative'
    ) {
        return 'native';
    } else {
        return 'node';
    }
}
