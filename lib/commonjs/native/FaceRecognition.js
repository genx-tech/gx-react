"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defaultRecognitionProcess = exports.deleteKeys_ = exports.createKeys_ = exports.createSignature_ = exports.isBiometricKeyExist_ = exports.checkIsAvailable_ = void 0;

var _reactNativeBiometrics = _interopRequireDefault(require("react-native-biometrics"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const checkIsAvailable_ = async () => {
  const {
    available,
    biometryType
  } = await _reactNativeBiometrics.default.isSensorAvailable();

  if (available && biometryType === _reactNativeBiometrics.default.FaceID) {
    console.log('FaceID is supported');
    return true;
  } else if (available && biometryType === _reactNativeBiometrics.default.Biometrics) {
    console.log('Biometrics is supported');
    return true;
  } else {
    return false;
  }
};

exports.checkIsAvailable_ = checkIsAvailable_;

const isBiometricKeyExist_ = async () => {
  const {
    keysExist
  } = await _reactNativeBiometrics.default.biometricKeysExist();
  return keysExist;
};

exports.isBiometricKeyExist_ = isBiometricKeyExist_;

const createKeys_ = async () => {
  const {
    publicKey
  } = await _reactNativeBiometrics.default.createKeys('Confirm fingerprint');
  return publicKey;
};

exports.createKeys_ = createKeys_;

const deleteKeys_ = async () => {
  const {
    keysDeleted
  } = await _reactNativeBiometrics.default.deleteKeys();

  if (keysDeleted) {
    console.log('Successful deletion');
  } else {
    console.log('Unsuccessful deletion because there were no keys to delete');
  }
};

exports.deleteKeys_ = deleteKeys_;

const createSignature_ = async payload => {
  const {
    success,
    signature
  } = await _reactNativeBiometrics.default.createSignature({
    promptMessage: 'Sign in',
    payload: payload
  });

  if (success) {
    return signature;
  } else {
    return false;
  }
};

exports.createSignature_ = createSignature_;

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

exports.defaultRecognitionProcess = defaultRecognitionProcess;
//# sourceMappingURL=FaceRecognition.js.map