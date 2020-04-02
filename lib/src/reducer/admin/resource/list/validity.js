var actions_1 = require('../../../../actions');
var core_1 = require('../../../../core');
var initialState = {};
var validityReducer = function (previousState, _a) {
    if (previousState === void 0) { previousState = initialState; }
    var type = _a.type, payload = _a.payload, requestPayload = _a.requestPayload, meta = _a.meta;
    if (type === actions_1.REFRESH_VIEW) {
        return initialState;
    }
    if (!meta ||
        !meta.fetchResponse ||
        meta.fetchStatus !== actions_1.FETCH_END ||
        meta.fromCache === true) {
        return previousState;
    }
    switch (meta.fetchResponse) {
        case core_1.GET_LIST: {
            if (payload.validUntil) {
                // store the validity date
                return {};
            }
        }
    }
};
previousState,
    [JSON.stringify(requestPayload)];
payload.validUntil,
;
;
{
    // remove the validity date
    var _a = void 0;
    [JSON.stringify(requestPayload)];
    value,
    ;
    rest;
}
previousState;
return rest;
CREATE: 
// force refresh of all lists because we don't know where the
// new record will appear in the list
return initialState;
return previousState;
;
exports["default"] = validityReducer;
