var effects_1 = require('redux-saga/effects');
var connected_react_router_1 = require('connected-react-router');
var resolveRedirectTo_1 = require('../util/resolveRedirectTo');
var uiActions_1 = require('../actions/uiActions');
/**
 * Redirection Side Effects
 */
function handleRedirection(_a) {
    var payload = _a.payload, requestPayload = _a.requestPayload, _b = _a.meta, basePath = _b.basePath, redirectTo = _b.redirectTo;
    if (!redirectTo) {
        yield effects_1.put(uiActions_1.refreshView());
        return;
    }
    yield effects_1.put(connected_react_router_1.push(resolveRedirectTo_1["default"](redirectTo, basePath, payload
        ? payload.id || (payload.data ? payload.data.id : null)
        : requestPayload
            ? requestPayload.id
            : null, payload && payload.data
        ? payload.data
        : requestPayload && requestPayload.data
            ? requestPayload.data
            : null)));
}
exports.handleRedirection = handleRedirection;
function default_1() {
    yield effects_1.takeEvery(
    // @ts-ignore
    // @ts-ignore
    function (action) { return action.meta && typeof action.meta.redirectTo !== 'undefined'; }, handleRedirection);
}
exports["default"] = default_1;
