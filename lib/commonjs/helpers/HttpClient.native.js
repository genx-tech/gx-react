"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _superagent = _interopRequireDefault(require("superagent"));

var _reactNative = require("react-native");

var _july = require("@genx/july");

var _each2 = _interopRequireDefault(require("lodash/each"));

var mime = _interopRequireWildcard(require("react-native-mime-types"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const isMobileMode = _reactNative.Platform.OS === 'ios' || _reactNative.Platform.OS === 'android';
const AllowedMethods = {
  get: 'get',
  post: 'post',
  put: 'put',
  del: 'del',
  delete: 'del',
  upload: 'post',
  download: 'get'
};

function resToPath(parts) {
  return parts ? Array.isArray(parts) ? parts.map(res => encodeURIComponent(res)).join('/') : parts : '';
}

function setUploadBody(req, body, options) {
  if (options && options.formData) {
    options.formData.entries.forEach(([k, v]) => {
      req.field(k, v);
    });
  }

  req.attach(options && options.fileField ? options.fileField : 'file', body);
}
/**
 * Http client.
 * @class
 */


class HttpClient {
  /**
   * HttpClient constructor
   * @param {*} endpoint - Default endpoint
   */
  constructor(endpoint) {
    endpoint != null || (endpoint = '');
    this.endpoint = endpoint;
  }
  /**
   * Http get request.
   * @param {string|Array} resource
   * @param {Object} query
   * @param {Object} options
   * @property {string} [options.endpoint] - Override the default base endpoint
   * @property {Function} [options.onProgress] - Report progress when waiting for response
   */


  async get(resource, query, options) {
    return this._send('get', resToPath(resource), query, null, options);
  }
  /**
   * Http post request.
   * @param {string|Array} resource
   * @param {Object} data
   * @param {Object} query
   * @param {Object} options
   * @property {string} [options.endpoint] - Override the default base endpoint
   * @property {Function} [options.onProgress] - Report progress when waiting for response
   */


  async post(resource, data, query, options) {
    return this._send('post', resToPath(resource), query, data, options);
  }
  /**
   * Http put request.
   * @param {string|Array} resource
   * @param {Object} data
   * @param {Object} query
   * @param {Object} options
   * @property {string} [options.endpoint] - Override the default base endpoint
   * @property {Function} [options.onProgress] - Report progress when waiting for response
   */


  async put(resource, data, query, options) {
    return this._send('put', resToPath(resource), query, data, options);
  }
  /**
   * Http del request.
   * @param {string|Array} resource
   * @param {Object} query
   * @param {Object} options
   * @property {string} [options.endpoint] - Override the default base endpoint
   * @property {Function} [options.onProgress] - Report progress when waiting for response
   */


  async del(resource, query, options) {
    return this._send('del', resToPath(resource), query, null, options);
  }
  /**
   * Http upload request.
   * @param {string|Array} resource
   * @param {string} file
   * @param {Object} query
   * @param {Object} options
   * @property {string} [options.endpoint] - Override the default base endpoint
   * @property {Function} [options.onProgress] - Report progress when waiting for response
   * @property {Object} [options.formData] - Form data passed while uploading
   * @property {string} [options.fileField="file"] - File field name, default as "file"
   */


  async upload(resource, file, query, options) {
    if (isMobileMode) {
      if (typeof file !== 'object' || !file.uri || !file.name) {
        throw new Error('File param should be an object with { uri, name } for uploading from native env.');
      }

      let {
        uri,
        ...fileOthers
      } = file;

      if (_reactNative.Platform.OS === 'ios') {
        uri = uri.replace('file://', '');
      }

      fileOthers.uri = uri;

      if (!fileOthers.type) {
        fileOthers.type = mime.lookup(fileOthers.name); // react native specific
      }

      file = fileOthers;
    }

    return this._send('upload', resToPath(resource), query, file, options, isMobileMode ? null : setUploadBody);
  }
  /**
   * Http download request.
   * @param {string|Array} resource
   * @param {Object} query
   * @param {Object} options
   * @property {string} [options.endpoint] - Override the default base endpoint
   * @property {Function} [options.onProgress] - Report progress when waiting for response
   */


  async download(resource, query, options) {
    return this._send('download', resToPath(resource), query, null, options);
  }

  async _send(method, path, query, body, options, setRequestBody) {
    method = method.toLowerCase();
    const httpMethod = (options === null || options === void 0 ? void 0 : options.httpMethod) || AllowedMethods[method];

    if (!httpMethod) {
      throw new Error('Invalid method: ' + method);
    }

    const url = path.startsWith('http:') || path.startsWith('https:') || !this.endpoint ? path // absolute url
    : _july.url.join(options && options.endpoint ? options.endpoint : this.endpoint, path);

    const req = this._createRequest(httpMethod, url);

    if (this.onSending) {
      this.onSending(req, httpMethod, url);
    }

    const extraHeaders = options === null || options === void 0 ? void 0 : options.headers;

    if (extraHeaders) {
      (0, _each2.default)(extraHeaders, (v, k) => {
        req.set(k, v);
      });
    }

    if (options !== null && options !== void 0 && options.withCredentials) {
      req.withCredentials();
    }

    if (query) {
      req.query(query);
    }

    if (setRequestBody) {
      setRequestBody(req, body, options);
    } else {
      req.send(body);
    }

    if (options && options.onProgress) {
      req.on('progress', options.onProgress);
    }

    try {
      const res = await req;
      const result = res.body || res.text;

      if (this.onSent) {
        await this.onSent(url, result);
      }

      return result;
    } catch (error) {
      if (error.response && error.response.body) {
        if (this.onReponseError) {
          return this.onReponseError(error.response.body);
        }

        throw error;
      }

      if (this.onOtherError) {
        return this.onOtherError(error);
      }

      throw error;
    }
  }

  _createRequest(httpMethod, url) {
    return _superagent.default[httpMethod](url);
  }

}

exports.default = HttpClient;
//# sourceMappingURL=HttpClient.native.js.map