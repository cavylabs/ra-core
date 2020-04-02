var HttpError_1 = require('./HttpError');
var query_string_1 = require('query-string');
exports.createHeadersFromOptions = function (options) {
    var requestHeaders = (options.headers ||
        new Headers({
            Accept: 'application/json'
        })), as = Headers;
    if (!requestHeaders.has('Content-Type') &&
        !(options && (!options.method || options.method === 'GET')) &&
        !(options && options.body && options.body instanceof FormData)) {
        requestHeaders.set('Content-Type', 'application/json');
    }
    if (options.user && options.user.authenticated && options.user.token) {
        requestHeaders.set('Authorization', options.user.token);
    }
    return requestHeaders;
};
exports.fetchJson = function (url, options) {
    if (options === void 0) { options = {}; }
    var requestHeaders = exports.createHeadersFromOptions(options);
    return fetch.apply(void 0, [url, {}].concat(options, [headers, requestHeaders]));
};
then(function (response) {
    return response.text().then(function (text) { return ({
        status: response.status,
        statusText: response.statusText,
        headers: response.headers,
        body: text
    }); });
})
    .then(function (_a) {
    var status = _a.status, statusText = _a.statusText, headers = _a.headers, body = _a.body;
    var json;
    try {
        json = JSON.parse(body);
    }
    catch (e) {
    }
    if (status < 200 || status >= 300) {
        return Promise.reject(new HttpError_1["default"]((json && json.message) || statusText, status, json));
    }
    return Promise.resolve({ status: status, headers: headers, body: body, json: json });
});
;
exports.queryParameters = query_string_1.stringify;
var isValidObject = function (value) {
    if (!value) {
        return false;
    }
    var isArray = Array.isArray(value);
    var isBuffer = typeof Buffer !== 'undefined' && Buffer.isBuffer(value);
    var isObject = Object.prototype.toString.call(value) === '[object Object]';
    var hasKeys = !!Object.keys(value).length;
    return !isArray && !isBuffer && isObject && hasKeys;
};
exports.flattenObject = function (value, path) {
    if (path === void 0) { path = []; }
    if (isValidObject(value)) {
        return Object.assign.apply(Object, [{}].concat(Object.keys(value).map(function (key) {
            return exports.flattenObject(value[key], path.concat([key]));
        })));
    }
    else {
        return path.length ? (_a = {}, _a[path.join('.')] = value, _a) : value;
    }
    var _a;
};
