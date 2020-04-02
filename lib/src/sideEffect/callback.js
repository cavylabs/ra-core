var effects_1 = require('redux-saga/effects');
/**
 * Callback Side Effects
 */
function handleCallback(_a) {
    var payload = _a.payload, requestPayload = _a.requestPayload, error = _a.error, callback = _a.meta.callback;
    yield effects_1.call(callback, { payload: payload, requestPayload: requestPayload, error: error });
}
function default_1() {
    yield effects_1.takeEvery(function (action) { return action.meta && action.meta.callback; }, handleCallback);
}
exports["default"] = default_1;
