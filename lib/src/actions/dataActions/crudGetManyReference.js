var core_1 = require('../../core');
var fetchActions_1 = require('../fetchActions');
var sideEffect_1 = require('../../sideEffect');
exports.crudGetManyReference = function (reference, target, id, relatedTo, pagination, sort, filter, source) {
    return ({
        type: exports.CRUD_GET_MANY_REFERENCE,
        payload: { target: target, id: id, pagination: pagination, sort: sort, filter: filter, source: source },
        meta: {
            resource: reference,
            relatedTo: relatedTo,
            fetch: core_1.GET_MANY_REFERENCE,
            onFailure: {
                notification: {
                    body: 'ra.notification.http_error',
                    level: 'warning'
                }
            }
        }
    });
};
exports.CRUD_GET_MANY_REFERENCE = 'RA/CRUD_GET_MANY_REFERENCE';
readonly;
type: typeof exports.CRUD_GET_MANY_REFERENCE;
readonly;
payload: RequestPayload;
readonly;
meta: {
    resource: string;
    fetch: typeof core_1.GET_MANY_REFERENCE;
    relatedTo: string;
    onFailure: {
        notification: sideEffect_1.NotificationSideEffect;
    }
    ;
}
;
exports.CRUD_GET_MANY_REFERENCE_LOADING = 'RA/CRUD_GET_MANY_REFERENCE_LOADING';
readonly;
type: typeof exports.CRUD_GET_MANY_REFERENCE_LOADING;
readonly;
payload: RequestPayload;
readonly;
meta: {
    resource: string;
    relatedTo: string;
}
;
exports.CRUD_GET_MANY_REFERENCE_FAILURE = 'RA/CRUD_GET_MANY_REFERENCE_FAILURE';
readonly;
type: typeof exports.CRUD_GET_MANY_REFERENCE_FAILURE;
readonly;
error: string | object;
readonly;
payload: string;
readonly;
requestPayload: RequestPayload;
readonly;
meta: {
    resource: string;
    relatedTo: string;
    notification: sideEffect_1.NotificationSideEffect;
    fetchResponse: typeof core_1.GET_MANY_REFERENCE;
    fetchStatus: typeof fetchActions_1.FETCH_ERROR;
}
;
exports.CRUD_GET_MANY_REFERENCE_SUCCESS = 'RA/CRUD_GET_MANY_REFERENCE_SUCCESS';
readonly;
type: typeof exports.CRUD_GET_MANY_REFERENCE_SUCCESS;
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
    relatedTo: string;
    fetchResponse: typeof core_1.GET_MANY_REFERENCE;
    fetchStatus: typeof fetchActions_1.FETCH_END;
}
;
