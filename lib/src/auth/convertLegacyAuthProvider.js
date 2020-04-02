var types_1 = require('./types');
exports["default"] = function (legacyAuthProvider) {
    var authProvider = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i - 0] = arguments[_i];
        }
        return legacyAuthProvider.apply(null, args);
    };
    authProvider.login = function (params) { return legacyAuthProvider(types_1.AUTH_LOGIN, params); };
    authProvider.logout = function (params) { return legacyAuthProvider(types_1.AUTH_LOGOUT, params); };
    authProvider.checkAuth = function (params) { return legacyAuthProvider(types_1.AUTH_CHECK, params); };
    authProvider.checkError = function (error) { return legacyAuthProvider(types_1.AUTH_ERROR, error); };
    authProvider.getPermissions = function (params) {
        return legacyAuthProvider(types_1.AUTH_GET_PERMISSIONS, params);
    };
    return authProvider;
};
