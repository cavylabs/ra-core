exports.CRUD_SHOW_FILTER = 'RA/CRUD_SHOW_FILTER';
readonly;
type: typeof exports.CRUD_SHOW_FILTER;
readonly;
payload: {
    field: string;
}
;
readonly;
meta: {
    resource: string;
}
;
exports.showFilter = function (resource, field) {
    return ({
        type: exports.CRUD_SHOW_FILTER,
        payload: { field: field },
        meta: { resource: resource }
    });
};
exports.CRUD_HIDE_FILTER = 'RA/CRUD_HIDE_FILTER';
readonly;
type: typeof exports.CRUD_HIDE_FILTER;
readonly;
payload: {
    field: string;
}
;
readonly;
meta: {
    resource: string;
}
;
exports.hideFilter = function (resource, field) {
    return ({
        type: exports.CRUD_HIDE_FILTER,
        payload: { field: field },
        meta: { resource: resource }
    });
};
exports.CRUD_SET_FILTER = 'RA/CRUD_SET_FILTER';
readonly;
type: typeof exports.CRUD_SET_FILTER;
readonly;
payload: {
    field: string;
    value: any;
}
;
readonly;
meta: {
    resource: string;
}
;
exports.setFilter = function (resource, field, value) {
    return ({
        type: exports.CRUD_SET_FILTER,
        payload: { field: field, value: value },
        meta: { resource: resource }
    });
};
