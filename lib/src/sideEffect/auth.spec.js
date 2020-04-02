var redux_saga_1 = require('redux-saga');
var auth_1 = require('./auth');
var wait = function (timeout) {
    if (timeout === void 0) { timeout = 100; }
    return new Promise(function (resolve) { return setTimeout(resolve, timeout); });
};
describe('Auth saga', function () {
    describe('Login saga', function () {
        test('Handle successful login', async(), {
            const: dispatch = jest.fn(),
            const: authProvider = {
                login: jest.fn().mockResolvedValue({ role: 'admin' }),
                logout: function () { return Promise.reject('bad method'); },
                checkAuth: function () { return Promise.reject('bad method'); },
                checkError: function () { return Promise.reject('bad method'); },
                getPermissions: function () { return Promise.reject('bad method'); }
            },
            const: action = {
                payload: {
                    login: 'user',
                    password: 'password123'
                },
                meta: {
                    pathName: '/posts'
                }
            },
            await: redux_saga_1.runSaga({ dispatch: dispatch }, auth_1.handleLogin(authProvider), action),
            expect: function (authProvider, login) { }, toHaveBeenCalledWith: function (_a) { },
            expect: function (dispatch) { }, toHaveBeenCalledWith: function (_a) { },
            expect: function (dispatch) { }, toHaveBeenCalledWith: function (_a) { },
            expect: function (dispatch) { }, toHaveBeenCalledWith: function (push) { }
        });
        test('Handle successful login with redirection from previous state', async(), {
            const: dispatch = jest.fn(),
            const: authProvider = {
                login: jest.fn().mockResolvedValue({ role: 'admin' }),
                logout: function () { return Promise.reject('bad method'); },
                checkAuth: function () { return Promise.reject('bad method'); },
                checkError: function () { return Promise.reject('bad method'); },
                getPermissions: function () { return Promise.reject('bad method'); }
            },
            const: action = {
                payload: {
                    login: 'user',
                    password: 'password123'
                },
                meta: {}
            },
            await: redux_saga_1.runSaga({
                dispatch: dispatch,
                getState: function () { return ({
                    router: {
                        location: { state: { nextPathname: '/posts/1' } }
                    }
                }); }
            }, auth_1.handleLogin(authProvider), action),
            expect: function (authProvider, login) { }, toHaveBeenCalledWith: function (_a) { },
            expect: function (dispatch) { }, toHaveBeenCalledWith: function (_a) { },
            expect: function (dispatch) { }, toHaveBeenCalledWith: function (_a) { },
            expect: function (dispatch) { }, toHaveBeenCalledWith: function (push) { }
        });
        test('Handle failed login', async(), {
            const: dispatch = jest.fn(),
            const: error = { message: 'Bazinga!' },
            const: authProvider = {
                login: jest.fn().mockRejectedValue(error),
                logout: function () { return Promise.reject('bad method'); },
                checkAuth: function () { return Promise.reject('bad method'); },
                checkError: function () { return Promise.reject('bad method'); },
                getPermissions: function () { return Promise.reject('bad method'); }
            },
            const: action = {
                payload: {
                    login: 'user',
                    password: 'password123'
                },
                meta: {
                    pathName: '/posts'
                }
            },
            await: redux_saga_1.runSaga({ dispatch: dispatch }, auth_1.handleLogin(authProvider), action),
            expect: function (authProvider, login) { }, toHaveBeenCalledWith: function (_a) { },
            expect: function (dispatch) { }, toHaveBeenCalledWith: function (_a) { },
            expect: function (dispatch) { }, toHaveBeenCalledWith: function (_a) { },
            expect: function (dispatch) { }, toHaveBeenCalledWith: function (showNotification) { }
        });
    });
    describe('Check saga', function () {
        test('Handle successful check', async(), {
            const: dispatch = jest.fn(),
            const: authProvider = {
                login: function () { return Promise.reject('bad method'); },
                logout: function () { return Promise.reject('bad method'); },
                checkAuth: jest.fn().mockResolvedValue({ role: 'admin' }),
                checkError: function () { return Promise.reject('bad method'); },
                getPermissions: function () { return Promise.reject('bad method'); }
            },
            const: action = {
                payload: {
                    resource: 'posts'
                },
                meta: {
                    pathName: '/posts'
                }
            },
            await: redux_saga_1.runSaga({ dispatch: dispatch }, auth_1.handleCheck(authProvider), action),
            expect: function (authProvider, checkAuth) { }, toHaveBeenCalledWith: function (_a) { },
            expect: function (dispatch) { }, not: .toHaveBeenCalled()
        });
        test('Handle failed check', async(), {
            const: dispatch = jest.fn(),
            const: error = { message: 'Bazinga!' },
            const: authProvider = {
                login: function () { return Promise.reject('bad method'); },
                logout: jest.fn().mockResolvedValueOnce('/custom'),
                checkAuth: jest.fn().mockRejectedValueOnce(error),
                checkError: function () { return Promise.reject('bad method'); },
                getPermissions: function () { return Promise.reject('bad method'); }
            },
            const: action = {
                payload: {
                    resource: 'posts'
                },
                meta: {
                    pathName: '/posts'
                }
            },
            await: redux_saga_1.runSaga({ dispatch: dispatch }, auth_1.handleCheck(authProvider), action),
            expect: function (authProvider, checkAuth) { }, toHaveBeenCalledWith: function (_a) { },
            expect: function (authProvider, logout) { }, toHaveBeenCalled: function () { },
            await: wait(),
            expect: function (dispatch) { }, toHaveBeenCalledWith: function (replace) { },
            expect: function (dispatch) { }, toHaveBeenCalledWith: function (clearState) { },
            expect: function (dispatch) { }, toHaveBeenCalledWith: function (showNotification) { }
        });
    });
    describe('Logout saga', function () {
        test('Handle logout', async(), {
            const: dispatch = jest.fn(),
            const: authProvider = {
                login: function () { return Promise.reject('bad method'); },
                logout: jest.fn().mockResolvedValueOnce('/custom'),
                checkAuth: function () { return Promise.reject('bad method'); },
                checkError: function () { return Promise.reject('bad method'); },
                getPermissions: function () { return Promise.reject('bad method'); }
            },
            const: action = {
                payload: {
                    resource: 'posts'
                },
                meta: {
                    pathName: '/posts'
                }
            },
            await: redux_saga_1.runSaga({ dispatch: dispatch }, auth_1.handleLogout(authProvider), action),
            expect: function (authProvider, logout) { }, toHaveBeenCalled: function () { },
            expect: function (dispatch) { }, toHaveBeenCalledWith: function (push) { },
            expect: function (dispatch) { }, toHaveBeenCalledWith: function (clearState) { }
        });
    });
    describe('Fetch error saga', function () {
        test('Handle errors when authProvider throws', async(), {
            const: dispatch = jest.fn(),
            const: error = { message: 'Bazinga!' },
            const: authProvider = {
                login: function () { return Promise.reject('bad method'); },
                logout: jest.fn().mockResolvedValueOnce('/custom'),
                checkAuth: function () { return Promise.reject('bad method'); },
                checkError: jest.fn().mockRejectedValueOnce(undefined),
                getPermissions: function () { return Promise.reject('bad method'); }
            },
            const: action = {
                error: error
            },
            await: redux_saga_1.runSaga({
                dispatch: dispatch,
                getState: function () { return ({ router: { location: '/posts' } }); }
            }, auth_1.handleFetchError(authProvider), action),
            expect: function (authProvider, checkError) { }, toHaveBeenCalledWith: function (error) { },
            expect: function (authProvider, logout) { }, toHaveBeenCalled: function () { },
            await: wait(),
            expect: function (dispatch) { }, toHaveBeenCalledWith: function (push) { },
            expect: function (dispatch) { }, toHaveBeenCalledWith: function (hideNotification) { },
            expect: function (dispatch) { }, toHaveBeenCalledWith: function (showNotification) { },
            expect: function (dispatch) { }, toHaveBeenCalledWith: function (clearState) { }
        });
    });
});
