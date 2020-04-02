var recompose_1 = require('recompose');
var isObject = function (obj) {
    return obj && Object.prototype.toString.call(obj) === '[object Object]';
};
var isEmpty = function (obj) {
    return obj instanceof Date
        ? false
        : obj === '' || obj === null || recompose_1.shallowEqual(obj, {});
};
var removeEmpty = function (object) {
    return (_a = Object.keys(object)).reduce.apply(_a, [function (acc, key) {
        var child = object[key];
        if (isObject(object[key])) {
            child = removeEmpty(object[key]);
        }
        return isEmpty(child) ? acc : {};
    }].concat(acc, [[key], child]));
    var _a;
};
;
{ }
;
exports["default"] = removeEmpty;
