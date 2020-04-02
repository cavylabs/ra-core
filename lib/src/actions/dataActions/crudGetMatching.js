var core_1 = require('../../core');
var fetchActions_1 = require('../fetchActions');
var sideEffect_1 = require('../../sideEffect');
exports.crudGetMatching = function (reference, relatedTo, pagination, sort, filter) {
    return ({
        type: exports.CRUD_GET_MATCHING,
        payload: { pagination: pagination, sort: sort, filter: filter },
        meta: {
            resource: reference,
            relatedTo: relatedTo,
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
exports.CRUD_GET_MATCHING = 'RA/CRUD_GET_MATCHING';
readonly;
type: typeof exports.CRUD_GET_MATCHING;
readonly;
payload: RequestPayload;
readonly;
meta: {
    resource: string;
    fetch: typeof core_1.GET_LIST;
    relatedTo: string;
    onFailure: {
        notification: sideEffect_1.NotificationSideEffect;
    }
    ;
}
;
exports.CRUD_GET_MATCHING_LOADING = 'RA/CRUD_GET_MATCHING_LOADING';
readonly;
type: typeof exports.CRUD_GET_MATCHING_LOADING;
readonly;
payload: RequestPayload;
readonly;
meta: {
    resource: string;
    relatedTo: string;
}
;
exports.CRUD_GET_MATCHING_FAILURE = 'RA/CRUD_GET_MATCHING_FAILURE';
readonly;
type: typeof exports.CRUD_GET_MATCHING_FAILURE;
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
    fetchResponse: typeof core_1.GET_LIST;
    fetchStatus: typeof fetchActions_1.FETCH_ERROR;
}
;
exports.CRUD_GET_MATCHING_SUCCESS = 'RA/CRUD_GET_MATCHING_SUCCESS';
readonly;
type: typeof exports.CRUD_GET_MATCHING_SUCCESS;
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
    fetchResponse: typeof core_1.GET_LIST;
    fetchStatus: typeof fetchActions_1.FETCH_END;
}
;
