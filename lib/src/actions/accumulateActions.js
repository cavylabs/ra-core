var dataActions_1 = require('./dataActions');
exports.CRUD_GET_MANY_ACCUMULATE = 'RA/CRUD_GET_MANY_ACCUMULATE';
readonly;
type: typeof exports.CRUD_GET_MANY_ACCUMULATE;
readonly;
payload: {
    resource: string;
    ids: Identifier[];
}
;
readonly;
meta: {
    accumulate: any;
}
;
exports.crudGetManyAccumulate = function (resource, ids) {
    return ({
        type: exports.CRUD_GET_MANY_ACCUMULATE,
        payload: { resource: resource, ids: ids },
        meta: { accumulate: dataActions_1.crudGetMany }
    });
};
exports.CRUD_GET_MATCHING_ACCUMULATE = 'RA/CRUD_GET_MATCHING_ACCUMULATE';
readonly;
type: typeof exports.CRUD_GET_MATCHING_ACCUMULATE;
readonly;
meta: {
    accumulate: (function () { return any; });
    accumulateValues ?  : function () { return boolean; };
    accumulateKey ?  : string;
}
;
exports.crudGetMatchingAccumulate = function (reference, relatedTo, pagination, sort, filter) {
    var action = dataActions_1.crudGetMatching(reference, relatedTo, pagination, sort, filter);
    return {
        type: exports.CRUD_GET_MATCHING_ACCUMULATE,
        meta: {
            accumulate: function () { return action; },
            accumulateValues: function () { return true; },
            accumulateKey: JSON.stringify.apply(JSON, [{
                resource: reference,
                relatedTo: relatedTo }].concat(action.payload))
        }
    },
    ;
};
;
