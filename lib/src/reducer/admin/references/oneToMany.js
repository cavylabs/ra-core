var actions_1 = require('../../../actions');
var core_1 = require('../../../core');
var initialState = {};
var oneToManyReducer = function (previousState, action) {
    if (previousState === void 0) { previousState = initialState; }
    if (action.meta && action.meta.optimistic) {
        var relatedTo = getRelatedReferences(previousState, action.meta.resource);
        if (action.meta.fetch === core_1.DELETE) {
            return relatedTo.reduce(removeDeletedReferences([action.payload.id]), previousState);
        }
        if (action.meta.fetch === core_1.DELETE_MANY) {
            return relatedTo.reduce(removeDeletedReferences(action.payload.ids), previousState);
        }
    }
    switch (action.type) {
        case actions_1.CRUD_GET_MANY_REFERENCE_SUCCESS:
            return {};
    }
};
previousState,
    [action.meta.relatedTo];
{
    ids: action.payload.data.map(function (record) { return record.id; }),
        total;
    action.payload.total,
    ;
}
;
return previousState;
;
exports.getIds = function (state, relatedTo) {
    return state.admin.references.oneToMany[relatedTo] &&
        state.admin.references.oneToMany[relatedTo].ids;
};
exports.getTotal = function (state, relatedTo) {
    return state.admin.references.oneToMany[relatedTo] &&
        state.admin.references.oneToMany[relatedTo].total;
};
exports.getReferences = function (state, reference, relatedTo) {
    var ids = exports.getIds(state, relatedTo);
    if (typeof ids === 'undefined') {
        return undefined;
    }
    if (!state.admin.resources[reference]) {
        // eslint-disable-next-line no-console
        console.error(("Invalid Resource \"" + reference + "\"\n") +
            ("You are trying to display or edit a field of a resource called \"" + reference + "\", ") +
            'but it has not been declared.\n' +
            "Declare this resource in the Admin or check the 'reference' prop of ReferenceArrayField and ReferenceManyField.", { ids: ids });
    }
    return ids
        .map(function (id) {
        var resource = state.admin.resources[reference];
        if (!resource) {
            return undefined;
        }
        return resource.data[id];
    })
        .filter(function (r) { return typeof r !== 'undefined'; })
        .reduce(function (prev, record) {
        prev[record.id] = record; // eslint-disable-line no-param-reassign
        return prev;
    }, {});
};
exports.getReferencesByIds = function (state, reference, ids) {
    if (ids.length === 0) {
        return {};
    }
    if (!state.admin.resources[reference]) {
        // eslint-disable-next-line no-console
        console.error(("Invalid Resource \"" + reference + "\"\n") +
            ("You are trying to display or edit a field of a resource called \"" + reference + "\", ") +
            'but it has not been declared.\n' +
            "Declare this resource in the Admin or check the 'reference' prop of ReferenceArrayField.", { ids: ids });
    }
    var references = ids
        .map(function (id) {
        var resource = state.admin.resources[reference];
        if (!resource) {
            return undefined;
        }
        return resource.data[id];
    })
        .filter(function (r) { return typeof r !== 'undefined'; })
        .reduce(function (prev, record) {
        prev[record.id] = record; // eslint-disable-line no-param-reassign
        return prev;
    }, {});
    return Object.keys(references).length > 0 ? references : null;
};
var getRelatedReferences = function (previousState, resource) {
    return Object.keys(previousState).filter(function (key) { return key.includes(resource); });
};
var removeDeletedReferences = function (removedIds) { return function (previousState, key) {
    var idsToKeep = previousState[key].ids.filter(function (id) { return !removedIds.includes(id); });
    if (idsToKeep.length === previousState[key].ids.length) {
        return previousState;
    }
    return {};
}; };
previousState,
    [key];
{
    ids: idsToKeep,
        total;
    idsToKeep.length,
    ;
}
;
;
exports.nameRelatedTo = function (reference, id, resource, target, filter) {
    if (filter === void 0) { filter = {}; }
    var keys = Object.keys(filter);
    if (!keys.length) {
        return resource + "_" + reference + "@" + target + "_" + id;
    }
    return resource + "_" + reference + "@" + target + "_" + id + "?" + keys
        .map(function (key) { return (key + "=" + JSON.stringify(filter[key])); })
        .join('&');
};
exports["default"] = oneToManyReducer;
