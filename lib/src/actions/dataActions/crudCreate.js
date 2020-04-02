var core_1 = require('../../core');
var fetchActions_1 = require('../fetchActions');
var sideEffect_1 = require('../../sideEffect');
exports.crudCreate = function (resource, data, basePath, redirectTo) {
    if (redirectTo === void 0) { redirectTo = 'edit'; }
    return ({
        type: exports.CRUD_CREATE,
        payload: { data: data },
        meta: {
            resource: resource,
            fetch: core_1.CREATE,
            onSuccess: {
                notification: {
                    body: 'ra.notification.created',
                    level: 'info',
                    messageArgs: {
                        smart_count: 1
                    }
                },
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
exports.CRUD_CREATE = 'RA/CRUD_CREATE';
readonly;
type: typeof exports.CRUD_CREATE;
readonly;
payload: RequestPayload;
readonly;
meta: {
    resource: string;
    fetch: typeof core_1.CREATE;
    onSuccess: {
        notification: sideEffect_1.NotificationSideEffect;
        redirectTo: sideEffect_1.RedirectionSideEffect;
        basePath: string;
    }
    ;
    onFailure: {
        notification: sideEffect_1.NotificationSideEffect;
    }
    ;
}
;
exports.CRUD_CREATE_LOADING = 'RA/CRUD_CREATE_LOADING';
readonly;
type: typeof exports.CRUD_CREATE_LOADING;
readonly;
payload: RequestPayload;
readonly;
meta: {
    resource: string;
}
;
exports.CRUD_CREATE_FAILURE = 'RA/CRUD_CREATE_FAILURE';
readonly;
type: typeof exports.CRUD_CREATE_FAILURE;
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
    fetchResponse: typeof core_1.CREATE;
    fetchStatus: typeof fetchActions_1.FETCH_ERROR;
}
;
exports.CRUD_CREATE_SUCCESS = 'RA/CRUD_CREATE_SUCCESS';
readonly;
type: typeof exports.CRUD_CREATE_SUCCESS;
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
    basePath: string;
    fetchResponse: typeof core_1.CREATE;
    fetchStatus: typeof fetchActions_1.FETCH_END;
}
;
