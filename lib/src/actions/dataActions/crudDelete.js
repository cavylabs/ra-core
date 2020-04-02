var core_1 = require('../../core');
var fetchActions_1 = require('../fetchActions');
var sideEffect_1 = require('../../sideEffect');
exports.crudDelete = function (resource, id, previousData, basePath, redirectTo, refresh) {
    if (redirectTo === void 0) { redirectTo = 'list'; }
    if (refresh === void 0) { refresh = true; }
    return ({
        type: exports.CRUD_DELETE,
        payload: { id: id, previousData: previousData },
        meta: {
            resource: resource,
            fetch: core_1.DELETE,
            onSuccess: {
                notification: {
                    body: 'ra.notification.deleted',
                    level: 'info',
                    messageArgs: {
                        smart_count: 1
                    }
                },
                refresh: refresh,
                redirectTo: redirectTo,
                basePath: basePath
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
exports.CRUD_DELETE = 'RA/CRUD_DELETE';
readonly;
type: typeof exports.CRUD_DELETE;
readonly;
payload: RequestPayload;
readonly;
meta: {
    resource: string;
    fetch: typeof core_1.DELETE;
    onSuccess: {
        notification: sideEffect_1.NotificationSideEffect;
        redirectTo: sideEffect_1.RedirectionSideEffect;
        refresh: sideEffect_1.RefreshSideEffect;
        basePath: string;
    }
    ;
    onFailure: {
        notification: sideEffect_1.NotificationSideEffect;
    }
    ;
}
;
exports.CRUD_DELETE_LOADING = 'RA/CRUD_DELETE_LOADING';
readonly;
type: typeof exports.CRUD_DELETE_LOADING;
readonly;
payload: RequestPayload;
readonly;
meta: {
    resource: string;
}
;
exports.CRUD_DELETE_FAILURE = 'RA/CRUD_DELETE_FAILURE';
readonly;
type: typeof exports.CRUD_DELETE_FAILURE;
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
    fetchResponse: typeof exports.CRUD_DELETE;
    fetchStatus: typeof fetchActions_1.FETCH_ERROR;
}
;
exports.CRUD_DELETE_SUCCESS = 'RA/CRUD_DELETE_SUCCESS';
readonly;
type: typeof exports.CRUD_DELETE_SUCCESS;
readonly;
payload: {
    data: Record;
}
;
readonly;
requestPayload: RequestPayload;
readonly;
meta: {
    resource: string;
    notification: sideEffect_1.NotificationSideEffect;
    redirectTo: sideEffect_1.RedirectionSideEffect;
    refresh: sideEffect_1.RefreshSideEffect;
    basePath: string;
    fetchResponse: typeof exports.CRUD_DELETE;
    fetchStatus: typeof fetchActions_1.FETCH_END;
}
;
