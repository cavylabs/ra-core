// reducer for queries called via useQueryWithStore and without a custom action name
var customQueriesReducer = function (previousState, _a) {
    if (previousState === void 0) { previousState = {}; }
    var type = _a.type, requestPayload = _a.requestPayload, payload = _a.payload, meta = _a.meta;
    if (type !== 'CUSTOM_QUERY_SUCCESS') {
        return previousState;
    }
    var key = JSON.stringify({
        type: meta.fetchResponse,
        resource: meta.resource,
        payload: requestPayload
    });
    return {};
};
previousState,
    [key];
payload,
;
;
;
exports["default"] = customQueriesReducer;
