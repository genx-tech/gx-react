import ReactNativeBiometrics from 'react-native-biometrics';

const checkIsAvailable_ = async () => {
  const {
    available,
    biometryType
  } = await ReactNativeBiometrics.isSensorAvailable();

  if (available && biometryType === ReactNativeBiometrics.FaceID) {
    console.log('FaceID is supported');
    return true;
  } else if (available && biometryType === ReactNativeBiometrics.Biometrics) {
    console.log('Biometrics is supported');
    return true;
  } else {
    return false;
  }
};

const isBiometricKeyExist_ = async () => {
  const {
    keysExist
  } = await ReactNativeBiometrics.biometricKeysExist();
  return keysExist;
};

const createKeys_ = async () => {
  const {
    publicKey
  } = await ReactNativeBiometrics.createKeys('Confirm fingerprint');
  return publicKey;
};

const deleteKeys_ = async () => {
  const {
    keysDeleted
  } = await ReactNativeBiometrics.deleteKeys();

  if (keysDeleted) {
    console.log('Successful deletion');
  } else {
    console.log('Unsuccessful deletion because there were no keys to delete');
  }
};

const createSignature_ = async payload => {
  const {
    success,
    signature,
    error
  } = await ReactNativeBiometrics.createSignature({
    promptMessage: 'Sign in',
    payload: payload
  });

  if (success) {
    return signature;
  } else {
    return false;
  }
};

const defaultRecognitionProcess = async (onCreateKey, onVerifyKey, payload = 'salt') => {
  try {
    const isAvailable = await checkIsAvailable_();

    if (isAvailable) {
      const keyExist = await isBiometricKeyExist_();

      if (!keyExist) {
        const publicKey = await createKeys_();
        await onCreateKey(publicKey);
      }

      const signature = await createSignature_(payload);

      if (signature !== false) {
        await onVerifyKey(signature);
      }
    }
  } catch (error) {
    console.log(error);
  }
};

export { checkIsAvailable_, isBiometricKeyExist_, createSignature_, createKeys_, deleteKeys_, defaultRecognitionProcess };
//# sourceMappingURL=FaceRecognition.js.map