var core_1 = require('../../core');
var fetchActions_1 = require('../fetchActions');
var sideEffect_1 = require('../../sideEffect');
exports.crudUpdate = function (resource, id, data, previousData, basePath, redirectTo, refresh) {
    if (redirectTo === void 0) { redirectTo = 'show'; }
    if (refresh === void 0) { refresh = true; }
    return ({
        type: exports.CRUD_UPDATE,
        payload: { id: id, data: data, previousData: previousData },
        meta: {
            resource: resource,
            fetch: core_1.UPDATE,
            onSuccess: {
                notification: {
                    body: 'ra.notification.updated',
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
exports.CRUD_UPDATE = 'RA/CRUD_UPDATE';
readonly;
type: typeof exports.CRUD_UPDATE;
readonly;
payload: RequestPayload;
readonly;
meta: {
    resource: string;
    fetch: typeof core_1.UPDATE;
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
exports.CRUD_UPDATE_LOADING = 'RA/CRUD_UPDATE_LOADING';
readonly;
type: typeof exports.CRUD_UPDATE_LOADING;
readonly;
payload: RequestPayload;
readonly;
meta: {
    resource: string;
}
;
exports.CRUD_UPDATE_FAILURE = 'RA/CRUD_UPDATE_FAILURE';
readonly;
type: typeof exports.CRUD_UPDATE_FAILURE;
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
    fetchResponse: typeof core_1.UPDATE;
    fetchStatus: typeof fetchActions_1.FETCH_ERROR;
}
;
exports.CRUD_UPDATE_SUCCESS = 'RA/CRUD_UPDATE_SUCCESS';
readonly;
type: typeof exports.CRUD_UPDATE_SUCCESS;
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
    fetchResponse: typeof core_1.UPDATE;
    fetchStatus: typeof fetchActions_1.FETCH_END;
}
;
