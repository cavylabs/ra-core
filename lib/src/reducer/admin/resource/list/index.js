var redux_1 = require('redux');
var cachedRequests_1 = require('./cachedRequests');
var ids_1 = require('./ids');
var loadedOnce_1 = require('./loadedOnce');
var params_1 = require('./params');
var selectedIds_1 = require('./selectedIds');
var total_1 = require('./total');
var defaultReducer = function () { return null; };
exports["default"] = redux_1.combineReducers({
    /**
     * ts-jest does some aggressive module mocking when unit testing reducers individually.
     * To avoid 'No reducer provided for key "..."' warnings,
     * we pass default reducers. Sorry for legibility.
     *
     * @see https://stackoverflow.com/questions/43375079/redux-warning-only-appearing-in-tests
     */
    ids: ids_1["default"] || defaultReducer,
    total: total_1["default"] || defaultReducer,
    loadedOnce: loadedOnce_1["default"] || defaultReducer,
    params: params_1["default"] || defaultReducer,
    selectedIds: selectedIds_1["default"] || defaultReducer,
    cachedRequests: cachedRequests_1["default"] || defaultReducer
});
