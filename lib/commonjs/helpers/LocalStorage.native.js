"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _asyncStorage = _interopRequireDefault(require("@react-native-async-storage/async-storage"));

var _Runtime = _interopRequireDefault(require("../Runtime"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class LocalStorage {
  static async getObject_(key) {
    try {
      const value = await _asyncStorage.default.getItem(key);

      if (value !== null) {
        return JSON.parse(value);
      }
    } catch (e) {
      _Runtime.default.log('error', () => e);
    }
  }

  static async setObject_(key, value) {
    try {
      const jsonValue = JSON.stringify(value);
      await _asyncStorage.default.setItem(key, jsonValue);
    } catch (e) {
      _Runtime.default.log('error', () => e);
    }
  }

  static async getString_(key) {
    try {
      return await _asyncStorage.default.getItem(key);
    } catch (e) {
      _Runtime.default.log('error', () => e);
    }
  }

  static async setString_(key, value) {
    try {
      await _asyncStorage.default.setItem(key, value);
    } catch (e) {
      _Runtime.default.log('error', () => e);
    }
  }

  static async removeItem_(key) {
    try {
      await _asyncStorage.default.removeItem(key);
    } catch (e) {
      _Runtime.default.log('error', () => e);
    }
  }

}

var _default = LocalStorage;
exports.default = _default;
//# sourceMappingURL=LocalStorage.native.js.map