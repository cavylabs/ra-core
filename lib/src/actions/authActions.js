exports.USER_LOGIN = 'RA/USER_LOGIN';
exports.USER_LOGIN_LOADING = 'RA/USER_LOGIN_LOADING';
exports.USER_LOGIN_FAILURE = 'RA/USER_LOGIN_FAILURE';
exports.USER_LOGIN_SUCCESS = 'RA/USER_LOGIN_SUCCESS';
readonly;
type: typeof exports.USER_LOGIN;
readonly;
payload: object;
readonly;
meta: {
    auth: boolean;
    pathName: string;
}
;
exports.userLogin = function (payload, pathName) {
    return ({
        type: exports.USER_LOGIN,
        payload: payload,
        meta: { auth: true, pathName: pathName }
    });
};
exports.USER_CHECK = 'RA/USER_CHECK';
exports.USER_CHECK_SUCCESS = 'RA/USER_CHECK_SUCCESS';
readonly;
type: typeof exports.USER_CHECK;
readonly;
payload: object;
readonly;
meta: {
    auth: boolean;
    pathName: string;
}
;
exports.userCheck = function (payload, pathName, routeParams) {
    if (routeParams === void 0) { routeParams = {}; }
    return ({
        type: exports.USER_CHECK,
        payload: {} });
};
payload,
    routeParams,
;
meta: {
    auth: true, pathName;
}
;
exports.USER_LOGOUT = 'RA/USER_LOGOUT';
readonly;
type: typeof exports.USER_LOGOUT;
readonly;
payload: {
    redirectTo ?  : string;
}
;
readonly;
meta: {
    auth: boolean;
}
;
/**
 * Action to trigger logout of the current user. The entire redux state will be cleared
 * thanks to the resettableAppReducer in Admin.
 * @see: Admin.js
 * @param redirectTo Path to direct to after logout
 * @return {{type: string, payload: {redirectTo: string}, meta: {auth: boolean}}}
 */
exports.userLogout = function (redirectTo) { return ({
    type: exports.USER_LOGOUT,
    payload: { redirectTo: redirectTo },
    meta: { auth: true }
}); };
