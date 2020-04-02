var core_1 = require('../../core');
var fetchActions_1 = require('../fetchActions');
var sideEffect_1 = require('../../sideEffect');
exports.crudGetMany = function (resource, ids) {
    return ({
        type: exports.CRUD_GET_MANY,
        payload: { ids: ids },
        meta: {
            resource: resource,
            fetch: core_1.GET_MANY,
            onFailure: {
                notification: {
                    body: 'ra.notification.http_error',
                    level: 'warning'
                }
            }
        }
    });
};
exports.CRUD_GET_MANY = 'RA/CRUD_GET_MANY';
readonly;
type: typeof exports.CRUD_GET_MANY;
readonly;
payload: RequestPayload;
readonly;
meta: {
    resource: string;
    fetch: typeof core_1.GET_MANY;
    onFailure: {
        notification: sideEffect_1.NotificationSideEffect;
    }
    ;
}
;
exports.CRUD_GET_MANY_LOADING = 'RA/CRUD_GET_MANY_LOADING';
readonly;
type: typeof exports.CRUD_GET_MANY_LOADING;
readonly;
payload: RequestPayload;
readonly;
meta: {
    resource: string;
}
;
exports.CRUD_GET_MANY_FAILURE = 'RA/CRUD_GET_MANY_FAILURE';
readonly;
type: typeof exports.CRUD_GET_MANY_FAILURE;
readonly;
error: string | object;
readonly;
payload: string;
readonly;
requestPayload: RequestPayload;
readonly;
meta: {
    resource: string;
    notification: sideEffect_1.NotificationSideEffect;
    fetchResponse: typeof core_1.GET_MANY;
    fetchStatus: typeof fetchActions_1.FETCH_ERROR;
}
;
exports.CRUD_GET_MANY_SUCCESS = 'RA/CRUD_GET_MANY_SUCCESS';
readonly;
type: typeof exports.CRUD_GET_MANY_SUCCESS;
readonly;
payload: {
    data: Record[];
}
;
readonly;
requestPayload: RequestPayload;
readonly;
meta: {
    resource: string;
    fetchResponse: typeof core_1.GET_MANY;
    fetchStatus: typeof fetchActions_1.FETCH_END;
}
;
