function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
var useAuthProvider_1 = require('./useAuthProvider');
exports.useAuthProvider = useAuthProvider_1["default"];
var useAuthState_1 = require('./useAuthState');
exports.useAuthState = useAuthState_1["default"];
var usePermissions_1 = require('./usePermissions');
exports.usePermissions = usePermissions_1["default"];
var useLogin_1 = require('./useLogin');
exports.useLogin = useLogin_1["default"];
var useLogout_1 = require('./useLogout');
exports.useLogout = useLogout_1["default"];
var useCheckAuth_1 = require('./useCheckAuth');
exports.useCheckAuth = useCheckAuth_1["default"];
var useGetPermissions_1 = require('./useGetPermissions');
exports.useGetPermissions = useGetPermissions_1["default"];
var useLogoutIfAccessDenied_1 = require('./useLogoutIfAccessDenied');
exports.useLogoutIfAccessDenied = useLogoutIfAccessDenied_1["default"];
var convertLegacyAuthProvider_1 = require('./convertLegacyAuthProvider');
exports.convertLegacyAuthProvider = convertLegacyAuthProvider_1["default"];
__export(require('./types'));
