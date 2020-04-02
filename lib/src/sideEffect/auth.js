var effects_1 = require('redux-saga/effects');
var connected_react_router_1 = require('connected-react-router');
var notificationActions_1 = require('../actions/notificationActions');
var authActions_1 = require('../actions/authActions');
var fetchActions_1 = require('../actions/fetchActions');
var clearActions_1 = require('../actions/clearActions');
exports["default"] = function (authProvider) {
    if (!authProvider) {
        return function () { return null; };
    }
    return function watchAuthActions() {
        yield effects_1.all([
            effects_1.takeEvery(authActions_1.USER_LOGIN, exports.handleLogin(authProvider)),
            effects_1.takeEvery(authActions_1.USER_CHECK, exports.handleCheck(authProvider)),
            effects_1.takeEvery(authActions_1.USER_LOGOUT, exports.handleLogout(authProvider)),
            effects_1.takeLatest(fetchActions_1.FETCH_ERROR, exports.handleFetchError(authProvider)),
        ]);
    };
};
var nextPathnameSelector = function (state) {
    var locationState = state.router.location.state;
    return locationState && locationState.nextPathname;
};
var currentPathnameSelector = function (state) { return state.router.location; };
var getErrorMessage = function (error, defaultMessage) {
    return typeof error === 'string'
        ? error
        : typeof error === 'undefined' || !error.message
            ? defaultMessage
            : error.message;
};
exports.handleLogin = function (authProvider) {
    return function (action) {
        var payload = action.payload, meta = action.meta;
        try {
            yield effects_1.put({ type: authActions_1.USER_LOGIN_LOADING });
            var authPayload = yield effects_1.call([authProvider, 'login'], payload);
            yield effects_1.put({
                type: authActions_1.USER_LOGIN_SUCCESS,
                payload: authPayload
            });
            var redirectTo = yield meta.pathName ||
                effects_1.select(nextPathnameSelector);
            yield effects_1.put(connected_react_router_1.push(redirectTo || '/'));
        }
        catch (e) {
            yield effects_1.put({
                type: authActions_1.USER_LOGIN_FAILURE,
                error: e,
                meta: { auth: true }
            });
            var errorMessage = getErrorMessage(e, 'ra.auth.sign_in_error');
            yield effects_1.put(notificationActions_1.showNotification(errorMessage, 'warning'));
        }
    };
};
exports.handleCheck = function (authProvider) {
    return function (action) {
        var payload = action.payload, meta = action.meta;
        try {
            yield effects_1.call([authProvider, 'checkAuth'], payload);
        }
        catch (error) {
            var redirectTo = yield effects_1.call([authProvider, 'logout'], undefined);
            yield effects_1.put(connected_react_router_1.replace({
                pathname: (error && error.redirectTo) || redirectTo || '/login',
                state: { nextPathname: meta.pathName }
            }));
            // Clear the state before showing a notification as it would be dismissed immediately otherwise
            yield effects_1.put(clearActions_1.clearState());
            var errorMessage = getErrorMessage(error, 'ra.auth.auth_check_error');
            yield effects_1.put(notificationActions_1.showNotification(errorMessage, 'warning'));
        }
    };
};
exports.handleLogout = function (authProvider) {
    return function (action) {
        var payload = action.payload;
        var redirectTo = yield effects_1.call([authProvider, 'logout'], undefined);
        yield effects_1.put(connected_react_router_1.push((payload && payload.redirectTo) || redirectTo || '/login'));
        yield effects_1.put(clearActions_1.clearState());
    };
};
exports.handleFetchError = function (authProvider) {
    return function (action) {
        var error = action.error;
        try {
            yield effects_1.call([authProvider, 'checkError'], error);
        }
        catch (e) {
            var nextPathname = yield effects_1.select(currentPathnameSelector);
            var redirectTo = yield effects_1.call([authProvider, 'logout'], undefined);
            yield effects_1.put(connected_react_router_1.push({
                pathname: redirectTo || '/login',
                state: { nextPathname: nextPathname }
            }));
            // Clear the state before showing a notification as it would be dismissed immediately otherwise
            yield effects_1.put(clearActions_1.clearState());
            yield effects_1.put(notificationActions_1.hideNotification());
            yield effects_1.put(notificationActions_1.showNotification('ra.notification.logged_out', 'warning'));
        }
    };
};
