var removeKey = function (target, path) {
    return Object.keys(target).reduce(function (acc, key) {
        if (key !== path) {
            return Object.assign({}, acc, (_a = {}, _a[key] = target[key], _a));
        }
        return acc;
        var _a;
    }, {});
};
var deepRemoveKey = function (target, path) {
    var paths = path.split('.');
    if (paths.length === 1) {
        return removeKey(target, path);
    }
    var deepKey = paths[0];
    if (target[deepKey] === undefined) {
        return target;
    }
    var deep = deepRemoveKey(target[deepKey], paths.slice(1).join('.'));
    if (Object.keys(deep).length === 0) {
        return removeKey(target, deepKey);
    }
    return Object.assign({}, target, (_a = {}, _a[deepKey] = deep, _a));
    var _a;
};
exports["default"] = deepRemoveKey;
