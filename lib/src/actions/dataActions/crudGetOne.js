var core_1 = require('../../core');
var fetchActions_1 = require('../fetchActions');
var sideEffect_1 = require('../../sideEffect');
exports.crudGetOne = function (resource, id, basePath, refresh) {
    if (refresh === void 0) { refresh = true; }
    return ({
        type: exports.CRUD_GET_ONE,
        payload: { id: id },
        meta: {
            resource: resource,
            fetch: core_1.GET_ONE,
            basePath: basePath,
            onFailure: {
                notification: {
                    body: 'ra.notification.item_doesnt_exist',
                    level: 'warning'
                },
                redirectTo: 'list',
                refresh: refresh
            }
        }
    });
};
exports.CRUD_GET_ONE = 'RA/CRUD_GET_ONE';
readonly;
type: typeof exports.CRUD_GET_ONE;
readonly;
payload: RequestPayload;
readonly;
meta: {
    resource: string;
    fetch: typeof core_1.GET_ONE;
    basePath: string;
    onFailure: {
        notification: sideEffect_1.NotificationSideEffect;
        redirectTo: sideEffect_1.RedirectionSideEffect;
        refresh: sideEffect_1.RefreshSideEffect;
    }
    ;
}
;
exports.CRUD_GET_ONE_LOADING = 'RA/CRUD_GET_ONE_LOADING';
readonly;
type: typeof exports.CRUD_GET_ONE_LOADING;
readonly;
payload: RequestPayload;
readonly;
meta: {
    resource: string;
    basePath: string;
}
;
exports.CRUD_GET_ONE_FAILURE = 'RA/CRUD_GET_ONE_FAILURE';
readonly;
type: typeof exports.CRUD_GET_ONE_FAILURE;
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
    redirectTo: sideEffect_1.RedirectionSideEffect;
    refresh: sideEffect_1.RefreshSideEffect;
    fetchResponse: typeof core_1.GET_ONE;
    fetchStatus: typeof fetchActions_1.FETCH_ERROR;
}
;
exports.CRUD_GET_ONE_SUCCESS = 'RA/CRUD_GET_ONE_SUCCESS';
readonly;
type: typeof exports.CRUD_GET_ONE_SUCCESS;
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
    fetchResponse: typeof core_1.GET_ONE;
    fetchStatus: typeof fetchActions_1.FETCH_END;
}
;
