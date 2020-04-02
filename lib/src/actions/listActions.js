exports.CRUD_CHANGE_LIST_PARAMS = 'RA/CRUD_CHANGE_LIST_PARAMS';
readonly;
type: typeof exports.CRUD_CHANGE_LIST_PARAMS;
readonly;
payload: ListParams;
readonly;
meta: {
    resource: string;
}
;
exports.changeListParams = function (resource, params) {
    return ({
        type: exports.CRUD_CHANGE_LIST_PARAMS,
        payload: params,
        meta: { resource: resource }
    });
};
exports.SET_LIST_SELECTED_IDS = 'RA/SET_LIST_SELECTED_IDS';
readonly;
type: typeof exports.SET_LIST_SELECTED_IDS;
readonly;
payload: Identifier[];
readonly;
meta: {
    resource: string;
}
;
exports.setListSelectedIds = function (resource, ids) {
    return ({
        type: exports.SET_LIST_SELECTED_IDS,
        payload: ids,
        meta: { resource: resource }
    });
};
exports.TOGGLE_LIST_ITEM = 'RA/TOGGLE_LIST_ITEM';
readonly;
type: typeof exports.TOGGLE_LIST_ITEM;
readonly;
payload: any;
readonly;
meta: {
    resource: string;
}
;
exports.toggleListItem = function (resource, id) {
    return ({
        type: exports.TOGGLE_LIST_ITEM,
        payload: id,
        meta: { resource: resource }
    });
};
