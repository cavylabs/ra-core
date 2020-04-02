var actions_1 = require('../../../../actions');
var core_1 = require('../../../../core');
var ids_1 = require('./cachedRequests/ids');
var total_1 = require('./cachedRequests/total');
var validity_1 = require('./cachedRequests/validity');
var initialState = {};
var initialSubstate = { ids: [], total: null, validity: null };
var cachedRequestsReducer = function (previousState, action) {
    if (previousState === void 0) { previousState = initialState; }
    if (action.type === actions_1.REFRESH_VIEW) {
        // force refresh
        return initialState;
    }
    if (!action.meta || action.meta.fetchStatus !== actions_1.FETCH_END) {
        // not a return from the dataProvider
        return previousState;
    }
    if (action.meta.fetchResponse === core_1.CREATE ||
        action.meta.fetchResponse === core_1.DELETE ||
        action.meta.fetchResponse === core_1.DELETE_MANY ||
        action.meta.fetchResponse === core_1.UPDATE ||
        action.meta.fetchResponse === core_1.UPDATE_MANY) {
        // force refresh of all lists because we don't know where the
        // new/deleted/updated record(s) will appear in the list
        return initialState;
    }
    if (action.meta.fetchResponse !== core_1.GET_LIST || action.meta.fromCache) {
        // looks like a GET_MANY, a GET_ONE, or a cached response
        return previousState;
    }
    var requestKey = JSON.stringify(action.requestPayload);
    var previousSubState = previousState[requestKey] || initialSubstate;
    return {};
};
previousState,
    [requestKey];
{
    ids: ids_1["default"](previousSubState.ids, action),
        total_1["default"];
    total_1["default"](previousSubState.total, action),
        validity_1["default"];
    validity_1["default"](previousSubState.validity, action),
    ;
}
;
;
exports["default"] = cachedRequestsReducer;
