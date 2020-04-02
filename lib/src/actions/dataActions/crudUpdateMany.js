var core_1 = require('../../core');
var fetchActions_1 = require('../fetchActions');
var sideEffect_1 = require('../../sideEffect');
exports.crudUpdateMany = function (resource, ids, data, basePath, refresh) {
    if (refresh === void 0) { refresh = true; }
    return ({
        type: exports.CRUD_UPDATE_MANY,
        payload: { ids: ids, data: data },
        meta: {
            resource: resource,
            fetch: core_1.UPDATE_MANY,
            onSuccess: {
                notification: {
                    body: 'ra.notification.updated',
                    level: 'info',
                    messageArgs: {
                        smart_count: ids.length
                    }
                },
                basePath: basePath,
                refresh: refresh,
                unselectAll: true
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
exports.CRUD_UPDATE_MANY = 'RA/CRUD_UPDATE_MANY';
readonly;
type: typeof exports.CRUD_UPDATE_MANY;
readonly;
payload: RequestPayload;
readonly;
meta: {
    resource: string;
    fetch: typeof core_1.UPDATE_MANY;
    onSuccess: {
        notification: sideEffect_1.NotificationSideEffect;
        refresh: sideEffect_1.RefreshSideEffect;
        basePath: string;
        unselectAll: boolean;
    }
    ;
    onFailure: {
        notification: sideEffect_1.NotificationSideEffect;
    }
    ;
}
;
exports.CRUD_UPDATE_MANY_LOADING = 'RA/CRUD_UPDATE_MANY_LOADING';
readonly;
type: typeof exports.CRUD_UPDATE_MANY_LOADING;
readonly;
payload: RequestPayload;
readonly;
meta: {
    resource: string;
}
;
exports.CRUD_UPDATE_MANY_FAILURE = 'RA/CRUD_UPDATE_MANY_FAILURE';
readonly;
type: typeof exports.CRUD_UPDATE_MANY_FAILURE;
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
    fetchResponse: typeof core_1.UPDATE_MANY;
    fetchStatus: typeof fetchActions_1.FETCH_ERROR;
}
;
exports.CRUD_UPDATE_MANY_SUCCESS = 'RA/CRUD_UPDATE_MANY_SUCCESS';
readonly;
type: typeof exports.CRUD_UPDATE_MANY_SUCCESS;
readonly;
payload: {
    data: Identifier[];
}
;
readonly;
requestPayload: RequestPayload;
readonly;
meta: {
    resource: string;
    notification: sideEffect_1.NotificationSideEffect;
    refresh: sideEffect_1.RefreshSideEffect;
    basePath: string;
    unselectAll: boolean;
    fetchResponse: typeof core_1.UPDATE_MANY;
    fetchStatus: typeof fetchActions_1.FETCH_END;
}
;
