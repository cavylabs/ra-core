var core_1 = require('../../core');
var fetchActions_1 = require('../fetchActions');
var sideEffect_1 = require('../../sideEffect');
exports.crudGetList = function (resource, pagination, sort, filter) {
    return ({
        type: exports.CRUD_GET_LIST,
        payload: { pagination: pagination, sort: sort, filter: filter },
        meta: {
            resource: resource,
            fetch: core_1.GET_LIST,
            onFailure: {
                notification: {
                    body: 'ra.notification.http_error',
                    level: 'warning'
                }
            }
        }
    });
};
exports.CRUD_GET_LIST = 'RA/CRUD_GET_LIST';
readonly;
type: typeof exports.CRUD_GET_LIST;
readonly;
payload: RequestPayload;
readonly;
meta: {
    resource: string;
    fetch: typeof core_1.GET_LIST;
    onFailure: {
        notification: sideEffect_1.NotificationSideEffect;
    }
    ;
}
;
exports.CRUD_GET_LIST_LOADING = 'RA/CRUD_GET_LIST_LOADING';
readonly;
type: typeof exports.CRUD_GET_LIST_LOADING;
readonly;
payload: RequestPayload;
readonly;
meta: {
    resource: string;
}
;
exports.CRUD_GET_LIST_FAILURE = 'RA/CRUD_GET_LIST_FAILURE';
readonly;
type: typeof exports.CRUD_GET_LIST_FAILURE;
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
    fetchResponse: typeof core_1.GET_LIST;
    fetchStatus: typeof fetchActions_1.FETCH_ERROR;
}
;
exports.CRUD_GET_LIST_SUCCESS = 'RA/CRUD_GET_LIST_SUCCESS';
readonly;
type: typeof exports.CRUD_GET_LIST_SUCCESS;
readonly;
payload: {
    data: Record[];
    total: number;
}
;
readonly;
requestPayload: RequestPayload;
readonly;
meta: {
    resource: string;
    fetchResponse: typeof core_1.GET_LIST;
    fetchStatus: typeof fetchActions_1.FETCH_END;
}
;
