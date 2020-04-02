var core_1 = require('../../core');
var fetchActions_1 = require('../fetchActions');
var sideEffect_1 = require('../../sideEffect');
exports.crudGetAll = function (resource, sort, filter, maxResults, callback) {
    return ({
        type: exports.CRUD_GET_ALL,
        payload: { sort: sort, filter: filter, pagination: { page: 1, perPage: maxResults } },
        meta: {
            resource: resource,
            fetch: core_1.GET_LIST,
            onSuccess: {
                callback: callback
            },
            onFailure: {
                notification: {
                    body: 'ra.notification.http_error',
                    level: 'warning'
                }
            }
        }
    });
};
exports.CRUD_GET_ALL = 'RA/CRUD_GET_ALL';
readonly;
type: typeof exports.CRUD_GET_ALL;
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
    onSuccess: {
        callback: sideEffect_1.CallbackSideEffect;
    }
    ;
}
;
exports.CRUD_GET_ALL_LOADING = 'RA/CRUD_GET_ALL_LOADING';
readonly;
type: typeof exports.CRUD_GET_ALL_LOADING;
readonly;
payload: RequestPayload;
readonly;
meta: {
    resource: string;
}
;
exports.CRUD_GET_ALL_FAILURE = 'RA/CRUD_GET_ALL_FAILURE';
readonly;
type: typeof exports.CRUD_GET_ALL_FAILURE;
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
exports.CRUD_GET_ALL_SUCCESS = 'RA/CRUD_GET_ALL_SUCCESS';
readonly;
type: typeof exports.CRUD_GET_ALL_SUCCESS;
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
    callback: any;
    fetchResponse: typeof core_1.GET_LIST;
    fetchStatus: typeof fetchActions_1.FETCH_END;
}
;
