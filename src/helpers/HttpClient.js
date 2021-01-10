import request from 'superagent';
import { join } from '../utils/url';

const AllowedMethods = {
    get: 'get',
    post: 'post',
    put: 'put',
    del: 'del',
    delete: 'del',
    upload: 'post',
    download: 'get',
};

function resToPath(parts) {
    return parts
        ? Array.isArray(parts)
            ? parts.map((res) => encodeURIComponent(res)).join('/')
            : parts
        : '';
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
export default class HttpClient {
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
        return this._send(
            'upload',
            resToPath(resource),
            query,
            file,
            options,
            setUploadBody
        );
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
        return this._send(
            'download',
            resToPath(resource),
            query,
            null,
            options
        );
    }

    async _send(method, path, query, body, options, setRequestBody) {
        method = method.toLowerCase();
        const httpMethod = AllowedMethods[method];
        if (!httpMethod) {
            throw new Error('Invalid method: ' + method);
        }

        const url =
            path.startsWith('http:') || path.startsWith('https:')
                ? path // absolute url
                : join(
                      options && options.endpoint
                          ? options.endpoint
                          : this.endpoint,
                      path
                  );

        const req = this._createRequest(httpMethod, url);

        if (this.onSending) {
            this.onSending(req, httpMethod, url);
        }

        if (query) {
            req.query(query);
        }

        if (setRequestBody) {
            setRequestBody(req);
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
        return request[httpMethod](url);
    }
}
