var get_1 = require('lodash/get');
exports["default"] = function (value, path) {
    if (typeof value === 'object') {
        return get_1["default"](value, path);
    }
    return value;
};
