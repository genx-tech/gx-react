import * as Keychain from 'react-native-keychain';

const loginSave_ = async (username, password) => {
    await Keychain.setGenericPassword(username, password, {
        accessible: Keychain.ACCESSIBLE.WHEN_UNLOCKED,
        accessControl: Keychain.ACCESS_CONTROL.BIOMETRY_ANY,
    });
    console.log('save to keychain');
};

const getSupportedBiometryType_ = async () => {
    const biometryType = await Keychain.getSupportedBiometryType();
    switch (biometryType) {
        case 'TouchID':
            break;
        case 'FaceID':
            break;
        case 'Fingerprint':
            break;
        case 'FACE':
            break;
        case 'IRIS':
            break;
        default:
            break;
    }
    return biometryType;
};

const isBiometryTypeSupported_ = async () => {
    const res = await this.getSupportedBiometryType_();
    return res !== null;
};

const retrieveCredentials_ = async () => {
    try {
        // Retrieve the credentials
        const credentials = await Keychain.getGenericPassword({
            accessControl: Keychain.ACCESS_CONTROL.BIOMETRY_ANY,
        });
        if (credentials) {
            return credentials;
        } else {
            console.log('No credentials stored');
            return null;
        }
    } catch (error) {
        console.log("Keychain couldn't be accessed!", error);
    }
};

// const checkIsAvailable_ = async () => {
//     const {
//         available,
//         biometryType,
//     } = await ReactNativeBiometrics.isSensorAvailable();
//     if (available && biometryType === ReactNativeBiometrics.FaceID) {
//         console.log('FaceID is supported');
//         return true;
//     } else if (available && biometryType === ReactNativeBiometrics.Biometrics) {
//         console.log('Biometrics is supported');
//         return true;
//     } else {
//         return false;
//     }
// };

// const availableBiometrics_ = async () => {
//     const {
//         available,
//         biometryType,
//     } = await ReactNativeBiometrics.isSensorAvailable();
//     let result = { type: undefined, available: false };
//     if (available && biometryType === ReactNativeBiometrics.FaceID) {
//         console.log('FaceID is supported');
//         result.type = 'FaceId';
//         result.available = true;
//     } else if (available && biometryType === ReactNativeBiometrics.TouchID) {
//         console.log('TouchID is supported');
//         result.type = 'TouchId';
//         result.available = true;
//     } else if (available && biometryType === ReactNativeBiometrics.Biometrics) {
//         console.log('Biometrics is supported');
//         result.available = true;
//     }
//     return result;
// };

// const isBiometricKeyExist_ = async () => {
//     const { keysExist } = await ReactNativeBiometrics.biometricKeysExist();
//     return keysExist;
// };

// const createKeys_ = async () => {
//     const { publicKey } = await ReactNativeBiometrics.createKeys(
//         'Confirm fingerprint'
//     );
//     return publicKey;
// };
// const deleteKeys_ = async () => {
//     const { keysDeleted } = await ReactNativeBiometrics.deleteKeys();
//     if (keysDeleted) {
//         console.log('Successful deletion');
//     } else {
//         console.log(
//             'Unsuccessful deletion because there were no keys to delete'
//         );
//     }
// };

// const createSignature_ = async (payload) => {
//     const {
//         success,
//         signature,
//         error,
//     } = await ReactNativeBiometrics.createSignature({
//         promptMessage: 'Sign in',
//         payload: payload,
//     });
//     if (success) {
//         return signature;
//     } else {
//         return false;
//     }
// };

// const defaultRecognitionProcess = async (
//     onCreateKey,
//     onVerifyKey,
//     payload = 'salt'
// ) => {
//     try {
//         const isAvailable = await checkIsAvailable_();
//         if (isAvailable) {
//             const keyExist = await isBiometricKeyExist_();
//             if (!keyExist) {
//                 const publicKey = await createKeys_();
//                 await onCreateKey(publicKey);
//             }
//             const signature = await createSignature_(payload);
//             if (signature !== false) {
//                 await onVerifyKey(signature);
//             }
//         }
//     } catch (error) {
//         console.log(error);
//     }
// };

export {
    // availableBiometrics_,
    // isBiometricKeyExist_,
    // createKeys_,
    // deleteKeys_,
    // createSignature_,
    // defaultRecognitionProcess,
    loginSave_,
    getSupportedBiometryType_,
    retrieveCredentials_,
    isBiometryTypeSupported_,
};
