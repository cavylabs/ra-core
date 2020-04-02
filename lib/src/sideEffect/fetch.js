var effects_1 = require('redux-saga/effects');
var actions_1 = require('../actions');
var core_1 = require('../core');
function validateResponseFormat(response, type, logger // eslint-disable-line no-console
    ) {
    if (logger === void 0) { logger = console.error; }
    if (!response.hasOwnProperty('data')) {
        logger("The response to '" + type + "' must be like { data: ... }, but the received response does not have a 'data' key. The dataProvider is probably wrong for '" + type + "'.");
        throw new Error('ra.notification.data_provider_error');
    }
    if (core_1.fetchActionsWithArrayOfRecordsResponse.includes(type) &&
        !Array.isArray(response.data)) {
        logger("The response to '" + type + "' must be like { data : [...] }, but the received data is not an array. The dataProvider is probably wrong for '" + type + "'");
        throw new Error('ra.notification.data_provider_error');
    }
    if (core_1.fetchActionsWithArrayOfIdentifiedRecordsResponse.includes(type) &&
        Array.isArray(response.data) &&
        response.data.length > 0 &&
        response.data.some(function (d) { return !d.hasOwnProperty('id'); })) {
        logger("The response to '" + type + "' must be like { data : [{ id: 123, ...}, ...] }, but at least one received data item do not have an 'id' key. The dataProvider is probably wrong for '" + type + "'");
        throw new Error('ra.notification.data_provider_error');
    }
    if (core_1.fetchActionsWithRecordResponse.includes(type) &&
        !response.data.hasOwnProperty('id')) {
        logger("The response to '" + type + "' must be like { data: { id: 123, ... } }, but the received data does not have an 'id' key. The dataProvider is probably wrong for '" + type + "'");
        throw new Error('ra.notification.data_provider_error');
    }
    if (core_1.fetchActionsWithTotalResponse.includes(type) &&
        !response.hasOwnProperty('total')) {
        logger("The response to '" + type + "' must be like  { data: [...], total: 123 }, but the received response does not have a 'total' key. The dataProvider is probably wrong for '" + type + "'");
        throw new Error('ra.notification.data_provider_error');
    }
}
function handleFetch(dataProvider, action) {
    var type = action.type, payload = action.payload, _a = action.meta, fetchMeta = _a.fetch, onSuccess = _a.onSuccess, onFailure = _a.onFailure, meta = _a.meta;
    var restType = fetchMeta;
    var successSideEffects = onSuccess instanceof Function ? {} : onSuccess;
    var failureSideEffects = onFailure instanceof Function ? {} : onFailure;
    try {
        var isOptimistic = yield effects_1.select(function (state) { return state.admin.ui.optimistic; });
        if (isOptimistic) {
            // in optimistic mode, all fetch actions are canceled,
            // so the admin uses the store without synchronization
            return;
        }
        yield effects_1.all([
            effects_1.put({ type: type + "_LOADING", payload: payload, meta: meta }),
            effects_1.put({ type: actions_1.FETCH_START }),
        ]);
        var response = yield effects_1.call(dataProvider[core_1.sanitizeFetchType(restType)], meta.resource, payload);
        if (process.env.NODE_ENV !== 'production') {
            validateResponseFormat(response, restType);
        }
        yield effects_1.put.apply(void 0, [{
            type: type + "_SUCCESS",
            payload: response,
            requestPayload: payload,
            meta: {} }].concat(meta, successSideEffects, [fetchResponse, restType, fetchStatus, actions_1.FETCH_END]));
    }
    finally { }
}
exports.handleFetch = handleFetch;
;
yield effects_1.put({ type: actions_1.FETCH_END });
try { }
catch (error) {
    yield effects_1.put.apply(void 0, [{
        type: type + "_FAILURE",
        error: error.message ? error.message : error,
        payload: error.body ? error.body : null,
        requestPayload: payload,
        meta: {} }].concat(meta, failureSideEffects, [fetchResponse, restType, fetchStatus, actions_1.FETCH_ERROR]));
}
;
yield effects_1.put({ type: actions_1.FETCH_ERROR, error: error });
try { }
finally {
    if (yield effects_1.cancelled()) {
        yield effects_1.put({ type: actions_1.FETCH_CANCEL });
        return;
    }
}
exports.takeFetchAction = function (action) { return action.meta && action.meta.fetch; };
var fetch = function (dataProvider) {
    return function watchFetch() {
        yield effects_1.takeEvery(exports.takeFetchAction, handleFetch, dataProvider);
    };
};
exports["default"] = fetch;
