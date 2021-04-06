import React, { useMemo, useRef } from 'react';
import { Text, ActivityIndicator } from 'react-native';
import { Block } from 'galio-framework';
import { Button } from 'react-native-elements';
import { RNCamera } from 'react-native-camera';
export default function JVCamera({
  meta,
  value,
  inline,
  key,
  styles
}) {
  const refCamera = useRef(null);

  const takePicture = async () => {
    if (refCamera.current) {
      const options = {
        quality: 0.5,
        base64: true
      };
      const data = await refCamera.current.takePictureAsync(options);
      console.log(data.uri);
    }
  };

  return /*#__PURE__*/React.createElement(Block, null, /*#__PURE__*/React.createElement(RNCamera, {
    ref: refCamera,
    type: RNCamera.Constants.Type.back,
    flashMode: RNCamera.Constants.FlashMode.on,
    androidCameraPermissionOptions: {
      title: 'Permission to use camera',
      message: 'We need your permission to use your camera',
      buttonPositive: 'Ok',
      buttonNegative: 'Cancel'
    }
  }, ({
    camera,
    status,
    recordAudioPermissionStatus
  }) => {
    if (status !== 'READY') return /*#__PURE__*/React.createElement(ActivityIndicator, null);
    return /*#__PURE__*/React.createElement(Block, {
      key: key,
      style: {
        padding: 8
      }
    }, /*#__PURE__*/React.createElement(Button, {
      title: '拍照',
      onPress: () => takePicture()
    }));
  }));
}
//# sourceMappingURL=Camera.js.map