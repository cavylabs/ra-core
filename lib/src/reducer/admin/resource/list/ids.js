var uniq_1 = require('lodash/uniq');
var actions_1 = require('../../../../actions');
var core_1 = require('../../../../core');
/**
 * List of the ids of the latest loaded page, regardless of params
 *
 * When loading a the list for the first time, useListController grabs the ids
 * from the cachedRequests reducer (not this ids reducer). It's only when the user
 * changes page, sort, or filter, that the useListController hook uses the ids
 * reducer, so as to show the previous list of results while loading the new
 * list (intead of displaying a blank page each time the list params change).
 *
 * @see useListController
 *
 */
var idsReducer = function (previousState, action) {
    if (previousState === void 0) { previousState = []; }
    if (action.meta && action.meta.optimistic) {
        if (action.meta.fetch === core_1.DELETE) {
            var index = previousState
                .map(function (el) { return el === action.payload.id; }) // eslint-disable-line eqeqeq
                .indexOf(true);
            if (index === -1) {
                return previousState;
            }
            return previousState.slice(0, index).concat(previousState.slice(index + 1));
        }
        if (action.meta.fetch === core_1.DELETE_MANY) {
            var newState = previousState.filter(function (el) { return !action.payload.ids.includes(el); });
            return newState;
        }
    }
    switch (action.type) {
        case actions_1.CRUD_GET_LIST_SUCCESS:
            return action.payload.data.map(function (_a) {
                var id = _a.id;
                return id;
            });
        case actions_1.CRUD_CREATE_SUCCESS:
            return uniq_1["default"]([action.payload.data.id].concat(previousState));
        default:
            return previousState;
    }
};
exports["default"] = idsReducer;
exports.getIds = function (state) { return state; };
