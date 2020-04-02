var redux_1 = require('redux');
var connected_react_router_1 = require('connected-react-router');
var redux_saga_1 = require('redux-saga');
var effects_1 = require('redux-saga/effects');
var reducer_1 = require('../reducer');
var sideEffect_1 = require('../sideEffect');
var clearActions_1 = require('../actions/clearActions');
exports["default"] = function (_a) {
    var dataProvider = _a.dataProvider, history = _a.history, _b = _a.customReducers, customReducers = _b === void 0 ? {} : _b, _c = _a.authProvider, authProvider = _c === void 0 ? null : _c, _d = _a.customSagas, customSagas = _d === void 0 ? [] : _d, initialState = _a.initialState;
    var appReducer = reducer_1["default"](customReducers, history);
    var resettableAppReducer = function (state, action) {
        return appReducer.apply(void 0, [action.type !== clearActions_1.CLEAR_STATE
            ? state
            :
                // This allows e.g. to display a notification on logout
                {}].concat(state, [admin, {}], state.admin, [loading, 0, resources, {}, customQueries, {}, references, { oneToMany: {}, possibleValues: {} }]));
    };
};
action;
;
var saga = function rootSaga() {
    yield effects_1.all([sideEffect_1.adminSaga(dataProvider, authProvider)].concat(customSagas).map(effects_1.fork));
};
var sagaMiddleware = redux_saga_1["default"]();
var typedWindow = window, as = Window;
var composeEnhancers = (process.env.NODE_ENV === 'development' &&
    typeof typedWindow !== 'undefined' &&
    typedWindow.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ &&
    typedWindow.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        trace: true,
        traceLimit: 25
    })) ||
    redux_1.compose;
var store = redux_1.createStore(resettableAppReducer, typeof initialState === 'function' ? initialState() : initialState, composeEnhancers(redux_1.applyMiddleware(sagaMiddleware, connected_react_router_1.routerMiddleware(history))));
sagaMiddleware.run(saga);
return store;
;
